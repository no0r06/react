import { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function SlideBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        className="!fixed !top-5 !left-5 !z-[9999] !bg-pink-300 hover:!bg-pink-400"
      >
        <MenuIcon />
      </IconButton>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <div className="w-64 h-full bg-pink-200 p-6">

          <h2 className="text-2xl font-bold text-amber-800 mb-8">
            Sugar Bloom Bakery
          </h2>

          <div className="flex flex-col gap-5 text-amber-800 font-medium text-lg">

            <Link to="/" onClick={() => setOpen(false)} className="hover:text-white transition">
              Home
            </Link>

            <Link to="/menu" onClick={() => setOpen(false)} className="hover:text-white transition">
              Menu
            </Link>

            <Link to="/products" onClick={() => setOpen(false)} className="hover:text-white transition">
              Products
            </Link>

            <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-white transition">
              Contact
            </Link>

          </div>
        </div>
      </Drawer>
    </>
  );
}

export default SlideBar;