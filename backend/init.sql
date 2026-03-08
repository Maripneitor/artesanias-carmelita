-- backend/init.sql

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    role TEXT NOT NULL DEFAULT 'employee', -- 'admin', 'developer', 'employee', 'tenant'
    tenant_id TEXT, -- NULL for admins/devs who see everything
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS folios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_name TEXT NOT NULL,
    phone TEXT,
    items TEXT NOT NULL,
    status TEXT DEFAULT 'Pendiente', -- 'Pendiente', 'En Proceso', 'Listo', 'Entregado'
    due_date TEXT,
    signature TEXT, -- Base64
    tenant_id TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Seed initial data
INSERT OR IGNORE INTO users (id, name, email, role, tenant_id) VALUES 
(1, 'Admin Principal', 'admin@carmelita.com', 'admin', NULL),
(2, 'Empleado Sucursal 1', 'emp1@carmelita.com', 'employee', 'sucursal-1');
