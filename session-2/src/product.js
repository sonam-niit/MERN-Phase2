import React from "react";

export default class Product extends React.Component{

    constructor(){
        super();
        this.state={
            id:1234,
            name:"Eraser",
            price:21.23,
            rating:4.5
        };
    }

    render(){
        return(
            <div>
                <h2>Product Details</h2>
                <h3>Id:{this.state.id}</h3>
                <h3>Name:{this.state.name}</h3>
                <h3>Price:{this.state.price}</h3>
                <h3>Rating:{this.state.rating}</h3>
            </div>
        );
    }

}