import React from 'react';
import ReactDOM from 'react-dom';


export class Contact extends React.Component{
  render(){
    return (

<li>
{this.props.contact.name} {this.props.contact.number}
</li>

    )
  }
}

export default Contact;
