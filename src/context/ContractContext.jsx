import { createContext, useState,useEffect } from "react";
import  { ethers } from "ethers";
import { contractABI, contractAddress } from '../utils/constants';

import Web3Modal from 'web3modal';
import  {Web3Provider}  from '@ethersproject/providers';
import { Description } from "@ethersproject/properties";

export const ContractContext = createContext();

const ContractProvider = ({ children }) => {

    const [voteIndex, setVoteIndex] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [candidateNames, setCandidateNames] = useState('');
    const [duration, setDuration] = useState('');
    const [contract, setContract] = useState(null);
    const [currentAccount, setCurrentAccount] = useState("");
    const [error, setError] = useState(null);
    const [selectedCandidate, setSelectedCandidate] = useState('');
    
    const [votes, setVotes] = useState([]);

    const fetchContract = (signerOrProvider) =>
    new ethers.Contract(contractAddress, contractABI, signerOrProvider);
    
    //check if wallet is connected to the blockchain

    const checkIfWalletIsConnected = async () => {
            try{
                    if(!window.ethereum) return alert("please install Metamask on your browser, preferably use Chrome browser");   
                    const accounts = await window.ethereum.request({method: 'eth_accounts' });         
                    if(accounts.length){
                        setCurrentAccount(accounts[0]);
                            console.log(accounts[0]);
                    }else{
                        setError(error.message)
                        console.log("No accounts found")
                    }
                }catch(error){
                    setError(error.message);
                console.log(error);
                console.log("No ethereum Object");
            }
        }

    //connect wallet function
        const connectWallet = async () => {
            try{
                if(!window.ethereum) return alert("Please install MetaMask on your browser, preferably use Chrome browser");//check if there's no etherium object
                const accounts = await window.ethereum.request({method: 'eth_requestAccounts' });
                setCurrentAccount(accounts[0]);
                console.log(accounts);
            }catch(error){
                setError(error.message);
                console.log(error);
                console.log("No ethereum Object.");
            }
        }
        const connectToSmartContract= async() =>{
            try{
                const web3Modal = new Web3Modal();
                const connection = await web3Modal.connect();
                console.log(connection);
                const provider = new ethers.providers.Web3Provider(connection);
                const signer = provider.getSigner ();
                const contract = fetchContract(signer);
                console.log(contract);
                return contract;
                setContract(contract);
            }
            catch(error){
                setError(error.message);
                console.log(error)
                return null;
            }
    }
    // create vote
        const handleSubmit = async (event) => {          
            event.preventDefault();
            const candidateNamesArray = candidateNames.split(',');
            try {
                if (!voteIndex || !title||!description||!image || !candidateNamesArray || !duration)
                     return console. log("Input data is missing");

                     const contract = await connectToSmartContract();
                     if (contract) {
                     await contract.createVote(
                         Number(voteIndex),
                         title,
                         description,
                         image,
                         candidateNamesArray,
                         Number(duration)
                         );
                         console.log("Voting Successful")
                        }else{
                            setError("Failed to connect to the smart contract.");
                            console.log("Failed to connect to the smart contract.");
                        }
              // Voting successful
            }catch (error) {
                setError(error.message.toString());
            console.log(error)
            }
        }
        //cast vote
        const Submit = async (event) => {
            event.preventDefault();
            try{
                if (!voteIndex || !selectedCandidate)
                return console. log("Input data is missing");

              const contract = await connectToSmartContract();
              if (contract) {
                await contract.castVote(
                    Number(voteIndex), selectedCandidate
                    );
                console.log("Vote cast Successful");
              }else {
                setError("Failed to Cast Vote.");
                console.log("Failed to Cast Vote.");
              }
            }catch (error) {
              setError(error.message);
              console.log(error);
            }
          };

          //result
          const fetchVotes = async () => {
            try {
              const contract = await connectToSmartContract();
          
              const voteCount = await contract.voteCount();
              const votes = [];
          
              for (let i = 1; i <= voteCount; i++) {
                const vote = await contract.getVote(i);
          
                // Extract the vote count for each candidate
                const voteCounts = vote[6];
          
                // Create an array of candidates with their respective vote counts
                const candidatesWithVoteCount = vote[3].map((candidate, index) => ({
                  ...candidate,
                  voteCount: voteCounts[index],
                }));
          
                // Create an updated vote object with the modified candidates array
                const updatedVote = {
                  title: vote[0],
                  description: vote[1],
                  image: vote[2],
                  candidates: candidatesWithVoteCount,
                  startTime: vote[4],
                  endTime: vote[5],
                };
          
                votes.push(updatedVote);
              }
              setVotes(votes);
            } catch (error) {
              console.log(error);
            }
          };
        
    // useEffect(()=>{
    //     connectToSmartContract();
    //     fetchVotes();
    // },[]);

      return(
        <ContractContext.Provider value = {{Submit,votes,error,fetchVotes,setError,description,image,setDescription,setImage,selectedCandidate, setSelectedCandidate,connectWallet,currentAccount,handleSubmit,voteIndex,setVoteIndex,title,setTitle,candidateNames,setCandidateNames,duration,setDuration}}>
        {/* {error && <div>Error: {JSON.stringify(error.message)}</div>} */}
        {children}
    </ContractContext.Provider>

      );
}
export default ContractProvider;