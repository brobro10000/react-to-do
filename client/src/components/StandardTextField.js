import {TextField} from '@mui/material'
import {CREATE_TASK} from '../utils/actions'
import { useSelector, useDispatch } from "react-redux";

function StandardTextField({label}){
    const task = useSelector((state) => state.createTask)
    const dispatch = useDispatch();


    function registerText(e){
        if(e.target.value){
            if(task.length > 0){
                task[0].title = e.target.value
                dispatch({
                    type:CREATE_TASK,
                    createTask: task
                })
            } else {
                dispatch({
                    type:CREATE_TASK,
                    createTask:[{title:e.target.value}]
                })
            }
        }
        console.log(task)
    }
    return (
        <>
        <TextField onBlur={registerText}className='vAlign' variant='standard' label={label} />
        </>
    )
}

export default StandardTextField