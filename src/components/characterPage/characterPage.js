import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from "../errorMessage";
import Spinner from '../spinner';
import "./characterPage.css";

export default class CharacterPage extends Component {
    state = {
        selectedChar: null,
        error: false,
        loading: false
    }
    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        const {loading} = this.state;
        const spinner = loading ? <Spinner/> : null;
        
        if (this.state.error) {
            return <ErrorMessage/>
        }
        return(
            <Row>
            <Col md='6'>
                {spinner}
                <ItemList onCharSelected={this.onCharSelected}/>
            </Col>
            <Col md='6'>
                {spinner}
                <CharDetails charId={this.state.selectedChar}/>
            </Col>
        </Row>
        )
    }
}