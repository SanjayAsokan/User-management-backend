const Resource = require('../models/Resource');

exports.createResource = async (req, res) => {
  try {
    const resource = await Resource.create({ ...req.body, createdBy: req.user.id });
    res.status(201).json(resource);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getResources = async (req, res) => {
  try {
    const resources = await Resource.find().populate('createdBy', 'name email');
    res.json(resources);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateResource = async (req, res) => {
  try {
    const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!resource) return res.status(404).json({ error: 'Resource not found' });
    res.json(resource);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findByIdAndDelete(req.params.id);
    if (!resource) return res.status(404).json({ error: 'Resource not found' });
    res.json({ message: 'Resource deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
