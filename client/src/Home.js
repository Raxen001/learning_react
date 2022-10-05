import Axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {

    /*
            * email id
             First Name
             Last Name
             Email
             Phone number
        */

    const [employeeList, setEmployeeList] = useState([]);

    const getEmployees = () => {
        Axios.get("http://localhost:8080/get")
            .then((response) => {
                setEmployeeList(response.data);
            })
            .catch((err) => {
                console.log("Error in fetching data...", err);
            });
    };

    const delEmployee = (id) => {
        Axios.delete(`http://localhost:8080/delete/${id}`)
            .then((response) => {
                setEmployeeList(employeeList.filter((val) => {
                    return val.id != id;
                }))
            })
            .catch((err) => {
                console.log("Error in deleteing data...", err);
            });
    }


    useEffect(getEmployees, []);
    return (
        <div className="Home">

            <table>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone number</th>
                    <th></th>
                    <th></th>
                </tr>
                {employeeList.map((val) => {
                    return (
                        <tr>
                            <td>{val.id}</td>
                            <td>{val.firstname}</td>
                            <td>{val.lastname}</td>
                            <td>{val.email}</td>
                            <td>{val.number}</td>
                            <td><button onClick={() => <Link to="./Update"/>}>Edit</button></td>
                            <td><button onClick={() => { delEmployee(val.id) }}>Delete</button></td>
                        </tr>
                    );
                })}
            </table>
        </div>
    )

}
