import { useState, forwardRef } from 'react'
import { Stack,Container, Button, Dialog, DialogActions, DialogTitle, Slide, DialogContent} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import StandardTextField from './StandardTextField';
import RadioBtn from './RadioBtn';
import { useSelector, useDispatch } from "react-redux";
import { CREATE_TASK_MUTATION } from "../utils/mutations";
import { useMutation } from "@apollo/react-hooks";
import { CURRENT_TASK } from '../utils/actions';
import { CREATE_TASK } from '../utils/actions';
import { CONFIRM_ADDITION } from '../utils/actions';
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function CreateItem() {
    const [createTask] = useMutation(CREATE_TASK_MUTATION);
    const task = useSelector((state) => state.createTask)
    const currentTask = useSelector((state) => state.currentTask)
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

    async function addToList(){



        setOpen(false)
        if(task.length > 0){
            task[0].createdAt = Date.now()
            dispatch({
                type:CREATE_TASK,
                createTask: task
            })
        } else {
            dispatch({
                type:CREATE_TASK,
                createTask:[{createdAt:Date.now()}]
            })
        }
        try {
            const {title,importance, createdAt}= task[0]
            const mutationResponse = await createTask({
              variables: {title:title,importance:importance,createdAt:createdAt},
            });
            dispatch({
                type:CURRENT_TASK,
                currentTask: currentTask
            })
            dispatch({
                type:CONFIRM_ADDITION,
                confirm: true
            })
          } catch (e) {
            console.log(e);
          }
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