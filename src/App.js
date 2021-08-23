import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom';
import PhotoComponent from './components/photos/PhotoComponent';
import Contacts from './components/contacts/Contacts';
import Post from './components/post/Post';
import fon from './assets/fon.jpg';

const HomeComponent = () => {
  return (
    <>
      <div className='homePage'>
        <img src={fon} alt='' />
        <p>Home page</p>
      </div>
    </>
  )
}


function App() {
  return (
    <div className="App">
      <nav>
         <NavLink exact to='/'>Home</NavLink>
         <NavLink to='/post'>Post</NavLink>
         <NavLink to='/photo'>Photo</NavLink>
         <NavLink to='/contacts'>Contacts</NavLink>
      </nav>
      <Switch>
        <Route exact path='/' component={HomeComponent}/>
        <Route path='/post' component={Post}/>
        <Route path='/photo' component={PhotoComponent}/>
        <Route path='/contacts' component={Contacts}/>
      </Switch>
    </div>
  );
}

export default App;
