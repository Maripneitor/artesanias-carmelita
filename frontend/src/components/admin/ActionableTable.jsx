import React, { useState } from 'react';
import SignaturePad from './SignaturePad';

const ActionableTable = ({ folios, onStatusChange, onSignatureSave, onDelete }) => {
    const [signingId, setSigningId] = useState(null);

    const handleWhatsApp = (folio) => {
        const text = `Hola ${folio.customerName}, tu pedido #${folio.id} de ${folio.items} ya está listo para entrega en Artesanías Carmelita.`;
        const url = `https://wa.me/${folio.phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    const handleStatusUpdate = (id, newStatus) => {
        onStatusChange(id, newStatus);
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                            <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Folio</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Cliente</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Descripción</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Fecha Entrega</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Estatus</th>
                            <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {folios.map((folio) => (
                            <React.Fragment key={folio.id}>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 text-sm text-gray-500">#{folio.id.slice(-6)}</td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-medium text-gray-900">{folio.customerName}</div>
                                        <div className="text-xs text-gray-400">{folio.phone}</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate" title={folio.items}>
                                        {folio.items}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{folio.dueDate}</td>
                                    <td className="px-6 py-4">
                                        <select
                                            value={folio.status}
                                            onChange={(e) => handleStatusUpdate(folio.id, e.target.value)}
                                            className={`text-sm rounded-full px-3 py-1 font-medium border-0 ring-1 ring-inset ${folio.status === 'Entregado' ? 'bg-green-50 text-green-700 ring-green-600/20' :
                                                folio.status === 'Pendiente' ? 'bg-yellow-50 text-yellow-800 ring-yellow-600/20' :
                                                    'bg-gray-50 text-gray-600 ring-gray-500/10'
                                                }`}
                                        >
                                            <option value="Pendiente">Pendiente</option>
                                            <option value="En Proceso">En Proceso</option>
                                            <option value="Listo">Listo</option>
                                            <option value="Entregado">Entregado</option>
                                        </select>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2 items-center">
                                            {/* WhatsApp Button */}
                                            <button
                                                onClick={() => handleWhatsApp(folio)}
                                                className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                                title="Notificar por WhatsApp"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                                </svg>
                                            </button>

                                            {/* Signature Button */}
                                            {folio.status === 'Entregado' && !folio.signature && (
                                                <button
                                                    onClick={() => setSigningId(folio.id)}
                                                    className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                                    title="Firmar de Recibido"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                    </svg>
                                                </button>
                                            )}

                                            {/* Delete Button */}
                                            <button
                                                onClick={() => onDelete && onDelete(folio.id)}
                                                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                title="Eliminar Pedido"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>

                                            {/* Signature Badge */}
                                            {folio.signature && (
                                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium ring-1 ring-inset ring-blue-700/10" title="Firmado digitalmente">
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    FIRMADO
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                                {/* Signature Row */}
                                {signingId === folio.id && (
                                    <tr className="bg-gray-50 animate-in fade-in">
                                        <td colSpan="6" className="p-4">
                                            <div className="max-w-md mx-auto">
                                                <SignaturePad
                                                    onSave={(signature) => {
                                                        onSignatureSave(folio.id, signature);
                                                        setSigningId(null);
                                                    }}
                                                    onCancel={() => setSigningId(null)}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
                {folios.length === 0 && (
                    <div className="p-8 text-center text-gray-400">
                        No hay pedidos recientes. Usa el AI Inbox para agregar uno.
                    </div>
                )}
            </div>
        </div>
    );
};

export default ActionableTable;
