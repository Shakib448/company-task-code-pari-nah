import asyncHandler from "express-async-handler";
import Khoj from "../models/khojModel.js";

// @desc    Khoj
// @route   POST /api/khoj
// @access  Public
export const khoj = asyncHandler(async (req, res) => {
  const {
    search: { search, userInfo },
  } = req.body;

  const khoj = new Khoj({
    user: userInfo._id,
    search,
  });

  const khojSave = await khoj.save();

  res.status(201).json(khojSave);
});

// @desc    Khoj
// @route   POST /api/khoj
// @access  Public
export const khojs = asyncHandler(async (req, res) => {
  const {
    search: { search, userInfo },
  } = req.body;

  const khoj = new Khoj({
    user: userInfo._id,
    search,
  });

  const khojSave = await khoj.save();

  res.status(201).json(khojSave);

  if (userInfo._id === req.body.search.userInfo._id) {
    // const findKhoj = await Khoj.findOne({ user: userInfo._id });
    // const updateKhoj = { findKhoj };
    // // console.log(test.findKhoj.search);
    // updateKhoj.findKhoj.search.push(search);
    khoj.updateOne({
      $push: {
        search: [{ search }],
      },
    });
  }
  console.log(khoj);
});
