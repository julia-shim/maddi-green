/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-peach selection:text-brown bg-cream">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/senior-portraits" replace />} />
            <Route path="/senior-portraits" element={<Gallery category="senior" />} />
            <Route path="/weddings" element={<Gallery category="wedding" />} />
            <Route path="/coursework" element={<Gallery category="coursework" />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="py-8 text-center text-sm text-brown/50 uppercase tracking-widest bg-lightsage/30 mt-auto">
          &copy; {new Date().getFullYear()} Maddi Green Photography
        </footer>
      </div>
    </Router>
  );
}
