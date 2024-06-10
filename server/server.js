// ##### SERVER용 코드 ##### //

// const express = require("express");
// const cors = require("cors");
// const mysql = require("mysql");
// const app = express();
// const PORT = 3001; // port number

// // MySQL 연결 설정
// const db = mysql.createPool({
//     host: "",
//     user: "",
//     password: "",
//     database: ""
// });

// // 미들웨어 설정
// app.use(cors({
//     origin: "*", // 출처 허용 옵션
//     credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
//     optionsSuccessStatus: 200 // 응답 상태 200으로 설정
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // URL-encoded 바디를 파싱 (HTML 폼에서 전송된 데이터)
// app.use(express.urlencoded({ extended: true}));

// //서버 연결 시 발생
// app.listen(PORT, () =>{
//     console.log(`server running on port ${PORT}`);
// })

// app.get("/api/memberList", (req, res)=>{
//     res.header("Access-Control-Allow-Origin", "*");

//     const sqlQuery = "SELECT * FROM usertable";

//     db.query(sqlQuery, (err, result) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.send(result);
//         }
//     });
// })

// app.get("/api/postList", (req, res) => {
//     res.header("Access-Control-Allow-Origin", "*");

//     const sqlQuery = "SELECT * FROM contentTable ORDER BY id DESC";

//     db.query(sqlQuery, (err, result) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.send(result);
//         }
//     });
// })

// app.post("/api/write", (req, res) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     const sqlQuery = "INSERT INTO contentTable (category, title, summary, author_nickName, content, tags, thumbnail_url) VALUES (?,?,?,?,?,?,?)";
//     const params = [req.body.category, req.body.title, req.body.summary, req.body.author_nickName, req.body.content, req.body.tags, req.body.thumbnail_url];
//     db.query(sqlQuery, params, (err, result) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.send(result);
//         }
//     });
// })

// app.post("/api/updateUser", (req, res) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     const sqlQuery = "UPDATE usertable SET userNickName =?, userPassword =?, userName =?, userEmail =?, userAge =? WHERE id =?";
//     const params = [req.body.userNickName, req.body.userPassword, req.body.userName, req.body.userEmail, req.body.userAge, req.body.id];
//     db.query(sqlQuery, params, (err, result) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.send(result);
//         }
//     });
// })

// app.post("/api/updatePost", (req, res) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     const sqlQuery = "UPDATE contentTable SET category =?, title =?, summary =?, author_nickName =?, content =?, tags =?, thumbnail_url =? WHERE id =?";
//     const params = [req.body.category, req.body.title, req.body.summary, req.body.author_nickName, req.body.content, req.body.tags, req.body.thumbnail_url, req.body.id];
//     db.query(sqlQuery, params, (err, result) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.send(result);
//         }
//     });
// })

// app.delete("/api/deletePost/:id", (req, res) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     const sqlQuery = "DELETE FROM contentTable WHERE id =?";
//     const params = [req.params.id];
//     db.query(sqlQuery, params, (err, result) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.send(result);
//         }
//     });
// })

// ##### SERVER용 코드 ##### //