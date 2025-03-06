import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Default export
import Footer from './components/Footer'; // Default export
import Home from './pages/Home'; // Default export
import About from './pages/About'; // Default export
import Projects from './pages/Projects'; // Default export
import Contact from './pages/Contact'; // Default export

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow py-8">
          <div className="container mx-auto px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;