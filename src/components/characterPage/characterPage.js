import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from "../errorMessage";
import Spinner from '../spinner';
import GotResourses from "../../services/gotServices";
import RowBlock from "../rowBlock";
import "./characterPage.css";

export default class CharacterPage extends Component {

    gotResourses = new GotResourses();

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

        const itemList = (
            <ItemList 
                    onCharSelected={this.onCharSelected}
                    getData={this.gotResourses.getAllCharacters}
                    renderItem={(item) => `${item.name} (${item.gender})`}
            />
        );

        const charDetails = (
            <ItemDetails 
                itemId={this.state.selectedChar}
                getData={this.gotResourses.getCharacter}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )

        return(
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}