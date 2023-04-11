import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/common/Header';
import Home from './components/Home';
import VetPortal from './components/portals/VetPortal';
import AllPetProfile from './components/Animal_Management/Pet_Profile/petProfile';
import AddPetProfile from './components/Animal_Management/Pet_Profile/AddPetProfile';
import UpdatePetProfile from './components/Animal_Management/Pet_Profile/UpdatePetProfile';
import ProfilePage from './components/Animal_Management/Pet_Profile/ProfilePage';
import HealthProfile from './components/Animal_Management/Health_Profile/HealthProfile';
import AddHealth from './components/Animal_Management/Health_Profile/AddHealth';
import DisplayHealth from './components/Animal_Management/Health_Profile/DisplayHealth';
import Test from './components/Animal_Management/Test';
import UpdateHealth from './components/Animal_Management/Health_Profile/UpdateHealth';
import VacReport from './components/Animal_Management/Health_Profile/VacReport'
import Addvac from './components/Animal_Management/Health_Profile/Addvac'
import AdoptPet from './components/adoptPetPage/AdoptPet';
import Footer from './components/common/Footer';
import Report from './components/Animal_Management/Health_Profile/Report';
import UpdateVac from './components/Animal_Management/Health_Profile/UpdateVac';
import Dashboard from './components/Animal_Management/Dashboard/Dashboard';
import Shelterpets from './components/Animal_Management/Pet_Profile/ShelterPets';


function App() {
  return (
    <>
    <Router>
      <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='petprofile' element={<VetPortal />}>
                <Route path='updatepet/:id' element={<UpdatePetProfile />} />
                <Route path='allpetprofile' element={<AllPetProfile />} />
                <Route path='addpet' element={<AddPetProfile />} />
                <Route path='addhealthprofile' element={<AddHealth />} />  
                <Route path='profilepage/:id' element={<ProfilePage />} />
                <Route path='healthprofile' element={<HealthProfile />} />
                <Route path='displayhealth/:id' element={<DisplayHealth />} />
                <Route  path='addvac/:id/:state' element={<Addvac/>}/>
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='spets' element={<Shelterpets />} />
            
            </Route>
            
            <Route path='/UpdateHealth/:id' element={<UpdateHealth/>}/>
            <Route path='/test/:id/qrcode' element={<Test />} />
           
            <Route path='/upvac/:id/:index/:state' element={<UpdateVac />} />
            {/* <Route  path='/vacreport/:id' element={<VacReport/>}/> */}
            
            {/* <Route path='/report/:id' element={<Report/>} /> */}
            

            
          </Routes>
      </div>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
