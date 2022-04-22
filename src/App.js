import "./App.scss";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import MyAccount from "./components/MyAccount/MyAccount";
import TopHeader from "./components/TopHeader/TopHeader";
import Header from "./components/Header/Header";
import SliderBrand from "./components/SliderBrands/SliderBrand";
import TopFooter from "./components/Footer/TopFooter/TopFooter";
import Footer from "./components/Footer/Footer";
import BotFooter from "./components/Footer/BotFooter/BotFooter";
import Categories from "./components/Categories/Categories";
import { setCurrentUser } from "./actions/userActions";
import store from "./store";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";

const token = localStorage.token;

if (token) {
  store.dispatch(setCurrentUser(token));
}

const App = () => {
  const { pathname } = useLocation();

  return (
    <div className="App">
      <TopHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/my-account/*"
          element={
            pathname === "/my-account" ? (
              <Navigate replace to="/my-account/dashboard" />
            ) : (
              <MyAccount />
            )
          }
        />
      </Routes>
      <SliderBrand />
      <Categories />
      <TopFooter />
      <Footer />
      <BotFooter />
    </div>
  );
};

export default App;
