import axios from 'axios'
import React, { useState } from 'react'

function AddHealth() {

    const [petId, setPetId] = useState('');
    const [currentHealthStatus, setCurrentHealthStatus] = useState('');
    const [vaccinations, setVaccinations] = useState([]);
   
        const handleSubmit = async (event) => {
            event.preventDefault();
            const newreport = { 
                petId, 
                currentHealthStatus, 
                vaccinations };

            try {
              await axios.post("http://localhost:5000/api/vet/addreport", newreport);
              alert('Report saved successfully');
            } catch (error) {
              console.log(error);
              alert('Failed to save report');
            }
          };

          const handleVaccinationChange = (index, event) => {
            const newVaccinations = [...vaccinations];
            newVaccinations[index][event.target.name] = event.target.value;
            setVaccinations(newVaccinations);
          };
        
          const handleAddVaccination = () => {
            setVaccinations([...vaccinations, { name: '', dateGiven: '', expirationDate: '' }]);
          };

          const handleRemoveVaccination = (index) => {
            const newVaccinations = [...vaccinations];
            newVaccinations.splice(index, 1);
            setVaccinations(newVaccinations);
          };

    return (
      <>
      <div className='pt-16'>
      <div className="absolute top-62 left-386 w-[900px] h-936 bg-[#2F333624] rounded-3xl shadow-2xl ml-[29%] mt-[5%] ">
      <h1 class="text-center text-3xl mt-5 font-bold">Vaccination Profile Registration</h1>
      <form className="flex flex-col gap-4 p-8" onSubmit={handleSubmit}>        
      <div className="flex flex-col">
          <label htmlFor="petId"
            className=" mb-2 w-[89px] h-[20px] left-[526px] top-[268px] font- not-italic font-[700] text-[16px] leading-[29px] text-black "
          >
            Pet ID :
          </label>
          <input type="text" id="petId" name="petId" value={petId} onChange={(event) => setPetId(event.target.value)}
          className="py-2 px-3 w-[819px] h-[45px] left-[671px] top-[265px]  mt-3 rounded-lg shadow-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your pet's ID"/>

          <label htmlFor="pet-id"
            className="mt-2 mb-2 w-[89px] h-[20px] left-[526px] top-[268px] font- not-italic font-[700] text-[16px] leading-[29px] text-black "
          >
            Status:
          </label>

          <select name="currentHealthStatus" value={currentHealthStatus} onChange={(event) => setCurrentHealthStatus(event.target.value)} id="currentHealthStatus" class="py-2 px-3 w-[819px] h-[45px] left-[671px] top-[265px]  mt-3 rounded-lg shadow-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option selected>Choose a health Status</option>
         <option value="Normal">Normal</option>
        <option value="Critical">Critical</option>
        <option value="Scheduled">Scheduled</option>
 
        </select>
        </div>
   
         {vaccinations.map((vaccination, index) => (
            <div key={index}>

		<label htmlFor="name"
            className=" mb-2 w-[89px] h-[20px] left-[526px] top-[268px] font- not-italic font-[700] text-[16px] leading-[29px] text-black "
          >
            Vaccine :
          </label>
          <input type="text" name="name" value={vaccination.name} onChange={(event) => handleVaccinationChange(index, event)} className="py-2 px-3 w-[819px] h-[45px] left-[671px] top-[265px]  mt-3 rounded-lg shadow-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your pet's ID"/>

	
		<label htmlFor="dateGiven" 
            className=" mb-2 w-[89px] h-[20px] left-[526px] top-[268px] font- not-italic font-[700] text-[16px] leading-[29px] text-black "
          >
            Date Given :
          </label>
          <input type="date" name="dateGiven" value={vaccination.dateGiven} onChange={(event) => handleVaccinationChange(index, event)}
          className="py-2 px-3 w-[819px] h-[45px] left-[671px] top-[265px]  mt-3 rounded-lg shadow-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your pet's ID"/>

	
	<label htmlFor="expirationDate" 
            className=" mb-2 w-[89px] h-[20px] left-[526px] top-[268px] font- not-italic font-[700] text-[16px] leading-[29px] text-black "
          >
           Expiration Date:
          </label>
          <input type="date" name="expirationDate" value={vaccination.expirationDate} onChange={(event) => handleVaccinationChange(index, event)} 
          className="py-2 px-3 w-[819px] h-[45px] left-[671px] top-[265px]  mt-3 rounded-lg shadow-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your pet's ID"/>
      
            
      <button onClick={() => handleRemoveVaccination(index)}
            className="bg-red-600 rounded-[10px] mt-5 h-10 w-[90px] hover:bg-red-800 text-white font-bold py-2 px-4 shadow focus:outline-none focus:shadow-outline"
          
          >
          Remove
          </button>

            </div>
          ))}
          
                 
      <button type="button" onClick={handleAddVaccination}
            className="bg-green-600 rounded-[10px] mt-5 h-10 w-[500px] m-auto hover:bg-green-700 text-white font-bold py-2 px-4 shadow focus:outline-none focus:shadow-outline"
          
          >
         ADD VACCINATION
          </button>
          
          <button type="submit"
            className="bg-blue-600 rounded-[10px] mt-5 h-10 w-[500px] m-auto hover:bg-blue-700 text-white font-bold py-2 px-4 shadow focus:outline-none focus:shadow-outline"
          
          >
         Save Report
          </button>
        
        </form>
    </div>
    </div>
    </>
      );
          }
        

export default AddHealth;