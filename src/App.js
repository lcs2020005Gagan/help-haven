import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Receiver from './components/Receiver';
import NoteState from './context/notes/NoteState';
import Tag from './components/Tag';
import Footer from './components/Footer'


function App() {
  return (
    <>
    <NoteState>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Main/>} />
      <Route path='/receiver' element={<Receiver/>} />
      <Route path='/tag/:tagId' element={<Tag/>} />
    </Routes>
    </BrowserRouter>
    </NoteState>
    <Footer/>
    </>
  );
}

export default App;



// {tagArticles&&tagArticles.map((element) => {
//   return <div className="d-flex justify-content-center " key={randd++} >
//      <Card {...element}/>
//   </div>
// })}
// {
//   !tagArticles&&<NoContent/>
// }

// const params=useParams()
// const host="http://localhost:5000"

// var randd=0
// const [articles, setArticles] = useState(null)
// const [tagArticles,settagArticles]=useState([])
// useEffect(() => {
//     const func=async()=>{
//     const response=await fetch(`${host}/api/upload/getallcards`,{
//         method: 'GET',
//       });
//       const json=await response.json();
//       setArticles(json);  
//     }
// func();
// },[])
// useEffect(()=>{
//     const pushtagArticles=async()=>{
//         if(articles)
//         for(let i=0;i<articles.length;i++)       
//         {
//             for(let j=0;j<articles[i].tagArticles.length;j++)
//             {
//                 if(articles[i].tagArticles[j]===params.tagId&&tagArticles.includes(articles[i])===false)
//                 {
//                     var flag=true;
//                     for(let k=0;k<tagArticles.length;k++)
//                     {
//                        if(tagArticles[k]._id===articles[i]._id)
//                         {
//                             flag=false;
//                             break;
//                         }
//                     }
//                     if(flag)
//                     settagArticles( tagArticles => [...tagArticles, articles[i]]);
//                 }
//             }
//         }
//     }
//     pushtagArticles();
//     // console.log(tagArticles);
// })