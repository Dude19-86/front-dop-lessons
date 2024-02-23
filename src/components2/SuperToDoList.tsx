import React from 'react';

export type Tasks = {
    id: number
    title: string
    isDone: boolean
}

type SuperToDoListProps = {
    tasks: Tasks[]
    children: React.ReactNode
}

export const SuperToDoList = ({tasks, children, ...restProps}: SuperToDoListProps) => {
    return (
        <div>
            <ul>
                {tasks.map((e, i) => {
                    return (
                        <li key={e.id}>
                            <span>{e.id}</span>
                            <span>{e.title}</span>
                            <input type={"checkbox"} checked={e.isDone}/>
                        </li>
                    )
                })}
            </ul>
            {children}
            <hr/>
        </div>
    );
};