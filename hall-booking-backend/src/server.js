const express = require("express");
const cors = require("cors");

const bookingRoutes = require("./routes/booking_routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/bookings", bookingRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});