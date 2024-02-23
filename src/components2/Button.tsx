import React, {ButtonHTMLAttributes} from 'react';
// import styled from "styled-components";
import styled from "styled-components";
import s from './Button.module.css'


type ButtonProps = {
    callBack: () => void
    children: React.ReactNode
    color?: string
    disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>


export const Button = ({callBack, children, className, color, disabled, ...restProps}: ButtonProps) => {

    // const finalClassName = s.button
    //     + (disabled
    //         ? ' ' + s.disabled
    //         : color === 'red'
    //             ? ' ' + s.red
    //             : color === 'secondary'
    //                 ? ' ' + s.secondary
    //                 : ' ' + s.default)
    //     + (className ? ' ' + className : '')

    // const finalClassName=s.button + " " + s.red
    //
    // const finalClassName = `
    // ${s.button}
    // ${color === 'red' ? s.red : s.secondary}
    //     `
    // const finalClassName = `
    // ${s.button}
    // ${color === 'red' ? s.red : s.secondary}
    // ${disabled ? s.disabled : ''}

    // const finalClassName = s.button + ' ' + s.red
    // const finalClassName = `${s.button} ${s.red}`

    // const finalClassName = `${s.button}
    // ${color === 'red' ? s.red : s.default}
    // ${disabled ? s.disabled : ''}
    // `
    const finalClassName = `${s.button} 
    ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default}
    ${disabled ? s.disabled : ''}
    `



    const onClickHandler = () => callBack()

    return (
        <ButtonComponent className={finalClassName} onClick={onClickHandler}>{children}</ButtonComponent>
    );
};


//------------------------------------------------------------------------------


/*
import React from 'react';

type ButtonProps = {
    name: string
    callBack: () => void
}
export const Button: React.FC<ButtonProps> = (props) => {

    const {callBack, name, ...restProps} = props

    const onClickHandler = () => callBack()


    return (
        <button onClick={onClickHandler}>{name}</button>
    );
};*/


const ButtonComponent = styled.button`
    /*.stylesForButtonBlue {*/
    /*    background-color: blue;*/
    /*    color: white;*/
    /*}*/

    /*.stylesForButtonRed {*/
    /*    background-color: red;*/
    /*    color: white;*/
    /*}*/


    .button {
        overflow: hidden;
        padding: 5px 24px;
        border-radius: 3px;
        border: none;
        color: white;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        cursor: pointer;
    }

    .red {
        background: #cc1439;
    }


    .secondary {
        color: #ffffff;
        background:  #0066CC;;
        border: 1px solid #0066CC;
        border-radius: 3px;
    }

    .default {
        background: #088651;
    }


    .disabled {
        color: #ffffff;
        background: #303132;
        opacity: 0.5;
    }

    .default:hover {
        background: #1f5d04;
    }

    .red:hover {
        background: #8f0722;
    }

    .secondary:hover {
        background: #052038;
    }


    .default:active {
        background: #0059b3;
    }

    .secondary:active {
        background: #C9E5FF;
    }

    .red:active {
        background: #b31232;
    }

    .button:disabled {
        cursor: default;
    }
    
`
