import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ShopArea.scss";
import { getProduct } from "../../../actions/apiActions";
import { addProduct } from "../../../actions/cartActions";
import { Alert } from "antd";

const ShopArea = () => {
  const product = useSelector((state) => state.callApiReducer.product);
  const dispatch = useDispatch();
  const [isBuy, setIsBuy] = useState(false);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const base_url = "https://hidden-fjord-17428.herokuapp.com/uploads";

  const handleAdd = (val) => {
    dispatch(addProduct(val));
    setIsBuy(true);

    setTimeout(() => {
      setIsBuy(false);
    }, 2000);
  };

  return (
    <div className="shop-area">
      <h4 className="shop-title">Shop</h4>
      <div className="wrapper-items">
        {product &&
          product?.map((val, index) => (
            <div key={index} className="product-item">
              <h5 className="cate-name">
                {val.category.length !== 0 ? (
                  <a href="">{val.category[0].sub_name}</a>
                ) : (
                  <></>
                )}
              </h5>
              <h3 className="product-name">
                <a href="">{val.name}</a>
              </h3>
              <div className="thumb">
                <img src={`${base_url}/${val.image}`} alt="" />
              </div>
              <div className="content">
                <div className="price-and-cart">
                  {val.origin_price === val.promotion_price ? (
                    <h4 className="price">${val.origin_price}.00</h4>
                  ) : (
                    <h4 className="price has-discount">
                      ${val.origin_price}.00 <p>${val.promotion_price}.00</p>
                    </h4>
                  )}
                  <i
                    onClick={() => handleAdd(val)}
                    className="fa-solid fa-cart-arrow-down"
                  ></i>
                </div>
                <div className="reaction">
                  <div className="inner">
                    <div className="wishlish">
                      <i className="fa-regular fa-heart"></i> Wishlish
                    </div>
                    <div className="compare">
                      <i
                        style={{ transform: "rotate(90deg)" }}
                        className="fa-solid fa-code-compare"
                      ></i>{" "}
                      Compare
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      {isBuy && (
        <>
          <Alert message="Added successfully" type="success" showIcon />
        </>
      )}
    </div>
  );
};

export default ShopArea;
