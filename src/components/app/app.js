import React, {Component} from 'react';
import {Col, Row, Container,  Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from "../errorMessage";
import CharacterPage from "../characterPage";
import {BookPage, HousePage, BooksItem} from "../pages";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./app.css"



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
        <Router>
            <div className="app"> 
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
                    <Route path="/characters" component={CharacterPage}/>
                    <Route path="/houses" component={HousePage}/>
                    <Route path="/books" exact component={BookPage}/>
                    <Route path="/books/:id" render={
                        ({match}) => {
                            const {id} = match.params;

                            return <BooksItem bookId={id}/>
                        }
                    }/>
                </Container>
            </div>
        </Router>
        );
    }
};
