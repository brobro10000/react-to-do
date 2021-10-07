import { Snackbar, Alert } from '@mui/material'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { CONFIRM_ADDITION } from '../utils/actions';
function SnackBar() {
    const [open, setOpen] = useState(false);
    const confirm = useSelector((state) => state.confirm)
    const dispatch = useDispatch();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch({
            type:CONFIRM_ADDITION,
            confirm:false
        })
        setOpen(confirm)
    };

    useEffect(() => {
        setOpen(confirm)
    },[confirm])
    return (
        <>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Task has been added!
                </Alert>
            </Snackbar>
        </>
    )
}

export default SnackBar