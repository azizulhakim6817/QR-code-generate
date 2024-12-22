import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import logo from "./assets/images/logo.png";

const App = () => {
  const [input, setInput] = useState("https://www.google.com");

  // Function to download QR code as an image
  const downloadImage = () => {
    const canvas = document.querySelector("canvas");
    const imageDataURI = canvas.toDataURL("image/png");
    const el = document.createElement("a");
    el.href = imageDataURI;
    el.download = "code.png";
    el.click();
  };

  return (
    <>
      {/* Navbar */}
      <div className="sticky-top bg-light shadow ">
        <div className="container text-center ">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid my-1"
            style={{ maxWidth: "40px", height: "auto" }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-12">
            <div className="card shadow-lg p-4 rounded">
              <h4 className="text-center font-weight-bolder ">
                Generate Your QR Code
              </h4>
              <hr />
              <input
                type="url"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="form-control mb-3"
                placeholder="Enter a URL to generate QR code"
              />

              {/* Display QR code when input is available */}
              {input && (
                <>
                  <QRCodeCanvas
                    value={input}
                    size={250} // Adjust size of the QR code
                    level="M"
                    className="mx-auto d-block mb-3" // Center align QR code
                  />
                  <button
                    className="btn btn-dark w-100"
                    onClick={downloadImage}
                  >
                    Download QR Code
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-dark text-white py-3 text-center">
        <p className="mb-0">Created with ❤️ using React & Bootstrap</p>
      </div>
    </>
  );
};

export default App;
