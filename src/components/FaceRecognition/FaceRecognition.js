import React from "react";

const FaceRecognition = ({ IMAGE_URL }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img alt="" src={IMAGE_URL} width="500px" height="auto" />
      </div>
    </div>
  );
};

export default FaceRecognition;
