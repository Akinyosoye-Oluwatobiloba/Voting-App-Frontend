import React, { useContext, useEffect } from 'react';
import { ContractContext } from '../context/ContractContext';

const VoteTable = () => {
  const { votes, fetchVotes, error } = useContext(ContractContext);

  useEffect(() => {
    fetchVotes();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
  
//  <div className="flex">
//         <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
//           Your Email
//         </label>
//         <button
//           id="dropdown-button"
//           data-dropdown-toggle="dropdown"
//           className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
//           type="button"
//           // onClick={handleDropdownToggle}
//         >
//           All categories{" "}
//           <svg
//             aria-hidden="true"
//             className="w-4 h-4 ml-1"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//               clipRule="evenodd"
//             ></path>
//           </svg>
//         </button>
//         <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
//           <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
//             <li>
//               <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//                 Mockups
//               </button>
//             </li>
//             <li>
//               <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//                 Templates
//               </button>
//             </li>
//             <li>
//               <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//                 Design
//               </button>
//             </li>
//             <li>
//               <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//                 Logos
//               </button>
//             </li>
//           </ul>
//         </div>
//         <div className="relative w-full">
//           <input
//             type="search"
//             id="search-dropdown"
//             className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
//             placeholder="Search Mockups, Logos, Design Templates..."
//             required
//           />
//           <button
//             type="submit"
//             className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             // onClick={handleSubmit}
//           >
//             <svg
//               aria-hidden="true"
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
//             </svg>
//             <span className="sr-only">Search</span>
//           </button>

// </div>



    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Vote name
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            {/* <th scope="col" className="px-6 py-3">
              Image
            </th> */}
            <th scope="col" className="px-6 py-3">
              Candidates and Vote Counts
            </th>
            {/* <th scope="col" className="px-6 py-3">
              Start Time
            </th>
            <th scope="col" className="px-6 py-3">
              End Time
            </th> */}
          </tr>
        </thead>
        <tbody>
          {/* {votes.map((vote, index) => ( */}
            <tr 
            // key={index}
            >
              <td>Nigeria Election</td>
              <td>Vote In your President</td>
              {/* <td>{vote.image}</td> */}
              <td>
                <ul>
                  <li >
                  {/* {vote.candidates.map((candidate, index) => (
                    key={index}>
                      {candidate.name}: {candidate.voteCount} */}
                      Peter Obi: 1200<br/>
                      Bola Tinubu: 1280<br/>
                      Atiku Abubakar: 978
                    </li>
                  {/* ))} */}
                </ul>
              </td>
              {/* <td>{new Date(vote.startTime * 1000).toLocaleString()}</td> */}
              {/* <td>{new Date(vote.endTime * 1000).toLocaleString()}</td> */}
            </tr>
          {/* ))} */}
        </tbody>
      </table>
    
  </div>
  // </div>



  );
};

export default VoteTable;
