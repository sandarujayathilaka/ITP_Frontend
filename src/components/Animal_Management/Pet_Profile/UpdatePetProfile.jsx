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
    const [weight,setWeight] = useState("")
    const [color,setColor] = useState("")
    const [date,setDate] = useState("")
    const [petStatus,setStatus] = useState("")
    const [image,setImage]=useState("")
    const [price,setPrice]=useState("")


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
        setWeight(profile.weight);
        setColor(profile.color);
        if (new Date(profile.date).toString() !== 'Invalid Date') {
            setDate(new Date(profile.date).toISOString().split('T')[0]);
          }
        setStatus(profile.petStatus);
        setImage(profile.image)
        setPrice(profile.price)
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
            weight,
            color,
            date,
            petStatus,
            image,
            price
        }

        console.log(petName)

       await axios.put(`http://localhost:5000/api/vet/updateprofile/${id}`,newpet)
        alert("post Updated !!")

       }catch (err){
        console.error(err);
      }

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

    return(
        <>

        <div class="flex justify-center items-center h-full w-full bg-white pt-20">
    <div class="w-2/3 bg-[#34495E] rounded-3xl shadow-2xl p-8 m-4 ml-64 mt-20">
        <h1 class="block w-full text-center text-white text-3xl font-bold mb-6">Profile Updation</h1>

        <form onSubmit={UpdateData} method="post" class="grid grid-cols-3 gap-1">
            
        <div class="flex flex-col mb-4 mr-5 mt-3">
      <label class="mb-2 font-bold text-lg text-white ml-5" for="petName">Pet Name</label>
      <input class="border py-2 px-3 text-grey-800 w-full rounded-xl" type="text" name="petName" id="petName" value={petName} onChange={(e)=>{
        setName(e.target.value)}}/>
    </div>

            <div class="flex flex-col mb-4 mr-5 mt-3">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="petStatus">Species</label>
                <select name="petStatus"  id="species" value={species} onChange={(e)=>{
        setSpec(e.target.value)}} class="border py-2 px-3 text-grey-800 w-full rounded-xl">
                  <option selected>Choose Species</option>
                  <option value="Cat">Cat</option>
                  <option value="Dog">Dog</option>
                </select>
              </div>


            <div class="flex flex-col mb-4 mr-5 mt-3">
         
                <label class="mb-2 font-bold text-lg text-white ml-5" for="breed">Breed</label>
                <input class="border py-2 px-3 text-grey-800 w-full rounded-xl" type="text" name="breed" id="breed" value={breed} onChange={(e)=>{
        setBreed(e.target.value)}}/>
        </div>



        <div class="flex flex-col mb-4 mr-5">
                <label class="mb-2 font-bold text-lg text-white ml-5" for="gender">Gender</label>
                <select  name="gender" id="gender" value={gender} onChange={(e)=>{
        setGen(e.target.value)}} class="border py-2 px-3 text-grey-800 w-full rounded-xl">
                  <option selected>Choose Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>


           
            <div class="flex flex-col mb-4 mr-5">
           
                <label class="mb-2 font-bold text-lg text-white ml-5" for="age">Age</label>
                <input class="border py-2 px-3 text-grey-800 w-full rounded-xl" type="text" name="age" id="age" value={age} onChange={(e)=>{
        setAge(e.target.value)}}/>
        </div>
            
            <div class="flex flex-col mb-4 mr-5">
        
                <label class="mb-2 font-bold text-lg text-white ml-5" for="size">Weight (Kg)</label>
                <input class="border py-2 px-3 text-grey-800 w-full rounded-xl" type="text" name="size" id="size" value={weight} onChange={(e)=>{
        setWeight(e.target.value)}}/>
        </div>
           
            <div class="flex flex-col mb-4 mr-5">
         
                <label class="mb-2 font-bold text-lg text-white ml-5" for="color">Colour</label>
                <input class="border py-2 px-3 text-grey-800 w-full rounded-xl" type="text" name="color" id="color" value={color} onChange={(e)=>{
        setColor(e.target.value)}}/>
        </div>
            
            <div class="flex flex-col mb-4 mr-5">
          
                <label class="mb-2 font-bold text-lg text-white ml-5" for="date">Date</label>
                <input class="border py-2 px-3 text-grey-800 w-full rounded-xl" type="date" name="date" id="date" value={date} onChange={(e)=>{
        setDate(e.target.value)}}/>
        </div>
         
         
        <div class="flex flex-col mb-4 mr-5">
           
           <label class="mb-2 font-bold text-lg text-white ml-5" for="petStatus">Status</label>
           
       <select name="petStatus" id="petStatus" value={petStatus}  onChange={(e)=>{
        setStatus(e.target.value)}}  class="border py-3 px-3 text-grey-800 w-full rounded-xl">
     <option selected>Choose a health Status</option>
    <option value="Available">Available</option>
   <option value="Adopted">Adopted</option>
   </select>
   </div>

        
   <div class="flex flex-col mb-4 mr-5">
           
           <label class="mb-2 font-bold text-lg text-white ml-5"  for="age">Pet Image</label>
           <input class="border py-2 px-3 text-grey-800 w-full rounded-xl" type="file" name="img" id="img" onChange={convertToBase64} />
              {image==""||image==null?"":<img width={100} height={100} src={image}/>}
   </div>

   <div class="flex flex-col mb-4 mr-5">
          
          <label class="mb-2 font-bold text-lg text-white ml-5" for="price">Price</label>
          <input class="border py-2 px-3 text-grey-800 w-full rounded-xl" required type="number" value={price}  name="price" min="0" step="0.01" id="price" onChange={(e)=>{
  setPrice(e.target.value)}}/>
  </div>


   <div class="ml-80 mt-3 w-full">
            <button class="block bg-primary hover:bg-amber-700 text-white uppercase font-bold text-sm mx-auto  p-4 rounded-3xl" type="submit">Update Profile</button>
            </div>
        </form>
    </div>
</div>
        
            </>
        
            )

}

