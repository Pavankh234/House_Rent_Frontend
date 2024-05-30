import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';



function Ownersignup() {
  const navigate=useNavigate();
  const[values,setValues]=useState({
    name:'',
    email:'',
    phonenumber:'',
   password:'',
  })
  const[isregistered,setIsregistered]=useState(false);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

   const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    axios.post('http://localhost:4000/ownersignup', values)
      .then((res) => {
        console.log("Registered Successfully");
        setIsregistered(true);
      })
      .catch(err => console.error(err));
  };
   if(isregistered){
    navigate('/ownerlogin')
   }


  return (
    <div>
        <section className="h-screen">
      <div className="container h-full px-6 py-24">
        <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* Left column container with background */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          {/* Right column container with form */}
          <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
            <form onSubmit={handleSubmit}>
              {/* Name input */}
              <div className="relative mb-6">
                <input
                  type="text"
                  className="block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear text-neutral-900 placeholder-neutral-500"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                />
              </div>

              {/* Email input */}
              <div className="relative mb-6">
                <input
                  type="text"
                  className="block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear text-neutral-900 placeholder-neutral-500"
                  id="exampleFormControlInput3"
                  placeholder="Emailaddress"
                  name="email"
                  onChange={handleChange}
                />
              </div>

              {/* Phone input */}
              <div className="relative mb-6">
                <input
                  type="text"
                  className="block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear text-neutral-900 placeholder-neutral-500"
                  id="exampleFormControlInput4"
                  placeholder="Phonenumber"
                  name="phonenumber"
                  onChange={handleChange}
                />
              </div>

              {/* Password input */}
              <div className="relative mb-6">
                <input
                  type="password"
                  className="block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear text-neutral-900 placeholder-neutral-500"
                  id="exampleFormControlInput33"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="inline-block w-full rounded bg-orange-500 px-7 py-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-orange-600 focus:bg-orange-600 focus:outline-none focus:ring-0 active:bg-orange-700"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Sign up
              </button>

              {/* Paragraph and login link */}
              <div className="mt-4 flex justify-center">
                <p className="text-neutral-500">Already have an account?</p>
                <a
                  href="/ownerlogin"
                  className="ml-2 text-orange-500 hover:text-orange-700"
                >
                  Log in
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Ownersignup
