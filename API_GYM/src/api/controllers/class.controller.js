const { insertClass, selectById } = require("../models/class.model");


const createClass = async (req, res) => {
    try {
        const result = await insertClass(req.body);
        if(result ===-1){
            return res.json ({msg: "Insercción no se ha realizado"})
        }

        const classData = await selectById(result);
        return res.json({data: classData});
    } catch (error) {
        console.log(error);
    }
};

const updateClass = async (req, res) => {
    try {
        const {date, name} = req.body;
        const id = req.params.id;
        const result = await updateClass(date,name, idclass)
        if(result === -1){
            return res.json({msg:"no actualizada"});
        }
        const classData = await selectById(result);
        return res.json({data: classData});
    } catch (error) {
        
    }
}

module.exports = {createClass, updateClass};