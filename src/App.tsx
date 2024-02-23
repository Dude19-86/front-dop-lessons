import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Checkbox} from "antd";
import {Button} from './components/Button';
import {Input} from './components/Input';

type TodosType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {
    const [todos, setTodos] = useState<TodosType[]>([])
    const [show, setShow] = useState(true)
    // const[value,setValue]=useState('')


    const newTitle = useRef<HTMLInputElement>(null)


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => setTodos(json));
    }, []);
    // console.log(todos)

    const showHandler = () => {
        setShow(!show)
    }

    const addMessage = () => {
        if (newTitle.current) {
            setTodos([{
                userId: 555,
                id: todos.length + 1,
                title: newTitle.current.value,
                completed: false
            }, ...todos
            ])
            newTitle.current.value = ''
            console.log(newTitle.current.value)
        }
    }

    return (
        <div className="App">
            <div>
                <Button name={'Show me Todos'} onClick={showHandler}/>
                <Input newTitle={newTitle}/>
                <Button onClick={addMessage} name={'+'}></Button>
            </div>
            <ul>
                {show && todos.map(e => {
                    return (
                        <div>
                            <li key={e.id}>
                                <span>{e.id}</span>
                                <span>{e.title} - </span>
                                <Checkbox checked={e.completed} type="checkbox"/>
                            </li>
                        </div>
                    )
                })}
            </ul>

        </div>
    );
}

export default App;

