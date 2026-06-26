const Note = require("../models/Note");
const generateNotes = require("../services/notesAIService");

exports.generateNote = async (req, res) => {
  try {
    const { topic, subject } = req.body;

    const content = await generateNotes(topic);

    const note = await Note.create({
      user: req.user.id,
      title: topic,
      subject,
      content,
    });

    res.status(201).json(note);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to generate note",
    });
  }
};

exports.getNotes = async (req, res) => {
  const notes = await Note.find({
    user: req.user.id,
  }).sort({
    createdAt: -1,
  });

  res.json(notes);
};

exports.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);

  res.json({
    message: "Deleted",
  });
};

exports.favoriteNote = async (req, res) => {
  const note = await Note.findById(req.params.id);

  note.favorite = !note.favorite;

  await note.save();

  res.json(note);
};