import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateDate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    const date = e.target.bookingDate.value;
    console.log(date);
    Swal.fire({
      title: "Are you sure?",
      text: "You Updated Your Date",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update date",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(`http://localhost:5000/updateDate/${id}`, { date })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                title: "Success",
                text: "Update Your date",
                icon: "success",
              });
              navigate("/mybooking");
            }
          });
      }
    });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <form onSubmit={handleClick} className="w-fit mx-auto space-y-5">
        <div className=" ">
          <h2 className="font-semibold text-2xl w-1/2">Date</h2>
          <div className="w-11/12">
            <input
              type="date"
              name="bookingDate"
              required
              className="border py-2 px-4  border-black rounded-md"
            />
          </div>
        </div>
        <input type="submit" className="btn btn-neutral" value={"Confirm"} />
      </form>
    </div>
  );
};

export default UpdateDate;
