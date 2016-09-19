import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact';

export class ContactsList extends React.Component{
  constructor(){
    super();
    this.state={
      search:"Learning"
    };
  }
  render(){
    return (
      <div>
      <ul>
      {this.props.contacts.map((contact)=>{
        return <Contact contact={contact}/>
      })}
      </ul>
      <input type="text" value = {this.state.search} onChange={this.updateSearch} />
      </div>
    )
  }
}

export default ContactsList;
