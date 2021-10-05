import CreateItem from "./CreateItem"
import {Container} from "@mui/material"
import TaskCard from "./TaskCard"
function ToDoQueue() {
    return (
        <Container>
        <h1>Queue</h1>
        <CreateItem />
        <TaskCard/>
        </Container>
    )
}

export default ToDoQueue

