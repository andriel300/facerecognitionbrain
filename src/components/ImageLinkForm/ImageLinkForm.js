import React from "react";
import "./ImageLinkForm.css";

function ImageLinkForm({ onInputChange, onPictureSubmit }) {
  return (
    <div>
      <div>
        <p className="mt2 mb3 f4 fw4 ttu tracked near-white">
          This Magic Brain will detect faces in your pictures. give it a try!
        </p>
        <div className="center">
          <div className="form center pa4 br3 shadow-5">
            <input
              className="f4 pa2 w-70 center"
              type="text"
              onChange={onInputChange}
            />
            <button
              type="submit"
              className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
              onClick={onPictureSubmit}
            >
              Detect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
