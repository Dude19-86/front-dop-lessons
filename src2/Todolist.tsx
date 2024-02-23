import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType, TasksType} from './App';
import { Button } from './components/Button';


// export type TaskType = {
//     id: string
//     name: string
//     isDone: boolean
// }

type PropsType = {
    id: number
    title: string
    tasks: TasksType[]
    students: Array<string>
    removeTask: (taskId: string, todolistId: number) => void
    changeFilter: (value: FilterValuesType, todolistId: number) => void
    addTask: (title: string, todolistId: number, /*setTitle: (name: string) => void, setError: (error: string) => void*/) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: number) => void
    removeTodolist: (id: number) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            props.addTask(title, props.id);
            setTitle('')
        }
    }

    const addTask = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim(), props.id);
            setTitle('')
        } else {
            setError('Required text')
        }
    }

    const changeFilterHandler = (title: FilterValuesType) => {
        props.changeFilter(title, props.id)
    }


    const mappedTasks =
        props.tasks.map(t => {
            const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                let newIsDoneValue = e.currentTarget.checked;
                props.changeTaskStatus(t.taskId, newIsDoneValue, props.id);
            }

            return <li key={t.taskId} className={t.isDone ? "is-done" : ""}>
                <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                <span>{t.title}</span>
                <Button title={'X'} onClick={() => {props.removeTask(t.taskId, props.id)}}/>
            </li>
        })

    return <div>
        <h3> {props.title}
            <button onClick={() => {
                props.removeTodolist(props.id)
            }}>x
            </button>

        </h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <Button title={'+'} onClick={addTask}/>
            {error && <div className="error-message">{error}</div>}
        </div>
        <ul>
            {mappedTasks}
        </ul>
        <div>
            <Button title={'All'} className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={()=>{changeFilterHandler('all')}}/>
            <Button title={'Active'} className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={()=>{changeFilterHandler('active')}}/>
            <Button title={'Completed'} className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={()=>{changeFilterHandler('completed')}}/>
        </div>
        <p></p>
        {
            props.students.map((el) => {
                return (
                    <div>{el}</div>
                )
            })
        }
    </div>
}


