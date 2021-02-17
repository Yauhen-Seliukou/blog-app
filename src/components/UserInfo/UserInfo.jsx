import React from 'react';

import './UserInfo.scss';

function InfoUser({userName}) {
    return (
        <div className="info-user">
            {userName}
        </div>
    );
}

export default InfoUser;