import React, {Component} from 'react';
import ItemList from "../itemList";
import ItemDetails, {Field} from "../itemDetails";
import ErrorMessage from "../errorMessage";
import Spinner from "../spinner";
import RowBlock from "../rowBlock";
import GotResourses from "../../services/gotServices";

export default class BookPage extends Component {
    gotResourses = new GotResourses();

    state = {
        selectedBook: null,
        error: false,
        loading: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

    render() {
        const {loading} = this.state;
        const spinner = loading ? <Spinner/> : null;

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <>
            {spinner}
            <ItemList 
                    onItemSelected={this.onItemSelected}
                    getData={this.gotResourses.getAllBooks}
                    renderItem={(item) => item.name}
            />
            </>
        );

        const bookDetails = (
            <ItemDetails 
                itemId={this.state.selectedBook}
                getData={this.gotResourses.getBook}>
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={bookDetails}/>
        )
    }
}