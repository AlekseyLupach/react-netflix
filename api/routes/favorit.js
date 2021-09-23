const router = require("express").Router();
const Favorit = require("../models/Favorit");

//CREATE
router.post("/", async (req, res) => {
  const newList = new Favorit(req.body);
  try {
    const savedList = await newList.save();
    res.status(201).json(savedList);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get("/", async (req, res) => {
  try {
    const favorits = await Favorit.find();
    res.status(200).json(favorits.reverse());
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ID
router.get("/:id", async (req, res) => {
  try {
    const favorits = await Favorit.findById(req.params.id);
    res.status(200).json(favorits);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Favorit.findByIdAndDelete(req.params.id);
    res.status(201).json("The list has been delete...");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
