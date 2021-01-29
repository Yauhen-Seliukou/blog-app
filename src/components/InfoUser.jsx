import React from 'react';
import { useSelector } from "react-redux";
import './InfoUser.scss';

function InfoUser() {
    const user = useSelector(state => state.dataUser.user);
    const dataUser = user ? <span>{user.name} {user.lastName}</span> : '';

    return (
        <div className="info-user">
            {dataUser}
        </div>
    );
}

export default InfoUser;