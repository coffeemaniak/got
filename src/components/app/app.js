import React, {Component} from 'react';
import {Col, Row, Container,  Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default class App extends Component {
    state = {
        updateRandomChar: true,
        selectedChar: null
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                updateRandomChar: !state.updateRandomChar
            }
        })
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        const char = this.state.updateRandomChar ? <RandomChar/> : null;
        
        return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {char}
                        <Button
                        // className="toggle-btn"
                        color="secondary" 
                        size="lg"
                        style={{ marginBottom: '1rem' }}
                        onClick={this.toggleRandomChar}>Toggle Random Character</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList onCharSelected={this.onCharSelected}/>
                    </Col>
                    <Col md='6'>
                        <CharDetails charId={this.state.selectedChar}/>
                    </Col>
                </Row>
            </Container>
        </>
        );
    }
};
