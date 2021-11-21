import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './pages/Dasboard/Dashboard';
import RestaurantsList from './pages/RestaurantsList/RestaurantsList';
import RestaurantDetail from './pages/RestaurantDetail/RestaurantDetail';
import Favorites from './pages/Favorites/Favorites';
import NotFound from './components/NotFound/NotFound';
import './styles/main.scss';

const App = function () {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/restaurants" element={<RestaurantsList />} />
          <Route
            path="/restaurant/:restaurantId"
            element={<RestaurantDetail />}
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
