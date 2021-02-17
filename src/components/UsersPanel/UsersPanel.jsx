import React from "react";
import { Button, FormCheck } from "react-bootstrap";

import "./UsersPanel.scss";

function UsersPanel({handleChangeCheckbox, handleClickNewPost}) {
    return (
        <div>
            <span className="checbox-my-post">
                <FormCheck  
                    type="checkbox" 
                    label="Only my posts" 
                    inline
                    onChange={handleChangeCheckbox}
                />
            </span>
            <span className="btn-new-post">
                <Button 
                    variant="primary" 
                    onClick={handleClickNewPost}
                >
                    New post
                </Button>
            </span>
        </div>
    );
}

export default UsersPanel;