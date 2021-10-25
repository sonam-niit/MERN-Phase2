import axios from "axios";
import React from "react";

export default class HttpPut extends React.Component{
    state={
        name:""
    }

    handlechange=(event)=>{
        this.setState({name:event.target.value})
    }

    handleSubmit=(event)=>{
        event.preventDefault();

        const person={
            name:this.state.name
        }
        axios.put(`https://jsonplaceholder.typicode.com/users/1`,{person})
        .then((res)=>{
            console.log(res);
            console.log(res.data);
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Person Name:</label>
                    <input type="text" name="name" onChange={this.handlechange.bind(this)}/>
                    <button type="submit">Update User</button>
                </form>
            </div>
        )
    }
}