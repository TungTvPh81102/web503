import express from "express";
import productRouter from "./routes/product.routes";
import categoryRouter from "./routes/category.routes";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Connect server successfully");
  console.log("Connect server successfully");
});

app.use("/api", productRouter);
app.use("/api", categoryRouter);

export const viteNodeApp = app;

// function generateRandomCustomer () {
//   const specificNames = [
//     "Huy",
//     "Long",
//     "Nam",
//     "Trung",
//     "Nguyen",
//     "Vy",
//     "Hùng","Tùng","Quang","Tèo","Ti","Minh"
//   ]

//   const professions = [
//     "Enginner", "Teacher", "Doctor", "Artist", "Chef"
//   ]

//   const randomName = specificNames[Math.floor(Math.random() * specificNames.length)];
//   const randomAge = Math.floor(Math.random() * 50) + 20;
//   const randomAddress = "Address" + Math.floor(Math.random() * 1000)
//   const randomEmmail = randomName.toLowerCase() + "@example.com"
//   const randomPhoneNumber = "123-456-789"
//   const randomeProesion = professions[Math.floor(Math.random() * professions.length)]

//   return {
//     name: randomName,
//     age: randomAge,
//     address: randomAddress,
//     email: randomEmmail,
//     phoneNumber: randomPhoneNumber,
//     profession: randomeProesion
//   }
// }

// const randomCustomers = [];
// for(let i = 0; i < 5000000; i++) {
//   randomCustomers.push(generateRandomCustomer());
// }

// const batchSize = 10000;
// for (let i = 0; i < randomCustomers.length; i += batchSize) {
//   const batch = randomCustomers.slice(i, i + batchSize);
//   db.customers.insertMany(batch)

// }
