import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../actions/apiActions";
import "./CategoryArea.scss";

const CategoryArea = () => {
  const dispatch = useDispatch();
  const cate = useSelector((state) => state.callApiReducer.category);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const toggleSub = (e) => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div className="category-area">
      <div className="category-box">
        <h4>Browse Categories</h4>
        <ul className="list-cates">
          {cate &&
            cate?.map((val, index) => (
              <li key={index} className="cate-item">
                {val.sub_categories ? (
                  <>
                    <i
                      onClick={toggleSub}
                      className={
                        open
                          ? "fa-solid fa-angle-right showmore has-dropdown"
                          : "fa-solid fa-angle-right showmore"
                      }
                    ></i>
                    <a href="">{val.name}</a>
                  </>
                ) : (
                  <>
                    <a href="">{val.name}</a>
                  </>
                )}
                <ul className="subcate">
                  {val.sub_categories &&
                    val.sub_categories.map((category, idx) => (
                      <li>
                        <a key={idx} href="/shop">
                          {category.sub_name}
                        </a>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryArea;
