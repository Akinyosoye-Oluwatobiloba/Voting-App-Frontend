import react from'react'

const Votecard=()=>{
  return(
    <div className="max-w-sm ml-40 h-[60%] bottom-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div>

    <a href="#">
        <img 
        className="rounded-t-lg" 
        src='https://cdn.vanguardngr.com/wp-content/uploads/2022/10/2023-Elections.jpg'
         />
    </a>
        </div>
    <div className="p-5">
        <a href="#" className='no-underline'>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Nigerian General Election</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Vote in your Moses Now.</p>
        
    </div>
</div>

  )
}
export default Votecard