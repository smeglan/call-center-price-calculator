import { useState } from 'react';
import PriceCalculator from './components/PriceCalculator';
import Cart from './components/Cart';
import type { Procedure } from './models/prices';


const PriceApp = () => {
  const [cartItems, setCartItems] = useState<Procedure[]>([]);
  const [cashTotal, setCashTotal] = useState<number>(0);
  const [monthlyTotal, setMonthlyTotal] = useState<number>(0);

  const handleAddToCart = (procedure: string, cashPrice: number, monthlyPrice: number) => {
    setCartItems((prevItems) => [...prevItems, { name: procedure, cashPrice, monthlyPrice }]);
    setCashTotal((prevTotal) => prevTotal + cashPrice);
    setMonthlyTotal((prevTotal) => prevTotal + monthlyPrice);
  };

  const handleRemoveItem = (procedure: string) => {
    const itemToRemove = cartItems.find((item) => item.name === procedure);
    if (itemToRemove) {
      setCartItems((prevItems) => prevItems.filter((item) => item.name !== procedure));
      setCashTotal((prevTotal) => prevTotal - itemToRemove.cashPrice);
      setMonthlyTotal((prevTotal) => prevTotal - itemToRemove.monthlyPrice);
    }
  };
  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Calculadora de precios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PriceCalculator onAddToCart={handleAddToCart} />
        <Cart
          items={cartItems}
          onRemove={handleRemoveItem}
          onClearCart={handleClearCart}
          cashTotal={cashTotal}
          monthlyTotal={monthlyTotal}
        />
      </div>
    </div>
  );
};

export default PriceApp;
