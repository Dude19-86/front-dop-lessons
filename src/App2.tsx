import React from 'react';
import {Button} from "./components2/Button";
import s  from './components2/Button.module.css'
import {SuperToDoList, Tasks} from "./components2/SuperToDoList";


export const App2 = () => {

    const tasks: Tasks[]  = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]

    return (
        <div>
            {/*<Button className={s.stylesForButtonBlue} callBack={() => {}}>Red Button</Button>*/}
            {/*<Button className={s.stylesForButtonRed} callBack={() => {}}>Red Button</Button>*/}


            <Button  callBack={() => {}} color={'red'}>Red SuperButton</Button>
            <Button  callBack={() => {}}>Default SuperButton</Button>
            <Button  callBack={() => {}} disabled color={'secondary'}>Secondary  SuperButton</Button>
            hr
            <SuperToDoList tasks={tasks}>
                <Button  callBack={() => {}} color={'red'}>Red SuperButton</Button>
                <Button  callBack={() => {}}>Default SuperButton</Button>
                <Button  callBack={() => {}} disabled color={'secondary'}>SecondarySuperButton</Button>
            </SuperToDoList>
            <SuperToDoList tasks={tasks}>
                <p>fddhgsdsdhsdhsdhsdhdhmfhgkgjg5474574574347347347437dfhdfhdfh</p>
                <p>fddhgsdsdhsdhsdhsdhdhmfhgkgjg5474574574347347347437dfhdfhdfh</p>
                <p>fddhgsdsdhsdhsdhsdhdhmfhgkgjg5474574574347347347437dfhdfhdfh</p>
                <p>fddhgsdsdhsdhsdhsdhdhmfhgkgjg5474574574347347347437dfhdfhdfh</p>
                <p>fddhgsdsdhsdhsdhsdhdhmfhgkgjg5474574574347347347437dfhdfhdfh</p>
                <p>fddhgsdsdhsdhsdhsdhdhmfhgkgjg5474574574347347347437dfhdfhdfh</p>
                <p>fddhgsdsdhsdhsdhsdhdhmfhgkgjg5474574574347347347437dfhdfhdfh</p>
                <p>fddhgsdsdhsdhsdhsdhdhmfhgkgjg5474574574347347347437dfhdfhdfh</p>
                <Button  callBack={() => {}} color={'red'}>Red SuperButton</Button>
            </SuperToDoList>
            <SuperToDoList tasks={tasks}>
                <p>sdgsdhdsdhsd21412412525wasasf</p>
                <p>sdgsdhdsdhsd21412412525wasasf</p>
                <p>sdgsdhdsdhsd21412412525wasasf</p>
                <p>sdgsdhdsdhsd21412412525wasasf</p>
                <p>sdgsdhdsdhsd21412412525wasasf</p>
                <p>sdgsdhdsdhsd21412412525wasasf</p>
                <p>sdgsdhdsdhsd21412412525wasasf</p>
            </SuperToDoList>
        </div>
    );
};