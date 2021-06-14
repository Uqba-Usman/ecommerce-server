const express = require("express");
const router = express.Router();

const config = require("config");

const { Notes } = require("../models/notes");

router.post("/send", async (req, res) => {
  console.log("RE BODY", req.body);

  let notes = new Notes();
  notes.note = req.body.note;
  if (req.body.chatName) {
    notes.chatName = req.body.chatName;
  } else {
    notes.chatName = req.body.postedBy.name;
  }
  notes.postedBy = req.body.postedBy;

  await notes.save();

  console.log("NOTES: ", notes);
  res.send(notes);
});

router.get("/all", async (req, res) => {
  const notes = await Notes.find({});
  console.log("NOTES: ", notes);
  res.send(notes);
});

router.get("/chat/:name", async (req, res) => {
  console.log("RE BODY", req.params.name);
  const notes = await Notes.find({});
  console.log("NOTES: ", notes);
  const filteredItems = notes.filter((n) => n.chatName == req.params.name);
  console.log("filteredItems: ", filteredItems);

  res.send(filteredItems);
});

module.exports = router;
