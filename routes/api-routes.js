const notes = require("../db/db.json");
const fs = require("fs");
const uuid = require('uuid')
module.exports = function (app) {

  //GET
  app.get("/api/notes", function (req, res) {
    res.send(notes);
  });

  //POST
  app.post("/api/notes", function (req, res) {
    let noteID = uuid();
    let newNote = {
      id: noteID,
      title: req.body.title,
      text: req.body.text,
    };

    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;

      const getNotes = JSON.parse(data);
      getNotes.push(newNote);

      fs.writeFile("./db/db.json", JSON.stringify(getNotes, null, 2), (err) => {
        if (err) throw err;
        res.send(notes);
        console.log("You created a new note!");
      });
    });
  });

  //DELETE
  app.delete("/api/notes/:id", (req, res) => {
    let noteID = req.params.id;

    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;

      const getNotes = JSON.parse(data);
      const getAllNotes = getNotes.filter((note) => note.id != noteID);

      fs.writeFile(
        "./db/db.json",
        JSON.stringify(getAllNotes, null, 2),
        (err) => {
          if (err) throw err;
          res.send(notes);
          console.log("Note deleted!");
        }
      );
    });
  });
};
