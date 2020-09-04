const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const dbconfig = {
  host: "localhost", 
  user: "root",
  password: "",
  database: "dacdemo",
};

const addUser = async (input) => {
  const connection = mysql.createConnection(dbconfig);

  await connection.connectAsync();

  const sql =
    "INSERT INTO REGISTRATION (USERNAME, EMAIL, PASSWORD, CONFIRMPASSWORD) VALUES (?, ?, ?, ?)";
  await connection.queryAsync(sql, [
    input.Username,
    input.Email,
    input.Password,
    input.ConfirmPassword,
  ]);

  await connection.endAsync();
};


const validuser = async (input) => {
  const connection = mysql.createConnection(dbconfig);
  await connection.connectAsync();

  const sql = "SELECT * FROM REGISTRATION WHERE EMAIL=? AND PASSWORD=?";
  const output = await connection.queryAsync(sql, [
    input.Email,
    input.Password,
  ]);

  await connection.endAsync();

  if(output.length === 0) {
    throw new Error("Invalid Login");
  }
}


module.exports = { addUser , validuser};


