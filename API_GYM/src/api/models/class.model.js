const pool = require("../../utils/db");

const insertClass = async ({date, name}) => {
    const [result] = await pool.query ("INSERT INTO class (date, name) VALUE (?,?)", [date, name]);
    if(result.affectedRows === 0){
        return -1;
    }
    return result.insertId;

}

const selectById = async (id) => {
   const [result] = await pool.query("SELECT * FROM class WHERE idclass=?", [id]);
   return result;
}

const updateClass = async (data, name, idclass) => {
    const [result] = await pool.query("UPDATE class SET date = ?, name=? WHERE idclass = ?", [data, name, idclass]);
    console.log(result);
    if(result.affectedRows === 0){
        return -1
    }
    return idclass;

}


module.exports = {insertClass, selectById, updateClass}