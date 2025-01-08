import React, { Component } from 'react'
import ContactServices from '../controller/ContactServices'

class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                contacts: []
        }
        this.addContact = this.addContact.bind(this);
        this.editContact = this.editContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
    }

    deleteContact(id){
        ContactServices.deleteContact(id).then( res => {
            this.setState({contacts: this.state.contacts.filter(contact => contact.id !== id)});
        });
    }
    viewContact(id){
        this.props.history.push(`/view-contact/${id}`);
    }
    editContact(id){
        this.props.history.push(`/add-contact/${id}`);
    }

    componentDidMount(){
        ContactServices.getContacts().then((res) => {
            this.setState({ contacts: res.data});
        });
    }

    addContact(){
        this.props.history.push('/add-contact/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Contact Details</h2>
                 <div className = "row">
                    <button className="btn btn-info"  class="btn btn-primary btn-lg" onClick={this.addContact}> Add a Contact</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead className="thead-dark">
                                <tr>
                                    <th> Name</th>
                                    <th> Email</th>
                                    <th> Contact Number</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.contacts.map(
                                        contact => 
                                        <tr key = {contact.id}>
                                             <td> { contact.name} </td>   
                                             <td> {contact.email}</td>
                                             <td> {contact.phone}</td>
                                             <td>
                                                 <button onClick={ () => this.editContact(contact.id)} className="btn btn-warning">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteContact(contact.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewContact(contact.id)} className="btn btn-primary">View Contact </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                 

            </div>
        )
    }
}

export default ListUserComponent