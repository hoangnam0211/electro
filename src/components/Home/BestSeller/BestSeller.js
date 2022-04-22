import "./BestSeller.scss";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const BestSeller = () => {
  return (
    <seiction className="best-seller">
      <div className="container">
        <div className="top-title">
          <h4>Best Sellers</h4>
          <ul className="list-type">
            <li className="active">Top 20</li>
            <li>
              <a href="/shop">Smart Phones & Tablets</a>
            </li>
            <li>
              <a href="/shop">Laptops & Computers</a>
            </li>
            <li>
              <a href="/shop">Video Cameras</a>
            </li>
          </ul>
        </div>
        <Swiper
          className="swiper-bestseller"
          spaceBetween={50}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="wrapper-items">
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/heade1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/heade1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/heade1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/heade1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/heade1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/heade1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/heade1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/heade1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper-items">
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/headphonecase-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/headphonecase-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/headphonecase-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/headphonecase-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/headphonecase-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/headphonecase-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/headphonecase-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/headphonecase-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper-items">
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
              <div className="product-item">
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5 className="cate-name">
                    <a href="">Headerphones</a>
                  </h5>
                  <h3 className="product-name">
                    <a href="">Purple Solo 2 Wireless</a>
                  </h3>
                  <div className="price-and-cart">
                    <h4 className="price">2,299.00</h4>
                    <i className="fa-solid fa-cart-arrow-down"> </i>
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
            </div>
          </SwiperSlide>
        </Swiper>

        <img
          className="big-banner"
          src="https://electro.madrasthemes.com/wp-content/uploads/2018/04/home-v5-banner.png"
          alt=""
        />
      </div>
    </seiction>
  );
};

export default BestSeller;
