import asyncHandler from "express-async-handler";
import Khoj from "../models/khojModel.js";

// @desc    Khoj
// @route   POST /api/khoj
// @access  Public
export const khoj = asyncHandler(async (req, res) => {
  const { search, user } = req.body;

  const khoj = new Khoj({
    user: user._id,
    search,
  });

  const khojSave = await khoj.save();
  res.status(201).json(khojSave);
});
