
//Requirements
const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const jwt = require("jsonwebtoken");

//Libraries used
const app = express();
app.use(cors());
app.use(express.json())

//Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})

//Signup request
app.post('/signup', (req, res) =>{

    //Ececute SQl query to insert the stated signup details into login database
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    //response
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.get("/tickets", (req, res) => {
    const authorizationHeader = req.headers.authorization;
    
    if (!authorizationHeader) {
      return res.status(401).json({ error: 'Authorization header is missing' });
    }
    
    const tokenParts = authorizationHeader.split(' ');
  
    if (!tokenParts || tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(401).json({ error: 'Invalid authorization header' });
    }
  
    const token = tokenParts[1];
  
    jwt.verify(token, "your_secret_key", (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' });
      }
      
      const userId = decoded.userId;
  
      const query = 'SELECT * FROM ticket WHERE user_id = ?';
      
      db.query(query, [userId], (error, results) => {
        if (error) {
          console.error('Error retrieving tickets', error);
          return res.status(500).json({ error: 'Error retrieving tickets' });
        }
        res.json(results);
      });
    });
  });


//Ticket booking request
app.post('/tickets', (req, res) => {
    // Extract data from request body
    const { date, adults, children } = req.body;
  
      // Execute SQL query to insert ticket booking details into ticket database
      const sql = 'INSERT INTO ticket (date, adults, children) VALUES (?, ?, ?)';
      db.query(sql, [date, adults, children], (err, results) => {
        
        //Error handling
        if (err) {
          console.error('Error executing MySQL query:', err);
          res.status(500).json({ error: 'Internal server error' });
          return;
        }
        
        console.log('Ticket booked successfully');
        res.json({ message: 'Ticket booked successfully' });
    });
});

//Membership booking request
app.post('/memberships', (req, res) => {
    // Extract data from request body
    const { adults, children } = req.body;
      
        //Execute SQL query to insert membership booking details into memberships database
        const sql = 'INSERT INTO memberships (adults, children) VALUES (?, ?)';
        db.query(sql, [adults, children], (err, results) => {
        
        //Error handing
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
      
        console.log('Membership booked successfully');
        res.json({ message: 'Membership booked successfully' });
    });
});

//Login request

app.post("/login", (req, res) => {
    // Execute SQL query to Select only the stated data from login database
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
      // Error handling
      if (err) {
        return res.status(500).json({ error: 'Internal server error' });
      }
      
      if (data.length > 0) {
        const token = jwt.sign({ userId: data[0].id }, "your_secret_key", {
          expiresIn: "1h", // Token expires in 1 hour
        });
        
        return res.json({ success: true, token: token });
      } else {
        return res.json({ success: false, message: "Invalid email or password" });
      }
    });
  });

//Hotel availability check request
app.post('/status', (req, res) => {
  const { checkInDate, checkOutDate } = req.body;

  // Execute sql query to Update daily_data table
  const query1 = `UPDATE daily_data 
                  SET status = 'booked'
                  WHERE date >= ? AND date <= ?`;

  db.query(query1, [checkInDate, checkOutDate], (error, results) => {
      if (error) {
          console.error('Error updating daily_data table: ', error);
          res.status(500).send('Error updating daily_data table');
          return;
      }

      console.log('daily_data table updated');

      // Insert into tblreservation table
      const query2 = `INSERT INTO tblreservation (checkInDate, checkOutDate)
                    VALUES (?, ?)`;

      //Error handling
      db.query(query2, [checkInDate, checkOutDate], (error, results) => {
          if (error) {
              console.error('Error inserting into tblreservation table: ', error);
              res.status(500).send('Error inserting into tblreservation table');
              return;
          }

          console.log('tblreservation table updated');
          res.status(200).send('Reservation updated successfully');
      });
  });
});

//Hotel update request
app.post('/status2', (req, res) => {
  const { checkInDate, checkOutDate } = req.body;

  // Update daily_data table
  const query1 = `UPDATE daily_data 
                  SET status2 = 'booked'
                  WHERE date >= ? AND date <= ?`;
  db.query(query1, [checkInDate, checkOutDate], (error, results) => {
      if (error) {
          console.error('Error updating daily_data table: ', error);
          res.status(500).send('Error updating daily_data table');
          return;
      }

      console.log('daily_data table updated');

      // Insert into tblreservation table
      const query2 = `INSERT INTO tblreservation (checkInDate, checkOutDate)
                    VALUES (?, ?)`;
      db.query(query2, [checkInDate, checkOutDate], (error, results) => {
          if (error) {
              console.error('Error inserting into tblreservation table: ', error);
              res.status(500).send('Error inserting into tblreservation table');
              return;
          }

          console.log('tblreservation table updated');
          res.status(200).send('Reservation updated successfully');
      });
  });
});


//Booking status update
app.post('/daily_data', (req, res) => {
    const { checkInDate, checkOutDate } = req.body;
  
    //changing date to mysql format
    const adjustedCheckInDate = new Date(checkInDate);
    adjustedCheckInDate.setHours(adjustedCheckInDate.getHours() + 12); // Adjust to noon
    const adjustedCheckOutDate = new Date(checkOutDate);
    adjustedCheckOutDate.setHours(adjustedCheckOutDate.getHours() + 12); // Adjust to noon
  
    //select count(all of the values). When the status(room1) is booked, don't show it on the frontend.
    //applies 0 to being 'not_booked' and 1 as 'booked' so will check if it is 1 or 0 and output the availability
    const query = `SELECT 
                      IF(COUNT(*) > 0, 
                        IF(SUM(CASE WHEN status = 'booked' THEN 1 ELSE 0 END) > 0, 'not available', 'available'),
                        'not available') AS status1,
                      IF(COUNT(*) > 0, 
                        IF(SUM(CASE WHEN status2 = 'booked' THEN 1 ELSE 0 END) > 0, 'not available', 'available'),
                        'not available') AS status2
                      FROM 
                          daily_data
                      WHERE 
                        date BETWEEN '${adjustedCheckInDate.toISOString().split('T')[0]}' AND '${adjustedCheckOutDate.toISOString().split('T')[0]}'`;
                                    // ^ converts the date from javascript date to mysql date 
    //error handling
    db.query(query, (err, result) => {
      if (err) {
        console.error('Error checking availability:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      
      //response from table
      const { status1, status2 } = result[0];
      const response = {
        status1,
        status2
      };
      res.json(response);
    });
  });
  

//port used
app.listen(8081, ()=> {
    console.log("listening")
})