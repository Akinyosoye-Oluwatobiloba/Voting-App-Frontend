
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth"

//     const firebaseConfig = {
//         apiKey: "AIzaSyBa0IGUdyizydk-FsEXlH8gHK4BUoMaV0s",
//         authDomain: "web3-voting-app.firebaseapp.com",
//         databaseURL: "https://web3-voting-app-default-rtdb.firebaseio.com",
//         projectId: "web3-voting-app",
//         storageBucket: "web3-voting-app.appspot.com",
//         messagingSenderId: "787856177129",
//         appId: "1:787856177129:web:0c7288bc4af4bf024f3d78",
//         measurementId: "G-GD9SDMXB0X"
//  };
      
//       // initialize firebase
//      const app =initializeApp(firebaseConfig);
//       //initialize variables
//     //   const  auth =  firebase.auth();
//     export const auth = getAuth(app);
//       const database = firebase.database();

//       function register (){
//         // email = document.getElementById('email').value
//         const password = document.getElementById('password').value
//         const first_name = document.getElementById('first_name').value
//         const last_name = document.getElementById('last_name').value
//         const city = document.getElementById('city').value
//         const zip = document.getElementById('zip').value
//         const state = document.getElementById('state').value
//         const text = select.options[select.selectedIndex].text;
//         if (validate_email(email) == false || validate_password(password) == false){
//             alert('Email or password is not appropriate');
//             return 
//             //means to stop running the code
//         }
//       auth.createUserWithEmailAndPassword(email,password)
//       .then(function(){
//         const user = auth.currentUser
//         //to add to database
//         const database_ref = database.ref();

//         //create user data
//         const user_data={
//             email:email,
//             first_name:first_name,
//             last_name:last_name,
//             city:city,
//             zip:zip,
//             // state:state,
//             // text:text
//             // last_login : Date.now()
//         }

//         database_ref.child('users/'+ user.uid).set(user_data);
//         alert('user Created')
//       })
//       .catch(function(error){
//         var error_code = error.error_code
//         var error_message
//         alert('something is wrong')
//       })

//       }



//       function validate_email(email){
//         expression =  /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
//         if(expression.test(email) == true){
//             //email is right
//             return true
//         }else{
//             //email is wrong
//             return false
//         }
//       }
//       function validate_password(password){
//         if(password < 6){
//             return false;
//         }else{
//             return true
//         }
//       }

// function validate_field(field){
//     if(field == null){
//         return false
//     }else{
//         return false
//     }
// }

//     //   export const auth = getAuth(app);
//       auth.languageCode = 'it';
//     //   export const provider = new GoogleAuthProvider();
      