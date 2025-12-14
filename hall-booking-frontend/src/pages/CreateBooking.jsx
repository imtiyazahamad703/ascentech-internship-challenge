import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {createBooking} from "../api/bookingApi";
import "../styles/common.css";
import "../styles/bookingForm.css";

function CreateBooking(){
  const navigate=useNavigate();

  const [form,setForm]=useState({
    applicantName:"",
    email:"",
    mobile:"",
    hallName:"",
    startDate:"",
    endDate:"",
    bookingType:"Marriage",
    timeSlot:"Full Day",
    rent:"",
    additionalCharge:"",
    status:"PENDING",
    remark:""
  });

  const [message,setMessage]=useState("");

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleSubmit=async(e)=>{
  e.preventDefault();

  const payload={
    ...form,
    rent:Number(form.rent),
    additionalCharge:Number(form.additionalCharge || 0)
  };

  const res=await createBooking(payload);

  if(res.data.success){
    navigate("/");
  }else{
    setMessage(res.data.message);
  }
};


  return(
    <div className="form-container edit-form">
      <h2>Create Booking</h2>

      {message && <p style={{color:"red"}}>{message}</p>}

      <form onSubmit={handleSubmit}>

  <div className="form-row">
    <label>Applicant Name</label>
    <input name="applicantName" onChange={handleChange} required />
  </div>

  <div className="form-row">
    <label>Email</label>
    <input name="email" onChange={handleChange} required />
  </div>

  <div className="form-row">
    <label>Mobile</label>
    <input name="mobile" onChange={handleChange} required />
  </div>

  <div className="form-row">
    <label>Hall Name</label>
    <input name="hallName" onChange={handleChange} required />
  </div>

  <div className="form-row">
    <label>Start Date</label>
    <input type="date" name="startDate" onChange={handleChange} required />
  </div>

  <div className="form-row">
    <label>End Date</label>
    <input type="date" name="endDate" onChange={handleChange} required />
  </div>

  <div className="form-row">
    <label>Booking Type</label>
    <select name="bookingType" onChange={handleChange}>
      <option>Marriage</option>
      <option>Meeting</option>
      <option>Event</option>
    </select>
  </div>

  <div className="form-row">
    <label>Time Slot</label>
    <select name="timeSlot" onChange={handleChange}>
      <option>Full Day</option>
      <option>Half Day</option>
    </select>
  </div>

  <div className="form-row">
    <label>Rent</label>
    <input name="rent" onChange={handleChange} required />
  </div>

  <div className="form-row">
    <label>Additional Charge</label>
    <input name="additionalCharge" onChange={handleChange} />
  </div>

  <div className="form-row">
    <label>Status</label>
    <select name="status" onChange={handleChange}>
      <option>PENDING</option>
      <option>CONFIRMED</option>
    </select>
  </div>

  <div className="form-row">
    <label>Remark</label>
    <input name="remark" onChange={handleChange} />
  </div>

  <div className="form-actions">
    <button type="submit">Create Booking</button>
    <button type="button" onClick={()=>navigate("/")}>Cancel</button>
  </div>

</form>
    </div>
  );
}

export default CreateBooking;
