import { X } from 'lucide-react';
import { useState } from 'react';
import {getGolotion} from '../services/getGolocation'
import { useNavigate } from 'react-router';

export default function Location({ onClose }) {
  const [city, setCity] = useState("");
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const goToPage = ((location) => {
    navigate('/weather',{state:{location}})
  })

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const value = city.trim();
  //   if (!value) {
  //     setErr('Place enter a city name')
  //     return
      
  //   }

  //   try { 
  //     const location = await getGolotion(value);
  //     // console.log(result);
  //     if (!location) {
  //       setErr('Geocoding request failed!')
  //     }
  //     goToPage(location)
  //   }
  //   catch (error) {
  //     setErr(error);
  //   }
  
  //   setCity("");  
  // }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const value = city.trim();
    
    if (!value) {
      setErr('Please enter a city name'); // Fixed typo: "Place" -> "Please"
      return;
    }

    try { 
      const location = await getGolotion(value);
      
      if (!location) {
        setErr('Geocoding request failed!');
        return; // Optional: return here so it doesn't try to goToPage with an undefined location
      }
      
      goToPage(location);
    }
    catch (error) {
      setErr(error.message || error); // Good practice to pass error.message if 'error' is an Error object
    }
    
    setCity("");  
  }

  const handleGeo = () => {
    navigator.geolocation.getCurrentPosition((positions) => {
      // console.log(positions.coords);
      const { latitude, longitude } = positions.coords
      //console.log({ latitude, longitude });
      goToPage({name:'Your Location',lat:latitude,lon:longitude})
    }, (err) => {
      setErr(err);
   },{timeout:10000})
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60 z-50">
      <div className="w-100  rounded-2xl bg-gray-100 shadow-2xl p-5 flex flex-col justify-between">
       
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium text-gray-800">Where are you today?</h2>
          <button onClick={onClose}
            aria-label="Close modal"
            className="w-10 h-10 rounded-full flex items-center cursor-pointer justify-center bg-gray-200 hover:bg-gray-300 transition-colors text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Add your location search input or list items here */}
        <div className='py-5'>
          <form onSubmit={handleSubmit} className='space-y-5' >
            <input type="text" placeholder='Enter City Name'
              className='w-full border px-5 py-1 rounded-2xl ' onChange={(e)=>(setCity(e.target.value))} value={city} />
            <div className="flex justify-center">
              <button type="submit" className="text-lg font-medium
               bg-blue-500 px-5 py-1 rounded-4xl hover:scale-105
               transition-all delay-200 text-gray-100 cursor-pointer w-full ">
              Get Weather</button>
            </div>
          </form>
          <div className='flex justify-center py-1'>Or</div>
            <div className="flex justify-center ">
              <button type="button" onClick={handleGeo} className="text-lg font-medium w-full
               bg-blue-500 px-5 py-1 rounded-4xl hover:scale-105
               transition-all delay-200 text-gray-100 cursor-pointer ">
              Use My Locations</button>
            </div>
          
        </div>
          <div className='text-center'>
            {err && <p className='text-red-600 text-md font-medium'>{err}</p> }
          </div>
      </div>
    </div>
  );
}