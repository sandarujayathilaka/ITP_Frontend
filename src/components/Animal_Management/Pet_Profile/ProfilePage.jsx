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
               
                console.log(Profile)
                
            }catch(err){

                alert(err)

            }
        } 

        getProfile()
        },[])

  useEffect(() => {
    // Fetch the QR code data from the backend
    console.log(pid)
    axios.get(`http://localhost:5000/api/vet/pets/qrcode/${pid}`)
      .then((res) => {
        setQrCode(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [pid]);

  const handlePrint = () => {
    window.print();
  }

  const handleQrPrint = () => {
    const qrImage = document.getElementById('qr-code');
    const windowContent = '<!DOCTYPE html>';
    windowContent += '<html>';
    windowContent += '<head><title>Print QR Code</title></head>';
    windowContent += '<body>';
    windowContent += '<img src="' + qrImage.src + '">';
    windowContent += '</body>';
    windowContent += '</html>';
    const printWin = window.open('', '', 'width=900,height=650');
    printWin.document.open();
    printWin.document.write(windowContent);
    printWin.document.close();
    printWin.focus();
    printWin.print();
    printWin.close();
  }

  
  const handlesPrint = () => {
    const img = new Image();
    img.src = qrCode;
    img.style.display = 'none';
    document.body.appendChild(img);
    window.print();
  };

  


  return (
    <>
    <div class="overflow-hidden bg-secondary shadow sm:rounded-3xl max-w-screen-lg mx-auto mt-28 mb- ml-96">
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

      <button onClick={handlePrint}>Print QR Code</button>

    </dl>
  </div>
  


</div>

<img className=' w-48 ml-[1100px] -mt-[225px] ' src={`data:image/png;base64,${qrCode}`} alt="QR code" />





    </>

  )
}
