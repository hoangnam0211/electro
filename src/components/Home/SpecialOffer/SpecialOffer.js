import { Statistic, Tabs } from "antd";
import "./SpecialOffer.scss";
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

const SpecialOffer = () => {
  const onFinish = () => {
    console.log("finished!");
  };

  const { TabPane } = Tabs;

  return (
    <section className="special-offer">
      <div className="container">
        <div className="wapper">
          <div className="special-product">
            <div className="top-title">
              <h4>Special Offer</h4>
              <div className="save-price">
                <span>Save</span>
                <h5>$20.00</h5>
              </div>
            </div>
            <div className="thumb">
              <a href="">
                <img src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/consal-300x300.png" />
              </a>
            </div>
            <p className="desc">
              <a href="">Game Console Controller + USB 3.0 Cable</a>
            </p>
            <h3 className="price">
              $79.00 <span>$99.00</span>
            </h3>
            <p>Hurry Up! Offer ends in:</p>
            <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
          </div>
          <div className="tabs">
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="Feature" key="1">
                <div className="wrapper-items">
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/apptablet-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price">$2,299.00</h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/apptablet-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price has-discount">
                        <span>$2,400.00</span> $2,299.00
                      </h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/apptablet-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price">$2,299.00</h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/apptablet-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price has-discount">
                        <span>$2,400.00</span> $2,299.00
                      </h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/apptablet-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price">$2,299.00</h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/apptablet-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price">$2,299.00</h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/apptablet-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price">$2,299.00</h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/apptablet-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price">$2,299.00</h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="On Sale" key="2">
                <div className="wrapper-items">
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/game1-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price">$2,299.00</h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/game1-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price">$2,299.00</h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/game1-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price">$2,299.00</h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/game1-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price">$2,299.00</h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/game1-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price">$2,299.00</h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/game1-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price">$2,299.00</h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/game1-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price">$2,299.00</h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/game1-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price">$2,299.00</h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Top Rated" key="3">
                <div className="wrapper-items">
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/Ultrabooks-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price">$2,299.00</h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/Ultrabooks-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price">$2,299.00</h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/Ultrabooks-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price">$2,299.00</h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/Ultrabooks-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price">$2,299.00</h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/Ultrabooks-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price">$2,299.00</h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/Ultrabooks-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price">$2,299.00</h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/Ultrabooks-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price">$2,299.00</h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <h5 className="cate-name">
                      <a href="">Audio Speakers</a>
                    </h5>
                    <h3 className="product-name">
                      <a href="">Wireless Audio System Multiroom 360</a>
                    </h3>
                    <a href="">
                      <img
                        src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/Ultrabooks-300x300.png"
                        alt=""
                      />
                    </a>
                    <div className="price-and-cart">
                      <h4 className="price">$2,299.00</h4>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <div className="reaction">
                      <div className="inner">
                        <div className="wishlish">
                          <i className="fa-regular fa-heart"></i> Wishlish
                        </div>
                        <div className="compare">
                          <i
                            style={{ transform: "rotate(90deg)" }}
                            class="fa-solid fa-code-compare"
                          ></i>{" "}
                          Wishlish
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
