import {TextField} from '@mui/material'

function StandardTextField({label}){
    return (
        <>
        <TextField className='vAlign' variant='standard' label={label}/>
        </>
    )
}

export default StandardTextField