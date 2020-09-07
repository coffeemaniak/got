import React, {Component} from 'react';
import ItemList from "../itemList";
import ItemDetails, {Field} from "../itemDetails";
import ErrorMessage from "../errorMessage";
import Spinner from "../spinner";
import RowBlock from "../rowBlock";
import GotResourses from "../../services/gotServices";

export default class HousePage extends Component {
    gotResourses = new GotResourses();

    state = {
        selectedHouse: null,
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
            selectedHouse: id
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
                    getData={this.gotResourses.getAllHouses}
                    renderItem={(item) => item.name}
            />
            </>
        );

        const houseDetails = (
            <ItemDetails 
                itemId={this.state.selectedHouse}
                getData={this.gotResourses.getHouse}>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='ancestralWeapons' label='Ancestral Weapons'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={houseDetails}/>
        )
    }
}