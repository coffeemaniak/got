import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from "../errorMessage";
import Spinner from '../spinner';
import "./characterPage.ccs";

export default class CharacterPage extends Component {
    state = {
        selectedChar: null,
        error: false,
        loading: false
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        const {error, loading} = this.state;
        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <ErrorMessage/> : null;
        return(
            <Row>
            <Col md='6'>
                {spinner}
                {errorMessage}
                <ItemList onCharSelected={this.onCharSelected}/>
            </Col>
            <Col md='6'>
                {spinner}
                {errorMessage}
                <CharDetails charId={this.state.selectedChar}/>
            </Col>
        </Row>
        )
    }
}