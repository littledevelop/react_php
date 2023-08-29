import './Style.css';
import Nav from './Widgets/Nav';
import Home from './Components/Home';
import EditUser from './Components/EditUser';
import Registration from './Components/Registration';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Nav/>
          <Route path="/"  component={Home} />
          <Route path="/edit-user/:id"  component={EditUser} />
          <Route path="/registeration" component={Registration} />
      </Router>
    </div>
  );
}

export default App;
