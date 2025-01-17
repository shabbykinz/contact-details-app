import axios from 'axios';

const CONTACT_API_BASE_URL = "http://localhost:3000/contact";

class ContactServices {

    getContacts(){
        return axios.get(CONTACT_API_BASE_URL);
    }

    createContact(contact){
        return axios.post(CONTACT_API_BASE_URL, contact);
    }

    getContactById(contactId){
        return axios.get(CONTACT_API_BASE_URL + '/' + contactId);
    }

    updateContact(contact, contactId){
        return axios.put(CONTACT_API_BASE_URL + '/' + contactId, contact);
    }

    deleteContact(contactId){
        return axios.delete(CONTACT_API_BASE_URL + '/' + contactId);
    }
}

export default new ContactServices()