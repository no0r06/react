import SlideBar from './components/SlideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/NavBar';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Products from './pages/Products';
import Contact from './pages/Contact';
function App() {
  return (
    
    <Router>
<SlideBar />
      <div style={{ display: 'flex' }}>
         {/* Main content area */}
        <div style={{ width: '100%' }}>
          <MyNavbar />

          <div style={{ padding: '20px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>

      </div>
    </Router>
    
  );
}
export default App;