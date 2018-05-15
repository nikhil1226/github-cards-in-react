import React from 'react';

const Contact = (props) => {
    return (
        <div>
            <div className="row" style={{ paddingTop: '10px', clear: 'both' }}>
                <div>
                    <img width="100" className="pull-left" src={props.avatar_url}
                        alt="avatar" style={{ marginRight: '10px' }} />
                </div>
                <div>
                    <div><h1>{props.name}</h1></div>
                    <div><h5>{props.location}</h5></div>
                </div>
            </div>
        </div>
    );
}

export default Contact;