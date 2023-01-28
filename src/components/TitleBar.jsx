import logo from  '../assets/helphaven.png'
import Interactive from './Interactive';


const TitleBar = ()=>{
    return(
        <div className="title-bar">
           <Interactive/>
            <div className="logo">
                <img src={logo}/>
            </div>
        </div>
    )
}

export default TitleBar;