import Axios from 'axios';
import { useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';
import './index.css';





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
                setFirstName(response.data[0].firstname);
                setLastName(response.data[0].lastname);
                setEmail(response.data[0].email);
                setNumber(response.data[0].number);
            }
        )

    };

    useEffect(() => getEmployee(), []);

    return (
        <div className="update">
            <div className="information">

                <label>First Name:</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(event) => {
                        setFirstName(event.target.value);
                    }}
                />

                <label>Last Name:</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(event) => {
                        setLastName(event.target.value);
                    }}
                />

                <label>Email:</label>
                <input
                    type="text"
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />

                <label>Phone number:</label>
                <input
                    type="number"
                    value={number}
                    onChange={(event) => {
                        setNumber(event.target.value);
                    }}
                />

                <Link to="/Home" onClick={updateEmployee} className="btn btn-primary">Update</Link>
            </div>
        </div>
    )
}
