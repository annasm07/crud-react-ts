import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './pages/Dasboard/Dashboard';
import RestaurantsList from './pages/RestaurantsList/RestaurantsList';
import './styles/main.scss';

const App = function () {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/restaurants" element={<RestaurantsList />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
