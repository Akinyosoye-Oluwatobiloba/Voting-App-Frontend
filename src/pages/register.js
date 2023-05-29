import React, { Component, useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/design.module.css'
import Script from 'next/script'

export default function register(){
  function register (){
    // email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const first_name = document.getElementById('first_name').value
    const last_name = document.getElementById('last_name').value
    const city = document.getElementById('city').value
    const zip = document.getElementById('zip').value
    const state = document.getElementById('state').value
    const text = select.options[select.selectedIndex].text;
    if (validate_email(email) == false || validate_password(password) == false){
        alert('Email or password is not appropriate');
        return 
        //means to stop running the code
    }
  auth.createUserWithEmailAndPassword(email,password)
  .then(function(){
    const user = auth.currentUser
    //to add to database
    const database_ref = database.ref();

    //create user data
    const user_data={
        email:email,
        first_name:first_name,
        last_name:last_name,
        city:city,
        zip:zip,
        // state:state,
        // text:text
        // last_login : Date.now()
    }

    database_ref.child('users/'+ user.uid).set(user_data);
    alert('user Created')
  })
  .catch(function(error){
    var error_code = error.error_code
    var error_message
    alert('something is wrong')
  })

  }
    return (
      <>
    <Script src="https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js" />
    <Script src="https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js" />
    
 <div className={styles.register}>
    <div className='relative top-5 flex flex-row w-full'>
<div>

      <img className="mx-7 md:mx-14  h-12 w-auto" src='/icon1.png' width={25} height={25} alt="hand"/>
</div>
      {/* how to move a item to the right in navbar */}
      <div className={styles.register__sign}>
        <Link href='/login'>
        <button type='button' className="btn btn-primary  baseline mr-4 w-30 bg-blue-900   float-end">
Login →
</button>
        </Link>
            
        <p className='float-end text-xs md:text-base no-underline md:mx-4 mx-2 mt-2'>
         <a href='' className='no-underline text-slate-700' >
          Already have an account?
          </a> 
        </p>
      </div>
    </div>
<div className="flex mt-10 items-center w-screen justify-center px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-md ">
    <div className='mt-6 pt-0'>
      <h2 className="mt-0 text-center text-xl font-bold tracking-tight text-gray-900">
        Sign up</h2>
    </div>
    <form class="w-full max-w-lg" id='registerForm'>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input id='first_name' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input  id='last_name' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input id='password' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3  mb-2">
    <div class="w-full md:w-1/3 px-1 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input id='city' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    <div class="w-full md:w-1/3  mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select id='state' class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">   
<option>...</option>
<option>ABUJA FCT</option>
<option>ABIA</option>
<option>ADAMAWA</option>
<option>AKWA IBOM</option>
<option>ANAMBRA</option>
<option>BAUCHI</option>
<option>BAYELSA</option>
<option>BENUE</option>
<option>BORNO</option>
<option>CROSS RIVER</option>
<option>DELTA</option>
<option>EBONYI</option>
<option>EDO</option>
<option>EKITI</option>
<option>ENUGU</option>
<option>GOMBE</option>
<option>IMO</option>
<option>JIGAWA</option>
<option>KADUNA</option>
<option>KANO</option>
<option>KATSINA</option>
<option>KEBBI</option>
<option>KOGI</option>
<option>KWARA</option>
<option>LAGOS</option>
<option>NASSARAWA</option>
<option>NIGER</option>
<option>OGUN</option>
<option>ONDO</option>
<option>OSUN</option>
<option>OYO</option>
<option>PLATEAU</option>
<option>RIVERS</option>
<option>SOKOTO</option>
<option>TARABA</option>
<option>YOBE</option>
<option>ZAMFARA</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
    </div>
  </div>
  <div  className='text-center mt-4'>
    <a href="">
    <button type='submit' onSubmit={register} className='btn btn-primary'>
        Sign Up
    </button>
    </a>
  </div>
</form>
  </div>
</div>

        </div>
        </>
  )
}
