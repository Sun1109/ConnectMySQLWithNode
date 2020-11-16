const express = require('express');
const mysql = require('mysql');

//Create connect
const db = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'dbwithnode'
});

//Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySQL connect');
});

const app = express();

// hien thi tat ca item
app.get("/getUser", (req, res) => {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  
    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
  
    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
  
    let sql = 'SELECT * FROM user';
    let query = db.query(sql, (err, results) => {
        if(err){
            throw err;
        }
        console.log(results);
        res.send(results);
    });
  });

app.listen('1000', ()=>{
    console.log('Start sever in port 1000');
});