import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";


export default function UpdatePetProfile(){

    const param =  useParams();
    const id = param.id
    console.log(id)

    const [profile,setProfile] = useState({});
    const [petName,setName] = useState("")
    const [species,setSpec] = useState("")
    const [breed,setBreed] = useState("")
    const [gender,setGen] = useState("")
    const [age,setAge] = useState("")
    const [size,setSize] = useState("")
    const [color,setColor] = useState("")
    const [date,setDate] = useState("")
    const [petStatus,setStatus] = useState("")

    async function getProfile() {
        try {
          const res = await axios.get(`http://localhost:5000/api/vet/profile/${id}`);
          const oneProfile = res.data;
          console.log(res.data);
          setProfile(oneProfile.profile);
        } catch (err) {
          console.error(err);
        }
      }

    useEffect(()=>{

        getProfile()

    },[])

    useEffect(() => {
        setName(profile.petName);
        setSpec(profile.species);
        setBreed(profile.breed);
        setGen(profile.gender);
        setAge(profile.age);
        setSize(profile.size);
        setColor(profile.color);
        if (new Date(profile.date).toString() !== 'Invalid Date') {
            setDate(new Date(profile.date).toISOString().split('T')[0]);
          }
        setStatus(profile.petStatus);
      }, [profile]);

    async function UpdateData(e){

        console.log(date)

        e.preventDefault();

        try{

        const newpet = {
            petName,
            species,
            breed,
            gender,
            age,
            size,
            color,
            date,
            petStatus
        }

        console.log(petName)

       await axios.put(`http://localhost:5000/api/vet/updateprofile/${id}`,newpet)
        alert("post Updated !!")

       }catch (err){
        console.error(err);
      }

    }

    return(
        <>

        <div class="flex justify-center items-center h-full w-full bg-white pt-20">
    <div class="w-2/3 bg-[#34495E] rounded-3xl shadow-2xl p-8 m-4 ml-64">
        <h1 class="block w-full text-center text-white text-3xl font-bold mb-6">Pet Registration</h1>

        <form onSubmit={UpdateData} method="post">
            
        <div class="flex flex-col mb-4 mr-5 pt-8">
    <div class="flex justify-between mb-2">
      <label class="font-bold text-lg text-white ml-5" for="petName">Pet Name</label>
      <input class="border py-2 px-3 text-grey-800 w-10/12 rounded-xl" type="text" name="petName" id="petName" value={petName} onChange={(e)=>{
        setName(e.target.value)}}/>
    </div>
  </div>
            <div class="flex flex-col mb-4 mr-5">
            <div class="flex justify-between mb-2">
                <label class="font-bold text-lg text-white ml-5" for="species">Species</label>
                <input class="border py-2 px-3 text-grey-800 w-10/12 rounded-xl" type="text" name="species" id="species" value={species} onChange={(e)=>{
        setSpec(e.target.value)}}/>
        </div>
            </div>
            <div class="flex flex-col mb-4 mr-5 ">
            <div class="flex justify-between mb-2">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="breed">Breed</label>
                <input class="border py-2 px-3 text-grey-800  w-10/12 rounded-xl" type="text" name="breed" id="breed" value={breed} onChange={(e)=>{
        setBreed(e.target.value)}}/>
        </div>
            </div>
            <div class="flex flex-col mb-4 mr-5">
            <div class="flex justify-between mb-2">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="gender">Gender</label>
                <input class="border py-2 px-3 text-grey-800  w-10/12 rounded-xl" type="text" name="gender" id="gender" value={gender} onChange={(e)=>{
        setGen(e.target.value)}}/>
        </div>
            </div>
            <div class="flex flex-col mb-4 mr-5">
            <div class="flex justify-between mb-2">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="age">Age</label>
                <input class="border py-2 px-3 text-grey-800  w-10/12 rounded-xl" type="text" name="age" id="age" value={age} onChange={(e)=>{
        setAge(e.target.value)}}/>
        </div>
            </div>
            <div class="flex flex-col mb-4 mr-5">
            <div class="flex justify-between mb-2">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="size">Size</label>
                <input class="border py-2 px-3 text-grey-800  w-10/12 rounded-xl" type="text" name="size" id="size" value={size} onChange={(e)=>{
        setSize(e.target.value)}}/>
        </div>
            </div>
            <div class="flex flex-col mb-4 mr-5">
            <div class="flex justify-between mb-2">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="color">Colour</label>
                <input class="border py-2 px-3 text-grey-800  w-10/12 rounded-xl" type="text" name="color" id="color" value={color} onChange={(e)=>{
        setColor(e.target.value)}}/>
        </div>
            </div>
            <div class="flex flex-col mb-4 mr-5">
            <div class="flex justify-between mb-2">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="date">Date</label>
                <input class="border py-2 px-3 text-grey-800  w-10/12 rounded-xl" type="date" name="date" id="date" value={date} onChange={(e)=>{
        setDate(e.target.value)}}/>
        </div>
            </div>
            <div class="flex flex-col mb-4 mr-5">
            <div class="flex justify-between mb-2">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="petStatus">Status</label>
                <input class="border py-2 px-3 text-grey-800  w-10/12 rounded-xl" type="text" name="petStatus" id="petStatus" value={petStatus}  onChange={(e)=>{
        setStatus(e.target.value)}}/>
        </div>
            </div>
            <button class="block bg-primary hover:bg-amber-700 text-white uppercase font-bold text-sm mx-auto p-4 rounded-3xl" type="submit">Create Account</button>
        </form>
    </div>
</div>
        
            </>
        
            )

}

