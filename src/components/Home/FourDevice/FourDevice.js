import "./FourDevice.scss";

const FourDevice = () => {
  return (
    <section className="four-device">
      <div className="container">
        <div className="wrapper-devices">
          <div className="device-item">
            <div className="thumb">
              <img
                src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/cameras-resized.png"
                alt=""
              />
            </div>
            <div className="content">
              <h4>
                Catch Big <strong>Deals</strong> on the Cameras
              </h4>
              <a href="">
                Shop now <i className="fa-solid fa-circle-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="device-item">
            <div className="thumb">
              <img
                src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/laptop.png"
                alt=""
              />
            </div>
            <div className="content">
              <h4>
                tablets, smartphones <strong>and more</strong>
              </h4>
              <a href="">
                Shop now <i className="fa-solid fa-circle-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="device-item">
            <div className="thumb">
              <img
                src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/desktop.png"
                alt=""
              />
            </div>
            <div className="content">
              <h4>
                shop the <strong>hottest</strong> products
              </h4>
              <a href="">
                Shop now <i className="fa-solid fa-circle-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="device-item">
            <div className="thumb">
              <img
                src="https://electro.madrasthemes.com/wp-content/uploads/2018/10/360-camers.png"
                alt=""
              />
            </div>
            <div className="content">
              <h4>
                shop the <strong>hottest</strong> products
              </h4>
              <a href="">
                Shop now <i className="fa-solid fa-circle-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourDevice;
