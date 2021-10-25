import React from "react";

export default class EventBind extends React.Component{

    constructor(){
        super()
        this.state={
            message:'Good Morning!!!'
        }
        this.handler=this.handler.bind(this);
    }

    handler(){
        this.setState({message:"Bye Bye..!!"})
    }
    handler1(){
        this.setState({message:"Take Care..!!"})
    }

    onSubmit=()=>{
        this.setState({message:'Binding As Class Property'})
    }

    render(){
        return(
            <div>
                <h3>Message: {this.state.message}</h3>
                <button onClick={this.onSubmit}>My Button- Class Property</button><br/><br/>
                <button onClick={this.handler}>My Button- Bind</button><br/><br/>
                <button onClick={()=>this.handler1()}>My Button-Arrow</button>
            </div>
        )
    }
}