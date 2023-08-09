import React from "react";
import CategoryList from "./Services/CategoryList";

export default class Products extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="productsDiv">
                <h1>Products page</h1>
                <CategoryList type='products'/>
            </div>
            
        );

        }

}