import React, { forwardRef } from "react";

type Item = {
  id: number;
  name: string;
  price: string;
};

type HomeProps = {
  addToCart: (item: Item) => void;
  dessertRef?: React.RefObject<HTMLDivElement>;
};

const Home = forwardRef<HTMLDivElement, HomeProps>(({ addToCart, dessertRef }) => {
  const coffeeMenu: Item[] = [
    { id: 1, name: "Espresso", price: "4.80₼" },
    { id: 2, name: "Lungo", price: "4.80₼" },
    { id: 3, name: "Americano", price: "5.70₼" },
    { id: 4, name: "Cappuccino", price: "6.40₼" },
    { id: 5, name: "Latte", price: "6.40₼" },
  ];

  const coldDrinksMenu: Item[] = [
    { id: 201, name: "Iced Coffee", price: "5.00₼" },
    { id: 202, name: "Iced Latte", price: "5.50₼" },
    { id: 203, name: "Iced Americano", price: "5.30₼" },
  ];

  const dessertMenu: Item[] = [
    { id: 101, name: "Cheesecake", price: "7.50₼" },
    { id: 102, name: "Chocolate Cake", price: "6.90₼" },
    { id: 103, name: "Tiramisu", price: "7.20₼" },
  ];

  return (
    <div className="p-10 space-y-10">
      <section>
        <h1 className="text-3xl font-bold mb-4 text-white">Qəhvələr</h1>
        <div className="space-y-4">
          {coffeeMenu.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white/10 p-4 rounded-lg hover:shadow-xl transition-shadow"
            >
              <div>
                <h2 className="text-xl font-semibold text-white">{item.name}</h2>
                <p className="text-sm text-gray-300">{item.price}</p>
              </div>
              <button
                onClick={() => addToCart(item)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
              >
                Səbətə at
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Soyuq İçkilər Bölməsi */}
      <section id="cold-drinks">
        <h1 className="text-3xl font-bold mb-4 text-white">Soyuq İçkilər</h1>
        <div className="space-y-4">
          {coldDrinksMenu.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white/10 p-4 rounded-lg hover:shadow-xl transition-shadow"
            >
              <div>
                <h2 className="text-xl font-semibold text-white">{item.name}</h2>
                <p className="text-sm text-gray-300">{item.price}</p>
              </div>
              <button
                onClick={() => addToCart(item)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
              >
                Səbətə at
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Desserts Bölməsi */}
      <section id="desserts" ref={dessertRef}>
        <h1 className="text-3xl font-bold mb-4 text-white">Dessertlər</h1>
        <div className="space-y-4">
          {dessertMenu.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white/10 p-4 rounded-lg hover:shadow-xl transition-shadow"
            >
              <div>
                <h2 className="text-xl font-semibold text-white">{item.name}</h2>
                <p className="text-sm text-gray-300">{item.price}</p>
              </div>
              <button
                onClick={() => addToCart(item)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
              >
                Səbətə at
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
});

export default Home;
