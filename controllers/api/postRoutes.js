//Worked with Harrison Cooper 

const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

//Route for a new post by the user

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
      
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Route to look at all posts by a particular user based on session.user_id

router.get('/', withAuth, async (req, res) => {
try {
const postData = await Post.findByPk(req.session.user_id, {
  include: [{model: Post}]});

  res.status(200).json(postData);
} catch (err) {
  res.status(400).json(err);
}
});

//Route for deleting a post, specifying by the id of the post

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const PostData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!PostData) {
      res.status(404).json({ message: 'No Post found with this id!' });
      return;
    }

    res.status(200).json(PostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
