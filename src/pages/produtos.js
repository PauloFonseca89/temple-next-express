import { useState } from 'react';

const initialCards = [
  { id: 1, bank: 'Novo Banco',   type: 'Debit Card', last4: '0912', color: '#6CC3A0' },
  { id: 2, bank: 'CGD',  type: 'Debit Card', last4: '9275', color: '#F08A7D' },
  { id: 3, bank: 'Refeição',   type: 'Debit Card', last4: '0029', color: '#F4B567' },
  { id: 4, bank: 'Poupança', type: 'Debit Card', last4: '3326', color: '#6E7CCB' },
];

export default function Produtos() {
  const [cards, setCards] = useState(initialCards);

  const toggleEdit = (id, on) =>
    setCards(cs => cs.map(c => (c.id === id ? { ...c, editing: on ?? !c.editing } : c)));

  const updateField = (id, field, value) =>
    setCards(cs => cs.map(c => (c.id === id ? { ...c, [field]: value } : c)));

  const saveCard = (id) => toggleEdit(id, false);

  const removeCard = (id) =>
    setCards(cs => cs.filter(c => c.id !== id));

  const addCard = () => {
    const nextId = (cards[cards.length - 1]?.id || 0) + 1;
    setCards(cs => [
      ...cs,
      { id: nextId, bank: 'Novo Banco', type: 'Debit Card', last4: '0000', color: '#f7f1f1ff', editing: true },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <section className="mx-auto max-w-3xl bg-white rounded-xl shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Cartões</h2>
          <button
            onClick={addCard}
            className="px-3 py-2 text-sm rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            + Adicionar cartão
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {cards.map(card => (
            <div key={card.id} className="rounded-2xl border border-gray-200 p-4">
              {/* Cartão visual (clica para editar) */}
              <button
                onClick={() => toggleEdit(card.id)}
                className="w-full text-left rounded-2xl p-5 text-white shadow mb-4 transition-colors"
                style={{ backgroundColor: card.color }}
                title="Clique para editar"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-extrabold text-lg">{card.bank}</div>
                    <div className="opacity-90 text-sm">{card.type}</div>
                  </div>
                  <div className="bg-white/25 px-3 py-1 rounded-md text-xs">⋯</div>
                </div>
                <div className="tracking-widest text-lg">•••• •••• •••• {card.last4}</div>
              </button>

              {card.editing && (
                <div className="space-y-3">
                  <label className="block">
                    <span className="block text-sm text-gray-600 mb-1">Nome do banco</span>
                    <input
                      value={card.bank}
                      onChange={e => updateField(card.id, 'bank', e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </label>

                  <div className="grid grid-cols-2 gap-3">
                    <label className="block">
                      <span className="block text-sm text-gray-600 mb-1">Últimos 4</span>
                      <input
                        value={card.last4}
                        onChange={e =>
                          updateField(
                            card.id,
                            'last4',
                            e.target.value.replace(/\D/g, '').slice(0, 4)
                          )
                        }
                        className="w-full rounded-lg border border-gray-300 px-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </label>

                    <label className="block">
                      <span className="block text-sm text-gray-700 mb-1">Cor</span>
                      <input
                        type="color"
                        value={card.color}
                        onChange={e => updateField(card.id, 'color', e.target.value)}
                        className="w-full h-10 rounded-lg border border-gray-300 p-1"
                      />
                    </label>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => removeCard(card.id)}
                      className="px-3 py-2 text-sm rounded-lg border border-red-600 text-red-600 hover:bg-red-50"
                    >
                      Eliminar
                    </button>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleEdit(card.id, false)}
                        className="px-3 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-100"
                      >
                        Cancelar
                      </button>
                      <button
                        onClick={() => saveCard(card.id)}
                        className="px-3 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Guardar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
