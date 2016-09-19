import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact';

export class ContactsList extends React.Component{
  render(){
    return (
      <div>
      <ul>
      {this.props.contacts.map((contact)=>{
        return <Contact contact={contact}/>
      })}
      </ul>
      <input type="text" value = {this.state.search} />
      </div>
    )
  }
}

export default ContactsList;
