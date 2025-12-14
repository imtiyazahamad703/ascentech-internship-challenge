import {useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
import {getBookings,deleteBooking} from "../api/bookingApi";

function BookingList(){
  const [bookings,setBookings]=useState([]);
  const navigate=useNavigate();

  useEffect(()=>{
    loadBookings();
  },[]);

  const loadBookings=async()=>{
    const res=await getBookings();
    if(res.data.success){
      setBookings(res.data.data);
    }
  };

  const handleDelete=async(id)=>{
    if(window.confirm("Delete this booking?")){
      await deleteBooking(id);
      loadBookings();
    }
  };

  return(
    <div>
      <h2>Hall Booking List</h2>

      <button onClick={()=>navigate("/create")}>
        Create New Booking
      </button>
      <button onClick={()=>navigate("/search")}>
        Search Booking
      </button>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Applicant</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Hall</th>
            <th>Start</th>
            <th>End</th>
            <th>Type</th>
            <th>Slot</th>
            <th>Rent</th>
            <th>Extra</th>
            <th>Status</th>
            <th>Remark</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map(b=>(
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.applicantName}</td>
              <td>{b.email}</td>
              <td>{b.mobile}</td>
              <td>{b.hallName}</td>
              <td>{b.startDate}</td>
              <td>{b.endDate}</td>
              <td>{b.bookingType}</td>
              <td>{b.timeSlot}</td>
              <td>{b.rent}</td>
              <td>{b.additionalCharge}</td>
              <td>{b.status}</td>
              <td>{b.remark}</td>
              <td>
                <button onClick={()=>navigate(`/edit/${b.id}`)}>
                  Edit
                </button>
                <button onClick={()=>handleDelete(b.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingList;
