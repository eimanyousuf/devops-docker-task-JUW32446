const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>DevOps Docker Task</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 100px;
                    background-color: #f4f4f4;
                }

                .container {
                    background: white;
                    width: 60%;
                    margin: auto;
                    padding: 40px;
                    border-radius: 15px;
                    box-shadow: 0 0 15px rgba(0,0,0,0.15);
                }

                h1 {
                    color: #333;
                }

                p {
                    font-size: 18px;
                    margin: 15px;
                }
            </style>
        </head>

        <body>
            <div class="container">
                <h1>DevOps Docker Task</h1>

                <p><strong>Student Name:</strong> Eiman Yousuf</p>

                <p><strong>Student ID:</strong> JUW32446</p>

                <p><strong>Course:</strong> DevOps</p>

                <p>
                    This application is running inside a Docker container.
                </p>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});