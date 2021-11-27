const express = require("express");
const cors = require("cors");
const dbConnection = require("./src/shared/db");
const gatewayRouter = require("./src/routes/gateway.route");
const deviceRouter = require("./src/routes/device.route");

const corsOptions = {
    origin: "http://localhost:4000"
};

const app = express();

dbConnection();

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/gateway/', gatewayRouter);
app.use('/device/', deviceRouter);

app.get("/", (req, res) => {
    res.json({ message: "Gateways Manager Backend!" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
