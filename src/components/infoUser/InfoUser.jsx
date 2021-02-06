import React from 'react';
import { useSelector } from "react-redux";
import { getUserName } from "../../store/selectors/getUserData";
import './InfoUser.scss';

function InfoUser() {
    const userName = useSelector(state => getUserName(state));

    return (
        <div className="info-user">
            {userName}
        </div>
    );
}

export default InfoUser;