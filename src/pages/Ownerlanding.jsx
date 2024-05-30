import React, { useState } from 'react';
import userprofile from "../assets/user-profile.jpg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';

function Ownerlanding() {
  const navigate=useNavigate();
  const storedOwnerId=localStorage.getItem('owner_id');
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

const handleChange=(event)=>{
    setValues({...values,[event.target.name]:[event.target.value]})
  }

// const handleProfileclick=()=>{
//     navigate('/ownerprofile');
//    }


// 
// const handleSubmit=()=>{
//   axios.post('http://localhost:4000/ownerlanding', values)
//       .then((res) => {
//           if (res.data.redirectToPayment) {
//               navigate('/ownerpayments');
//           } else {
//               console.log("Registered Successfully");
//               toast.success("Registered Successfully! Please Check Your Profile For Registered Houses.");
//               setValues({
//                   address: '',
//                   rentAmount: '',
//                   occupants: '',
//                   city: '',
//                   contactNumber: '',
//                   propertyType: '',
//                   description: '',
//                   image: '',
//                   owner_id: storedOwnerId || ''
//               });
//           }
//       })
//       .catch((err) => {
//           console.error(err);
//       });
// };
const handleSubmit = () => {
  axios.post('http://localhost:4000/ownerlanding', values)
      .then((res) => {
          console.log("Registered Successfully");
          toast.success("Registered Successfully! Please Check Your Profile For Registered Houses.");
          setValues({
              address: '',
              rentAmount: '',
              occupants: '',
              city: '',
              contactNumber: '',
              propertyType: '',
              description: '',
              image: '',
              owner_id: storedOwnerId || ''
          });
      })
      .catch((err) => {
          console.error(err);
      });
};


return (
<div>  
{/* this is nav bar */}
{/* <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
    <div class="flex items-center space-x-3 rtl:space-x-reverse">
      <a href="#" class="flex items-center space-x-3">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="House Rent Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">House Rent</span>
      </a>
      <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
    </div>
    <div class="flex items-center space-x-3 ml-auto">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <a href="/" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Notification</a>
        </li>
        <li>
          <a href="/ownerprofile"><img src={userprofile} class="h-10 w-10 rounded-full cursor-pointer"  alt="Profile Picture" /></a>
          
        </li>
      </ul>
    </div>
  </div>
</nav> */
<nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <a href="#" className="flex items-center space-x-3">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="House Rent Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">House Rent</span>
      </a>
      <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
    </div>
    <div className="flex items-center space-x-3 ml-auto">
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <a href="/" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Notification</a>
        </li>
        <li>
          <a href="/ownerprofile"><img src={userprofile} className="h-10 w-10 rounded-full cursor-pointer"  alt="Profile Picture" /></a>
          
        </li>
      </ul>
    </div>
  </div>
</nav>   
}

{/* nav bar closes here */}


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
                Add House 
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* toast for registration */}
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default Ownerlanding

