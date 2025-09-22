const Clergy = require("../models/clergyModel");

const getClergys = async (req, res) => {
  try {
    const Clergys = await Clergy.find({});
    res.status(200).json(Clergys);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getClergy = async (req, res) => {
  try {
    const { id } = req.params;
    const Clergy = await Clergy.findById(id);
    res.status(200).json(Clergy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createClergy = async (req, res) => {
  try {
    const Clergy = await Clergy.create(req.body);
    res.status(200).json(Clergy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateClergy = async (req, res) => {
  try {
    const { id } = req.params;

    const Clergy = await Clergy.findByIdAndUpdate(id, req.body);

    if (!Clergy) {
      return res.status(404).json({ message: "Clergy not found" });
    }

    const updatedClergy = await Clergy.findById(id);
    res.status(200).json(updatedClergy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteClergy = async (req, res) => {
  try {
    const { id } = req.params;

    const Clergy = await Clergy.findByIdAndDelete(id);

    if (!Clergy) {
      return res.status(404).json({ message: "Clergy not found" });
    }

    res.status(200).json({ message: "Clergy deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getClergys,
  getClergy,
  createClergy,
  updateClergy,
  deleteClergy,
};
