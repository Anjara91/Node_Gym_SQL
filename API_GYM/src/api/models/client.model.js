const pool = require("../../utils/db");

const selectAll = async () => {
    const result = await pool.query("SELECT * FROM client");
    return result[0];
};

const insertClient = async ({name, lastname, email, password, age, dni}) => {
    const [result] = await pool.query("INSERT INTO client (name, lastname, email, password, age, dni) VALUES(?,?,?,?,?,?)", [name, lastname, email, password, age, dni]);
    
    if(result.affectedRows === 0){
        return -1;
    }
    return result.insertId;
};

const selectById = async (id) => {
    const result = await pool.query("SELECT * FROM client where idClient = ?", [id]);
    return result[0];
};

const selectByName = async (name) => {
    const result = await pool.query("SELECT * FROM client where idClient = ?", [id]);
    return result[0];
};
    
const selectByEmail = async (email) => {
    const result = await pool.query("SELECT * FROM client where email = ?", [email]);
    return result[0];
};

const deleteClient = async (id) => {
    try {
        const [result] = await pool.query("DELETE FROM CLIENT WHERE idclient = ?", [id]);
        return result;
    } catch (error) {
        
    }
    
}
module.exports = {selectAll, insertClient, selectById, selectByName, selectByEmail, deleteClient }