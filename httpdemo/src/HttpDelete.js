import axios from "axios";
import React from "react";

export default class HttpDelete extends React.Component{
    state={
        id:""
    }

    handlechange=(event)=>{
        this.setState({id:event.target.value})
    }

    handleSubmit=(event)=>{
        event.preventDefault();

        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Person Id:</label>
                    <input type="text" name="id" onChange={this.handlechange.bind(this)}/>
                    <button type="submit">delete User</button>
                </form>
            </div>
        )
    }
}