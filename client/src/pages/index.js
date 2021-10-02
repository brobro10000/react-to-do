
import ToDoInProgress from '../components/ToDoInProgress';
import ToDoQueue from '../components/ToDoQueue';
import { Grid } from '@mui/material'
import ToDoInComplete from '../components/ToDoComplete';
function index() {
  return (

      <Grid id='indexContainer' item container md={12}>
        <Grid md={4} item className='center-text'>
          <ToDoQueue />
        </Grid>
        <Grid md={4} item className='center-text'>
          <ToDoInProgress />
        </Grid>
        <Grid md={4} item className='center-text'>
          <ToDoInComplete />
        </Grid>
      </Grid>


  )
}

export default index