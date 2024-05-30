import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import userprofile from "../assets/user-profile.jpg";
function EditHouse() {

    const storedOwnerId=localStorage.getItem('owner_id');
    const navigate=useNavigate();
    const [values,setValues]=useState({
    address:'',
    rentAmount:'',
    occupants:'',
    city:'',
    contactNumber:'',
    propertyType:'',
    description:'',
    image:'',
    owner_id:storedOwnerId ||''
    });
    const {id}=useParams();
    const handleChange=(event)=>{
        setValues({...values , [event.target.name] : [event.target.value]})
    }

    const handleSubmit=(event)=>{
  event.preventDefault();
  axios.put('http://localhost:4000/edithouse/'+id,values)
  .then(res=>{
    console.log(res);
    console.log(id);
    navigate('/ownerprofile');
  })
  .catch(err=>console.error(err));
    }
  return (
    <div>
      

      <div className="flex-grow max-w-screen-lg mx-auto mt-8 p-4 border border-gray-200 rounded-lg">
        <form className="h-full" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input type="text" id="address" name="address" className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"  onChange={handleChange}/>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="rentAmount" className="block text-sm font-medium text-gray-700">Rent Amount</label>
              <input type="text" id="rentAmount" name="rentAmount" className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"  onChange={handleChange}/>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="occupants" className="block text-sm font-medium text-gray-700">Number of Occupants</label>
              <input type="text" id="occupants" name="occupants" className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"  onChange={handleChange}/>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input type="text" id="city" name="city" className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"  onChange={handleChange} />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input type="text" id="contactNumber" name="contactNumber" className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"  onChange={handleChange}/>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">Property Type</label>
              <select id="propertyType" name="propertyType" className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"  onChange={handleChange}>
                <option value="">Select house type </option>
                <option value="1BHK">1BHK</option>
                <option value="2BHK">2BHK</option>
                <option value="3BHK">3BHK</option>
              </select>
            </div>
            <div className="col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea id="description" name="description" rows="3" className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"  onChange={handleChange}></textarea>
            </div>
            <div className="col-span-2">
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">Add Image</label>
              <input type="file" id="image" name="image" accept="image/*" className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"  onChange={handleChange} />
            </div>
            <div className="col-span-2 flex justify-center">
              <button type="submit" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Update House Details
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditHouse
