import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import { ThemeProvider } from './components/ui/theme-provider'
import Home from './pages/home';
import About from './pages/about';

function App() {

  return (
   
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>


    
     
      </ThemeProvider>

  )
}

export default App
