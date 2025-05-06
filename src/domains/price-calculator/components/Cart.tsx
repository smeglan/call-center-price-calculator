import React from "react";
import type { Procedure } from "../models/prices";

interface CartProps {
  items: Procedure[];
  onRemove: (procedure: string) => void;
  onClearCart: () => void;
  cashTotal: number;
  monthlyTotal: number;
}

const Cart: React.FC<CartProps> = ({ items, onRemove, onClearCart }) => {
  const totalCash = items.reduce((sum, item) => sum + item.cashPrice, 0);
  const totalMonthly = items.reduce((sum, item) => sum + item.monthlyPrice, 0);

  return (
    <div className="p-4 border rounded-lg mt-6">
      <h2 className="text-xl font-semibold mb-4">Carrito</h2>
      {items.length > 0 && (
        <button
          onClick={onClearCart}
          className="mb-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Vaciar Carrito
        </button>
      )}
      {items.length === 0 ? (
        <p className="text-gray-500">Sin procedimientos.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Procedimientos</th>
                <th className="px-4 py-2 text-right">Total</th>
                <th className="px-4 py-2 text-right">Mensual</th>
                <th className="px-4 py-2 text-center">Accion</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.name} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2 text-right">${item.cashPrice}</td>
                  <td className="px-4 py-2 text-right">${item.monthlyPrice}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => onRemove(item.name)}
                      className="text-red-500 hover:underline"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="font-semibold bg-gray-100">
                <td className="px-4 py-2 text-right">Total:</td>
                <td className="px-4 py-2 text-right">${totalCash}</td>
                <td className="px-4 py-2 text-right">${totalMonthly}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
