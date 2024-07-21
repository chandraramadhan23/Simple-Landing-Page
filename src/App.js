import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MyNavbar from './components/MyNavbar';
import MyJumbotron from './components/MyJumbotron';
import MyProducts from './components/MyProducts';
import MyAbout from './components/MyAbout';
import MyContact from './components/MyContact';
import MyFooter from './components/MyFooter';


function App() {

  return (
    <>
      <MyNavbar/>
      <MyJumbotron/>
      <MyProducts/>
      <MyAbout/>
      <MyContact/>
      <MyFooter/>
    </>
  )
}


export default App
