const PromoterModel = require("../models/Promoter.model");
const createPromoter = async (req, res) => {
  try {
    const { name, code } = req.body;
    if (!name || !code) {
      return res.status(400).send("Name and code are required");
    }
    await PromoterModel.create({ name, code });
    res.status(201).send("Promoter created successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const getAllPromoters = async (req, res) => {
  try {
    const promoters = await PromoterModel.readAll();
    res.status(200).json(promoters);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const getPromoterById = async (req, res) => {
  try {
    const { id } = req.params;
    const promoter = await PromoterModel.read(id);
    res.status(200).json(promoter);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const updatePromoter = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, code } = req.body;
    if (!name || !code) {
      return res.status(400).send("Name and code are required");
    }
    await PromoterModel.update({ id, name, code });
    res.status(200).send("Promoter updated successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const deletePromoter = async (req, res) => {
  try {
    const { id } = req.params;
    await PromoterModel.delete(id);
    res.status(200).send("Promoter deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const incrementPromoterInstalls = async (req, res) => {
  try {
    const { id } = req.params;
    await PromoterModel.incrementInstalls(id);
    res.status(200).send("Installs incremented successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  createPromoter,
  getAllPromoters,
  getPromoterById,
  updatePromoter,
  deletePromoter,
  incrementPromoterInstalls,
};
