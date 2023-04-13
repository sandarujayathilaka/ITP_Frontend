import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

function AddPetProfile() {

    const [petName,setName] = useState("")
    const [species,setSpec] = useState("")
    const [breed,setBreed] = useState("")
    const [gender,setGen] = useState("")
    const [age,setAge] = useState("")
    const [size,setSize] = useState("")
    const [color,setColor] = useState("")
    const [date,setDate] = useState("")
    const [petStatus,setStatus] = useState("")
    const [petId,setId] = useState("")
    const [image,setImage]=useState("")


    useEffect(() => {
        console.log("Pet id called");
        async function fetchCount() {
          try {
            const response = await axios.post('http://localhost:5000/api/counter');
            setId(response.data.count.toString());
            console.log(response.data.count.toString());
          } catch (err) {
            console.log(err);
          }
        }
        fetchCount();
      }, []);
      
      function addPet(e) {
        e.preventDefault();
        const newPet = {
          petName,
          petId,
          species,
          breed,
          gender,
          age,
          size,
          color,
          date,
          petStatus,
          image
        };
        axios.post("http://localhost:5000/api/vet/addpet", newPet,{

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*"
        }
        })
          .then(() => {
            toast.success("Pet added");
            setName("");
            setSpec("");
            setBreed("");
            setGen("");
            setAge("");
            setSize("");
            setColor("");
            setDate("");
            setStatus("");
            setId("");
            setImage("")
            setTimeout(() => window.location.reload(), 3000);
          })
          .catch((err) => {
            alert(`Failed to add pet: ${err}`);
          });
      }
      
      function convertToBase64(e){

   

        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = ()=>{
          console.log(reader.result)
          setImage(reader.result)
        };
        reader.onerror=error=>{
          console.log("Error: ",error)
        };
    
      }
    



      return (
        <>
        <div class="flex justify-center items-center  h-full w-full bg-white pt-20">
          <div class="w-2/3 bg-[#34495E] rounded-3xl shadow-2xl p-8 m-4 ml-64 mt-16">
            <h1 class="block w-full text-center text-white text-3xl font-bold mb-6">Pet Registration</h1>

            <form onSubmit={addPet} method="post" class="grid grid-cols-3 gap-1">

              <div class="flex flex-col mb-4 mr-4 pt-8">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="petName">Pet Name</label>
                <input class="border py-2 px-3 text-grey-800 w-full rounded-xl" required type="text" placeholder='pet name or "Nil"' name="petName" id="petName" onChange={(e) => {
                  setName(e.target.value)
                }} />
              </div>
              <div class="flex flex-col mb-4 mr-5 pt-8">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="petStatus">Species</label>
                <select name="petStatus"  required  id="petStatus" onChange={(e) => {
                  setSpec(e.target.value)
                }} class="border py-2 px-3 text-grey-800 w-full rounded-xl">
                  <option selected disabled hidden>Choose Species</option>
                  <option value="Cat">Cat</option>
                  <option value="Dog">Dog</option>
                </select>
              </div>
              <div class="flex flex-col mb-4 mr-5 pt-8">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="breed">Breed</label>
                <input class="border py-2 px-3 text-grey-800 w-full rounded-xl" required type="text" name="breed" id="breed" onChange={(e) => {
                  setBreed(e.target.value)
                }} />
              </div>

              <div class="flex flex-col mb-4 mr-5">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="petStatus">Gender</label>
                <select name="petStatus" id="petStatus" required onChange={(e) => {
                  setGen(e.target.value)
                }} class="border py-2 px-3 text-grey-800 w-full rounded-xl">
                  <option selected>Choose Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div class="flex flex-col mb-4 mr-5">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="size">Weight - ( Kg ) </label>
                <input class="border py-2 px-3 text-grey-800 w-full rounded-xl" required type="text" name="size" id="size" onChange={(e) => {
                  setSize(e.target.value)
                }} />
              </div>

            <div class="flex flex-col mb-4 mr-5">
           
                <label class="mb-2 font-bold text-lg text-white ml-5" for="color">Colour</label>
                <input class="border py-2 px-3 text-grey-800 w-full rounded-xl" required type="text" name="color" id="color" onChange={(e)=>{
        setColor(e.target.value)}}/>
        </div>

          
        <div class="flex flex-col mb-4 mr-5">
           
                <label class="mb-2 font-bold text-lg text-white ml-5" for="age">Age</label>
                <input class="border py-2 px-3 text-grey-800 w-full rounded-xl" required type="text" name="age" id="age" onChange={(e)=>{
        setAge(e.target.value)}}/>
        </div>
            
     

            <div class="flex flex-col mb-4 mr-5">
          
                <label class="mb-2 font-bold text-lg text-white ml-5" for="date">Date</label>
                <input class="border py-2 px-3 text-grey-800 w-full rounded-xl" required type="date" name="date" id="date" onChange={(e)=>{
        setDate(e.target.value)}}/>
        </div>
            
            <div class="flex flex-col mb-4 mr-5">
           
                <label class="mb-2 font-bold text-lg text-white ml-5" for="petStatus">Status</label>
                
            <select name="petStatus" id="petStatus" required onChange={(e)=>{
        setStatus(e.target.value)}}  class="border py-3 px-3 text-grey-800 w-full rounded-xl">
          <option selected>Choose a health Status</option>
         <option value="Available">Available</option>
        <option value="Adopted">Adopted</option>
        </select>
        </div>
            
        <div class="flex flex-col mb-4 mr-5">
           
                <label class="mb-2 font-bold text-lg text-white ml-5" for="age">Age</label>
                <input class="border py-2 px-3 text-grey-800 w-full rounded-xl" required type="file" name="img" id="img" onChange={convertToBase64}/>
                {image==""||image==null?"":<img width={100} height={100} src={image}/>}
        </div>
            <div class="ml-80 mt-3 w-full">
            <button class="block bg-primary hover:bg-amber-700 text-white uppercase font-bold text-sm mx-auto  p-4 rounded-3xl" type="submit">Create Account</button>
            </div>
        </form>
    </div>
</div>
    
    
    </>
  )
}

export default AddPetProfile