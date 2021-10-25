import axios from "axios";
import React from "react";

export default class HttpGet extends React.Component{
    state={
        persons:[]
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((res)=>{
            const persons=res.data;
            this.setState({persons});
        })
    }

    render(){
        return(
            <ul>
                {this.state.persons.map((person)=> (
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{person.name}</h5>
                            <h6 class="email card-subtitle">{person.email}</h6>
                            <p class="card-text">
                                {person.address.street}
                                {", "}
                                {person.address.suite}
                                {", "}
                                {person.address.city}
                                {", "}
                                {person.address.zipcode}
                                {", "}
                            </p>
                            <p class="email card-link">
                                {person.phone}
                                {", "}
                                {person.website}
                            </p>
                        </div>
                    </div>
                ))}
            </ul>
        )
    }
}