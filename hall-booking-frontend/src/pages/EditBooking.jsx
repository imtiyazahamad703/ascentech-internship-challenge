import {useEffect,useState} from "react";
import {useParams,useNavigate} from "react-router-dom";
import {getBookingById,updateBooking} from "../api/bookingApi";
import "../styles/common.css";
import "../styles/bookingForm.css";


function EditBooking(){
  const {id}=useParams();
  const navigate=useNavigate();

  const [form,setForm]=useState({
    applicantName:"",
    email:"",
    mobile:"",
    hallName:"",
    startDate:"",
    endDate:"",
    bookingType:"",
    timeSlot:"",
    rent:"",
    additionalCharge:"",
    status:"",
    remark:""
  });

  const [message,setMessage]=useState("");

  useEffect(()=>{
    loadBooking();
  },[]);

  const loadBooking=async()=>{
    const res=await getBookingById(id);
    if(res.data.success){
      setForm(res.data.data);
    }else{
      setMessage("Booking not found");
    }
  };

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    await updateBooking(id,form);
    navigate("/");
  };

  return(
    <div className="form-container edit-form">
      <h2>Edit Booking</h2>

      {message && <p style={{color:"red"}}>{message}</p>}

      <form onSubmit={handleSubmit}>

  <div className="form-row">
    <label>Applicant Name</label>
    <input name="applicantName" value={form.applicantName} onChange={handleChange} />
  </div>

  <div className="form-row">
    <label>Email</label>
    <input name="email" value={form.email} onChange={handleChange} />
  </div>

  <div className="form-row">
    <label>Mobile</label>
    <input name="mobile" value={form.mobile} onChange={handleChange} />
  </div>

  <div className="form-row">
    <label>Hall Name</label>
    <input name="hallName" value={form.hallName} onChange={handleChange} />
  </div>

  <div className="form-row">
    <label>Start Date</label>
    <input type="date" name="startDate" value={form.startDate} onChange={handleChange} />
  </div>

  <div className="form-row">
    <label>End Date</label>
    <input type="date" name="endDate" value={form.endDate} onChange={handleChange} />
  </div>

  <div className="form-row">
    <label>Booking Type</label>
    <select name="bookingType" value={form.bookingType} onChange={handleChange}>
      <option>Marriage</option>
      <option>Meeting</option>
      <option>Event</option>
    </select>
  </div>

  <div className="form-row">
    <label>Time Slot</label>
    <select name="timeSlot" value={form.timeSlot} onChange={handleChange}>
      <option>Full Day</option>
      <option>Half Day</option>
    </select>
  </div>

  <div className="form-row">
    <label>Rent</label>
    <input name="rent" value={form.rent} onChange={handleChange} />
  </div>

  <div className="form-row">
    <label>Additional Charge</label>
    <input name="additionalCharge" value={form.additionalCharge} onChange={handleChange} />
  </div>

  <div className="form-row">
    <label>Status</label>
    <select name="status" value={form.status} onChange={handleChange}>
      <option>PENDING</option>
      <option>CONFIRMED</option>
    </select>
  </div>

  <div className="form-row">
    <label>Remark</label>
    <input name="remark" value={form.remark} onChange={handleChange} />
  </div>

  <div className="form-actions">
    <button type="submit">Update Booking</button>
    <button type="button" onClick={()=>navigate("/")}>Cancel</button>
  </div>

</form>

    </div>
  );
}

export default EditBooking;
