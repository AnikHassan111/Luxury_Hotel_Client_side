import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="text-center">
        <h2 className="text-6xl font-bold">404</h2>
        <p className="text-3xl font-medium">Page Not found</p>
        <Link to={"/"}>
          <button className="btn btn-outline btn-warning">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
