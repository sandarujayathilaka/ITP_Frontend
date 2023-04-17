import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import name from './logo512.png'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'jspdf-autotable';


const Report = () => {

  const { id } = useParams();
  const [vaccinations, setvaccinations] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`http://localhost:5000/api/health/getreport/${id}`);
        const reportdata = res.data.petReport;
        setvaccinations(reportdata.vaccinations);
        console.log(reportdata.vaccinations)
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF('landscape', 'px', 'a4', false);
    doc.addImage(name, 'JPG', 45, 10, 50, 50);
    doc.setFont('Helvertica', 'bold');
   

    doc.autoTable({
      startY: 70,
      head: [['Vac Name', 'Date Given', 'Expiration Date']],
      body: vaccinations.map(vaccination => [
        vaccination.name,
        vaccination.dateGiven.toString(),
        vaccination.expirationDate.toString()
      ]),

      theme:'grid'


    });
    
    doc.save('VacReport.pdf');
  };


  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={generatePDF}>Download pdf</button>
    </div>
  );
};

export default Report;
