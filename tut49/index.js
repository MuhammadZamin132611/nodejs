const express = require('express');
const app = express();
const con = require('./config')
app.get('/', (req, resp) => {
    con.query("select * from personal", (err, result) => {
        if (err) {
            resp.send("error")
        } else {
            resp.send(result)
        }
    })
})

// app.use(express.json())
// app.post('/', (req, resp)=>{
//     const data = {name:'bkaskar', percentage:45, age:32, gender:"M", city:1,courses:2};
//     con.query('insert into personal ?', data, (error, result, fields)=>{
//         if(error) error;
//         resp.send(result);
//         console.log(result);
//     })
// })
app.use(express.json());
app.post('/', (req, resp) => {
    const data = { name: 'zamin', percentage: 49, age: 42, gender: "M", city: 2, courses: 3 };
    con.query('INSERT INTO personal SET ?', data, (error, result, fields) => {
        if (error) {
            console.error("Error inserting data:", error);
            resp.status(500).send("Error inserting data");
            return;
        }
        console.log("Data inserted successfully:", result);
        // resp.send(result);
        resp.status(200).send("Data inserted successfully");
    });
});


app.listen(5000);