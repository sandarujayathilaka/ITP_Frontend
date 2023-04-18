import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


export default function ProfilePage() {

    const [Profile,setProfile] = useState({});
    const [qrCode, setQrCode] = useState('');
    const param = useParams()
    const pid = param.id

    
        useEffect(()=>{

         
        async function getProfile(){
            try{
            const res = await axios.get(`http://localhost:5000/api/vet/profile/${pid}`)
                setProfile(res.data.profile)
                setQrCode(res.data.profile.qrCode)
                
            }catch(err){

                alert(err)

            }
        } 

        getProfile()
        },[])

  // useEffect(() => {
  //   // Fetch the QR code data from the backend
  //   console.log(pid)
  //   axios.get(`http://localhost:5000/api/vet/pets/qrcode/${pid}`)
  //     .then((res) => {
  //       setQrCode(res.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, [pid]);

   
  function downloadQRCode() {
    const downloadLink = document.createElement('a');
    downloadLink.href = `data:image/png;base64,${qrCode}`;
    downloadLink.download = 'qr_code.png';
    downloadLink.click();
  }


  return (
    <>
    <div class="overflow-hidden bg-secondary shadow sm:rounded-3xl max-w-screen-lg mx-auto mt-24 mb- ml-96">
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
        <dt class="text-lg  text-black font-bold ml-16">DOB</dt>
        <dd class="mt-1 text-lg  text-black  sm:col-span-2 sm:mt-0">{Profile.birth}</dd>
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
        <dt class="text-lg  text-black font-bold ml-16">Weight</dt>
        <dd class="mt-1 text-lg  text-black  sm:col-span-2 sm:mt-0">{Profile.weight} Kg</dd>
        </div>

        <div class="bg-[#D9D9D9] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">     
        <dt class="text-lg text-black font-bold ml-16">Species</dt>
        <dd class="mt-1 text-lg  text-black sm:col-span-2 sm:mt-0">{Profile.species}</dd>
      </div>

    </dl>
  </div>
 

</div>
<div className="ml-[1130px] -mt-[70px]">
  
  <button onClick={downloadQRCode} class="bg-green-400 hover:bg-lime-700 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download</span>
</button>


</div>



<img className=' w-48 ml-[1100px] -mt-[255px] ' src={`data:image/png;base64,${qrCode}`} alt="QR code" />



<img className=' w-48 ml-[1100px] -mt-[415px] rounded-md ' width={600} height={600} src={Profile.image} />


    </>

  )
}
