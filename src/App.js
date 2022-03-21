import { useMutation } from "react-query";
import { Button, Page } from "./components";
import * as student from "./utils/student";

function App() {
  const createStudentMutation = useMutation(student.register);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createStudentMutation
      .mutateAsync({
        student_name: "sadasdas",
        student_email: "jljsdljdlsf@jdasfsajfjdsl.com",
        student_grade: "sadasd",
        student_time_zone: "asdasd",
        student_dob: "asdsad",
        country_code: "asdasd",
        student_phone: "asdasd",
        student_address: "asdasdas",
        student_city: "asdasd",
        student_country: "asdasdasda",
        student_zip: "asdasdasd",
      })
      .then((res) => console.log(res));
  };

  return (
    <Page className="flex gap-3 md:gap-40 flex-col md:flex-row">
      <div className="h-40 md:h-screen w-full md:w-3/12 bg-gray-400" />
      <div className="h-screen flex-1 flex place-items-center justify-between">
        <form className="w-5/6 m-auto md:m-0 md:w-96" onSubmit={handleSubmit}>
          <h1 className="text-2xl">Register a new Student</h1>
          <h2 className="md:mt-12 mt-6 text-lg">Personal Details:</h2>
          <div className="flex flex-col gap-3 mt-6 w-full">
            <label className="w-full">
              <input
                className="text-input"
                type="text"
                name="student_name"
                placeholder="Enter Student Name"
              />
            </label>
            <label className="w-full">
              <input
                className="text-input"
                type="text"
                name="student_grade"
                placeholder="Enter Student Grade"
              />
            </label>
            <label className="w-full">
              <select className="text-input" name="student_time_zone">
                <option>(UTC - 5) Eastern Standard Time</option>
                <option>UTC Western European Time</option>
                <option>(UTC + 5:30) Indian Standard Time</option>
              </select>
            </label>
            <label className="w-full">
              <input
                className="text-input"
                type="email"
                name="student_email"
                placeholder="E-Mail"
              />
            </label>
            <label className="w-full">
              <input
                className="text-input"
                type="date"
                name="date of birth"
                placeholder="date of birth"
              />
            </label>

            <div className="flex gap-1">

            <label className="w-1/4">
              <select className="text-input" name="student_time_zone">
                <option>+44</option>
                <option>+91</option>
                <option>+99</option>
              </select>
            </label>

            <label className="w-3/4">
              <input
                className="text-input"
                type="tel"
                name="phone"
                placeholder="phone"
              />
            </label>

            
            </div>

            <label>
              <input className="text-input" type='text' name="student_address" placeholder="address" />
            </label>

            <label>
              <input className="text-input" type='text' name="student_country" placeholder="country" />
            </label>

                        <div className="flex gap-1">

            <label className="w-8/12">
              <input className="text-input"
                type="text"
                name="city"
                placeholder="city" />
            </label>

            <label className="w-4/12">
              <input
                className="text-input"
                type="tel"
                name="zip"
                placeholder="zip"
              />
            </label>

            
            </div>


            <Button isLoading>Register New Student</Button>
          </div>
        </form>
      </div>
    </Page>
  );
}

export default App;
