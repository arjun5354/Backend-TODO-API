const express = require("express");
const cors = require("cors");

const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");




const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.routes");
const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

app.use(errorHandler);

module.exports = app;
