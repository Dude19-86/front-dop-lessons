import React from 'react';
type ButtonType = {
    title: string
    onClick: () => void
    className?: string
}
export const Button = (props: ButtonType) => {
    return (
        <button className={props.className} onClick={props.onClick}>{props.title}</button>
    );
};