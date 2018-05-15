import React from 'react';
import Contact from './Contact';

const ContactList = (props) => {
    return (
        <div>
            {props.usersArr.map((contact) => <Contact key={contact.id} {...contact} />)}
        </div>
    );
}

export default ContactList;