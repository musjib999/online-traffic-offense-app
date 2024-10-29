const UPLOADS = __dirname + "/uploads"
// require("./connections/mongo.connection")();
// const { verifyToken } = require("./middleware/auth.middleware")
const { swaggerUi, swaggerSpec } = require('./swagger');
const { appPort } = require("./configs");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ extended: true }));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use("/api/v1/user", require("./modules/user/routes/user.route")());
app.use("/uploads", express.static(UPLOADS));

// app.use(verifyToken);



app.listen(appPort, () => {
    console.log("Online traffic offense app running on port: " + appPort);
});