import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";


export default function UpdateHealth(){

    const { id } = useParams();
    const petId =id
 
    const [report,setReport] = useState({});
    const [currentHealthStatus,setStatus] = useState("")
    const [vaccinations,setvaccinations] = useState([{name:"",dateGiven:"",expirationDate:""}])
    
   

    useEffect(() => {
      async function fetchData() {
        try {
          const res = await axios.get(`http://localhost:5000/api/vet/getreport/${id}`);
          const reportdata = res.data.petReport;
          setReport(reportdata);
          setStatus(reportdata.currentHealthStatus);
          setvaccinations(reportdata.vaccinations);
        } catch (err) {
          console.error(err);
        }
      }
  
      fetchData();
    }, []);

    async function UpdateData(e){

        console.log("hi")

        e.preventDefault();

        try{

        const newpet = {
            petId,
            currentHealthStatus, 
            vaccinations
        }


       await axios.put(`http://localhost:5000/api/vet/reportupdate/${id}`,newpet)
        alert("report Updated !!")

       }catch (err){
        console.error(err);
      }

    }

    const handleVaccinationChange = (index, event) => {
        const newVaccinations = [...vaccinations];
        newVaccinations[index][event.target.name] = event.target.value;
        const vaccination =  vaccinations[index];
        vaccination[event.target.name] = event.target.value;
        console.log('new value',vaccination);
        console.log( newVaccinations[index][event.target.name])
        console.log( newVaccinations[index])
        console.log(event)
        setvaccinations(newVaccinations);
        
      };
    
      const handleAddVaccination = () => {
        setvaccinations([...vaccinations, { name: '', dateGiven: '', expirationDate: '' }]);
        
      };

      const handleRemoveVaccination = (index) => {
        const newVaccinations = [...vaccinations];
        newVaccinations.splice(index, 1);
        setvaccinations(newVaccinations);
      };

      const changeDate= (date)=>{

        if (new Date(date).toString() !== 'Invalid Date') {
          var newDate =(new Date(date).toISOString().split('T')[0]);
          return newDate;
        }
        return null;
      }

    return(
        <>
            <div className="absolute top-62 left-386 w-[900px] h-936 bg-[#2F333624] rounded-3xl shadow-2xl ml-[29%] mt-[5%]">
      <h1 class="text-center text-3xl mt-5 font-bold">Vaccination Profile Updation</h1>
      <form className="flex flex-col gap-4 p-8" onSubmit={UpdateData}>        
      <div className="flex flex-col">
          <label htmlFor="petId"
            className=" mb-2 w-[89px] h-[20px] left-[526px] top-[268px] font- not-italic font-[700] text-[16px] leading-[29px] text-black "
          >
            Pet ID :
          </label>
          <input type="text" id="petId" name="petId" value={report.petId} readOnly
          className="py-2 px-3 w-[819px] h-[45px] left-[671px] top-[265px]  mt-3 rounded-lg shadow-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your pet's ID"/>

          <label htmlFor="pet-id"
            className="mt-2 mb-2 w-[89px] h-[20px] left-[526px] top-[268px] font- not-italic font-[700] text-[16px] leading-[29px] text-black "
          >
            Status:
          </label>

          <select name="currentHealthStatus" value={currentHealthStatus} onChange={(event) => setStatus(event.target.value)} id="currentHealthStatus" class="py-2 px-3 w-[819px] h-[45px] left-[671px] top-[265px]  mt-3 rounded-lg shadow-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option selected>Choose a health Status</option>
         <option value="Normal">Normal</option>
        <option value="Critical">Critical</option>
        <option value="Sheduled">Sheduled</option>
 
        </select>
        </div>
        {vaccinations && vaccinations.map((vaccination, index) => (
  <div key={index}>
    <label htmlFor={`name-${index}`}>Vaccine name:</label>
    <input
      type="text"
      id={`name-${index}`}
      name={`name-${index}`}
      defaultValue={vaccination.name}
      onChange={(event) => handleVaccinationChange(index, event)}
    />

    <label htmlFor={`dateGiven-${index}`}>Date Given:</label>
    <input
      type="date"
      id={`dateGiven-${index}`}
      name={`dateGiven-${index}`}
      defaultValue={changeDate(vaccination.dateGiven)}
      onChange={(event) => handleVaccinationChange(index, event)}
    />

    <label htmlFor={`expirationDate-${index}`}>Expiration Date:</label>
    <input
      type="date"
      id={`expirationDate-${index}`}
      name={`expirationDate-${index}`}
      defaultValue={changeDate(vaccination.expirationDate)}
      onChange={(event) => handleVaccinationChange(index, event)}
    />

    <button type="button" onClick={() => handleRemoveVaccination(index)}>Remove Vaccination</button>
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
        
            </>
        
            )

}

