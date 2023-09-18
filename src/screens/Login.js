import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function Login() {

  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.name || !credentials.password)
    {
      alert("Please fill in all required fields.");
      return;
    }

    try{
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid credentials");
    }

    if (json.success)
    {
      navigate("/");
    }
  }
  catch(error)
  {
    console.error("Error:", error);
  }
  
  };

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };


  return (
    <div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              onChange={onChange}
              id="exampleInputPassword1"
            />
          </div>


          <button type="submit" className="m-3 btn btn-success"> Submit </button>
          <Link to ="/createuser" className="m-3 btn btn-danger"> I'm a new user </Link>

      </div>
  )
}
