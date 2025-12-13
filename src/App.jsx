import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Blog from '@/pages/Blog';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import About from '@/pages/About';
import Internship from '@/pages/Internship';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/internship" element={<Internship />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;