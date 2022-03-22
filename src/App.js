import { useMutation } from "react-query";
import { Button, Page } from "./components";
import { useNumberInput } from "./utils";
import * as student from "./utils/student";

function App() {
  const createStudentMutation = useMutation(student.register);

  const phoneInput = useNumberInput("");
  const zipInput = useNumberInput("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);

    const studentData = Object.fromEntries(formData);

    createStudentMutation.mutateAsync(studentData).then((res) => {
      if (res.data[0]) {
        alert("Register successful!");
        return;
      }
      alert("Error Registering Student");
    });
  };

  return (
    <Page className="flex gap-3 md:gap-40 flex-col md:flex-row">
      <div className="h-28 md:h-auto w-full md:w-3/12 bg-gray-400" />
      <div className="flex-1 flex place-items-center justify-between pb-3">
        <form className="m-auto md:m-0 md:w-96" onSubmit={handleSubmit}>
          <h1 className="my-10 text-2xl ">Register a new Student</h1>
          <h2 className="md:mt-12 mt-6 text-lg">Personal Details:</h2>
          <div className="flex flex-col gap-3 mt-6 w-full">
            <label className=" w-full">
              <input
                required
                className="placeholder:text-slate-600 h-10 text-input "
                type="text"
                name="student_name"
                placeholder="Enter Student Name"
              />
            </label>
            <label className=" w-full">
              <input
                required
                className="placeholder:text-slate-600 h-10 text-input"
                type="text"
                name="student_grade"
                placeholder="Enter Student Grade"
              />
            </label>
            <label className=" w-full">
              <select
                className="valid:text-slate-600 h-10 text-input"
                name="student_time_zone"
              >
                <option>(UTC - 5) Eastern Standard Time</option>
                <option>UTC Western European Time</option>
                <option>(UTC + 5:30) Indian Standard Time</option>
              </select>
            </label>
            <label className=" w-full">
              <input
                required
                className="placeholder:text-slate-600 h-10 text-input"
                type="email"
                name="student_email"
                placeholder="E-Mail"
              />
            </label>
            <label className=" w-full">
              <input
                required
                className="valid:text-slate-600 h-10 text-input"
                type="date"
                name="student_dob"
                placeholder="Date of birth"
              />
            </label>

            <div className="flex gap-1">
              <label className="placeholder:text-slate-600 w-1/4">
                <select
                  className="valid:text-slate-600 h-10 text-input"
                  name="country_code"
                >
                  <option className="">+44</option>
                  <option>+91</option>
                  <option>+99</option>
                </select>
              </label>

              <label className=" w-3/4">
                <input
                  required
                  className="placeholder:text-slate-600 h-10 text-input"
                  type="tel"
                  name="student_phone"
                  placeholder="Phone"
                  maxLength={10}
                  {...phoneInput}
                />
              </label>
            </div>

            <label>
              <input
                required
                className="placeholder:text-slate-600 h-10 text-input"
                type="text"
                name="student_address"
                placeholder="Address"
              />
            </label>

            <label>
              <input
                required
                className="placeholder:text-slate-600 h-10 text-input"
                type="text"
                name="student_country"
                placeholder="Country"
              />
            </label>

            <div className="flex gap-1">
              <label className=" w-8/12">
                <input
                  required
                  className="placeholder:text-slate-600 h-10 text-input"
                  type="text"
                  name="student_city"
                  placeholder="City"
                />
              </label>

              <label className=" w-4/12">
                <input
                  required
                  className="placeholder:text-slate-600 h-10 text-input"
                  type="tel"
                  name="student_zip"
                  placeholder="Zip"
                  maxLength={10}
                  {...zipInput}
                />
              </label>
            </div>

            <Button isLoading={createStudentMutation.isLoading}>
              Register New Student
            </Button>
          </div>
        </form>
      </div>
    </Page>
  );
}

export default App;
