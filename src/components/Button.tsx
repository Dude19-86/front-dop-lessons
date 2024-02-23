
type ButtonProps={
    name:string,
    onClick:()=>void
}
export const Button=(props:ButtonProps)=>{
    const onClickHandler=()=>{
        props.onClick()
    }
    return(
        <button onClick={onClickHandler}>{props.name}</button>
    )
}