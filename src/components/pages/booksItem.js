import React, {Component} from 'react';
import ItemDetails, {Field} from "../itemDetails";
import GotResourses from "../../services/gotServices";

export default class BooksItem extends Component {
    gotResourses = new GotResourses();

    render() {
        return(
            <ItemDetails 
                itemId={this.props.bookId}
                getData={this.gotResourses.getBook}>
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )
    }
}