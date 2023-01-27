import React, { useEffect } from 'react'

function Card(props) {

	const func=async()=>{
        const response=await fetch(`http://localhost:5000/api/upload/deletecard/${props._id}`,{
            method: 'DELETE',
			headers: {
				'auth-token':localStorage.getItem('token'),
				'Content-Type': 'application/json',
			  },

          });
          const json=await response.json();
		  window.location.reload();
        }

       



  return (
 <div className="Card">
    <div className="courses-container">
	<div className="course">
		<div className="card-preview">
			<h6>{props.author.name}</h6>
			<h2>{props.title}</h2>
			<a className='card-link' href="#">View full details <i className="fas fa-chevron-right"></i></a>
		</div>
		<div className="course-info">
			<div className="short-desc">
                {props.briefDescription}
            </div>
            <div className="btn-container">
                 <button className="button" onClick={()=>func()}>Delete</button>
            </div>
			
		</div>
	</div>
</div>
 </div>
  )
}

export default Card