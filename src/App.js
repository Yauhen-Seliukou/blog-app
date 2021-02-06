import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import SelectPost from './pages/SelectPost';
import FirstPage from './pages/FirstPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div className="my-container">
        <Header className="container-fluid"/>
        <main className="content">
          <Container>
            <Row className="justify-content-center">
              <Col xl={9} lg={10} md={11} sm={12} xs={12}>
                <Switch>
                  <Route exact path='/' component={FirstPage}></Route>
                  <Route path='/home' component={Home}></Route>
                  <Route path='/login' component={Login}></Route>
                  <Route path='/post' component={SelectPost}></Route>
                </Switch>
              </Col>
            </Row>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
