import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Test() {
  const [qrCode, setQrCode] = useState('');
  const param = useParams();
  const petId = param.id

  useEffect(() => {
    // Fetch the QR code data from the backend
    console.log(petId)
    axios.get(`http://localhost:5000/api/vet/pets/qrcode/${petId}`)
      .then((res) => {
        setQrCode(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [petId]);

  const handlePrint = () => {
    window.print();
  }
  

  return (
    <div>
      {/* Display the QR code as an image */}
      <img src={`data:image/png;base64,${qrCode}`} alt="QR code" />
      <button onClick={handlePrint}>Print</button>
    </div>
  );

}

export default Test;
