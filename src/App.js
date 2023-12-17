import './App.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import Home from './components/Home'
import About from './components/About'
import Players from './components/Players'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Dobrodošli</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link><Link to='/about'>About</Link></Nav.Link>
              <Nav.Link><Link to='/players'>Players</Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/players' Component={Players}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/' Component={Home}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
