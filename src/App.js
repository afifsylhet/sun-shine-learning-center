import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col } from 'react-bootstrap';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import HomeCourses from './components/HomeCourses/HomeCourses';


function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <HomeCourses></HomeCourses>
      <Footer></Footer>

    </div>
  );
}

export default App;
