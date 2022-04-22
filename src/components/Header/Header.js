import logo from "./logo.png";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Modal } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../actions/apiActions";
import SyncLoader from "react-spinners/SyncLoader";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.userReducer.loading);
  const cate = useSelector((state) => state.callApiReducer.category);
  const cart = useSelector((state) => state.cartReducer.cart);

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const [showCart, setShowCart] = useState(false);

  const handleCart = () => {
    if (showCart) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
    console.log(showCart);
  };

  const handleDelete = () => {};

  const base_url = "https://hidden-fjord-17428.herokuapp.com/uploads";

  return (
    <div className="header">
      <div className="container">
        <div className="wrapper">
          <h1 onClick={() => navigate("/")} className="logo">
            <a href="">
              <img src={logo} alt="" />
            </a>
          </h1>
          <div className="wrapper-form">
            <div className="btn-showmore">
              <i className="fa-solid fa-bars"></i>
            </div>

            <form action="">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search for Products"
              />
              <select>
                {cate &&
                  cate?.map((val, index) => (
                    <option key={index} value="">
                      {val.name}
                    </option>
                  ))}
              </select>
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>

          <ul className="interact-icons">
            <li>
              <i className="fa-solid fa-code-compare"></i>
            </li>
            <li>
              <i className="fa-regular fa-heart"></i>
            </li>
            <li>
              <i className="fa-regular fa-user"></i>
            </li>
            <li onClick={handleCart} className="my-cart ">
              <ShoppingOutlined /> <span className="price">$0.00</span>
              <span className="quantity">0</span>
              {cart ? (
                <div className={showCart ? "cart-box show" : "cart-box"}>
                  <div className="inner">
                    {/* {cart.map((val) => { */}
                    <div className="product-item-box">
                      <div className="thumb">
                        <img
                          src="https://electro.madrasthemes.com/wp-content/uploads/2021/11/prodcut3-300x300.png"
                          alt=""
                        />
                      </div>
                      <div className="info">
                        <h3 className="product-name">Smartphone 6S 32GB LTE</h3>
                        <span className="quantity-price">1 × $799.00</span>
                      </div>

                      <button onClick={handleDelete}>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    {/* })} */}
                  </div>
                </div>
              ) : (
                <div
                  className={
                    showCart ? "cart-box  no-item show" : "cart-box  no-item"
                  }
                >
                  <div className="inner">
                    <h4>No products in the cart</h4>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      <Modal width={100} centered footer={null} visible={loading}>
        <SyncLoader color={"#333333"} loading={loading} size={10} />
      </Modal>
    </div>
  );
};

export default Header;
