import React from 'react';
import ReactDOM from 'react-dom';
 import ContactsList from './ContactsList';

let contacts = [{
  "name":"Shivani",
  "number":"999 999 9911",
  "key":1
},{
  "name":"tim",
  "number":"999 999 1234",
  "key":2
},{
  "name":"rob",
  "number":"999 999 2233",
  "key":3
},{
  "name":"tony",
  "number":"999 999 9221",
  "key":4
}]
class App extends React.Component{
  render(){

    return (
      <div>
      <h1> Contact List</h1>
      <ContactsList contacts={this.props.contacts}/>
      </div>
    )
  }
}


ReactDOM.render(<App contacts={contacts}/>,document.getElementById('app'));
