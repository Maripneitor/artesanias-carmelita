import React, { useState, useEffect } from 'react';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', email: '', role: 'employee', tenant_id: 'sucursal-1' });

    const fetchUsers = async () => {
        try {
            const res = await fetch('http://localhost:4000/api/users', {
                headers: { 'x-user-role': 'admin' }
            });
            const data = await res.json();
            setUsers(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleCreateUser = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:4000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            });
            if (res.ok) {
                fetchUsers();
                setNewUser({ name: '', email: '', role: 'employee', tenant_id: 'sucursal-1' });
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">👥 Gestión de Usuarios</h2>

            {/* Create User Form */}
            <form onSubmit={handleCreateUser} className="flex flex-wrap gap-4 items-end mb-6 pb-6 border-b border-gray-100">
                <div className="flex-1 min-w-[200px]">
                    <label className="block text-xs text-gray-500 mb-1">Nombre</label>
                    <input
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                        value={newUser.name}
                        onChange={e => setNewUser({ ...newUser, name: e.target.value })}
                        required
                    />
                </div>
                <div className="flex-1 min-w-[200px]">
                    <label className="block text-xs text-gray-500 mb-1">Email</label>
                    <input
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                        value={newUser.email}
                        onChange={e => setNewUser({ ...newUser, email: e.target.value })}
                        required
                    />
                </div>
                <div className="w-32">
                    <label className="block text-xs text-gray-500 mb-1">Rol</label>
                    <select
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                        value={newUser.role}
                        onChange={e => setNewUser({ ...newUser, role: e.target.value })}
                    >
                        <option value="employee">Empleado</option>
                        <option value="admin">Admin</option>
                        <option value="developer">Developer</option>
                    </select>
                </div>
                <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-black transition-colors">
                    Agregar
                </button>
            </form>

            {/* User List */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-gray-500 bg-gray-50">
                        <tr>
                            <th className="px-4 py-3">ID</th>
                            <th className="px-4 py-3">Nombre</th>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Rol</th>
                            <th className="px-4 py-3">Sucursal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(u => (
                            <tr key={u.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                                <td className="px-4 py-3">#{u.id}</td>
                                <td className="px-4 py-3 font-medium">{u.name}</td>
                                <td className="px-4 py-3 text-gray-500">{u.email}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-0.5 rounded-full text-xs border ${u.role === 'admin' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                                            'bg-gray-50 text-gray-600 border-gray-200'
                                        }`}>
                                        {u.role}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-gray-400">{u.tenant_id || '-'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;
