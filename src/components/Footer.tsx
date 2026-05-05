function Footer() {
  return (
    <footer className="bg-pink-400 text-white text-center p-4 mt-auto shadow-inner">

      <p className="font-semibold">
        Sugar Bloom Bakery 🍰
      </p>

      <p className="text-sm mt-1">
        Freshly baked with love — © 2026
      </p>

      <div className="mt-2 space-x-4 text-sm">
        <span className="hover:underline cursor-pointer">Privacy</span>
        <span className="hover:underline cursor-pointer">Terms</span>
        <span className="hover:underline cursor-pointer">Contact</span>
      </div>

    </footer>
  );
}

export default Footer;