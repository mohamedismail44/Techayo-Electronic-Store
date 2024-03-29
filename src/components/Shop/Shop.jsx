import React, { useState } from "react";

export default function Shop({
  ShopPage,
  SetShopPage,
  CatigoryProduct,
  AddtoCart,
  AllProduct,
}) {
  // show details product
  const [DetailsBox, setDetailsBox] = useState([]);
  const [DetailsProduct, setDetailsProduct] = useState(false);

  // show details product function
  const ShowDetails = (product) => {
    setDetailsBox(product);
    setDetailsProduct(true);
  };
  // close details product
  const CloseDetails = () => {
    setDetailsProduct(false);
  };

  return (
    <>
      {DetailsProduct ? (
        <div className="product-details">
          <i onClick={CloseDetails} className="fa-solid fa-square-xmark"></i>
          <div className="details-container">
            <div className="box">
              <div className="img-box">
                <img src={DetailsBox.images[0]} alt="" />
              </div>
              <div className="details">
                <p className="p1">{DetailsBox.category}</p>
                <p className="p2">{DetailsBox.title}</p>
                <p className="p3">{DetailsBox.description}</p>
                <p className="p4">{DetailsBox.price}$</p>
                <button onClick={() => AddtoCart(DetailsBox)} href="">
                  add to card
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <section className="shop">
        <div className="name-sec">
          <h1># Shop</h1>
        </div>
        <div className="source">
          <h5>Home.shop</h5>
        </div>
        <img
          className="w-100 my-2 mob-img "
          src="images/shop_top.webp"
          alt=""
        />

        <div className="container-m">
          <div className="left-box">
            <div className="box">
              <h3>all catigories</h3>
              <ul>
                <li onClick={() => SetShopPage(AllProduct)}># all</li>
                <li onClick={() => CatigoryProduct("home-decoration")}>
                  # home-decoration
                </li>
                <li onClick={() => CatigoryProduct("fragrances")}>
                  # fragrances
                </li>
                <li onClick={() => CatigoryProduct("smartphones")}>
                  # smartphones
                </li>
                <li onClick={() => CatigoryProduct("laptops")}># laptops</li>

                <li onClick={() => CatigoryProduct("skincare")}># skincare</li>
                <li onClick={() => CatigoryProduct("groceries")}>
                  # groceries
                </li>

                <li onClick={() => CatigoryProduct("smartphones")}>
                  # smartphones
                </li>
              </ul>
            </div>
            <div className="img-box">
              <img src="images/shop_left.avif" alt="" />
            </div>
          </div>

          <div className="right-box">
            <div className="img-box">
              <img className="mob-img2" src="images/shop_top.webp" alt="" />
            </div>
            <h2>shop product</h2>
            <div className="product-box">
              {ShopPage.map((ele, index) => (
                <div key={index} className="box">
                  <div className="img-box">
                    <div className="images">
                      <img src={ele.images[0]} alt="" />
                    </div>

                    <div className="icons">
                      <i className="fa-solid fa-heart"></i>
                      <i
                        onClick={() => ShowDetails(ele)}
                        className="fa-solid fa-eye"
                      ></i>
                    </div>
                  </div>
                  <p className="p1">{ele.title}</p>
                  <p className="p2">{ele.price}$</p>
                  <button onClick={() => AddtoCart(ele)} href="">
                    add to card
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
