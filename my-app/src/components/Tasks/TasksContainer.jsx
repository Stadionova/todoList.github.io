import classes from "./Tasks.module.css";
import Tasks from './Tasks';
import React from "react";
import store from '../../store';

const TasksContainer = (props) => {
    return (
        <div className={classes.tasksWrapper}>
            {props.tasksList.map(task => { // props.users передаём через функцию mapStateToProps в контейнерной компоненте
                return (
                    <div className={classes.tasksList} >
                        <Tasks
                            state={true}
                            store={store}
                            removeTask={props.removeTask}
                            taskValue={task} />
                    </div>
                )
            })}
        </div >
    )
}

export default TasksContainer;