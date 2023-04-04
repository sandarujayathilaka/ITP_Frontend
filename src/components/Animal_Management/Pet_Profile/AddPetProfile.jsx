import axios from 'axios'
import React, { useState } from 'react'

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


      function addpet(e){

        e.preventDefault();
        
        const newpet = {
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
        }


       axios.post("http://localhost:5000/api/vet/addpet",newpet)
       .then(()=>{
        alert("pet added")

        setName ("")
        setSpec ("")
        setBreed ("")
        setGen("")
        setAge ("")
        setSize ("")
        setColor ("")
        setDate("")
        setStatus ("")
        setId ("")

       }).catch((err)=>{
        alert(`Not inserted ${err}`)
       })

    }


  return (
    <>
    
    
    <div class="flex justify-center items-center h-full w-full bg-white pt-20">
    <div class="w-2/3 bg-[#34495E] rounded-3xl shadow-2xl p-8 m-4 ml-64">
        <h1 class="block w-full text-center text-white text-3xl font-bold mb-6">Pet Registration</h1>

        <form onSubmit={addpet} method="post">
            
        <div class="flex flex-col mb-4 mr-5 pt-8">
    <div class="flex justify-between mb-2">
      <label class="font-bold text-lg text-white ml-5" for="petName">Pet Name</label>
      <input class="border py-2 px-3 text-grey-800 w-10/12 rounded-xl" type="text" name="petName" id="petName" onChange={(e)=>{
        setName(e.target.value)}}/>
    </div>
  </div>
            <div class="flex flex-col mb-4 mr-5">
            <div class="flex justify-between mb-2">
                <label class="font-bold text-lg text-white ml-5" for="species">Species</label>
                <input class="border py-2 px-3 text-grey-800 w-10/12 rounded-xl" type="text" name="species" id="species" onChange={(e)=>{
        setSpec(e.target.value)}}/>
        </div>
            </div>
            <div class="flex flex-col mb-4 mr-5 ">
            <div class="flex justify-between mb-2">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="breed">Breed</label>
                <input class="border py-2 px-3 text-grey-800  w-10/12 rounded-xl" type="text" name="breed" id="breed" onChange={(e)=>{
        setBreed(e.target.value)}}/>
        </div>
            </div>
            <div class="flex flex-col mb-4 mr-5">
            <div class="flex justify-between mb-2">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="gender">Gender</label>
                <input class="border py-2 px-3 text-grey-800  w-10/12 rounded-xl" type="text" name="gender" id="gender" onChange={(e)=>{
        setGen(e.target.value)}}/>
        </div>
            </div>
            <div class="flex flex-col mb-4 mr-5">
            <div class="flex justify-between mb-2">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="age">Age</label>
                <input class="border py-2 px-3 text-grey-800  w-10/12 rounded-xl" type="text" name="age" id="age" onChange={(e)=>{
        setAge(e.target.value)}}/>
        </div>
            </div>
            <div class="flex flex-col mb-4 mr-5">
            <div class="flex justify-between mb-2">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="size">Size</label>
                <input class="border py-2 px-3 text-grey-800  w-10/12 rounded-xl" type="text" name="size" id="size" onChange={(e)=>{
        setSize(e.target.value)}}/>
        </div>
            </div>
            <div class="flex flex-col mb-4 mr-5">
            <div class="flex justify-between mb-2">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="color">Colour</label>
                <input class="border py-2 px-3 text-grey-800  w-10/12 rounded-xl" type="text" name="color" id="color" onChange={(e)=>{
        setColor(e.target.value)}}/>
        </div>
            </div>
            <div class="flex flex-col mb-4 mr-5">
            <div class="flex justify-between mb-2">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="date">Date</label>
                <input class="border py-2 px-3 text-grey-800  w-10/12 rounded-xl" type="date" name="date" id="date" onChange={(e)=>{
        setDate(e.target.value)}}/>
        </div>
            </div>
            <div class="flex flex-col mb-4 mr-5">
            <div class="flex justify-between mb-2">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="petStatus">Status</label>
                <input class="border py-2 px-3 text-grey-800  w-10/12 rounded-xl" type="text" name="petStatus" id="petStatus" onChange={(e)=>{
        setStatus(e.target.value)}}/>
        </div>
            </div>
            <div class="flex flex-col mb-4 mr-5">
            <div class="flex justify-between mb-2">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="petId">PetID</label>
                <input class="border py-2 px-3 text-grey-800  w-10/12 rounded-xl" type="text"  onChange={(e)=>{
        setId(e.target.value)}}  name="petId" id="petId" />
        </div>
            </div>
            <button class="block bg-primary hover:bg-amber-700 text-white uppercase font-bold text-sm mx-auto p-4 rounded-3xl" type="submit">Create Account</button>
        </form>
    </div>
</div>
    
    
    </>
  )
}

export default AddPetProfile