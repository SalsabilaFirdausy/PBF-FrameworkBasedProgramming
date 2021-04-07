import React from 'react';
import Product from './Product.jsx'
import Cart from './Cart.jsx'
import Card from 'react-bootstrap/Card'
import Photo from './photo.jpg'
import Figure from 'react-bootstrap/Figure'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div>
                <Nav />
                <div>
                    <Switch>
                        <Route exact path='/'><Home /></Route>
                        <Route exact path='/products'><Product /></Route>
                        <Route exact path='/cart'><Cart/></Route>
                        <Route exact path='/about'><About /></Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h1>Welcome to Iron Store</h1>
        </div>
    );
}

function Nav() {
    return (
        <nav className="navbar bg-white">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
                <li>
                    <Link to='/cart'>Cart</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}


function About() {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Photo} />
            <Card.Body>
            <Card.Title>Salsabila Firdausy</Card.Title>
            <Card.Text>
                NIM : 1841720036
            </Card.Text>
            <Card.Text>
                Class : 3G
            </Card.Text>
            <Card.Text>
                Major : Infomation Technology
            </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default App;