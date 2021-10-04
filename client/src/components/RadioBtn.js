import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material'
import {useState} from 'react'
function RadioBtn({props}) {
    // eslint-disable-next-line
    const [label, setLabel] = useState(props.labels)

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{props.title}</FormLabel>
            <RadioGroup row aria-label="Importance" name="row-radio-buttons-group">
                {label.map(item => (
                    <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                ))}
            </RadioGroup>
        </FormControl>
    )
                }

export default RadioBtn