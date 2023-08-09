import React from "react";
import CategoryList from "./Services/CategoryList";

export default class Services extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Services page</h1>
                <CategoryList type='services'/>
            </div>
        
        );

        }

}