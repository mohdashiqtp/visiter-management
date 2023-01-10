import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {

    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    return (
        <div className='Home'>
            <div className="container">

                <Modal
                    onClose={handleClose}
                    open={open}
                    style={{
                        position: 'absolute',
                        border: '2px solid ',
                        backgroundColor: 'gray',
                        boxShadow: '2px solid grey',
                        height: 80,
                        width: 240,
                        margin: 'auto'
                    }}
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Web Portal Visit Management System
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <div className="buttons_div">
                                <Link to='/user'>
                                    <button className='button'>Proceed</button>
                                </Link>
                                <Link to='/'>
                                    <button className='button'>Leave</button>
                                </Link>

                            </div>
                        </Typography>
                    </Box>
                </Modal>

            </div>
        </div>
    )
}

export default Home