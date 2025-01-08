import React, { Component } from 'react'
import ContactServices from '../controller/ContactServices'


class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            contact: {}
        }
    }

    componentDidMount(){
        ContactServices.getContactById(this.state.id).then( res => {
            this.setState({contact: res.data});
        })
    }
    cancel(){
        this.props.history.push('/contact');
    }


    render() {
        return (
            <div>
                <br></br>
            
                <div className = "card col-lg-6 offset-lg-3">
                    <h2 className = "text-center" > View Contact Details</h2>
                    <div className = "card-body" >
                        <div className = "row">
                            <label> Contact Name:  </label>
                            <div> { this.state.contact.name }</div>
                        </div>
                        <div className = "row">
                            <label>Email:  </label>
                            <div> { this.state.contact.email }</div>
                        </div>
                        <div className = "row">
                            <label> Contact Number:  </label>
                            <div> { this.state.contact.phone }</div>
                        </div>
                    </div>
                 

                </div>
                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Go back to Main Menu</button>
            </div>
        )
    }
}

export default ViewUserComponent