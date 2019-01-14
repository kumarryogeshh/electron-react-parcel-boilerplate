import React from "react";

const Custom = () => {
  return (
    <div className="ui container">
      <h3>
        React{" "}
        <span>
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-32.png"
            width="32"
          />
        </span>
        + Parcel{" "}
        <span>
          <img src="https://parceljs.org/assets/parcel@2x.png" width="32" />{" "}
        </span>
        + Electron{" "}
        <span>
          <img src="https://electronjs.org/images/favicon.ico" width="32" />
        </span>{" "}
        = Awesomeness ! 🎉
      </h3>
    </div>
  );
};

export default Custom;
