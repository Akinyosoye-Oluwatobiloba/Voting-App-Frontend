import Link from 'next/link'
import { useContext }  from 'react'
import {ContractContext, ContractProvider} from '../context/ContractContext'
import styles from '../styles/design.module.css'


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Create() {
  const { connectWallet,handleSubmit,description,image,setDescription,setImage,error,setError,voteIndex,setVoteIndex,title,setTitle,candidateNames,setCandidateNames,duration,setDuration } =  useContext(ContractContext);
  return (
 <div className=''>
 <div className='relative top-5 flex flex-row w-full'>
 <a href="/" className="flex no-underline items-center ml-6 pl-2.5 mb-5">
         {/* <img src="./hi.svg" className="h-6 mr-3 sm:h-7" alt="Cipher Polls" /> */}
         <span className="self-center text-xl font-semibold whitespace-nowrap ">Cipher Polls</span>
      </a>

   <div className={styles.login__sign}>
     <Link href=''>
     <button type='button' 
     onClick={connectWallet}
     className="btn btn-primary  baseline mr-4 w-30 bg-blue-900   float-end">
Connect Wallet →
</button>
     </Link>
     <p className='float-end text-xs md:text-base no-underline md:mx-4 mx-2 mt-2'>
      <a href='' className='no-underline text-slate-700' >
      Have you connected your wallet?
       </a> 
     </p>
   </div>
 </div>
<div className="flex mt-2 items-center w-screen justify-center px-4 sm:px-6 lg:px-8">
<div className="w-full max-w-md ">
 <div className='mt-6 pt-0'>
   <h2 className="mt-0 text-center text-xl font-bold tracking-tight text-gray-900">
    Vote Creation</h2>

 </div>
 <form id='loginForm' onSubmit={handleSubmit} className="mt-8 space-y-6  shadow-2xl bg-[#ffff]" action={'/login'} method="POST">

   <div className="flex flex-col space-y- m-10  rounded-md ">
{/* vote index */}
     <div className='pt-3 '>
       <label htmlFor="vote index" className=' font-semibold mb-2'>Vote Index</label><br/>
       <input  name="text" id='voteindex'
       value={voteIndex}
   onChange={(e) => setVoteIndex(e.target.value)}
       type="number"  required className="w-60 rounded-md md:w-80 border-0 py-1.5 bg-slate-100 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
       placeholder="Enter Vote Index"/>
     </div>
     {/* vote title */}
     <div className='pt-10 '>
       <label htmlFor="title" className=' font-semibold mb-2'>Vote Title</label><br/>
       <input  name="title" id='vote title'
      value={title}
            onChange={(e) =>setTitle(e.target.value)}
       type="email" required className="w-60 rounded-md md:w-80 border-0 py-1.5 bg-slate-100 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
       placeholder="Enter Vote Title"/>
     </div>
     {/* Vote Description */}
     <div className='pt-10 '>
       <label htmlFor="Description" className=' font-semibold mb-2'>Vote Description</label><br/>
       <input  name="description" id='vote description'
      value={description}
            onChange={(e) =>setDescription(e.target.value)}
       type="text" required className="w-60 rounded-md md:w-80 border-0 py-1.5 bg-slate-100 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
       placeholder="Enter Vote Description"/>
     </div>
     {/* Vote Image */}
     <div className='pt-10 '>
       <label htmlFor="image" className=' font-semibold mb-2'>Vote Image</label><br/>
       <input  name="image" id='vote image'
      value={image}
            onChange={(e) =>setImage(e.target.value)}
       type="text" required className="w-60 rounded-md md:w-80 border-0 py-1.5 bg-slate-100 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
       placeholder="Enter Vote Image Url"/>
     </div>
     {/* candidates Name */}
     <div className='pt-10 '>
       <label htmlFor="candidates-names" className=' font-semibold mb-2'>Candidates In Array Format </label><br/>
       <input  name="candidate-names" id='candidates-names'
      value={candidateNames}
      onChange={(e) => setCandidateNames(e.target.value)}
       type="candidate names"  required className="w-60 rounded-md md:w-80 border-0 p-2 py-1.5 bg-slate-100 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
       placeholder="Enter Candidate Names(comma-separated)"/>
     </div>
     {/* Vote Duration*/}
     <div>
       <label htmlFor="vote-duration" className="font-semibold mt-4 mb-2">Vote Duration</label>
       <input id="vote-duration" 
       value={duration}
        onChange={(e) => setDuration(e.target.value)}
       name="vote-duration" type="number"  required className="relative block w-60 rounded-md md:w-80 border-0 bg-slate-100 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password" />
     </div>
   <div>
     {/* {error && <div>Error: <p>{toString(error.message)}</p></div>} */}
     <button type="submit" 
      onClick={handleSubmit}
     className="btn btn-primary mt-8 mb-20 w-60 md:w-80 bg-blue-700"     
     >
      CREATE VOTE
     </button>
     </div>
  
   </div>
 </form>
  {/* error message */}
</div>
</div>

     </div>
  )
}
