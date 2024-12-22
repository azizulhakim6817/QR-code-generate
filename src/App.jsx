import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import logo from "./assets/images/logo.png"; // আপনার লোগোর পাথ এখানে

const App = () => {
  const [input, setInput] = useState(""); // ইনপুট ভ্যালু
  const [urlName, setUrlName] = useState(""); // URL নাম স্টেট

  // Function to download QR code as an image
  const downloadImage = () => {
    const canvas = document.querySelector("canvas");
    const imageDataURI = canvas.toDataURL("image/png");
    const el = document.createElement("a");
    el.href = imageDataURI;
    el.download = "code.png";
    el.click();
  };

  // URL name extract function
  const getUrlName = (url) => {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.hostname.replace("www.", "");
    } catch (e) {
      return "";
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    setUrlName(getUrlName(inputValue)); // URL থেকে নাম বের করা
  };

  return (
    <>
      {/* Navbar */}
      <div className="sticky-top bg-light shadow">
        <div className="container text-center p-1">
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
              <h3 className="text-center font-weight-bolder fw-bold">
                Generate Your QR Code
              </h3>
              <hr />
              <input
                type="url"
                value={input}
                onChange={handleInputChange}
                className="form-control mb-3"
                placeholder="Enter a URL to generate QR code"
              />

              {/* URL Name Display */}
              {urlName && (
                <h1 className="text-center text-primary fw-bold ">
                  {urlName.toLowerCase()} {/* Show the URL name as a header */}
                </h1>
              )}
              <hr />

              {/* Display QR code when input is available */}
              {input && (
                <>
                  <QRCodeCanvas
                    value={input}
                    size={250} // QR কোড সাইজ
                    level="M"
                    className="mx-auto d-block mb-4" // Center align QR code
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
        <p className="mb-0">
          Created By Azizul Hakim with ❤️ using React & Bootstrap
        </p>
      </div>
    </>
  );
};

export default App;
