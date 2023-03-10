import React from 'react'
import CustomButton from './Button'
import Card from './Card'
import ReceiverCard from './ReceiverCard'
import PublishRequest from './PublishRequest'
import {Link } from "react-router-dom"
import { useEffect,useState } from 'react'
import NoContent from './NoContent'
function Receiver() {
    const host="http://localhost:5000"
var rand=0
const [userProfile, setUserProfile] = useState({
    name:"",
    email:"",
    cardId:[],
    likedCards:[],
  })
    useEffect(() => {
        const getUserProfile=async ()=>{
              const response=await fetch(`${host}/api/auth/getuser`,{
                  method: 'POST',
                  headers: {
                    "auth-token": localStorage.getItem('token')
                  },
                });
          
                const json=await response.json();
                // console.log(json);
                setUserProfile({
                    name:json[0].name,
                    email:json[0].email,
                    cardId:json[0].cardId,
                    likedCards:json[0].likedCards
                  });             
              }
              getUserProfile();
              console.log(userProfile)
    }, [])
    
  return (
    <div className='receiver'>
        <div className="receiver-navbar">
             <div className="switch-to-donor">
                <PublishRequest/>
            </div>
            <div className="receiver-logo">
                    <img src="https://images.unsplash.com/photo-1584441405886-bc91be61e56a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcml0eSUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" />
            </div>
            <div className="switch-to-donor">
                <Link to="/home">

                <CustomButton title="Switch to Donor"/>
                </Link>
            </div>
        </div>
        <div className="receiver-content">
        {userProfile.cardId.map((element) => {
    return <div className="d-flex justify-content-center " key={rand++} >
       <ReceiverCard {...element}/>
    </div>
})}
{
    !userProfile.cardId&&<NoContent/>
}

            
        </div>
    </div>
  )
}

export default Receiver