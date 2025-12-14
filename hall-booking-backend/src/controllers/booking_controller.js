const bookingService = require("../services/booking_service");

exports.searchById=async(req,res)=>{
  console.log(req.params.id);
  const result= await bookingService.findById(req.params.id);
  
  res.json(result);
};

exports.createBooking = async (req, res) => {
  const result = await bookingService.create(req.body);
  res.json(result);
};

exports.getBookings = async (req, res) => {
  const result = await bookingService.list();
  res.json(result);
};

exports.updateBooking = async (req, res) => {
  const result = await bookingService.update(req.params.id, req.body);
  res.json(result);
};

exports.deleteBooking = async (req, res) => {
  const result = await bookingService.remove(req.params.id);
  res.json(result);
};
