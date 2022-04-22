import "./Shop.scss";
import { Breadcrumb } from "antd";
import ListMenu from "../MyAccount/ListMenu/ListMenu.js";
import CategoryArea from "./CategoryArea/CategoryArea";
import ShopArea from "./ShopArea/ShopArea";
import { useSelector } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";
import { Modal } from "antd";

const Shop = () => {
  const loading = useSelector((state) => state.userReducer.loading);

  return (
    <div className="shop">
      <ListMenu />
      <section className="main-content">
        <div className="container">
          <Breadcrumb style={{ padding: "15px 0" }} separator=">">
            <Breadcrumb.Item style={{ color: "#000", cursor: "pointer" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">Shop</Breadcrumb.Item>
          </Breadcrumb>

          <div className="wrapper">
            <CategoryArea />
            <ShopArea />
          </div>
        </div>
      </section>
      <Modal width={100} centered footer={null} visible={loading}>
        <SyncLoader color={"#333333"} loading={loading} size={10} />
      </Modal>
    </div>
  );
};

export default Shop;
