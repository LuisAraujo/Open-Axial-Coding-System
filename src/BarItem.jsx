function BarItem(props){
    return (
        <div className="bar-item">
            {props.children} 
            <span>{props.title}</span>
        </div>
    )
}

export default BarItem