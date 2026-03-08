import React, { useState } from 'react';

const AiInbox = ({ onOrderCreated }) => {
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
    const [draft, setDraft] = useState(null);

    const handleExtract = async () => {
        if (!text.trim()) return;
        setLoading(true);
        try {
            const res = await fetch('http://localhost:4000/api/ai/extract', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text })
            });
            const data = await res.json();
            if (data.ok) {
                setDraft(data.data);
            }
        } catch (err) {
            console.error(err);
            alert('Error al conectar con la IA');
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('http://localhost:4000/api/folios', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(draft)
            });
            const data = await res.json();
            if (data.ok) {
                onOrderCreated(); // Refresh list
                setDraft(null);
                setText('');
            }
        } catch (err) {
            console.error(err);
            alert('Error al guardar el pedido');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                🤖 AI Inbox
            </h2>

            {!draft ? (
                <div className="space-y-4">
                    <textarea
                        className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none resize-none h-32 text-gray-600 placeholder-gray-400"
                        placeholder="Pega aquí el pedido de WhatsApp... (ej: 'Pedido para Juan, 5551234567, quiere 2 manteles para el lunes')"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <div className="flex justify-end">
                        <button
                            onClick={handleExtract}
                            disabled={loading || !text}
                            className={`px-6 py-2 rounded-lg font-medium text-white transition-all ${loading || !text ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg'
                                }`}
                        >
                            {loading ? 'Analizando...' : 'Extraer Datos'}
                        </button>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSave} className="space-y-4 animate-in fade-in zoom-in duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Cliente</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                value={draft.customerName}
                                onChange={(e) => setDraft({ ...draft, customerName: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                value={draft.phone}
                                onChange={(e) => setDraft({ ...draft, phone: e.target.value })}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Detalles del Pedido</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                value={draft.items}
                                onChange={(e) => setDraft({ ...draft, items: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha Entrega</label>
                            <input
                                type="date"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                value={draft.dueDate}
                                onChange={(e) => setDraft({ ...draft, dueDate: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-gray-100">
                        <button
                            type="button"
                            onClick={() => setDraft(null)}
                            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all font-medium"
                        >
                            {loading ? 'Guardando...' : 'Confirmar Pedido'}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default AiInbox;
