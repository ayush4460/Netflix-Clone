import React from "react";
import "./PlanScreen.css";

const PlanScreen = () => {
  return (
    <div className="planScreen">
        <p>Renewal Date: 01/01/2024</p>
      <div className="planScreen__plan">
        <div className="planScreen__info">
          <div>
            <h5>Netflix Premium</h5>
            <h6>4K + HDR</h6>
          </div>
          <button className="current__Package">Current Package</button>
        </div>
        <br />
        <div className="planScreen__info">
          <div>
            <h5>Netflix Standard</h5>
            <h6>1080p</h6>
          </div>
          <button>Subscribe</button>
        </div>
        <br />
        <div className="planScreen__info">
          <div>
            <h5> Netflix Basic</h5>
            <h6>720p</h6>
          </div>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default PlanScreen;
