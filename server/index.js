const {
  client,
  createTables,
  createUser,
  createFoodItem,
  fetchFoodItems,
  fetchUsers,
} = require("./db");
const e = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const express = require("express");
const app = express();
app.use(require("morgan")("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "images")));

const init = async () => {
  await client.connect();
  console.log("connected to database");
  await createTables();
  console.log("tables created");
  const [Kayla, Dave, Sarah] = await Promise.all([
    createUser({
      firstName: "Kayla",
      lastName: "White",
      email: "kayla@example.com",
      phoneNumber: "1234567810",
      password: "shhh",
      is_admin: false,
    }),
    createUser({
      firstName: "Dave",
      lastName: "Brown",
      email: "dave@example.com",
      phoneNumber: "1111111111",
      password: "shhhhi",
      is_admin: false,
    }),
    createUser({
      firstName: "Sarah",
      lastName: "Green",
      email: "sarah@example.com",
      phoneNumber: "1231231234",
      password: "secret",
      is_admin: true,
    }),
    createFoodItem({
      name: "Pizza",
      description: "im a pizza",
      image: "pizza.jpg",
      category: "Pizzas",
      price: 6,
      inventory: 10,
    }),
    createFoodItem({
      name: "Spaghetti",
      description: "im spahgetti",
      image: "spaghetti.jpeg",
      category: "Pastas",
      price: 10,
      inventory: 10,
    }),
    createFoodItem({
      name: "salad",
      description: "im a salad",
      image: "salad.jpg",
      category: "Salads",
      price: 6,
      inventory: 10,
    }),
  ]);

  console.log(await fetchFoodItems());
  app.listen(port, () => console.log(`listening on port ${port}`));
};

init();
