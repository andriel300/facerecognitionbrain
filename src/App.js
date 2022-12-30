import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "./components/Particles/Particles";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      IMAGE_URL: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    const USER_ID = "andriel300";
    // Your PAT (Personal Access Token) can be found in the portal under Authentification
    const PAT = "9452072f14e143e18351e4681454cb29";
    const APP_ID = "my-first-application";
    // Change these to whatever model and image URL you want to use
    const MODEL_ID = "face-detection";
    // This is optional.You can specify a model version or the empty string for the default
    const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105";

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: this.state.input,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id

    fetch(
      "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <Particles />
        <FaceRecognition IMAGE_URL={this.state.IMAGE_URL} />
      </div>
    );
  }
}

export default App;
