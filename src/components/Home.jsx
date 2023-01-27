import TitleBar from "./TitleBar"
import SignupButton from './SignupButton'
import LoginButton from './LoginButton'
import {  useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Home = ()=>{
    const navigate=useNavigate()
    useEffect(() => {
     const auth=localStorage.getItem('token');
     if(auth)
     {
        navigate('/home')
     }

    }, [])
    
    return (
        <>
            <TitleBar/>
            <div className="home-page">
                <div className="home-img">
                    <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhcml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="gandu" />
                </div>
                <div className="home-content">
                    <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet volutpat consequat mauris nunc congue nisi. Suscipit adipiscing bibendum est ultricies. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Aenean et tortor at risus viverra adipiscing at in. Vitae semper quis lectus nulla at volutpat diam. Ac feugiat sed lectus vestibulum. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Posuere morbi leo urna molestie at elementum eu facilisis. Aliquet enim tortor at auctor urna nunc id. Ante in nibh mauris cursus mattis molestie. Ut tellus elementum sagittis vitae et leo duis ut diam. Sem fringilla ut morbi tincidunt augue interdum. Ipsum suspendisse ultrices gravida dictum fusce.
                    </div>
                    <div className="buttons">
                        <SignupButton/>
                        <LoginButton/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;