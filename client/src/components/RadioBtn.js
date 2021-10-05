import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material'
import {useState} from 'react'
import {CREATE_TASK} from '../utils/actions'
import { useSelector, useDispatch } from "react-redux";

function RadioBtn({props}) {
    const task = useSelector((state) => state.createTask)
    const dispatch = useDispatch();

    function registerRadio(e){
        console.log(task.length)
        if(e.target.value){
            if(task.length > 0){
                task[0].importance = e.target.value
                dispatch({
                    type:CREATE_TASK,
                    createTask: task
                })
            } else {
                dispatch({
                    type:CREATE_TASK,
                    createTask: [{importance:e.target.value}]
                })
            }
        }
        console.log(task)
    }
    // eslint-disable-next-line
    const [label, setLabel] = useState(props.labels)

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{props.title}</FormLabel>
            <RadioGroup row aria-label="Importance" name="row-radio-buttons-group">
                {label.map(item => (
                    <FormControlLabel onClick={registerRadio} key={item} value={item} control={<Radio />} label={item} />
                ))}
            </RadioGroup>
        </FormControl>
    )
                }

export default RadioBtn