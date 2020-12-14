var notes = require("../db/db.json");

module.exports = function (app) {
  //get
  app.get("/api/notes", function (req, res) {
    res.json(notes);
  });


//post
app.post("/api/notes", function (req, res) {
  notes.push(req.body);
  res.json("save");
});

//delete
app.delete("/api/notes/:index", function(req,res){
    var newData = parseInt(req.params.index);
    let newNote = [];
    for (var = 0, i<notes.length; i++){
        if (i !== newData){
            newNote.push(notes[i])
        }
    }
    notes = newNote;
})

}
