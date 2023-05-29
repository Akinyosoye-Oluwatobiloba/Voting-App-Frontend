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
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Candidates
            </th>
            <th scope="col" className="px-6 py-3">
              Start Time
            </th>
            <th scope="col" className="px-6 py-3">
              End Time
            </th>
          </tr>
        </thead>
        <tbody>
          {votes.map((vote, index) => (
            <tr key={index}>
              <td>{vote.title}</td>
              <td>{vote.description}</td>
              <td>{vote.image}</td>
              <td>
                <ul>
                  {vote.candidates.map((candidate, index) => (
                    <li key={index}>
                      {candidate.name}: {candidate.voteCount}
                    </li>
                  ))}
                </ul>
              </td>
              <td>{new Date(vote.startTime * 1000).toLocaleString()}</td>
              <td>{new Date(vote.endTime * 1000).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VoteTable;
