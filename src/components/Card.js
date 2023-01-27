import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ViewDetails from './ViewDetails'

function Card(props) {
	const navigate = useNavigate();
	const [user, setUser] = useState();
	const host="http://localhost:5000"
    const handleUpvote=async()=>{
		// console.log(clicked);

			const card_id=props._id
			const response=await fetch(`${host}/api/upload/updateuser`,{
				method: 'POST',
				headers: {
					'auth-token':localStorage.getItem('token'),
					'Content-Type': 'application/json',
				  },
				  body: JSON.stringify({card_id}),	
			  });
			  const func=async()=>{
				const response=await fetch(`${host}/api/auth/getuser`,{
					method: 'POST',
					headers: {
						'auth-token':localStorage.getItem('token'),
						'Content-Type': 'application/json',
					  },
						  });
				  const json=await response.json();
				  setUser(json)
				  console.log(user);
				  console.log(user&&user[0]?.likedCards.includes(props._id));
				//   console.log(json)
				}
				func();
		navigate('/home');
	}
	
	    useEffect(() => {
			const func=async()=>{
			const response=await fetch(`${host}/api/auth/getuser`,{
				method: 'POST',
				headers: {
					'auth-token':localStorage.getItem('token'),
					'Content-Type': 'application/json',
				  },
					  });
			  const json=await response.json();
			  setUser(json)
			//   console.log(json)
			}
			func();

		},[])


	

return (
 <div className="Card">
    <div className="courses-container">
	<div className="course">
		<div className="card-preview">
			<h6>{props.author.name}</h6>
			<h2>{props.title}</h2>
			<ViewDetails title={props.title} author={props.author} description={props.description}/>
		</div>
		<div className="course-info">
			<div className="short-desc">
                {props.briefDescription}
            </div>
            <div className="btn-container">
                 {user&&user[0].likedCards?.includes(props._id)?<div className='button'>Upvoted</div>:<button className="button" onClick={handleUpvote}>Upvote</button>}
            </div>
			
		</div>
	</div>
</div>
 </div>
  )
}

export default Card