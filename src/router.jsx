import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Profile from './pages/Profile';


createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  </Provider>
)
