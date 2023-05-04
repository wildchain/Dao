import "./formPart1.css";
import { useEffect, useState } from "react";
import upload from "../../../images/upload.png";

const FormPart1 = ({ handleNext }) => {
  const [inputs, setInputs] = useState([
    <input className="input" placeholder="https://" />,
  ]);

  const handleAddInput = () => {
    setInputs((prev) => [
      ...prev,
      <input className="input" placeholder="https://" />,
    ]);
  };

  return (
    <body className="part-1">
      <div className="form-input">
        <p style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>
          Project name
        </p>
        <p style={{ opacity: 0.9, marginBottom: 10 }}>
          Maximum of 128 characters
        </p>
        <input className="input" placeholder="Type your Project name ..." />
      </div>
      <div className="form-input">
        <p style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>
          Wild Registry Subdomain
        </p>
        <p style={{ opacity: 0.9, marginBottom: 14 }}>
          This will be your project's unique Wild subdomain in our project
          registry, created automatically for you.
        </p>
        <input className="input" placeholder="Wildchain" />
      </div>
      <div className="form-input" style={{ marginBottom: "40px" }}>
        <p style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>
          Logo (optional)
        </p>
        <p style={{ opacity: 0.9, marginBottom: 14 }}>
          JPG, PNG, GIF, or SVG of no more than 3MB. We recommend 1024x1024px.
        </p>
        <div class="image-upload">
          <label for="file-input">
            <div
              style={{
                background: "white",
                height: "60px",
                width: "60px",
                textAlign: "center",
                borderRadius: "6px",
                borderStyle: "dotted",
                opacity: 0.5,
              }}
            >
              <img
                src={upload}
                width="20"
                height="20"
                style={{ marginTop: "20px" }}
              />
            </div>
          </label>
          <input
            className="input"
            type="file"
            id="file-input"
            style={{ paddingLeft: 0 }}
          />
        </div>
      </div>
      <div className="form-input">
        <p style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>
          Description
        </p>
        <p style={{ opacity: 0.9, marginBottom: 10, width: "65%" }}>
          Describe your Project's purpose in a few sentences. This is listed on
          the Explore page so new contributors can find you.
        </p>
        <textarea className="input-big" placeholder="Type your Summary..." />
      </div>
      <div className="form-input">
        <p style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>
          Links (optional)
        </p>
        <p style={{ opacity: 0.9, marginBottom: 10 }}>
          Links to your website, social media profiles, Discord, or other places
          your community gathers.
        </p>
        {inputs.map((item) => item)}
      </div>
      <button onClick={handleAddInput} className="butin">
        {" "}
        Add Link{" "}
      </button>
      <button onClick={handleNext} className="butnext">
        Next
      </button>
    </body>
  );
};

export default FormPart1;
