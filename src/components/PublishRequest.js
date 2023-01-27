import React, { Component, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaShareAlt } from 'react-icons/fa'
import CustomButton from './Button'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import { TagsInput } from 'react-tag-input-component'

import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { FiLogIn } from 'react-icons/fi'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#f3f3f3',
    boxShadow: 24,
    p: 4,
    fontFamily: '"Cascadia Code",Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace',
};


export default function BasicModal(props) {
    const [tags, setTags] = React.useState(['']);
    const removeTags = indexToRemove => {
        setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };
    const addTags = event => {
        if (event.target.value !== "") {
            setTags([...tags, event.target.value]);
            props.selectedTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };
    const navigate = useNavigate();
    const [note, setnote] = useState({ title: "", briefDescription: "",description:"" });
    const handlechange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
        // console.log(note);
    }

    const handlesubmit = async (e) => {
        console.log("hello")
        e.preventDefault();
        const title = note.title
        const briefDescription = note.briefDescription
        const description = note.description
        const authtoken=localStorage.getItem('token');
        console.log(typeof(authtoken));
        const tags = selected;
        console.log(title, briefDescription, description, tags, authtoken);
        const response = await fetch("http://localhost:5000/api/upload/addcard", {
            method: 'POST',
            headers: {
                'auth-token':(localStorage.getItem('token')),
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({ title, briefDescription ,description,tags}),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            
            console.log("success mf")
            navigate('/home');

        }
        else {
            console.log("invalid cred")
        }

    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [selected, setSelected] = useState([]);

    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };
    return (

        <div>
            <div className="pushlish-request" onClick={handleOpen}>

                <CustomButton title="Publish Your Request" />

            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style} style={{
                    "display": "flex", "gap": "0.5rem", "height": "95%", "width": "60%", "borderRadius": "1rem", "padding": "3rem","overflow":"auto"
                }}>

                    <MDBContainer className="d-flex flex-column">

                        <MDBTabsContent>

                            <MDBTabsPane show={justifyActive === 'tab1'}>

                                <div className="close-icon">
                                    <CloseIcon onClick={handleClose} />
                                </div>


                                <MDBInput wrapperClass='mb-4' label='Title' id='form1' name='title' type='text' onChange={handlechange} />
                                <MDBInput wrapperClass='mb-4' label='Brief Description' id='form1' name='briefDescription' type='text' onChange={handlechange} />
                                <div className="Description" style={{ "marginBottom": "2rem" }}>
                                    <textarea name='description' style={{ "height": "6rem", "width": "100%", "border": "0.1px solid  rgb(219, 214, 214)", "borderRadius": "3px" }} onChange={handlechange}>
                                    </textarea>
                                    Description
                                </div>
                                <div className="tags">
                                <TagsInput
                                    value={selected}
                                    onChange={setSelected}
                                    name="tags"
                                    placeHolder="add relevant tags"
                                />
                                <p style={{"marginTop":"0.8rem"}}>
                                Tags
                                </p>
                                </div>
                                <div className="publish-button" onClick={handlesubmit}>
                                <CustomButton title="Publish"/>
                                </div>
                                
                            </MDBTabsPane>

                        </MDBTabsContent>

                    </MDBContainer>
                   
                </Box>
                
            </Modal>
           
        </div>
    );
}


