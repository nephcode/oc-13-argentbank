// IMPORT MODULES ==============================================//
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

// IMPORT SCSS ================================================//
import "./scss/router.module.scss";

// IMPORT LAYOUTS =============================================//
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

// IMPORT PAGES ===============================================//
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

// IMPORT STORE ===============================================//
import { store } from "./app/store";

// RENDER ====================================================//
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </StrictMode>
);
// End of RENDER ==============================================//
