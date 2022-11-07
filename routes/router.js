const express = require("express");
const router = new express.Router();
const conn = require("../db/conn");
const multer = require("multer");


// img storage confing
const imgconfig = multer.diskStorage({
  destination: (req, photo, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, photo, callback) => {
    callback(null, `image-${Date.now()}.${photo.originalname}`);
  },
});

// img filter
const isImage = (req, photo, callback) => {
  if (photo.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(null, Error("only image is allowd"));
  }
};

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});

router.post("/update", upload.single("photo"), (req, res) => {
  try {
    const filename = req.file.path;
    const fname = req.body.name;
    const frole = req.body.role;
    const fdept = req.body.department;
    const fempid = req.body.empid;
    const fdob = req.body.dob;
    const femail = req.body.email;
    const flocation = req.body.location;
    const fcontact = req.body.contact;
    const id = req.body.id;

      try {
        let sql = `UPDATE employees SET ? WHERE id = ?`
        let id_no = `${id}`
        conn.query(
          sql,
          [{
            name: fname,
            role: frole,
            dept: fdept,
            emp_id: fempid,
            dob: fdob,
            email: femail,
            location: flocation,
            contact: fcontact,
            path: filename,
          }, id_no],
          (err, result) => {
            if (err) {
              console.log("error");
            } else {
              console.log("data updated");
              res.status(201).json({ status: 201, data: req.body });
            }
          }
        );
      } catch (error) {
        res.status(422).json({ status: 422, error });
      }
  } catch (error) {
    const filename = req.body.photo;
    const fname = req.body.name;
    const frole = req.body.role;
    const fdept = req.body.department;
    const fempid = req.body.empid;
    const fdob = req.body.dob;
    const femail = req.body.email;
    const flocation = req.body.location;
    const fcontact = req.body.contact;
    const id = req.body.id;

      try {
        let sql = `UPDATE employees SET ? WHERE id = ?`
        let id_no = `${id}`
        conn.query(
          sql,
          [{
            name: fname,
            role: frole,
            dept: fdept,
            emp_id: fempid,
            dob: fdob,
            email: femail,
            location: flocation,
            contact: fcontact,
            path: filename,
          }, id_no],
          (err, result) => {
            if (err) {
              console.log("error");
            } else {
              console.log("data updated");
              res.status(201).json({ status: 201, data: req.body });
            }
          }
        );
      } catch (error) {
        res.status(422).json({ status: 422, error });
      }
  }
});

// register userdata
router.post("/register", upload.single("photo"), (req, res) => {
  const filename = req.file.path;
  const fname = req.body.name;
  const frole = req.body.role;
  const fdept = req.body.department;
  const fempid = req.body.empid;
  const fdob = req.body.dob;
  const femail = req.body.email;
  const flocation = req.body.location;
  const fcontact = req.body.contact;

    try {

      conn.query(
        "INSERT INTO employees SET ?",
        {
          name: fname,
          role: frole,
          dept: fdept,
          emp_id: fempid,
          dob: fdob,
          email: femail,
          location: flocation,
          contact: fcontact,
          path: filename,
        },
        (err, result) => {
          if (err) {
            console.log("error");
          } else {
            console.log("data added");
            res.status(201).json({ status: 201, data: req.body });
          }
        }
      );
    } catch (error) {
      res.status(422).json({ status: 422, error });
    }
});

// get user data
router.get("/getdata", (req, res) => {
  try {
    conn.query("SELECT * FROM employees", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("data get");
        res.status(201).json({ status: 201, data: result });
      }
    });
  } catch (error) {
    res.status(422).json({ status: 422, error });
  }
});

// delete user
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  try {
    let sql = `DELETE FROM employees WHERE id = ?`
    let id_no = `${id}`
    conn.query(sql, [id_no], (err, result) => {
      if (err) {
        console.log("error");
      } else {
        console.log("data delete");
        res.status(201).json({ status: 201, data: result });
      }
    });
  } catch (error) {
    res.status(422).json({ status: 422, error });
  }
});

module.exports = router;
