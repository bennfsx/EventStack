import React, { useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "qrcode.react";
import Header from "../partials/Header";
import axios from 'axios';

const QRCodePage = () => {
  const { eventId, eventName } = useParams();
  const decodedEventName = decodeURIComponent(eventName || "");
  const [qrValue, setQrValue] = useState(`Event ID: ${eventId}`);
  const [hovered, setHovered] = useState(false);

  // Function to generate a new QR code value
  const generateNewQRCode = () => {
    const newQRValue = `Event ID: ${eventId} - ${Date.now()}`;
	axios.post('https://asia-southeast1-qrfyp2024.cloudfunctions.net/fyp-api/createcode', {
		codeName: eventName,
		codeDesc: 'Entry QR for ' + eventName,
		codeType: 1
	})
	.then(function (response) {
		if (response.status == 200){
			setQrValue(response.data);
		}
	})
	.catch(function (error) {
		console.log(error);
	});    
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-8">
        <div className="relative mt-8 px-4 py-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-semibold text-center mb-4">
            Event Admission QR Code
          </h1>
          {eventId && decodedEventName ? (
            <>
              <h2 className="text-2xl font-medium text-center mb-2">
                {decodedEventName}
              </h2>
              <div
                className="flex justify-center relative"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={generateNewQRCode}
                style={{ cursor: "pointer" }}
              >
                <QRCode
                  value={qrValue}
                  size={512}
                  level="H"
                  includeMargin={true}
                />
                {hovered && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25">
                    <span className="text-white text-xl">
                      Generate New QR Code
                    </span>
                  </div>
                )}
              </div>
            </>
          ) : (
            <p className="text-red-500">Event Name or Event ID not available</p>
          )}
        </div>
        <p style={{ marginTop: "20px", color: "#666" }}>
          Scan the above QR code to join the event
        </p>
      </div>
    </>
  );
};

export default QRCodePage;
