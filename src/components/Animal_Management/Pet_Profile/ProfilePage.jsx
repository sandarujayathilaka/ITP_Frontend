import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProfilePage() {

    const [Profile,setProfile] = useState({});
    const param = useParams();
    
        useEffect(()=>{

            const pid = param.id

        async function getProfile(){
            try{
            const res = await axios.get(`http://localhost:5000/api/vet/profile/${pid}`)
                setProfile(res.data.profile)
               
                console.log(Profile)
                
            }catch(err){

                alert(err)

            }
        } 

        getProfile()
        },[])


  return (
    <>
    <div class="overflow-hidden bg-secondary shadow sm:rounded-3xl max-w-screen-lg mx-auto mt-28 mb-9 ml-96">
  <div class="px-4 py-5 sm:px-6">
    <h3 class="text-xl font-semibold leading-6 text-white">{Profile.petName}</h3>
    <p class="mt-1 max-w-2xl text-sm text-white">Pet Information.</p>
  </div>
  <div class="border-t border-gray-200">
    <dl>
      <div class="bg-[#D9D9D9] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 pt-5">
        <dt class="text-lg text-black font-bold ml-16 ">Pet ID</dt>
        <dd class="mt-1 text-lg text-black sm:col-span-2 sm:mt-0">{Profile.petId}</dd>
     </div>

        <div class="bg-[#D9D9D9] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-lg  text-black font-bold ml-16">Pet Breed</dt>
        <dd class="mt-1 text-lg  text-black sm:col-span-2 sm:mt-0">{Profile.breed}</dd>
        </div>

        <div class="bg-[#D9D9D9] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-lg  text-black font-bold ml-16">Age</dt>
        <dd class="mt-1 text-lg  text-black  sm:col-span-2 sm:mt-0">{Profile.age}</dd>
        </div>

        <div class="bg-[#D9D9D9] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-lg  text-black font-bold ml-16">Colour</dt>
        <dd class="mt-1 text-lg  text-black sm:col-span-2 sm:mt-0">{Profile.color}</dd>
        </div>

        <div class="bg-[#D9D9D9] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-lg  text-black font-bold ml-16">Gender</dt>
        <dd class="mt-1 text-lg  text-black  sm:col-span-2 sm:mt-0">{Profile.gender}</dd>
        </div>

        <div class="bg-[#D9D9D9] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-lg  text-black font-bold ml-16">Current Status</dt>
        <dd class="mt-1 text-lg  text-black  sm:col-span-2 sm:mt-0">{Profile.petStatus}</dd>
        </div>

        <div class="bg-[#D9D9D9] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-lg  text-black font-bold ml-16">Height</dt>
        <dd class="mt-1 text-lg  text-black  sm:col-span-2 sm:mt-0">{Profile.size}</dd>
        </div>

        <div class="bg-[#D9D9D9] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">     
        <dt class="text-lg text-black font-bold ml-16">Species</dt>
        <dd class="mt-1 text-lg  text-black sm:col-span-2 sm:mt-0">{Profile.species}</dd>
      </div>

    </dl>
  </div>
</div>
    </>

  )
}
