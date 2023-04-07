import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function UpdateVac() {

    const [name,setName]=useState("")
    const [loading, setLoading] = useState(true);
    const [currentHealthStatus, setCurrentHealthStatus] = useState('');
    const [vaccinations, setVaccinations] = useState([]);
    const param = useParams();
    const pid =param.id;
    console.log(pid)
    const index = param.index;
    console.log(index)
    const healthState =param.state;
    console.log(healthState)

   useEffect(() => {
    console.log("hidfd")
        async function fetchData() {
          try {
            const res = await axios.get(`http://localhost:5000/api/vet/getreport/${pid}`);
            const reportdata = res.data.petReport;
            console.log(reportdata.vaccinations)
            setVaccinations(reportdata.vaccinations);
            setLoading(false);
            console.log(vaccinations[index].dateGiven)
          } catch (err) {
            console.error(err);
          }
        }
    
        fetchData();

        if (vaccinations.length > 0) {
            console.log(vaccinations[index].name);
          }
      }, []);

 
   const handleSubmit = async (event) => {

            event.preventDefault();

            console.log(vaccinations)
            console.log(currentHealthStatus)

            
            const newreport = { 
                pid,
                index, 
                currentHealthStatus, 
                vaccinations };

            try {
               
              await axios.put(`http://localhost:5000/api/vet/reportupdate/${pid}`, newreport);
              alert('Report saved successfully');
            } catch (error) {
              console.log(error);
              alert('Failed to save report');
              
            }
          };

      

    return (
      <>
      <div className="absolute top-62 left-386 w-[900px] h-936 bg-[#2F333624] rounded-3xl shadow-2xl ml-[29%] mt-[5%]">
      <h1 class="text-center text-3xl mt-5 font-bold">Vaccination Profile Registration</h1>
      <form className="flex flex-col gap-4 p-8" onSubmit={handleSubmit}>        
      <div className="flex flex-col">
          <label htmlFor="petId"
            className=" mb-2 w-[89px] h-[20px] left-[526px] top-[268px] font- not-italic font-[700] text-[16px] leading-[29px] text-black "
          >
            Pet ID :
          </label>
          <input type="text" id="petId" name="petId" value={pid}
          className="py-2 px-3 w-[819px] h-[45px] left-[671px] top-[265px]  mt-3 rounded-lg shadow-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your pet's ID"/>

          <label htmlFor="pet-id"
            className="mt-2 mb-2 w-[89px] h-[20px] left-[526px] top-[268px] font- not-italic font-[700] text-[16px] leading-[29px] text-black "
          >
            Status:
          </label>

          <select name="currentHealthStatus"  value={currentHealthStatus} onChange={(event) => setCurrentHealthStatus(event.target.value)} id="currentHealthStatus" class="py-2 px-3 w-[819px] h-[45px] left-[671px] top-[265px]  mt-3 rounded-lg shadow-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option selected>{healthState}</option>
         <option value="Normal">Normal</option>
        <option value="Critical">Critical</option>
        <option value="Scheduled">Scheduled</option>
 
        </select>
        </div>
        

        {loading ? (
  <button>
    Loading...
  </button>
) : (
  <>
    <label for="name">Vaccine name:</label>
    <input
  type="text"
  value={vaccinations[index].name}
  onChange={(e) => {
    const updatedVaccinations = [...vaccinations]; // make a copy of the state array
    updatedVaccinations[index].name = e.target.value; // set the updated value for the corresponding element
    setVaccinations(updatedVaccinations); // set the updated array back to state
  }}/>

      
    <label>Date Given:</label>
    <input
  type="date"
  value={vaccinations[index].dateGiven}
  onChange={(e) => {
    const updatedVaccinations = [...vaccinations]; // make a copy of the state array
    updatedVaccinations[index].dateGiven = e.target.value; // set the updated value for the corresponding element
    setVaccinations(updatedVaccinations); // set the updated array back to state
  }}
/>


    <label>Expiration Date:</label>
    <input
  type="date"
  value={vaccinations[index].expirationDate}
  onChange={(e) => {
    const updatedVaccinations = [...vaccinations]; // make a copy of the state array
    updatedVaccinations[index].expirationDate = e.target.value; // set the updated value for the corresponding element
    setVaccinations(updatedVaccinations); // set the updated array back to state
  }}
/>

  </>
)}

<button type="submit"
            className="bg-blue-600 rounded-[10px] mt-5 h-10 w-[500px] m-auto hover:bg-blue-700 text-white font-bold py-2 px-4 shadow focus:outline-none focus:shadow-outline"
          
          >
         Update Report
          </button>
        
        </form>
    </div>
    </>

    )}