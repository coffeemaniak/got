import React, {Component} from 'react';
import {Col, Row, Container,  Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from "../errorMessage";
import CharacterPage from "../characterPage";
import BookPage from "../pages";


export default class App extends Component {
    state = {
        updateRandomChar: true,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                updateRandomChar: !state.updateRandomChar
            }
        })
    }

    render() {
        const char = this.state.updateRandomChar ? <RandomChar/> : null;

        if (this.state.error) {
            return <ErrorMessage/>
        }
        
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
                <CharacterPage/>
                <BookPage/>
            </Container>
        </>
        );
    }
};
