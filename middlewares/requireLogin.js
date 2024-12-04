module.exports = (req, res, next) => {
  //next is called when function is completed
    if(!req.user){
        return res.status(401).send({ error: 'You must logged in before adding credits. Dah' });
    }

    next();
};