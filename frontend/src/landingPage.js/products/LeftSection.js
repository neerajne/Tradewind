import React from "react";

export const LeftSection = ({
  imageURL,
  ProductName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-6 p-3 text-center">
          <img src={imageURL} alt="" style={{ width: "85%" }} />
        </div>
        <div className="col-6 pt-5 text-start " style={{ paddingLeft: "80px" }}>
          <h1 className="fs-2 text-start">{ProductName}</h1>
          <p className="text-start">{productDescription}</p>
          <div className="mb-4">
            <a
              style={{ paddingRight: "40px", textDecoration: "none" }}
              href={tryDemo}
            >
              Try demo &rarr;
            </a>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn more &rarr;
            </a>
          </div>
          <div>
            <a href={googlePlay}>
              <img src="/images/googlePlayBadge.svg" alt="googleplaybadge" />
            </a>
            <a href={appStore} style={{ marginLeft: "10px" }}>
              <img src="/images/appstoreBadge.svg" alt="appstoreBadge" />
            </a>
          </div>
        </div>
      </div>
        </div>
  );
};
