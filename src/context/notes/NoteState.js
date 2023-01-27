import react,{useState,useEffect} from "react"
import { useParams } from "react-router-dom";

import NoteContext from "./noteContext"
const NoteState =(props)=>{
    const date = new Date();
    // const {mentorId}=useParams()
    const host="http://localhost:5000"
      
     const strdate=date.toString()
        const initialAllArticles=[]
        const initialAllPrograms=[]
        const recMentorsInitial=[]
        const allMentorsInitial=[]
        const userProfileInitial=[]
        const userProfileSkelInitial=[]
        

        const initialobj=""
        // const initialProfileMentor=[]
  const [allArticles, setAllArticles] = useState(initialAllArticles)
  const [allMentors, setAllMentors] = useState(allMentorsInitial)
  const [recMentors, setRecMentors] = useState(recMentorsInitial)
  const [userProfile, setUserProfile] = useState({
    name:"",
    email:"",
    password:"",
    profileImg:"",
    followedMentors:[],
    enrolledPrograms:[],
    savedForLater:[],
  })
  const [userProfileSkel, setUserProfileSkel] = useState({
    name:"",
    email:"",
    password:"",
    profileImg:"",
    followedMentors:[],
    enrolledPrograms:[],
    savedForLater:[],
  })

  const [obj,setobj]=useState(initialobj)
  const [idi,setidi]=useState("hello");
  const [allPrograms, setAllPrograms] = useState(initialAllPrograms)

  
  
//get all articles
const getAllArticles=async ()=>{
 
    const response=await fetch(`${host}/api/upload/getallcards`,{
        method: 'GET',
      });


      const json=await response.json();
      setAllArticles(json);

}

// //get all programs
// const getAllPrograms=async ()=>{
 
//     const response=await fetch(`${host}/api/upload/getallprograms`,{
//         method: 'GET',
//       });


//       const json=await response.json();
// // console.log(json);
// setAllPrograms(json);

// }

// //update user
//  //update user
//  const updateUser=async (userobj)=>
//  {
    
//      // console.log("inside editnote");
//     //  console.log("inside",userobj);
//      const response=await fetch(`${host}/api/auth/updateuser`,{
//          method: 'POST',
//          headers: {
//            'Content-Type': 'application/json',
//            "auth-token": localStorage.getItem('token')
//          },
//          body: JSON.stringify(userobj)
//        });
//      const json=response.json();
//      setUserProfile({
//       name:json[0].name,
//       email:json[0].email,
//       password:json[0].password,
//       profileImg:json[0].profileImg,
//       followedMentors:json[0].followedMentors,
//       enrolledPrograms:json[0].enrolledPrograms,
//       savedForLater:json[0].savedForLater,
//     });    //  console.log(json);
 
//      // let newNote=JSON.parse(JSON.stringify(notes));
//      // for(let index=0;index<newNote.length;index++)
//      // {
//      //     const element=newNote[index];
//      //     if(element._id===id)
//      //     {
//      //         newNote[index].title=title;
//      //         newNote[index].description=description;
//      //         newNote[index].tag=tag;
//      //         break;
//      //     }
//      // }
//      // setNotes(newNote);
 
//  }


//  //follow mentor
//  const followMentor=async (mentor_id)=>
//  {
    
//      // console.log("inside editnote");
//     //  console.log("inside",mentor_id);
//      const response=await fetch(`${host}/api/auth/followmentor`,{
//          method: 'POST',
//          headers: {
//            'Content-Type': 'application/json',
//            "auth-token": localStorage.getItem('token')
//          },
//          body: mentor_id
//        });
//      const json=response.json();
//      //  console.log(json);
//      setUserProfile({...userProfile,followedMentors:json.followedMentors})
 
//  }
 


      // get user for profile
// const getUserProfile=async ()=>{
//   //  console.log("inside getnotes");
 
//     const response=await fetch(`${host}/api/auth/getuser`,{
//         method: 'POST',
//         headers: {
//           "auth-token": localStorage.getItem('token')
//         },
//       });

//       const json=await response.json();
//       // console.log(json[0].name)
//       setUserProfile({
//         name:json[0].name,
//         email:json[0].email,
//         password:json[0].password,
//         profileImg:json[0].profileImg,
//         followedMentors:json[0].followedMentors,
//         enrolledPrograms:json[0].enrolledPrograms,
//         savedForLater:json[0].savedForLater,
//       });
//       // setUserProfile({...userProfile,...json});
//       // console.log("json1",jsonstr)
//       // console.log("json",userProfile);

//     }

//     //get user profile skel
//     // get user for profile
// const getUserProfileSkel=async ()=>{
//   //  console.log("inside getnotes");
 
//     const response=await fetch(`${host}/api/auth/getuserskel`,{
//         method: 'POST',
//         headers: {
//           "auth-token": localStorage.getItem('token')
//         },
//       });

//       const json=await response.json();
//       // console.log(json[0].name)
//       setUserProfileSkel({
//         name:json[0].name,
//         email:json[0].email,
//         password:json[0].password,
//         profileImg:json[0].profileImg,
//         followedMentors:json[0].followedMentors,
//         enrolledPrograms:json[0].enrolledPrograms,
//         savedForLater:json[0].savedForLater,
//       });
//       // setUserProfile({...userProfile,...json});
//       // console.log("json1",jsonstr)
//       // console.log("json",userProfile);

//     }

//        // get user for profile
// const getMentorProfile=async (mid)=>{
  
//   const response=await fetch(`${host}/api/auth/profile/mentor/${mid}`,{
//     method: 'POST',
//   });
//   const json=await response.json();
//   // console.log("notestate",typeof(mid),mid)
//       // console.log("notestate json",json)
//       setProfileMentor({
//         name:json.name,
//         email:json.email,
//         profileImg:json.profileImg,
//         followers:json.followers,
//         publishedPrograms:json.publishedPrograms,
//         publishedArticles:json.publishedArticles,
//         twitter:json.twitter,
//         github:json.github,
//         instagram:json.instagram,
//       facebook:json.facebook,
//       about: json.about,
//       skills: json.skills,
//       ratingsSum:json.ratingsSum,
//       totalVoted:json.totalVoted,
//       ratings:json.ratings,

//       });
//     //  setProfileMentor()
    

//     }



// //get recommended mentors
// const getRecMentors=async ()=>{
//      const response=await fetch(`${host}/api/auth/recmentors`,{
//         method: 'GET',
//       });


//       const json=await response.json();
//     //   console.log(typeof(json));
// setRecMentors(json);

// }



// //get all mentors
// const getAllMentors=async ()=>{
//     const response=await fetch(`${host}/api/auth/allmentors`,{
//        method: 'GET',
//      });


//      const json=await response.json();
//    //   console.log(typeof(json));
// setAllMentors(json);

// }

// //mentor profile
// const MentorProfile=async (id)=>
// {
   
//     // console.log("inside editnote");
//     const response=await fetch(`${host}/api/upload/profile/mentor/${id}`,{
//         method: 'GET',       
//       });
//     const json=await response.json();
    
// // const jsonstr=JSON.stringify(json);
// // setobj(jsonstr);
// // console.log(obj);
// // useEffect(() => { setidi("hellothere") }, [])
// // console.log(idi);
// return json;
// }



    return(
        // <NoteContext.Provider value={{allArticles,userProfileSkel,getUserProfileSkel,updateUser,allPrograms,getAllArticles,getAllPrograms,MentorProfile,obj,allMentors,userProfile,getUserProfile,getAllMentors,getRecMentors,recMentors,profileMentor,getMentorProfile}}>
        <NoteContext.Provider value={{allArticles,getAllArticles}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;