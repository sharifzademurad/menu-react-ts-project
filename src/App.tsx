import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ShoppingCart, Trash2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Loading from "./Loading";
import backgroundImage from "../images/pexels-natri-129207.jpg";
import { useLocation } from "react-router-dom";

interface CartItem {
  name: string;
  price: string;
}

function App() {
  const location = useLocation(); // Aktiv səhifənin məlumatlarını alırıq

  // Bu funksiyadan istifadə edərək, yalnız ana səhifədə düymələri göstəririk
  const isHomePage = location.pathname === "/"; 
  const [showCard, setShowCard] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (indexToRemove: number) => {
    setCartItems((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleSendOrder = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      alert("Sifariş göndərildi!");
      window.location.reload();
    }, 4000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat overflow-auto"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
   
      <div className="fixed top-2 right-4 z-50">
        <Button
          className="border border-transparent hover:border-red-500 transition-colors"
          size="icon"
          onClick={() => setShowCard(!showCard)}
        >
          <ShoppingCart className="w-10 h-10" />
        </Button>
      </div>

     
      <div
        className={`fixed top-14 right-4 z-40 transition-transform duration-500 ease-in-out ${
          showCard ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <Card className="bg-red-500 w-64 shadow-lg">
          <CardContent>
            <CardTitle className="text-white">Sifarişlər</CardTitle>
            <div className="text-white">
              {cartItems.length === 0 ? (
                <p>Səbətiniz boşdur.</p>
              ) : (
                <ul>
                  {cartItems.map((item, index) => (
                    <li
                      key={index}
                      className="border-b border-white py-2 flex justify-between items-center"
                    >
                      <span>{item.name} - {item.price}</span>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-white hover:text-red-300 transition"
                      >
                        <Trash2 size={18} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </CardContent>
          <CardFooter>
            {cartItems.length > 0 && (
              isLoading ? (
                <Loading />
              ) : (
                <Button onClick={handleSendOrder}>Sifarişi göndər</Button>
              )
            )}
          </CardFooter>
        </Card>
      </div>

   
      <header className="w-full py-1 px-20 mt-4 z-30">
        <nav className="flex justify-center gap-6">
          <Link
            to="/"
            className="relative inline-block after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full font-bold text-white hover:text-gray-300"
          >
            Əsas
          </Link>
          <Link
            to="/about"
            className="relative inline-block after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full font-bold text-white hover:text-gray-300"
          >
            Haqqımızda
          </Link>
          <Link
            to="/contact"
            className="relative inline-block after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full font-bold text-white hover:text-gray-300"
          >
            Əlaqə
          </Link>
        </nav>

        {/* Kateqoriya düymələri */}
        {isHomePage && (
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="border-2 border-red-500 text-white font-bold py-2 px-4 rounded-sm transition-colors hover:bg-red-500 hover:text-white"
          >
            Qəhvələr
          </button>
          <button
            onClick={() => scrollToSection("cold-drinks")}
            className="border-2 border-red-500 text-white font-bold py-2 px-4 rounded-sm transition-colors hover:bg-red-500 hover:text-white"
          >
            Soyuq İçkilər
          </button>
          <button
            onClick={() => scrollToSection("desserts")}
            className="border-2 border-red-500 text-white font-bold py-2 px-4 rounded-sm transition-colors hover:bg-red-500 hover:text-white"
          >
            Dessertlər
          </button>
        </div>
        
      )}
</header>
      {/* Əsas məzmun */}
      <main className="p-6 text-white">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
