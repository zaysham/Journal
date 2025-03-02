import mysql from 'mysql2/promise'; 

const pool =  mysql.createPool({
    host: 'localhost', 
    user: 'root', 
    password: 'Asad2025!',
    database: 'journal',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}); 

export default pool; 

// const band = 'Twenty One Pilots'; 

// const addData = async function () {
// try {
//     const [results, fields] = await connection.query(
//         'INSERT INTO bands (name) VALUES  (?)', 
//         [band]
//     ); 

//     console.log(results); 
//     console.log(fields); 
// }   catch(err){
//     console.log(err); 
// }
// }



// try {
//     const [results, fields] = await connection.query(
//         'DELETE FROM bands WHERE name = (?)', 
//         [band]
//     ); 

//     console.log(results); 
//     console.log(fields); 
// }   catch(err){
//     console.log(err); 
// }


// try {
//     const [results, fields] = await connection.query(
//         'SELECT * FROM bands'
//     ); 

//     console.log(results); 
//     console.log(fields); 
// }   catch(err){
//     console.log(err); 
// }

