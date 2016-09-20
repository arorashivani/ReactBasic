import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact';

export class ContactsList extends React.Component{
  constructor(){
    super();
    this.state={
      "search":""
    };
  }
  updateSearch(){
    this.setState({search:event.target.value})
  }
  render(){
    let filteredContacts = this.props.contacts.filteredContacts;
    return (
      <div>
      <ul>
      {filteredContacts.map((contact)=>{
        return <Contact contact={contact}/>
      })}
      </ul>
      <input type="text" value = {this.state.search} onChange={this.updateSearch.bind(this)} />
      </div>
    )
  }
}

export default ContactsList;
