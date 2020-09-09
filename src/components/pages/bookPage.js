import React, {Component} from 'react';
import ItemList from "../itemList";
import ErrorMessage from "../errorMessage";
import Spinner from "../spinner";
import GotResourses from "../../services/gotServices";
import {withRouter} from "react-router-dom";

class BookPage extends Component {
    gotResourses = new GotResourses();

    state = {
        error: false,
        loading: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }



    render() {
        const {loading} = this.state;
        const spinner = loading ? <Spinner/> : null;

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <>
            {spinner}
            <ItemList 
                    onItemSelected={(itemId) => {
                        this.props.history.push(itemId)
                    }}
                    getData={this.gotResourses.getAllBooks}
                    renderItem={(item) => item.name}
            />
            </>
        )
    }
}

export default withRouter(BookPage);