import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link to="/admin" className="text-xl font-bold text-gray-900 tracking-tight">
                            Panel <span className="text-indigo-600">Artesanías</span>
                        </Link>
                        <nav className="hidden md:flex gap-4 ml-8">
                            <Link to="/admin" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
                                Dashboard
                            </Link>
                            <Link to="/admin/config" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
                                Configuración
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
