const post = require("../models/Post");

module.exports = {
  async index(req, res) {},

  async store(req, res) {
    const { author, place, description, hashtags } = req.body;
    const { filename: image } = req.file;

    const post = await post.create({
      author,
      place,
      description,
      hashtags,
      image
    });
    // console.log(req.file);
    return res.json(post);
  }
};
