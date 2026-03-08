const express = require('express');
const router = express.Router();
const db = require('./db');

// --- Middleware Helper for Mock Auth ---
// In a real app, this would extract from JWT. 
// Here we look for x-user-role and x-tenant-id headers for testing RBAC.
const getAuthContext = (req) => {
    return {
        role: req.headers['x-user-role'] || 'admin', // Default to admin for dev ease
        tenantId: req.headers['x-tenant-id'] || 'sucursal-1'
    };
};

// --- Auth / Users Routes ---

router.post('/auth/register', async (req, res) => {
    try {
        const newUser = await db.createUser(req.body);
        res.json({ ok: true, user: newUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, message: 'Error creating user' });
    }
});

router.get('/users', async (req, res) => {
    try {
        const { role, tenantId } = getAuthContext(req);
        const users = await db.getUsers(role, tenantId);
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, message: 'Error fetching users' });
    }
});

// --- AI Inbox Routes ---

router.post('/ai/extract', (req, res) => {
    const { text } = req.body;
    if (!text) return res.status(400).json({ ok: false, message: 'No text provided' });

    // Mock Regex Logic
    const phoneMatch = text.match(/(\d{10})/);
    const phone = phoneMatch ? phoneMatch[0] : '';
    let name = '';
    const nameMatch = text.match(/para\s+([A-Z][a-z]+)/i);
    if (nameMatch) name = nameMatch[1];
    else {
        const words = text.split(' ');
        if (words.length > 0) name = words[0];
    }
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    const extractedData = {
        customer_name: name,
        phone: phone,
        items: text,
        due_date: targetDate.toISOString().split('T')[0]
    };

    res.json({ ok: true, data: extractedData });
});

// --- Folio Routes ---

router.get('/folios', async (req, res) => {
    try {
        const { role, tenantId } = getAuthContext(req);
        const folios = await db.getFolios(role, tenantId);
        res.json(folios);
    } catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, message: 'Database error' });
    }
});

router.post('/folios', async (req, res) => {
    try {
        const { role, tenantId } = getAuthContext(req);
        // Force tenant_id from auth context to prevent spoofing, unless admin overrides?
        // For simplicity: always use header tenantId for creation.

        const folioData = {
            ...req.body,
            tenant_id: tenantId
        };

        const newFolio = await db.addFolio(folioData);
        res.json({ ok: true, folio: newFolio });
    } catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, message: 'Error creating folio' });
    }
});

router.patch('/folios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedFolio = await db.updateFolio(id, updates);

        if (!updatedFolio) {
            return res.status(404).json({ ok: false, message: 'Folio not found' });
        }
        res.json({ ok: true, folio: updatedFolio });
    } catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, message: 'Error updating folio' });
    }
});

router.delete('/folios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await db.deleteFolio(id);
        res.json({ ok: true, message: 'Deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, message: 'Error deleting folio' });
    }
});

// --- Config Routes ---
// Keeping simple mock config for now
router.get('/config', (req, res) => {
    res.json({ shopName: "Artesanías Carmelita SQL" }); // Mock
});

module.exports = router;
