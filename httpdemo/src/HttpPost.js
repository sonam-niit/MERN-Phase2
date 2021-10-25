import axios from "axios";
import React from "react";

export default class HttpPost extends React.Component{
    state={
        name:"",
    }

    handleChange=(event)=>{
        this.setState({name:event.target.value})
    };

    handleSubmit=(event)=>{
        event.preventDefault();

        const user={
            name:this.state.name
        }

        axios.post(`https://jsonplaceholder.typicode.com/users`,{user})
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
                    <input type="text" onChange={this.handleChange.bind(this)}/>
                    <button type="submit">Add</button>

                </form>
            </div>
        )
    }
}