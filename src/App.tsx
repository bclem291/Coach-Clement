import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Training } from './pages/Training';
import { Vision } from './pages/Vision';
import { Contact } from './pages/Contact';
import { Admin } from './pages/Admin';
import { StoreProvider } from './store';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/training" element={<Training />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}
