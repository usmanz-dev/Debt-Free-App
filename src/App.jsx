import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import HowItWorks from './pages/HowItWorks'
import DebtSolutions from './pages/DebtSolutions/index'
import IVA from './pages/DebtSolutions/IVA'
import DMP from './pages/DebtSolutions/DMP'
import DRO from './pages/DebtSolutions/DRO'
import Bankruptcy from './pages/DebtSolutions/Bankruptcy'
import ThankYou from './pages/Thankyou'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/debt-solutions" element={<DebtSolutions />} />
        <Route path="/debt-solutions/iva" element={<IVA />} />
        <Route path="/debt-solutions/dmp" element={<DMP />} />
        <Route path="/debt-solutions/dro" element={<DRO />} />
        <Route path="/debt-solutions/bankruptcy" element={<Bankruptcy />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App