import React from 'react'
import Link from 'next/link'
import styles from '../styles/design.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiFillFacebook} from 'react-icons/ai';
import {FcGoogle} from  'react-icons/fc';
import Script from 'next/script'

import {auth, provider} from '../config/firebase.js'
import { createUserWithEmailAndPassword,  signOut}  from 'firebase/auth'
import {useState}  from 'react'


  export default function  Login () {
    const [email, setEmail] =  useState("");
    const [password, setPassword] =  useState("")
  
    console.log(auth?.currentUser?.email);
    
    const signIn = async()=>{
        try{
            return(
                await createUserWithEmailAndPassword(auth, email, password)
                );
            }catch(err){
                console.error(err);
            }
    };

    const logout = async()=>{
        try{
            // return(
                await signOut(auth);
                // );
            }catch(err){
                console.error(err);
            }
    }
    
  return (  
    <>

 <div className={styles.login}>
    <div className='relative top-5 flex flex-row w-full'>
<div>

      <img className="mx-7 md:mx-14  h-12 w-auto" src='./hi.svg' width={25} height={25} alt="hand"/>
</div>

      <div className={styles.login__sign}>
        <Link href='/register'>
        <button type='button' className="btn btn-primary  baseline mr-4 w-30 bg-blue-900   float-end">
Sign up →
</button>
        </Link>
        <p className='float-end text-xs md:text-base no-underline md:mx-4 mx-2 mt-2'>
         <a href='' className='no-underline text-slate-700' >
          Don't have an account?
          </a> 
        </p>
      </div>
    </div>
<div className="flex mt-16 items-center w-screen justify-center px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-md ">
    <div className='mt-6 pt-0'>
      <h2 className="mt-0 text-center text-xl font-bold tracking-tight text-gray-900">
        Sign in to your account</h2>

    </div>
    <form id='loginForm' className="mt-8 space-y-6  shadow-2xl bg-[#ffff]" action={'/login'} method="POST">

      <div className="flex flex-col space-y- m-10  rounded-md ">

        <div className='pt-10 '>
          <label for="email-address" className=' font-semibold mb-2'>Email</label><br/>

          <input  name="email" id='emailid'
     onChange={(e)=>setEmail(e.target.value)}
          type="email" autocomplete="email" required className="w-60 rounded-md md:w-80 border-0 py-1.5 bg-slate-100 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="e.g johndoe@gmail.com"/>
        </div>
        <div>
          <label for="password" className="font-semibold mt-4 mb-2">Password</label>
          <input id="password" 
      onChange={(e)=>setPassword(e.target.value)}
          
          name="password" type="password" autocomplete="current-password" required className="relative block w-60 rounded-md md:w-80 border-0 bg-slate-100 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password" />
        </div>
      <div>
        <button type="submit" 
        className="btn btn-primary mt-8 w-60 md:w-80 bg-blue-700"
        onClick={signIn}
        
        >
          Sign in
        </button>
        </div>
      <div className="flex flex-row md:inline mt-8 w-[100%] pr-4  mb-8 justify-between">
        
          <p href="#" className="md:text-xs text-sm  no-underline ml-4 text-slate-700 inline hover:text-indigo-500">Forgotten your password?</p>
      
    <Link href="/passwordreset" className="md:text-xs text-sm no-underline mx-4 text-blue-800 md:font-semibold hover:text-indigo-900">Reset Password</Link>
        
      </div>
      <div className='flex flex-row md:ml-4 mt-0 mb-28'>
        <button type='button' className='inline text-sm w-30 mx-18 absolute pl-3 flex-row btn btn-primary'>
        <AiFillFacebook className='inline'/>  <p className='inline'>Facebook</p>
        </button>
        <button type='button' className='btn btn-light inline text-sm w-32 md:w-34 md:ml-40 ml-36 absolute flex-row '>
        <FcGoogle className='inline'/> 
         <p className='inline'> Google</p>
        </button>
      </div>

      </div>
    </form>
  </div>
</div>

        </div>
        </>
  )
}
// export default Login