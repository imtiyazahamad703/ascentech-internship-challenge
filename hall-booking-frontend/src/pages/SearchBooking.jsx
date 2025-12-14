import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {getBookingById} from "../api/bookingApi";
import "../styles/common.css";
import "../styles/searchBooking.css";



function SearchBooking(){
  const [bookingId,setBookingId]=useState("");
  const [result,setResult]=useState(null);
  const [message,setMessage]=useState("");
  const navigate = useNavigate();

  const handleSearch=async()=>{
    setMessage("");
    setResult(null);

    if(!bookingId) return;

    const res=await getBookingById(bookingId);

    if(res.data.success){
      setResult(res.data.data);
    }else{
      setMessage("Booking not found");
    }
  };

  return(
    <div className="search-box ">
      <h2>Search Booking</h2>

      <input
        placeholder="Enter Booking ID"
        value={bookingId}
        onChange={(e)=>setBookingId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={() => navigate("/")}>Back</button>


      {message && <p style={{color:"red"}}>{message}</p>}

      {result && (
  <div className="result-box">
    <h3>Booking Details</h3>

    <div className="result-row">
      <span>Applicant</span>
      <span>{result.applicantName}</span>
    </div>

    <div className="result-row">
      <span>Email</span>
      <span>{result.email}</span>
    </div>

    <div className="result-row">
      <span>Mobile</span>
      <span>{result.mobile}</span>
    </div>

    <div className="result-row">
      <span>Hall</span>
      <span>{result.hallName}</span>
    </div>

    <div className="result-row">
      <span>Start Date</span>
      <span>{result.startDate}</span>
    </div>

    <div className="result-row">
      <span>End Date</span>
      <span>{result.endDate}</span>
    </div>

    <div className="result-row">
      <span>Booking Type</span>
      <span>{result.bookingType}</span>
    </div>

    <div className="result-row">
      <span>Time Slot</span>
      <span>{result.timeSlot}</span>
    </div>

    <div className="result-row">
      <span>Rent</span>
      <span>{result.rent}</span>
    </div>

    <div className="result-row">
      <span>Additional</span>
      <span>{result.additionalCharge}</span>
    </div>

    <div className="result-row">
      <span>Status</span>
      <span>{result.status}</span>
    </div>

    <div className="result-row">
      <span>Remark</span>
      <span>{result.remark || "-"}</span>
    </div>
  </div>
)}


    </div>
  );
}

export default SearchBooking;
