import React from 'react';

import './UserInfo.scss';

function InfoUser(props) {
    return (
        <div className="info-user">
            {props.userName}
        </div>
    );
}

export default InfoUser;