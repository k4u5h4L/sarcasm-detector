import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(0);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const postData = async () => {
      axios
        .post("http://localhost:8000/api/", {
          headline: query,
        })
        .then((response) => {
          console.log(response.data);
          setResult(response.data.message);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    postData();
  }, [submit]);

  const handleChange = (e) => {
    console.log(`query: ${query}`);
    setQuery(e.target.value);
  };

  return (
    <div
      className="container-contact100"
      style={{ backgroundImage: "url('images/bg-01.jpg')" }}
    >
      <div className="wrap-contact100">
        <form className="contact100-form validate-form">
          <span className="contact100-form-title">
            Input a headline to check if it's sarcastic or not!
          </span>

          <div
            className="wrap-input100 validate-input"
            data-validate="Message is required"
          >
            <span className="label-input100">News Headline</span>
            <textarea
              className="input100"
              name="headline"
              placeholder="Enter Headline Here..."
              value={query}
              onChange={(event) => handleChange(event)}
            ></textarea>
          </div>

          <div className="wrap-input100">
            <span className="label-input100">Result</span>
            <input
              className="input100"
              type="text"
              name="web"
              placeholder="Result"
              value={
                result
                  ? "I think this is a sarcastic headline"
                  : "I don't think this is a sarcastic headline"
              }
            />
          </div>

          <div className="container-contact100-form-btn">
            <div className="wrap-contact100-form-btn">
              <div className="contact100-form-bgbtn"></div>
              <button
                type="button"
                className="contact100-form-btn"
                onClick={() => setSubmit(!submit)}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      <span className="contact100-more">
        Made using React, Django, Tensorflow-Keras
      </span>
    </div>
  );
};

export default App;
