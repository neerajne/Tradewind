import React from "react";

export const RightSection = ({
  imageURL,
  ProductName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-5 ">
      <div className="row mt-5">
        <div className="col-6 pt-5 text-start " style={{ paddingLeft: "60px" }}>
          <h1>{ProductName}</h1>
          <p>{productDescription}</p>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn more &rarr;
          </a>
        </div>
        <div className="col-6 " style={{ paddingLeft: "60px" }}>
          <img src={imageURL} alt="" style={{ width: "95%" }} />
        </div>
      </div>
    </div>
  );
};
