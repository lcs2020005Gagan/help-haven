import React from 'react'

function Card(props) {
// const floating_btn = document.querySelector('.floating-btn');
// const close_btn = document.querySelector('.close-btn');
// const social_panel_container = document.querySelector('.social-panel-container');

// floating_btn.addEventListener('click', () => {
// 	social_panel_container.classList.toggle('visible')
// });

// close_btn.addEventListener('click', () => {
// 	social_panel_container.classList.remove('visible')
// });



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
                 <button className="button">Delete</button>
            </div>
			
		</div>
	</div>
</div>
 </div>
  )
}

export default Card