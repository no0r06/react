import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <nav className="bg-pink-300 shadow-md px-8 py-4 flex justify-between items-center">

      <h1 className="text-3xl font-bold text-amber-800">
        Bloom Bakery
      </h1>

      <div className="flex items-center gap-6 text-amber-800 font-medium">

        <Link to="/" className="hover:text-white transition">
          Home
        </Link>

        <Link to="/menu" className="hover:text-white transition">
          Menu
        </Link>

        <Link to="/products" className="hover:text-white transition">
          Products
        </Link>

        <Link to="/contact" className="hover:text-white transition">
          Contact Us
        </Link>

        <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
          Order Now
        </button>

      </div>
    </nav>
  );
}

export default MyNavbar;