import "./nav.scss";

const Nav = () => {
  return (
    <section className="nav">
      <div className="container">
        <div className="wrapper">
          <div className="all-department">
            <h4>
              <i
                style={{ marginRight: "10px" }}
                className="fa-solid fa-list"
              ></i>
              All Departments
            </h4>
          </div>
          <div className="main-nav">
            <ul className="navs-left">
              <li>
                <a href="">
                  All pages <i className="fa-solid fa-angle-down"></i>
                </a>
              </li>
              <li>
                <a href="">Featured Brands</a>
              </li>
              <li>
                <a href="">Trending Styles</a>
              </li>
              <li>
                <a href="">Gift Cards</a>
              </li>
            </ul>
            <p>Free Shipping on Orders $50+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
