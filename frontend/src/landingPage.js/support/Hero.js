import React from "react";

export const Hero = () => {
  return (
    <div className="container" style={{ backgroundColor: "#367ED1" , borderRadius:"0.1rem" }}>
      <div className="row pt-4">
        <div className="col-6 text-center">
          <p style={{ color: "white", fontWeight: "400" }} className="fs-5">
            Support Portal
          </p>
        </div>
        <div className="col-6 text-center">
          <p>
            <a href="" style={{ color: "white" }}>
              Track Tickets
            </a>
          </p>
        </div>
      </div>
      <div className="row mt-4 ">
        <div className="col-6 text-start" style={{ paddingLeft: "13.8rem" }}>
          <p style={{ color: "white", fontWeight: "400" }} className="fs-5 ">
            Search for an answer or browse help topics to create a ticket
          </p>
          <textarea
            cols={45}
            rows={3}
            style={{ borderRadius: "10px", padding: "1rem" }}
            placeholder="Eg: How do i activate my F&O , why is my order getting rejected"
            type="text"
          />
        </div>
        <div className="col-6 text-start" style={{ paddingLeft: "9rem" }}>
          <p style={{ color: "white", fontWeight: "400" }} className="fs-5 ">
            Featured
          </p>
          <p style={{ color: "white", fontSize: "0.8rem" }}>
            1.
            <a href="" style={{ color: "white" }}>
              Current Takeover and Delisting- January 2024{" "}
            </a>
          </p>
          <p style={{ color: "white", fontSize: "0.8rem" }}>
            2.
            <a href="" style={{ color: "white" }}>
              Latest Intraday leverages- MIS and CO
            </a>
          </p>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-2"></div>
        <div className="col-10" style={{ paddingLeft: "2rem" }}>
          <div style={{ display: "flex" }}>
            <a style={{ color: "white", fontSize: "0.75rem" }} href="">
              Track account opening
            </a>
            <a
              style={{
                color: "white",
                fontSize: "0.75rem",
                paddingLeft: "1.3rem",
              }}
              href=""
            >
              Track segment Activation
            </a>
            <a
              style={{
                color: "white",
                fontSize: "0.75rem",
                paddingLeft: "1.3rem",
              }}
              href=""
            >
              Intraday
            </a>
          </div>
          <div style={{ display: "flex" }}>
            <a
              href=""
              style={{
                color: "white",
                fontSize: "0.75rem",
                paddingLeft: "0.1rem",
              }}
            >
              margins
            </a>
            <a
              href=""
              style={{
                color: "white",
                fontSize: "0.75rem",
                paddingLeft: "1.3rem",
              }}
            >
              Kite user manual
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
