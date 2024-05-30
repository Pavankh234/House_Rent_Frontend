import { useNavigate } from "react-router-dom";
import React from 'react'
import Homebg from "../assets/homebackground.jpg";
function Home() {
    const navigate=useNavigate()
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${Homebg})` }}>
      <div className="bg-white bg-opacity-25 flex justify-center items-center h-screen">
        <div className="text-center">
          <p className="text-5xl font-bold mb-100"  style={{ color: '#ea580c' }}>Welcome to ByteBreeze Homes</p>
          <div className="mt-6 flex justify-center">
            <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
            onClick={()=>navigate('ownerlogin')}>
              Owner
            </button>
            <div className="w-4"></div> {/* Adding space between buttons */}
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg"
              onClick={()=>navigate('tennentlogin')}>
              Tenant
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
