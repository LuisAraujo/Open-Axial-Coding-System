function BarSide(props){

    return(
        <div className="bar-side">
            <div className="title-bar">
                {props.title}
            </div>
            
            <div className="container-bar">
                {props.children}
            </div>
            
        </div>
    )

}

export default BarSide