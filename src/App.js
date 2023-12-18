import './App.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import Home from './components/Home'
import About from './components/About'
import Players from './components/Players'
import { Notifications } from 'react-push-notification';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Dobrodošli</Navbar.Brand>
            <Nav className="linkclass">
              <Link className="linkclass" to='/'>Home</Link>
              <Link className="linkclass" to='/about'>About</Link>
              <Link className="linkclass" to='/players'>Players</Link>
            </Nav>
          
          </Container>
        </Navbar>
        <Routes>
          <Route path='/players' Component={Players}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/' Component={Home}></Route>
        </Routes>
      </Router>
      <Notifications></Notifications>
    </div>
  );
}

export default App;
