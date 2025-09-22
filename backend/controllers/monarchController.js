const Monarch = require("../models/monarchyModel");
const cloudinary = require("../services/cloudinary"); 
const getMonarchs = async (req, res) => {
  try {
    const Monarchs = await Monarch.find({});
    res.status(200).json(Monarchs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMonarch = async (req, res) => {
  try {
    const { id } = req.params;
    const Monarch = await Monarch.findById(id);
    res.status(200).json(Monarch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMonarch = async (req, res) => {

  try{
    const monarchData=req.body;
    if(req.file){
      monarchData.imageUrl=req.file.path;
      monarchData.cloudinaryId=req.file.filename;
    }    
    const monarch =  await Monarch.create(monarchData);
    res.status(201).json(monarch);
  }catch(error){
    console.error("Error creating monarch: ".error);
    res.status(500).json({message: error.message});
  }

}
const updateMonarch = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

   

    if(req.file){
      updateData.imageUrl=req.file.path;
      updateData.cloudinaryId=req.file.filename;
    }

    const monarch = await Monarch.findByIdAndUpdate(id, updateData, {new: true});

    if (!monarch) {
      return res.status(404).json({ message: "monarch not found" });
    }

    res.status(200).json(monarch);
  } catch (error) {
    console.error("Error updating monarch: ",error);
    res.status(500).json({ message: error.message });
  }
};

const deleteMonarch = async (req, res) => {
  try {
    const { id } = req.params;

    const monarch = await Monarch.findByIdAndDelete(id);

    if (!monarch) {
      return res.status(404).json({ message: "monarch not found" });
    }

    if(monarch.cloudinaryId){
      await cloudinary.uploader.destroy(monarch.cloudinaryId);
    }

    res.status(200).json({ message: "monarch deleted successfully" });
  } catch (error) {
    console.error("Error deleting monarch: ",error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMonarchs,
  getMonarch,
  createMonarch,
  updateMonarch,
  deleteMonarch,
};
