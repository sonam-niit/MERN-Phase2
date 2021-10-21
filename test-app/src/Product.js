import React from "react";

class Product extends React.Component{
    constructor(){
        super();
        this.state={
            id:1,
            name:"Pencil"
        };
    }

    render(){
        return(
            <div>
                <p>Id: {this.state.id}</p>
                <p>Name:{this.state.name}</p>
            </div>
        )
    }
}

export default Product;