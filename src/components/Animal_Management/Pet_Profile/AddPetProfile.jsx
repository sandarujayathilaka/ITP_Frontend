import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

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
          petStatus
        };
        axios.post("http://localhost:5000/api/vet/addpet", newPet)
          .then(() => {
            alert("Pet added");
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
          })
          .catch((err) => {
            alert(`Failed to add pet: ${err}`);
          });
      }
      



      return (
        <>
        <div class="flex justify-center items-center  h-full w-full bg-white pt-20">
          <div class="w-2/3 bg-[#34495E] rounded-3xl shadow-2xl p-8 m-4 ml-64 mt-16">
            <h1 class="block w-full text-center text-white text-3xl font-bold mb-6">Pet Registration</h1>

            <form onSubmit={addPet} method="post" class="grid grid-cols-3 gap-1">

              <div class="flex flex-col mb-4 mr-4 pt-8">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="petName">Pet Name</label>
                <input class="border py-2 px-3 text-grey-800 w-full rounded-xl" type="text" name="petName" id="petName" onChange={(e) => {
                  setName(e.target.value)
                }} />
              </div>
              <div class="flex flex-col mb-4 mr-5 pt-8">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="petStatus">Species</label>
                <select name="petStatus" id="petStatus" onChange={(e) => {
                  setSpec(e.target.value)
                }} class="border py-2 px-3 text-grey-800 w-full rounded-xl">
                  <option selected>Choose Species</option>
                  <option value="Cat">Cat</option>
                  <option value="Dog">Dog</option>
                </select>
              </div>
              <div class="flex flex-col mb-4 mr-5 pt-8">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="breed">Breed</label>
                <input class="border py-2 px-3 text-grey-800 w-full rounded-xl" type="text" name="breed" id="breed" onChange={(e) => {
                  setBreed(e.target.value)
                }} />
              </div>

              <div class="flex flex-col mb-4 mr-5">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="petStatus">Gender</label>
                <select name="petStatus" id="petStatus" onChange={(e) => {
                  setGen(e.target.value)
                }} class="border py-2 px-3 text-grey-800 w-full rounded-xl">
                  <option selected>Choose Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div class="flex flex-col mb-4 mr-5">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="size">Weight - ( Kg ) </label>
                <input class="border py-2 px-3 text-grey-800 w-full rounded-xl" type="text" name="size" id="size" onChange={(e) => {
                  setSize(e.target.value)
                }} />
              </div>

            <div class="flex flex-col mb-4 mr-5">
           
                <label class="mb-2 font-bold text-lg text-white ml-5" for="color">Colour</label>
                <input class="border py-2 px-3 text-grey-800 w-full rounded-xl" type="text" name="color" id="color" onChange={(e)=>{
        setColor(e.target.value)}}/>
        </div>

          
        <div class="flex flex-col mb-4 mr-5">
           
                <label class="mb-2 font-bold text-lg text-white ml-5" for="age">Age</label>
                <input class="border py-2 px-3 text-grey-800 w-full rounded-xl" type="text" name="age" id="age" onChange={(e)=>{
        setAge(e.target.value)}}/>
        </div>
            
     

            <div class="flex flex-col mb-4 mr-5">
          
                <label class="mb-2 font-bold text-lg text-white ml-5" for="date">Date</label>
                <input class="border py-2 px-3 text-grey-800 w-full rounded-xl" type="date" name="date" id="date" onChange={(e)=>{
        setDate(e.target.value)}}/>
        </div>
            
            <div class="flex flex-col mb-4 mr-5">
           
                <label class="mb-2 font-bold text-lg text-white ml-5" for="petStatus">Status</label>
                
            <select name="petStatus" id="petStatus" onChange={(e)=>{
        setStatus(e.target.value)}}  class="border py-3 px-3 text-grey-800 w-full rounded-xl">
          <option selected>Choose a health Status</option>
         <option value="Available">Available</option>
        <option value="Adopted">Adopted</option>
        </select>
        </div>
      
            {/* <div class="flex flex-col mb-4 mr-5">
            <div class="flex justify-between mb-2">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="petId">PetID</label>
                <input class="border py-2 px-3 text-grey-800  w-10/12 rounded-xl" type="text"  onChange={(e)=>{
        setId(e.target.value)}}  name="petId" id="petId" />
        </div>
            </div> */}
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