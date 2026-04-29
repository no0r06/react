import { useState } from 'react';
import { Drawer, List, ListItemButton, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function SlideBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ALWAYS VISIBLE BUTTON */}
      <IconButton
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed',
          top: 20,
          left: 20,
          zIndex: 9999,
          backgroundColor: '#f8c8dc'
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* DRAWER */}
      <Drawer open={open} onClose={() => setOpen(false)}>
        <div style={{ width: 250, height: '100%', backgroundColor: '#f8c8dc', padding: 20 }}>

          <h3 style={{ color: '#8b4513' }}>Sugar Bloom Bakery</h3>

          <List>

            <ListItemButton component={Link} to="/" onClick={() => setOpen(false)}>
              <ListItemText primary="Home" />
            </ListItemButton>

            <ListItemButton component={Link} to="/menu" onClick={() => setOpen(false)}>
              <ListItemText primary="Menu" />
            </ListItemButton>

            <ListItemButton component={Link} to="/products" onClick={() => setOpen(false)}>
              <ListItemText primary="Products" />
            </ListItemButton>

            <ListItemButton component={Link} to="/contact" onClick={() => setOpen(false)}>
              <ListItemText primary="Contact" />
            </ListItemButton>

          </List>

        </div>
      </Drawer>
    </>
  );
}

export default SlideBar;