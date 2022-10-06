import Axios from 'axios';
import { useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';





export default function Update() {

    const { id } = useParams();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState(0);

    const [employee, setEmployee] = useState([]);


    const updateEmployee = () => {
        Axios.put('http://localhost:8080/update', {
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            number: number
        }).then((response) => {
            console.log(response);
        });
    }

    const getEmployee = () => {
        Axios.get(`http://localhost:8080/get/${id}`).then(
            (response) => {
                setEmployee(response.data[0]);
            }
        )

    };

    useEffect(()=>getEmployee(), []);

    return (
        <div className="update">
            <div className="information">

                <label>First Name:</label>
                <input
                    type="text"
                    defaultValue={employee.firstname}
                    onChange={(event) => {
                        setFirstName(event.target.value);
                    }}
                />

                <label>Last Name:</label>
                <input
                    type="text"
                    defaultValue={employee.lastname}
                    onChange={(event) => {
                        setLastName(event.target.value);
                    }}
                />

                <label>Email:</label>
                <input
                    type="text"
                    defaultValue={employee.email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />

                <label>Phone number:</label>
                <input
                    type="number"
                   defaultValue={employee.number}
                    onChange={(event) => {
                        setNumber(event.target.value);
                    }}
                />

                <Link to="/Home" onClick={updateEmployee} className="btn btn-primary">Update</Link>
            </div>
        </div>
    )
}
