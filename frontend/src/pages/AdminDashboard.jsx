import React, { useState, useEffect } from 'react';
import AiInbox from '../components/admin/AiInbox';
import ActionableTable from '../components/admin/ActionableTable';
import FolioForm from '../components/admin/FolioForm';
import UserManagement from '../components/admin/UserManagement';

const AdminDashboard = () => {
    const [folios, setFolios] = useState([]);
    const [viewMode, setViewMode] = useState('orders'); // 'orders', 'users'

    const fetchFolios = async () => {
        try {
            const res = await fetch('http://localhost:4000/api/folios', {
                headers: {
                    'x-user-role': 'admin', // Mock Admin for visibility
                    'x-tenant-id': 'sucursal-1'
                }
            });
            const data = await res.json();
            setFolios(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchFolios();
    }, []);

    const handleStatusChange = async (id, newStatus) => {
        try {
            const res = await fetch(`http://localhost:4000/api/folios/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            });
            if (res.ok) fetchFolios();
        } catch (err) {
            console.error(err);
        }
    };

    const handleSignatureSave = async (id, signatureData) => {
        try {
            const res = await fetch(`http://localhost:4000/api/folios/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ signature: signatureData })
            });
            if (res.ok) fetchFolios();
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('¿Seguro que deseas eliminar este pedido?')) return;
        try {
            const res = await fetch(`http://localhost:4000/api/folios/${id}`, { method: 'DELETE' });
            if (res.ok) fetchFolios();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Bienvenido, Admin</h1>
                    <p className="text-gray-600">Gestión centralizada (SQL + RBAC Activado)</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => setViewMode('orders')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${viewMode === 'orders' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}
                    >
                        📦 Pedidos
                    </button>
                    <button
                        onClick={() => setViewMode('users')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${viewMode === 'users' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}
                    >
                        👥 Usuarios
                    </button>
                </div>
            </div>

            {viewMode === 'users' ? (
                <UserManagement />
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Input Forms */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Manual Form */}
                        <FolioForm onOrderCreated={fetchFolios} />

                        {/* AI Inbox (Legacy Support) */}
                        <AiInbox onOrderCreated={fetchFolios} />

                        {/* Stats */}
                        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
                            <h3 className="font-semibold text-lg mb-2">Resumen</h3>
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-indigo-100 text-sm">Pendientes</p>
                                    <p className="text-3xl font-bold">{folios.filter(f => f.status === 'Pendiente').length}</p>
                                </div>
                                <div>
                                    <p className="text-indigo-100 text-sm">Entregados</p>
                                    <p className="text-3xl font-bold">{folios.filter(f => f.status === 'Entregado').length}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Table */}
                    <div className="lg:col-span-2">
                        <ActionableTable
                            folios={folios}
                            onStatusChange={handleStatusChange}
                            onSignatureSave={handleSignatureSave}
                            onDelete={handleDelete}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
