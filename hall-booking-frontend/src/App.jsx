import {BrowserRouter,Routes,Route} from "react-router-dom";
import BookingList from "./pages/BookingList";
import CreateBooking from "./pages/CreateBooking";
import EditBooking from "./pages/EditBooking";
import SearchBooking from "./pages/SearchBooking";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookingList/>}/>
        <Route path="/create" element={<CreateBooking/>}/>
        <Route path="/edit/:id" element={<EditBooking/>}/>
        <Route path="/search" element={<SearchBooking/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
