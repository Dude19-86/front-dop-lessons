import React, {ChangeEvent, RefObject, useRef, useState} from 'react';

type InputProps = {
    // value:string
    // onChange:(value:string)=>void
    newTitle: RefObject<HTMLInputElement>
    // newTitle: string
    // setValue:(newTitle:string)=>void
}

export const Input = (props: InputProps) => {
    // const newTitle = useRef<HTMLInputElement>(null);
    //  const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
    //      // props.setValue(event.currentTarget.value)
    //  }

    // console.log(props.value)

    return (
        <input
            ref={props.newTitle}
            // onChange={onChangeHandler}
            // value={props.value}
        />
    )
}

