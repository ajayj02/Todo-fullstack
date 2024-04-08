const express = require("express");
const cors = require("cors")
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3300;

app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You have sent invalid inputs",
    });
  }

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,                                                                                                                           
  });

  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find();

  res.json({
    todos,
  });
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!updatePayload.success) {
    res.status(411).json({
      msg: "you have sent invalid inputs",
    });
  }

  await todo.update(
    {
      _id: req.body.id,        //thing which we want to update
    },
    {
      completed: true,         //what we want to place as newer thing
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
