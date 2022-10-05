import Axios from 'axios';
import { useState, useEffect } from 'react';



export default function Update() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState(0);

    const [employeeList, setEmployeeList] = useState([]);


    const updateEmployee = (id) => {
        Axios.put('http://localhost:8080/update', {
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            number: number
        }).then((response) => {
            setEmployeeList(
                employeeList.map(
                    (val) => {
                        return val.id == id ?
                            {
                                id: id,
                                firstName: firstName,
                                lastName: lastName,
                                email: email,
                                number: number
                            } : val;
                    }
                )
            );
        });
    }


    return (
        <div className="update">
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

                <button onClick={updateEmployee}>Update</button>
            </div>
        </div>
    )
}
