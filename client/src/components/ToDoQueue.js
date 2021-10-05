import CreateItem from "./CreateItem"
import {Container} from "@mui/material"
import TaskCard from "./TaskCard"
import { useQuery } from "@apollo/client";
import { QUERY_TASK } from "../utils/queries";
import {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {CURRENT_TASK} from '../utils/actions'

function ToDoQueue() {
    const currentTask = useSelector((state) => state.currentTask)
    const dispatch = useDispatch();
    const {loading, data} = useQuery(QUERY_TASK);
    async function loadInitialData(){
        if(data){
            console.log(data.task)
            dispatch({
                type:CURRENT_TASK,
                currentTask:data.task
            })
        }
        
    }
    useEffect(() => {
        return loadInitialData()
    }, [])
    return (
        <Container>
        <h1>Queue</h1>
        <CreateItem />
        {currentTask.map(item => (
        <TaskCard title={item.title} importance={item.importance}/>
        ))}
        </Container>
    )
}

export default ToDoQueue

