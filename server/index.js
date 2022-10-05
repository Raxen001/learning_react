const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const PORT = 8080;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'db_user',
  database: 'employeesystem',
  password: 'db_pass'
});


app.get('/get', (req, res) => {
    connection.query("SELECT * FROM employees", (err, result) => {
        if (err){
            console.log("Database doesn't exist", err);
        }
        else{
            res.send(result)
            console.log("Data sent...");
        }
    })
});

app.post('/add', (req, res) => {

    const firstname = req.body.firstName;
    const lastname = req.body.lastName;
    const email = req.body.email;
    const number = req.body.number;

    connection.query(
        "INSERT INTO employees (firstname, lastname, email, number) VALUES (?,?,?,?)",
        [firstname, lastname, email, number],
        (err, result) => {
            if(err){
                console.log(err);
            }
            else{
                res.send("Sucess");
            }
        }
    );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  connection.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, ()=> {
    console.log("Server is running on", PORT);
})
