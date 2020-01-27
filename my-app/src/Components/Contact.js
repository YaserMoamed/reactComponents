import React from 'react';
import './Contact.css';

function Contact(props) {
  const { name, avatar, online } = props;
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} />
      <div>
        <h4>{name}</h4>
        <p className="status">{online ? 'online' : 'offline'}</p>
      </div>
    </div>
  );
}

export default Contact;
