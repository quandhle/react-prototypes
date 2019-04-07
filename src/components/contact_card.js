import React from 'react';

export default props => {
    const {firstName, lastName, phone, email, address, city, state, zip} = props.contact;

    return (
        <div className="col-6 my-3">
            <div className="card">
                <div className="card-header">
                    {lastName}
                </div>
                <div className="card-block">
                    <h4 className="card-title">{firstName} {lastName}</h4>
                    <div className="card-text">
                        <p>Phone: {phone}</p>
                        <p>Email: {email}</p>
                    </div>
                    <hr/>
                    <div className="card-text">
                        <p>Address: {address}</p>
                        <p>City: {city}</p>
                        <p>State: {state}</p>
                        <p>Zip: {zip}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}