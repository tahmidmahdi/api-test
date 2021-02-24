import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const [users, setUsers] = useState([])
  // console.log('calling from', users)
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=1000`)
      .then(res => res.json())
      .then(data => setUsers(data.results))
  }, []);
  console.log('calling log', users);
  return (
    <div className="App">
      <h1>Random User </h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          users.map(user => <User name={user}></User>)
        }
      </header>

    </div>
  );
}

function User(props) {

  // decorating img
  const imgStyle = {
    borderRadius: '50%',
  };
  //decorating div
  const divStyle = {
    // marginLeft: '700px',
    border: '2px solid gray',
    height: '450px',
    width: '450px',
    borderRadius: '20px',
    margin: "20px"
  }



  const { title, first, last } = props.name.name;
  // const {picture} = props.picture.large;
  // console.log('Img',props.name.picture);
  // const {picture} = props.name.picture;
  const url = props.name.picture.large;
  // console.log(url);
  return (
    <div style={divStyle}>
      <h3>{title} {first} {last}</h3>
      <img style={imgStyle} src={url} alt="" />
      <p>{props.name.cell}</p>
      <p>Age: {props.name.dob.age}</p>
      <p>{props.name.location.country}</p>
    </div>
  )
}

export default App;
