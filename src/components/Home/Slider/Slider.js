import "./Slider.scss";
import { Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Slider = () => {
  return (
    <section className="slider-home">
      <Swiper
        className="swiper-slider-home"
        modules={[EffectFade, Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="item-slide">
          <div className="wrapper-item">
            <div className="content">
              <p>shop to get what you love</p>
              <h2>
                timepieces that make a statement up to <b>40% off</b>
              </h2>
              <a className="btn-buy" href="">
                Start Buying
              </a>
            </div>
            <div className="thumb">
              <img
                src="https://electro.madrasthemes.com/wp-content/uploads/2020/02/smartwatches-resized.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item-slide">
          <div className="wrapper-item">
            <div className="content">
              <p>shop to get what you love</p>
              <h2>
                timepieces that make a statement up to <b>40% off</b>
              </h2>
              <a className="btn-buy" href="">
                Start Buying
              </a>
            </div>
            <div className="thumb">
              <img
                src="https://electro.madrasthemes.com/wp-content/uploads/2019/01/Sounddevice.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item-slide">
          <div className="wrapper-item">
            <div className="content">
              <p>shop to get what you love</p>
              <h2>
                timepieces that make a statement up to <b>40% off</b>
              </h2>
              <a className="btn-buy" href="">
                Start Buying
              </a>
            </div>
            <div className="thumb">
              <img
                src="https://electro.madrasthemes.com/wp-content/uploads/2019/01/Smartphones.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
