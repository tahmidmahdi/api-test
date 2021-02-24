import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const [users, setUsers] = useState([])
  // console.log('calling from', users)
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=100`)
    .then(res => res.json())
    .then(data =>  setUsers(data.results))
  },[]);
  console.log('calling log', users);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {
        users.map(user => <User name = {user}></User>)
      }
    </div>
  );
}

function User(props) {
  const {title, first, last} = props.name.name;
  // const {picture} = props.picture.large;
  // console.log('Img',props.name.picture);
  // const {picture} = props.name.picture;
  const url =props.name.picture.large;
  console.log(url);
  return(
    <div>
      <h3>{title} {first} {last}</h3>
      <img src={url} alt=""/>
    </div>
  )
}

export default App;
