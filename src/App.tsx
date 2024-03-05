import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/' element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
