import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { CardHeader } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useMutation } from "@apollo/react-hooks";
import { DELETE_TASK } from '../utils/mutations';

function TaskCard(props) {
    const [title, updateTitle] = useState('')
    const [importance, updateImportance] = useState('')
    const [date, updateDate] = useState('')
    const task = useSelector((state) => state.createTask)
    const dispatch = useDispatch();
    const [deleteTask] = useMutation(DELETE_TASK);

    async function deleteTaskFn(){
        // document.getElementById(props.id).remove()
        try {
            const mutationResponse = await deleteTask({
              variables: {id:props.id},
            }).then(data => document.getElementById(props.id).remove());
          } catch (e) {
            console.log(e);
          }
    }

    useEffect(() => {
        var epochDate = props.date
        var date1 = new Date(epochDate).toLocaleDateString()
        var time = new Date(epochDate).toLocaleTimeString()
        var dateOutput = `Created at ${time} on ${date1}`
        updateDate(dateOutput)
        console.log(epochDate, date1, time)
        // date1.split(" (")[0]
        // updateDate(Date("props.date").toLocalDateString())
        if (task.length > 0) {
            if (task[0].title) {
                updateTitle(task[0].title)
            }
            if (task[0].importance) {
                updateImportance(task[0].importance)
            }
        }
    }, [task])

    return (
        <Container>
            <Card id={props.id}>
                <Grid container>
                    <Grid item md={11}>
                        <CardHeader
                            title={props.title}
                            subheader={date}
                        />

                <CardContent>
                    <Typography color="text.secondary">
                        Importance: {props.importance}
                    </Typography>
                </CardContent>
                    </Grid>
                    <Grid item md={1}>
                        <CloseIcon onClick={deleteTaskFn}/>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
}

export default TaskCard