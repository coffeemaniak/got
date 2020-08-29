import React, {Component} from 'react';
import './itemList.css';
import GotResourses from "../../services/gotServices";
import Spinner from '../spinner';

export default class ItemList extends Component {

    gotResourses = new GotResourses();

    state = {
        charList: null
    }

    componentDidMount() {
        this.gotResourses.getAllCharacters()
            .then( (charList) => {
                this.setState({
                    charList
                })
            })
    }

    renderItems(arr) {
        return arr.map( (item) => {
            const {id, name} = item;
            return (
                <li 
                key={id}
                className="list-group-item"
                onClick={() => this.props.onCharSelected(id)}>
                    {name}
                </li>
            )
        })
    }

    render() {

        const {charList} = this.state;

        if(!charList) {
            return (
                <Spinner/>
            )
        }

        const items = this.renderItems(charList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}