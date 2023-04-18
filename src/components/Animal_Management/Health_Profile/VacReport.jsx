// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Outlet, useParams } from "react-router-dom";


// export default function UpdateHealth(){

//     const { id } = useParams();
//     const petId =id
 
//     const [report,setReport] = useState({});
//     const [currentHealthStatus,setStatus] = useState("")
//     const [vaccinations,setvaccinations] = useState([{name:"",dateGiven:"",expirationDate:""}])
    
   

//     useEffect(() => {
//       async function fetchData() {
//         try {
//           const res = await axios.get(`http://localhost:5000/api/health/getreport/${id}`);
//           const reportdata = res.data.petReport;
//           setReport(reportdata);
//           setStatus(reportdata.currentHealthStatus);
//           setvaccinations(reportdata.vaccinations);
//         } catch (err) {
//           console.error(err);
//         }
//       }
  
//       fetchData();
//     }, []);


//     const handleVaccinationChange = (index, event) => {
//         const newVaccinations = [...vaccinations];
//         newVaccinations[index][event.target.name] = event.target.value;
//         setvaccinations(newVaccinations);
        
//       };
    
//       const handleAddVaccination = () => {
//         setvaccinations([...vaccinations, { name: '', dateGiven: '', expirationDate: '' }]);
        
//       };

//       const handleRemoveVaccination = (index) => {
//         const newVaccinations = [...vaccinations];
//         newVaccinations.splice(index, 1);
//         setvaccinations(newVaccinations);
//       };

//       const changeDate= (date)=>{

//         if (new Date(date).toString() !== 'Invalid Date') {
//           var newDate =(new Date(date).toISOString().split('T')[0]);
//           return newDate;
//         }
//         return null;
//       }

//       return (
//         <>
//           <div className="absolute top-62 left-386 w-[900px] h-936 bg-[#2F333624] rounded-3xl shadow-2xl ml-[29%] mt-[5%]">
//             <h1 className="text-center text-3xl mt-5 font-bold">Vaccination Profile</h1>     
//               <div className="flex flex-col">
//                 <label htmlFor="petId"
//                   className="mb-2 w-[89px] h-[20px] left-[526px] top-[268px] font-not-italic font-[700] text-[16px] leading-[29px] text-black"
//                 >
//                   Pet ID :
//                 </label>
//                 <div className="py-2 px-3 w-[819px] h-[45px] left-[671px] top-[265px] mt-3 rounded-lg shadow-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  
//                 >{report.petId} </div>
      
//                 <label htmlFor="pet-id"
//                   className="mt-2 mb-2 w-[89px] h-[20px] left-[526px] top-[268px] font-not-italic font-[700] text-[16px] leading-[29px] text-black"
//                 >
//                   Status:
//                 </label>
      
//                 <div className="py-2 px-3 w-[819px] h-[45px] left-[671px] top-[265px] mt-3 rounded-lg shadow-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 >
//                     {currentHealthStatus}
//                 </div>
//               </div>
//               <table class="table-auto">
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Given date</th>
//                     <th>Expire Date</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {vaccinations && vaccinations.map((vaccination, index) => (
//                     <tr key={index}>
//                       <td>{vaccination.name}</td>
//                       <td>{changeDate(vaccination.dateGiven)}</td>
//                       <td>{changeDate(vaccination.expirationDate)}</td>                
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//           </div>
//         </>
//       );
      

// }

