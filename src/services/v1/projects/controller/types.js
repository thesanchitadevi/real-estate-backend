const { Projects } = require("../../../../database");


// Example controller method to create a record
module.exports  = async (req, res) => {
    try {
        const { types } = req.body;
        const newRecord = await Projects.create({ types });
        res.status(201).json(newRecord);
    } catch (error) {
        // Send Error Response
        next(error);
    }
};

