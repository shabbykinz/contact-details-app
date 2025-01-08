import React, { Component } from 'react'
import ContactServices from '../controller/ContactServices';


class CreateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            id: props.match.params.id,
            name: '',
            email: '',
            phone: '',
            
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeNumberHandler = this.changeNumberHandler.bind(this);
        this.saveOrUpdateContact = this.saveOrUpdateContact.bind(this);
    }

   
    componentDidMount(){

        
        if(this.state.id === '_add'){
            return
        }else{
            ContactServices.getContactById(this.state.id).then( (res) =>{
                let contact = res.data;
                this.setState({name: contact.name,
                    email: contact.email,
                    phone : contact.phone
                });
            });
        }        
    }
    saveOrUpdateContact = (e) => {
        e.preventDefault();
        let contact = {name: this.state.name, email: this.state.email, phone: this.state.phone};
        console.log('contact => ' + JSON.stringify(contact));

        
        if(this.state.id === '_add'){
            ContactServices.createContact(contact).then(res =>{
                this.props.history.push('/contact');
            });
        }else{
            ContactServices.updateContact(contact, this.state.id).then( res => {
                this.props.history.push('/contact');
            });
        }
        
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
       
    }

    changeNumberHandler= (event) => {
        this.setState({phone: event.target.value});
        
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
        
    }

    cancel(){
        this.props.history.push('/contact');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add </h3>
        }else{
            return <h3 className="text-center">Update </h3>
        }
    }
    render() {
        
        return (
            <div>
                <br></br>
                <form className="was-validated"  >
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>  Name: </label>
                                            <input placeholder="Jose Rizal" name="name" className="form-control" 
                                             value={this.state.name} onChange={this.changeNameHandler} required/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Email Address: </label>
                                            <input placeholder="no_name@accenture.com" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler} required/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Contact Number: </label>
                                            <input placeholder="(020) 613-9899" name="phone" className="form-control" 
                                                value={this.state.phone} onChange={this.changeNumberHandler}required/>
                                        </div>
                                       
                                        <button     className="btn btn-success"  onClick={this.saveOrUpdateContact.bind(this)}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
                   </form>
            </div>
        )
    }
}

export default CreateUserComponent