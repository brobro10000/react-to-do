import CreateItem from "./CreateItem"
import {Container} from "@mui/material"
import TaskCard from "./TaskCard"
import { useQuery } from "@apollo/client";
import { QUERY_TASK } from "../utils/queries";
import {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {CURRENT_TASK} from '../utils/actions'
import SnackBar from "./SnackBar";
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
function ToDoQueue() {
    const [taskOutput, setOutput] = useState(0)     
    const currentTask = useSelector((state) => state.currentTask)
    const dispatch = useDispatch();
    const {loading, subscribeToMore, data, ...result} = useQuery(QUERY_TASK)
    function loadInitialData(){
        if(data){
            console.log(data)
            dispatch({
                type:CURRENT_TASK,
                currentTask:data.task
            })
        }
    }   
    useEffect(() => {
        return loadInitialData()
    },[data,dispatch])
    useEffect(() => {
        var output  = currentTask.map(item => (
            <TaskCard key={item._id} id={item._id} title={item.title} importance={item.importance} date={item.createdAt}/>
            ))
        output.reverse()
        return setOutput(output)
    }, [currentTask])
    useEffect(()=> {
        console.log(result,data)
    },[result])
    return (
        <Container>
        <h1>Queue</h1>
        <CreateItem />``
        {taskOutput ? taskOutput : <></>}
        <SnackBar></SnackBar>
        </Container>
    )
}

export default ToDoQueue

