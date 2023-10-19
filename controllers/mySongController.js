const { mySongModel } = require("../model/mySongModel");

const mySongControllers = {
  // GET listSong
  getListSong: async (req, res) => {
    try {
      const listSong = await mySongModel.find({});
      res.status(200).json(listSong);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  // ADD Song
  addSong: async (req, res) => {
    try {
      const newSong = await mySongModel.create(req.body);
      res.status(200).json({
        status: "Successfull",
        data: newSong,
      });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  deleteSong: async (req, res) => {
    try {
      const { id } = req.params;
      await mySongModel.findByIdAndDelete(id);

      res.status(200).json({
        status: "Successfull",
      });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  updateSong: async (req, res) => {
    try {
      const { id } = req.params;
      const newSong = await mySongModel.findByIdAndUpdate(
        id,
        {
          ...req.body,
        },
        { new: true }
      );

      res.status(200).json({
        status: "Successfull",
        data: newSong,
      });
    } catch (error) {
      res.status(400).json(error);
    }
  },
};

module.exports = mySongControllers;
