import { useState, forwardRef } from 'react'
import { Stack,Container, Button, Dialog, DialogActions, DialogTitle, Slide, DialogContent} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import StandardTextField from './StandardTextField';
import RadioBtn from './RadioBtn';
import {CREATE_TASK} from '../utils/actions'
import { useSelector, useDispatch } from "react-redux";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function CreateItem() {
    const task = useSelector((state) => state.createTask)
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const importance = {title:'Importance', labels:['Urgent','Normal', 'Low']}
    // eslint-disable-next-line
    const [radio,setRadio] = useState(importance)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addToList = (e) => {
        
        setOpen(false)
    }
    
    return (
        <Container className='addBtnContainer'>
            <Button className='addToQueueBtn' variant="outlined" onClick={handleClickOpen}>
                <AddIcon sx={{ fontSize: "50px" }} />
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    Enter your Task:
                </DialogTitle>
                <DialogContent>
                    <Stack spacing={3}>
                    {<StandardTextField label='Task' />}
                    {<RadioBtn props = {radio}/>}
                    </Stack>
                </DialogContent>

                <DialogActions>
                    <Button onClick={addToList}>Add to List</Button>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}

export default CreateItem