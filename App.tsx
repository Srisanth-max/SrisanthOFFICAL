

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Goals from './components/Goals';
import Income from './components/Income';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// Fix: Import the ChatAssistant component to make it available in the app.
import ChatAssistant from './components/ChatAssistant';

function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden text-ios-text">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Goals />
        <Income />
        <Projects />
        <Contact />
      </main>
      <Footer />
      {/* Fix: Render the ChatAssistant component. */}
      <ChatAssistant />
    </div>
  );
}

export default App;
