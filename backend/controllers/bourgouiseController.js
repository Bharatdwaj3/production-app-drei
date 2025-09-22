const Bourgouise = require("../models/bourgouiseModel");

const getBourgouises = async (req, res) => {
  try {
    const Bourgouises = await Bourgouise.find({});
    res.status(200).json(Bourgouises);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBourgouise = async (req, res) => {
  try {
    const { id } = req.params;
    const Bourgouise = await Bourgouise.findById(id);
    res.status(200).json(Bourgouise);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBourgouise = async (req, res) => {
  try {
    const Bourgouise = await Bourgouise.create(req.body);
    res.status(200).json(Bourgouise);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBourgouise = async (req, res) => {
  try {
    const { id } = req.params;

    const Bourgouise = await Bourgouise.findByIdAndUpdate(id, req.body);

    if (!Bourgouise) {
      return res.status(404).json({ message: "Bourgouise not found" });
    }

    const updatedBourgouise = await Bourgouise.findById(id);
    res.status(200).json(updatedBourgouise);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBourgouise = async (req, res) => {
  try {
    const { id } = req.params;

    const Bourgouise = await Bourgouise.findByIdAndDelete(id);

    if (!Bourgouise) {
      return res.status(404).json({ message: "Bourgouise not found" });
    }

    res.status(200).json({ message: "Bourgouise deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getBourgouises,
  getBourgouise,
  createBourgouise,
  updateBourgouise,
  deleteBourgouise,
};
