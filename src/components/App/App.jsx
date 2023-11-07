import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.js';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import About from '../About/About.jsx';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">GitHub Student List</h1>
            </header>
            <br />
            <Router>

                <nav>
                    <ul>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/allStudents'>All students</Link></li>
                    </ul>
                </nav>

                <Route exact path='/home'>
                    <StudentForm />
                </Route>

                <Route exact path='/allStudents'>
                    <p>Student list:</p>
                    <StudentList />
                </Route>
                <Route exact path='/about'>
                    <p>About</p>
                    <About />
                </Route>
            </Router>
        </div>
    );
}

export default App;
