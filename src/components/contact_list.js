import React, {Component} from 'react';
import ContactCard from './contact_card'
import contactData from '../data/contacts'

class ContactList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: contactData
        }

        const list = this.state.contacts.map( (item, index) => {
            console.log(item);
        });
    }
    render() {
        return (
            <h1>Some text</h1>
        )
    }
}

export default ContactList