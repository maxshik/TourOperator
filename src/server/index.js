var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var sql = require("mssql");
var fs = require("fs");
var cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

var config = {
  user: "user",
  password: "password",
  server: "80.94.168.145",
  database: "tours",
  options: {
    encrypt: false,
  },
};

sql
  .connect(config)
  .then(function () {
    app.get("/tours", function (req, res) {
      new sql.Request()
        .query("SELECT * FROM tours")
        .then(function (recordset) {
          res.json(recordset);
        })
        .catch(function (err) {
          console.error(err);
          res.status(500).send("Ошибка чтения из базы данных");
        });
    });
    app.get("/tours/:tourId", function (req, res) {
      new sql.Request()
        .query(`SELECT * FROM tours WHERE id = ${req.params.tourId}`)
        .then(function (recordset) {
          if (recordset.recordset.length > 0) {
            res.json(recordset.recordset[0]);
          } else {
            res.status(404).send("Тур не найден");
          }
        })
        .catch(function (err) {
          console.error(err);
          res.status(500).send("Ошибка чтения из базы данных");
        });
    });

    app.post("/search", function (req, res) {
      var searchParams = req.body;
      new sql.Request()
        .query(
          `SELECT * FROM tours WHERE departure_date >= '${searchParams.date[0]}' AND departure_date <= '${searchParams.date[1]}' AND city = '${searchParams.cityOfArrival[1]}'`
        )
        .then(function (recordset) {
          res.json(recordset);
        })
        .catch(function (err) {
          console.error(err);
          res.status(500).send("Ошибка чтения из базы данных");
        });
    });

    app.post("/comments", function (req, res) {
      var comment = req.body;
      fs.readFile("comments.json", function (err, data) {
        if (err) {
          console.error(err);
          res.status(500).json({ message: "Ошибка чтения файла" });
        } else {
          var comments = JSON.parse(data);
          comments.push(comment);
          fs.writeFile(
            "comments.json",
            JSON.stringify(comments),
            function (err) {
              if (err) {
                console.error(err);
                res.status(500).json({ message: "Ошибка записи в файл" });
              } else {
                res
                  .status(200)
                  .json({ message: "Комментарий успешно добавлен" });
              }
            }
          );
        }
      });
    });
  })
  .catch(function (err) {
    console.error(err);
  });

app.listen(5000, function () {
  console.log("Сервер запущен на порту 5000");
});
