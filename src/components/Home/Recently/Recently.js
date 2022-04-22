import "./Recently.scss";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Recently = () => {
  return (
    <section className="recently">
      <div className="container">
        <div className="top-title">
          <h4>Recently Added</h4>
        </div>
        <Swiper
          className="swiper-recently"
          spaceBetween={50}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="wrapper-items">
              <div className="product-item">
                <h5 className="cate-name">
                  <a href="">Headerphones</a>
                </h5>
                <h3 className="product-name">
                  <a href="">Purple Solo 2 Wireless</a>
                </h3>
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/heade1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
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
                <h5 className="cate-name">
                  <a href="">Headerphones</a>
                </h5>
                <h3 className="product-name">
                  <a href="">Purple Solo 2 Wireless</a>
                </h3>
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/heade1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
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
                <h5 className="cate-name">
                  <a href="">Headerphones</a>
                </h5>
                <h3 className="product-name">
                  <a href="">Purple Solo 2 Wireless</a>
                </h3>
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/heade1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
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
                <h5 className="cate-name">
                  <a href="">Headerphones</a>
                </h5>
                <h3 className="product-name">
                  <a href="">Purple Solo 2 Wireless</a>
                </h3>
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/heade1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
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
                <h5 className="cate-name">
                  <a href="">Headerphones</a>
                </h5>
                <h3 className="product-name">
                  <a href="">Purple Solo 2 Wireless</a>
                </h3>
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/heade1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
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
                <h5 className="cate-name">
                  <a href="">Headerphones</a>
                </h5>
                <h3 className="product-name">
                  <a href="">Purple Solo 2 Wireless</a>
                </h3>
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/heade1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
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
                <h5 className="cate-name">
                  <a href="">Headerphones</a>
                </h5>
                <h3 className="product-name">
                  <a href="">Purple Solo 2 Wireless</a>
                </h3>
                <div className="thumb">
                  <img
                    src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/heade1-300x300.png"
                    alt=""
                  />
                </div>
                <div className="content">
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
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Recently;
