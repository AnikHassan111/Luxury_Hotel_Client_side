const NewLetterSingUp = () => {
  return (
    <div className="w-fit mx-auto  my-5 p-3">
      <div className="space-y-3 mb-3">
        <h1 className="text-4xl font-semibold text-center">
          Join Our News Letter
        </h1>
        <p className="text-2xl font-medium text-center">
          get weekly access to our best deal,trips and tricks
        </p>
      </div>
      <div className="flex gap-3 w-fit mx-auto">
        <input
          placeholder="Enter Your email "
          className="bg-black text-white  py-2 px-4 md:w-96 w-64 rounded-md"
          type="email"
        />
        <button className="py-2 px-6 bg-black text-white cursor-pointer">
          Join
        </button>
      </div>
      <p className="text-center">No spam, we hate it more than you do</p>
    </div>
  );
};

export default NewLetterSingUp;
