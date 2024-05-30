import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
function Tennentlogin() {

  const navigate=useNavigate();

  const handleRegisterClick=()=>{
    navigate('/tennentsignup');
  }
  //let us take email and password to be state variable as they are dynamic and we need to fetch the response from backend by passiing those//
const [email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[errorMessage,setErrorMessage]=useState('');
const handleSubmit=(event)=>{
  event.preventDefault();
  axios.post('http://localhost:4000/tennentlogin', { email, password })
  .then((res) => {
    console.log(res.data);
    if (res.data.message === 'Login Success') {
      const tennantId = res.data.tennant_id;
      localStorage.setItem('tennant_id', tennantId);
      navigate('/tennentlanding');
    } else {
      setErrorMessage('Invalid Login credentials');
    }
  })
  .catch((err) => {
    console.error(err);
    if (err.response && err.response.status === 401) {
      setErrorMessage('Invalid Login credentials');
    } else {
      setErrorMessage('Error occurred while logging in');
    }
  });
};
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
            <form  method="POST" onSubmit={handleSubmit}>
              {/* Email input */}
              <div className="relative mb-6">
                <input
                  type="text"
                  className="block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear text-neutral-900 placeholder-neutral-500"
                  id="exampleFormControlInput3"
                  placeholder="Email address"
                  name="email"
                  onChange = {e => setEmail(e.target.value)}
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
                  onChange = {e => setPassword(e.target.value)}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="inline-block w-full rounded bg-orange-500 px-7 py-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-orange-600 focus:bg-orange-600 focus:outline-none focus:ring-0 active:bg-orange-700"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Sign in
              </button>

              {/* Paragraph and register link */}
              <div className="mt-4 flex justify-center">
                <p className="text-neutral-500">Don't have an account?</p>
                <a
                  href="/tennentsignup"
                  className="ml-2 text-orange-500 hover:text-orange-700"
                  onClick={handleRegisterClick}
                >
                  Register now
                </a>
                {errorMessage && <p className="mt-2 text-center text-sm text-red-500">{errorMessage}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

      
    </div>
  )
}

export default Tennentlogin

