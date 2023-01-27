import React, { Component, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaShareAlt } from 'react-icons/fa'
import CustomButton from './Button'
import CloseIcon  from '@mui/icons-material/Close';
import {BsFillPersonFill} from 'react-icons/bs'

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
import {  useNavigate } from 'react-router-dom';
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
    const navigate=useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };
    return (

        <div>
            <div className="Card8Share" onClick={handleOpen}>

            <p className='card-link' style={{"fontSize":"0.7rem"}}>View full details <i className="fas fa-chevron-right"></i></p>


            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{
                    "display": "flex", "gap": "0.5rem", "height": "80%", "width": "60%", "borderRadius": "1rem", "padding": "3rem","overflow":"auto"
                }}>

                            <div className="view-details">
                            <div className="close-icon">
                                    <CloseIcon onClick={handleClose} />
                                </div>
                                <div className="view-details-title">
                                    <h3>
                                     {props.title}
                                    </h3>
                                </div>
                                <div className="view-details-author">
                                      <BsFillPersonFill/>  {props.author.name}
                                </div>
                                <div className="view-details-fulldetails">
                               {props.description}
                                </div>
                                <div className="view-details-pay">
                                    <CustomButton title="Donate now"/>
                                </div>
                            </div> 

                </Box>
            </Modal>
        </div>
    );
}