import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { CardHeader } from '@mui/material';
import {CREATE_TASK} from '../utils/actions'
import { useSelector, useDispatch } from "react-redux";
import {useState, useEffect} from 'react'

function TaskCard() {
    const [title, updateTitle] = useState('')
    const [importance, updateImportance] = useState('')
    const [date, updateDate] = useState('')
    const task = useSelector((state) => state.createTask)
    const dispatch = useDispatch();

    useEffect(() => {
        updateDate(new Date(Date.now()).toLocaleDateString())
        if(task.length > 0){
            if(task[0].title){
                updateTitle(task[0].title)
            }
            if(task[0].importance){
                updateImportance(task[0].importance)
            }
        }   
    }, [task])

    return (
        <Container>
            <Card>
                <CardHeader
                    title={title}
                    subheader={date}
                />
                <CardContent>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Importance: {importance}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default TaskCard