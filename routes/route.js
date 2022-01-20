const express = require("express");
const router = express.Router();
module.exports = router;

const language = [
    { id: 1, name: "c" },
    { id: 2, name: "c++" },
    { id: 3, name: "Javascript" },
    { id: 4, name: "Python" },
  ];
router.get("", (req, res) => {
    res.send("welcome");
  });

router.get("/api", (req, res) => {
  res.send("hello world");
});

router.get("/api/language", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

router.post("/api/language", (req, res) => {
  if (!req.body.name || req.body.name.length < 4) {
    res.status(400).send("Bad request");
    return;
  }
  const lang = {
    id: language.length + 1,
    name: req.body.name,
  };
  language.push(lang);
  res.send(lang);
});

router.put("/api/language/:id", (req, res) => {
  const lang = language.find((c) => c.id === parseInt(req.params.id));
  if (!lang) res.status(404).send("language with given id  not found");
  res.send(lang);

  if (!req.body.name || req.body.name.length < 4) {
    res.status(400).send("Bad request");
    return;
  }
  lang.name = req.body.name;
  res.send(course);
});

router.delete("/api/language/:id", (req, res) => {
  const lang = language.find((c) => c.id === parseInt(req.params.id));
  if (!lang) res.status(404).send("language with given id  not found");
  res.send(lang);

  const index = language.indexOf(lang);
  language.splice(index, 1);
  res.send(course);
});

router.get("/api/language/:id", (req, res) => {
  const lang = language.find((c) => c.id === parseInt(req.params.id));
  if (!lang) res.status(404).send("language with given id  not found");
  res.send(lang);
});
