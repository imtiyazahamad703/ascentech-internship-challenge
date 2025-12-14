const router = require("express").Router();
const controller = require("../controllers/booking_controller");

router.post("/", controller.createBooking);
router.get("/", controller.getBookings);
router.put("/:id", controller.updateBooking);
router.delete("/:id", controller.deleteBooking);
router.get("/:id",controller.searchById);


module.exports = router;
