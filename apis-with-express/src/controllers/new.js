const newUser = require("../../models/new.js");
const Comment = require("../../models/comments.js")

exports.findUser = async (req, res)=>{
    const user = await newUser.find();
    res.send({ data : user})
};

exports.createUser = async (req, res)=> {
    // const data = req.body;
    // console.log(data);
    // res.send(data)
    const user = new newUser(req.body);
    await user.save();
    res.send({ data: user})
}
exports.addComments = async (req, res)=>{
    const newComment = new Comment(req.body);
    await newComment.save();
    res.send(newComment)
}

exports.allComments = async (req, res)=>{
    const comment = await Comment.find();
    res.send(comment)
}
exports.findBy = async (req, res)=>{
    const one = await Comment.findById(req.params.id);
    res.send(one)
}
exports.updateComment = async (req, res)=>{
    try{
        const comment = await Comment.findById(req.params.id);
        Object.assign(comment, req.body);
        comment.save();
        res.send(comment)
    }
    catch {
        res.status(404).send({error : "not found"})
    }
}
exports.deletethis = async (req, res)=>{
    try{
        const comment = await Comment.findById(req.params.id);
        await comment.remove();
        res.send(true)
    }
    catch {
        res.status(404).send({error : "not found"})
    }
}