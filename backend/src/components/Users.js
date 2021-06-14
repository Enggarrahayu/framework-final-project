import React from "react";

import addUser from "../components/addUser"

const Users = () => {
    
    const addOrEdit = obj =>{
        firebaseDb.child('Users').push(
            obj,
            err => {
                if(err)
                console.log(err)
            }
        )
    }

    return(
        <div>
            <addUser addOrEdit={addOrEdit} />
        </div>
    );
}

export default Users;