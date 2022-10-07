import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Axios from 'axios';

import './index.css';

function Add() {
    /*
            * email id
             First Name
             Last Name
             Email
             Phone number
        */
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState(0);

    const [employeeList, setEmployeeList] = useState([]);

    const addNewEmployee = () => {
        Axios.post("http://localhost:8080/add",
            {
                firstName: firstName,
                lastName: lastName,
                email: email,
                number: number,

            }).then(() => {
                setEmployeeList([...employeeList, {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    number: number,
                }])
            })
    }


    return (
        <div className="addUser">
            <div className="information">

                <label>First Name:</label>
                <input
                    type="text"
                    onChange={(event) => {
                        setFirstName(event.target.value);
                    }}
                />

                <label>Last Name:</label>
                <input
                    type="text"
                    onChange={(event) => {
                        setLastName(event.target.value);
                    }}
                />

                <label>Email:</label>
                <input
                    type="text"
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />

                <label>Phone number:</label>
                <input
                    type="number"
                    onChange={(event) => {
                        setNumber(event.target.value);
                    }}
                />

                <Link to={"/Home"} onClick={addNewEmployee}>Add</Link>
            </div>
        </div>
    )

}


export default Add;
