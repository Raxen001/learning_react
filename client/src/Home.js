export default function Home(){
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

    const getEmployees = () => {
        Axios.get("http://localhost:8080/get")
            .then((response) => {
                setEmployeeList(response.data);
            })
            .catch((err) => {
                console.log("Error in fetching data...", err);
            });
    };

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

                <button onClick={addNewEmployee}>Add Employee</button>
            </div>
            <button onClick={getEmployees}>Fetch Employees</button>
            <div className="showDetails">
                {employeeList.map((val) => {
                    return (
                        <div>
                            <h2>ID: {val.id}</h2>
                            <h3>FirstName: {val.firstName}</h3>
                            <h3>LastName: {val.lastName}</h3>
                            <h3>Email: {val.email}</h3>
                            <h3>Phone Number: {val.number}</h3>
                        </div>
                    );
                })}
            </div>

        </div>
    )

}
