import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import ProductData from "../../appFiles/productCategories.json";
import ServicesData from "../../appFiles/servicesCategories.json"


export default class CategoryList extends React.Component  {

    constructor(props){
        super(props);
    }

    render(){

        let DisplayData
        if(this.props.type == 'services'){
             DisplayData=ServicesData.map(
                (info)=>{
                    return(
                       
                            <ListGroup.Item action variant="secondary">
                                {info.category}
                            </ListGroup.Item>
                       
                    )
                }
            )
        }else{
            DisplayData=ProductData.map(
                (info)=>{
                    return(
                       
                            <ListGroup.Item action variant="secondary">
                                {info.category}
                            </ListGroup.Item>
                       
                    )
                }
            )
        }

        return (
            <div className='categoryListDiv'>
                <ListGroup>
                
                {DisplayData}
                
                </ListGroup>
            </div>
        );
    }

}