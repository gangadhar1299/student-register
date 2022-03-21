import axios from "axios";

export function register(studentData) {
  axios.post(
    "https://her-shreersc-express-server.herokuapp.com/dev/admin/adminregisternewstudent",
    studentData,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
}
