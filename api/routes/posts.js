const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//CREATE POST
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
  
  } catch (err) {
    res.status(500).json(err);
  }
});


//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST
router.get("/:id", async (req, res) => {
  
  try {
    const post = await Post.findById(req.params.id);
   
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

/*router.get("/:id", async (req, res) => {
  
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});*/




const takeReaders =  async (req, res, next) => {
  try {
    const { likes} = req.body;
    const currentUser = await User.findById(req.params.id);
    let users;
     users = await User.findById(req.params.id);
    const userPosts = await Book.find({likes : users.id  });


   // const category = req.query.author.split(",")
    //try{
     // const list = await Promise.all(category.map(author=>{
     //   return User.countDocuments({author})
     //  } ))

     const lubie = await Promise.all(
      currentUser.likes.map((item) => {
        return Book.find({ userId: item});
      })
    );
  
    res.status(200).json(userPosts);
    //res.status(200).json(userPosts.concat(users));
  } catch (err) {
    res.status(500).json(err);
  }
};



//GET ALL POSTS

/*
router.get("/", async (req, res) => {
const username = req.query.user;
const limitValue = req.query.limit || 3;
      const skipValue = req.query.skip || 0;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username : username });
    } 
    
    if (skipValue) {
      posts = await Post.find().limit(limitValue).skip(skipValue);
    }
    else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

*/
//https://www.geeksforgeeks.org/how-to-create-pagination-in-node-js-using-skip-and-limit/
router.get("/", async (req, res) => {
  const username = req.query.user;
  const limitValue = req.query.limit || 0;
      const skipValue = req.query.skip || 0;
//https://dev.to/hakimraissi/pagination-with-express-and-mongoose-pnh
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username : username }).limit(limitValue)
      .skip(skipValue).sort({ createdAt: -1 });
    }  else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;