import React, { useState } from 'react';

const FolioForm = ({ onOrderCreated }) => {
    const [formData, setFormData] = useState({
        customer_name: '',
        phone: '',
        items: '',
        due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0] // +3 days
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('http://localhost:4000/api/folios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Mock Headers for RBAC testing
                    'x-user-role': 'admin',
                    'x-tenant-id': 'sucursal-1'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (data.ok) {
                onOrderCreated(); // Refresh parent list
                setFormData({
                    customer_name: '',
                    phone: '',
                    items: '',
                    due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0]
                });
            } else {
                alert('Error: ' + data.message);
            }
        } catch (err) {
            console.error(err);
            alert('Error network');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">📝 Nuevo Pedido Manual</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Cliente</label>
                        <input
                            required
                            type="text"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="Nombre del cliente"
                            value={formData.customer_name}
                            onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="Ej. 961..."
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Descripción del Pedido</label>
                        <input
                            required
                            type="text"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="¿Qué vamos a elaborar?"
                            value={formData.items}
                            onChange={(e) => setFormData({ ...formData, items: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Entrega</label>
                        <input
                            required
                            type="date"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            value={formData.due_date}
                            onChange={(e) => setFormData({ ...formData, due_date: e.target.value })}
                        />
                    </div>
                </div>
                <div className="flex justify-end pt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition-all font-medium disabled:opacity-50"
                    >
                        {loading ? 'Guardando...' : 'Crear Pedido'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FolioForm;
