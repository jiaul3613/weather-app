import { useState } from "react"
import Location from "../components/Location";

export default function Home(){
  const [click,setClick]=useState(false);
  console.log(click);
  return(
    <div className="">
     <div className="text-center">
       <h1 className="text-6xl text-blue-400 font-extrabold">NextLavel <span className="text-blue-500">Weather</span></h1>
      <p className="text-gray-400 py-4">Check your weather today in next level</p>
     </div>
      <div className="flex justify-center">
        <button onClick={()=>setClick('c')} type="button" className="text-lg font-medium bg-blue-500 px-5 py-1 rounded-4xl hover:scale-105 transition-all delay-200 text-gray-100 ">Check Weather</button>
      </div>

     { click && <Location/>
      
     }
    </div>
  )
}