const express = require("express");
const todoCtrl = require("../controllers/todoCtrl");
const router = express.Router();

router.route("/todos")
.get(todoCtrl.list)
.post(todoCtrl.create);
router
  .route("/todo/:todoId")
  .get(todoCtrl.read)
  .put(todoCtrl.update)
  .delete(todoCtrl.remove);

router.param("todoId",todoCtrl.todoById);

module.exports = router;
