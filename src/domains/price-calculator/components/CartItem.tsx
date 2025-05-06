import React from "react";

interface CartItemProps {
  procedure: string;
  price: number;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ procedure, price, onRemove }) => (
  <div className="flex justify-between items-center border-b py-2">
    <span>{procedure}</span>
    <span>${price}</span>
    <button onClick={onRemove} className="text-red-500 hover:text-red-700">
      Eliminar
    </button>
  </div>
);

export default CartItem;
