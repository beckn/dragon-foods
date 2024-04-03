import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Detials from './pages/Detials';
import Search from './pages/Search';
import MediaPage from './pages/MediaPage';
import Footer from './components/Footer';
import React from 'react';
import appConfig from './assets/ui-config/homeConfig.json';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Detials />} />
          <Route path="/confirm/:itemId" element={<MediaPage />} />
        </Routes>
        {appConfig?.isFooter && <Footer />}
      </Router>
    </>
  )
}

export default App
