import React from 'react';
import ReactDOM from 'react-dom';
 import ContactsList from './ContactsList';

let contacts = [{
  "name":"Shivani",
  "number":"999 999 9911"
},{
  "name":"tim",
  "number":"999 999 1234"
},{
  "name":"rob",
  "number":"999 999 2233"
},{
  "name":"tony",
  "number":"999 999 9221"
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
