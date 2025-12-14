const prisma=require("../prisma");
const {formatDate}=require("../utils/date");


exports.findById=async(id)=>{
  const booking=await prisma.booking.findUnique({
    where:{id:Number(id)}
  });

  if(!booking) return{success:false,message:"Booking not found"};

  booking.startDate=formatDate(booking.startDate);
  booking.endDate=formatDate(booking.endDate);
  return{success:true,data:booking};
};
exports.matchWithExisting=async(email,mobile)=>{
  const booking=await prisma.booking.findFirst({
    where:{OR:[{email},{mobile}]}
  });

  if(!booking) return{success:false};

  booking.startDate=formatDate(booking.startDate);
  booking.endDate=formatDate(booking.endDate);
  return{success:true,data:booking};
};

exports.create=async(data)=>{
  data.startDate=new Date(data.startDate);
  data.endDate=new Date(data.endDate);

  const existing=await exports.matchWithExisting(data.email,data.mobile);
  if(existing.success)
    return{success:false,message:"Booking Already Exist for this email or mobile",data:existing.data};

  const booking=await prisma.booking.create({data});
  booking.startDate=formatDate(booking.startDate);
  booking.endDate=formatDate(booking.endDate);
  return{success:true,message:"Booking created successfully",data:booking};
};

exports.list=async()=>{
  const bookings=await prisma.booking.findMany({
    orderBy:{createdAt:"desc"}
  });
  bookings.forEach(b=>{
    b.startDate=formatDate(b.startDate);
    b.endDate=formatDate(b.endDate);
  });
  return{success:true,data:bookings};
};

exports.update=async(id,data)=>{
  const existing=await exports.findById(id);
  if(!existing.success) return {success:false,message:`Booking not found with id: ${id}`};

  if(data.startDate)data.startDate=new Date(data.startDate);
  if(data.endDate)data.endDate=new Date(data.endDate);

  const booking=await prisma.booking.update({
    where:{id:Number(id)},
    data
  });
  booking.startDate=formatDate(booking.startDate);
  booking.endDate=formatDate(booking.endDate);
  return{success:true,data:booking};
};

exports.remove=async(id)=>{
  await prisma.booking.delete({
    where:{id:Number(id)}
  });
  return{success:true,message:"Booking deleted"};
};
