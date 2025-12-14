  import {BrowserRouter,Routes,Route} from "react-router-dom";
  import BookingList from "./pages/BookingList";
  import CreateBooking from "./pages/CreateBooking";
  import EditBooking from "./pages/EditBooking";
  import SearchBooking from "./pages/SearchBooking";
  import "./styles/common.css";

  function App(){
    return(
      <>
        <div className="app-header">
          Hall Booking Management
        </div>

        <div className="page-container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<BookingList/>}/>
              <Route path="/create" element={<CreateBooking/>}/>
              <Route path="/edit/:id" element={<EditBooking/>}/>
              <Route path="/search" element={<SearchBooking/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </>
    );
  }

  export default App;
