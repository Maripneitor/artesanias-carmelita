const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const DB_PATH = path.join(__dirname, 'database.sqlite');
const INIT_SQL_PATH = path.join(__dirname, 'init.sql');

// Create/Open Database
const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        initDB();
    }
});

function initDB() {
    const sql = fs.readFileSync(INIT_SQL_PATH, 'utf8');
    // split by semi-colon to run multiple statements (sqlite3 exec can handle this but serialize is safer)
    db.serialize(() => {
        db.exec(sql, (err) => {
            if (err) {
                console.error('Failed to initialize DB:', err);
            } else {
                console.log('Database initialized with schema.');
            }
        });
    });
}

// Helper to wrap sqlite3 in Promises
function query(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function run(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function (err) {
            if (err) reject(err);
            else resolve({ id: this.lastID, changes: this.changes });
        });
    });
}

// --- Specific Data Access Methods ---

module.exports = {
    // Users
    getUsers: async (requestingUserRole, requestingTenantId) => {
        // RBAC: Admin/Dev sees all, others see only their tenant
        let sql = 'SELECT id, name, email, role, tenant_id FROM users';
        let params = [];

        if (requestingUserRole !== 'admin' && requestingUserRole !== 'developer') {
            sql += ' WHERE tenant_id = ?';
            params.push(requestingTenantId);
        }

        return await query(sql, params);
    },

    createUser: async (user) => {
        const { name, email, role, tenant_id } = user;
        const result = await run(
            'INSERT INTO users (name, email, role, tenant_id) VALUES (?, ?, ?, ?)',
            [name, email, role, tenant_id]
        );
        return { id: result.id, ...user };
    },

    // Folios
    getFolios: async (requestingUserRole, requestingTenantId) => {
        let sql = 'SELECT * FROM folios';
        let params = [];

        // RBAC Rule: If NOT admin/dev, filter by tenant_id
        if (requestingUserRole !== 'admin' && requestingUserRole !== 'developer') {
            sql += ' WHERE tenant_id = ?';
            params.push(requestingTenantId);
        }

        sql += ' ORDER BY created_at DESC';
        return await query(sql, params);
    },

    getFolioById: async (id) => {
        const rows = await query('SELECT * FROM folios WHERE id = ?', [id]);
        return rows[0];
    },

    addFolio: async (folio) => {
        const { customer_name, phone, items, due_date, tenant_id } = folio;
        const result = await run(
            'INSERT INTO folios (customer_name, phone, items, due_date, tenant_id) VALUES (?, ?, ?, ?, ?)',
            [customer_name, phone, items, due_date, tenant_id || 'default']
        );
        return { id: result.id, ...folio };
    },

    updateFolio: async (id, updates) => {
        // Dynamic update query builder
        const keys = Object.keys(updates);
        if (keys.length === 0) return null;

        const setClause = keys.map(key => `${key} = ?`).join(', ');
        const values = Object.values(updates);
        values.push(id);

        await run(`UPDATE folios SET ${setClause} WHERE id = ?`, values);
        return await module.exports.getFolioById(id);
    },

    deleteFolio: async (id) => {
        await run('DELETE FROM folios WHERE id = ?', [id]);
        return true;
    }
};
