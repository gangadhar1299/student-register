import axios from "axios";

export function register(studentData) {
  return axios.post(
    "https://her-shreersc-express-server.herokuapp.com/dev/admin/adminregisternewstudent",
    new URLSearchParams(studentData),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
}
