import React from "react";

export default class FormDemo extends React.Component{
    constructor(){
        super();
        this.input=React.createRef();
        this.handle=this.handle.bind(this);

    }
    handle(event){
        alert('submitted '+this.input.current.files[0].name)
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handle}>
                Name:<input type="file" ref={this.input}/>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}