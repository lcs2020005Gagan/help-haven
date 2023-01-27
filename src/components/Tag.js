import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CustomButton from './Button.jsx'
import Card from './Card.js';
import {FaHashtag} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import noteContext from '../context/notes/noteContext'
import { useNavigate,useParams } from "react-router-dom";
import { useEffect,useState ,useContext} from 'react';
import NoContent from './NoContent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from '../assets/helphaven.png'

const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    
    
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const host="http://localhost:5000"

    const navigate = useNavigate();
    const context=useContext(noteContext);
    const {allArticles,getAllArticles}=context;
    var rand=0
    var randd=0
    const params=useParams()

    const [articles, setArticles] = useState(null)
    const [tags,setTags]=useState([])
    const [tagArticles,settagArticles]=useState([])

    useEffect(() => {
       

        const func=async()=>{
        const response=await fetch(`${host}/api/upload/getallcards`,{
            method: 'GET',
          });
          const json=await response.json();
          setArticles(json);  
        }

       
        func();
        // console.log(articles);
    },[])
    useEffect(()=>{
        const pushTags=async()=>{
            if(articles)
            for(let i=0;i<articles.length;i++)       
            {
                for(let j=0;j<articles[i].tags.length;j++)
                {
                    if(tags.includes(articles[i].tags[j])===false)
                    {
                        setTags( tags => [...tags, articles[i].tags[j]]);

                    }
                }
            }
        }
        pushTags();
        // console.log(tags);
    })
    useEffect(()=>{
        const pushtagArticles=async()=>{
            console.log(params.tagId)
            if(articles)
            for(let i=0;i<articles.length;i++)       
            {
                for(let j=0;j<articles[i].tags.length;j++)
                {
                    if(articles[i].tags[j]===params.tagId&&tagArticles.includes(articles[i])===false)
                    {
                        var flag=true;
                        for(let k=0;k<tagArticles.length;k++)
                        {
                           if(tagArticles[k]._id===articles[i]._id)
                            {
                                flag=false;
                                break;
                            }
                        }
                        if(flag)
                        settagArticles( tagArticles => [...tagArticles, articles[i]]);
                    }
                }
            }
        }
        pushtagArticles();
        console.log(tagArticles);
    })

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div>
                <div className="navbar">

                   
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <img src={logo} alt="" />
                        <Link to="/receiver">

                        <CustomButton title="Switch To Receiver" />
                        </Link>
                </div>
        <div >
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                        <h3 style={{"textAlign":"center"}}>Tags</h3>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <List>
                    {tags.map((text) => (
                        <ListItem key={text} disablePadding>
                            <Link to={`/tag/${text}`} className='card-link2'>
                            <ListItemButton>
                              {/* <FaHashtag/> */}
                                <span className='hash-symbol'>#</span>
                                <ListItemText  className="tag-words" primary={text}  />
                            </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
               </Drawer>
            </div>
         

                <div className="cards">
                {tagArticles&&tagArticles.map((element) => {
  return <div className="d-flex justify-content-center " key={randd++} >
     <Card {...element}/>
  </div>
})}
{
  !tagArticles&&<NoContent/>
}
                </div>
               
            </div>
    );
}
