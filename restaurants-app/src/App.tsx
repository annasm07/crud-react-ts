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

const App = function () {
  return (
    <div className="App">
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
