import React, {useState,useEffect} from "react";
import axios from "axios";
import { Link, Outlet} from "react-router-dom";

export default function HealthProfile (){

    const [report,setReport] = useState([]);
    const [filterOption, setFilterOption] = useState("all");
    
        useEffect(()=>{

        async function getReports(){
            try{
            const res = await axios.get("http://localhost:5000/api/vet/getallreport")
            setReport(res.data.petReport)
               
                console.log(report)
                
            }catch(err){

                alert(err)

            }
        } 

        getReports()
        },[])


        const onDelete =(id)=>{
            axios.delete(`http://localhost:5000/api/vet/deletereport/${id}`).then((res)=>{

            alert("Report Deleted!!")
           
                 }).catch((err)=>{
     
                     alert(err)     
                 })
        }

        const handleFilterChange = (event) => {
            setFilterOption(event.target.value);
          };


          function filterContent(report, searchTerm) {
            
            const result = report.filter(
              (r) =>
                r.petId.includes(searchTerm) 
             
            );
            setReport(result);
          }



          const handleTextSearch = (e) => {
            const searchTerm = e.currentTarget.value;
            axios.get("http://localhost:5000/api/vet/getallreport").then((res) => {
              if (res.data.petReport) {
                filterContent(res.data.petReport, searchTerm);
              }
            });
          };
       
return(

    <>
    <div class="min-h-screen  py-5 ml-[17%]">
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4
     focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-auto mb-4 dark:bg-blue-600 
     dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to="/petprofile/addpet">Add Profile</Link></button>
        <div class='overflow-x-auto w-full'>


        <select id="filter" name="filter" value={filterOption} onChange={handleFilterChange}>
  <option value="all">All</option>
  <option value="Critical">Critical</option>
  <option value="Normal">Normal</option>
</select>

<form class="flex items-center">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-1/2 ml-80">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search"  onChange={handleTextSearch} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
    </div>
</form>




            <table class='mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden table-auto'>
                <thead class="bg-gray-900">
                    <tr class="text-white text-left">
                        <th class="font-semibold text-sm uppercase px-6 py-4"> ID </th>
                        <th class="font-semibold text-sm uppercase px-6 py-4 text-center"> STATUS </th>
                        <th class="font-semibold text-sm uppercase px-6 py-4">ACTION</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {report.filter((r) =>filterOption === "all" ? true : r.currentHealthStatus === filterOption).map((report,index)=>
                    <tr key={index} class="bg-gray-5 hover:bg-slate-100">
                        <td class="px-6 py-4">
                            <div class="flex items-center space-x-3">
                                <div>
                                    <p> {report.petId}</p>
                                </div>
                            </div>
                        </td>
                        
        
                        <td class="px-6 py-4 text-center">
  <span class={`text-white text-sm w-1/3 pb-1 font-semibold px-2 rounded-full ml-[18px] ${
    report.currentHealthStatus === "Critical" ? "bg-red-600" : (report.currentHealthStatus === "Scheduled" ? "bg-yellow-600" : "bg-green-600")
  }`}>
    {report.currentHealthStatus === "Critical" ? "Critical" : (report.currentHealthStatus === "Scheduled" ? "Scheduled" : "Normal")}
  </span>
</td>

                    
                        <td class="py-3 px-6 text-center">
                        
                                    <div class="flex item-center justify-center">
                                        
                                    <Link to={`/petprofile/displayhealth/${report.petId}`}>
                                        <div class="w-4 mr-2 transform hover:text-green-600 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        </Link>

                                        <Link to={`/petprofile/updatepet/${report.petId}`}>
                                        <div class="w-4 mr-2 transform hover:text-yellow-500 hover:scale-110">
                                        
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                            
                                        </div>
                                        </Link>

                                        <button onClick={()=>onDelete(report.petId)}>
                                        <div class="w-4 mr-2 transform hover:text-red-600 hover:scale-110">
                                      
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                           
                                        </div>
                                        </button>

                                    </div>
                                </td>
    
                    </tr>)}
                </tbody>
            </table>
        </div>
    </div>
    <Outlet/>
    </>
)
}





