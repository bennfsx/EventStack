import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosAPI from "../axiosAPI"; // Assuming axiosAPI is correctly set up as shown before
import Header from "../partials/Header";
import Banner from "../partials/Banner";

function SignUpUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const handleSuccessSignup = () => {
    navigate("/home");
  };
  const navigate = useNavigate();

  // Email validation function
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleCreateNewUserAccount = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (password !== confirmPwd) {
      alert("Passwords do not match!");
      return;
    }

    const requestData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobile: mobile,
      password: password,
    };

    try {
      const response = await axiosAPI.post("/register", requestData);
      console.log("Account created successfully", response.data);
      handleSuccessSignup();
      console.log(response.status);
    } catch (error) {
      console.error("Error creating account:", error.response);
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Register Now!</h1>
                <p>Unlock Your Event Experience</p>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={handleCreateNewUserAccount}>
                  <div className="flex flex-wrap -mx-48 mb-4">
                    <div className="w-full px-3">
                      <h4 className="h4">Personal Information</h4>
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="FirstName"
                      >
                        First Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="FirstName"
                        type="text"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your first name"
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-48 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="LastName"
                      >
                        Last Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="LastName"
                        type="text"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your last name"
                        required
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-48 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email Address<span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your email address"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-48 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="mobile"
                      >
                        Mobile Number<span className="text-red-600">*</span>
                      </label>
                      <input
                        id="mobile"
                        type="number"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your mobile number"
                        required
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-48 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="password"
                      >
                        Password <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="password"
                        type="password"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-48 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="confirmPwd"
                      >
                        Confirm Password <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="confirmPwd"
                        type="password"
                        className="form-input w-full text-gray-800"
                        placeholder="Confirm your password"
                        required
                        onChange={(e) => setConfirmPwd(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-48 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-gray-900 hover:bg-gray-800 w-full">
                        <Link to="/home">Submit</Link>
                      </button>
                    </div>
                  </div>

                  {/* <div className="flex flex-wrap -mx-48 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-gray-900 hover:bg-gray-800 w-full">
                        Check
                      </button>
                    </div>
                  </div> */}

                  <div className="text-sm text-gray-500 text-center mt-3">
                    By creating an account, you agree to the{" "}
                    <a className="underline" href="#0">
                      terms & conditions
                    </a>
                    , and our{" "}
                    <a className="underline" href="#0">
                      privacy policy
                    </a>
                    .
                  </div>
                </form>
                <div className="text-gray-600 text-center mt-6">
                  Already using EventStack?{" "}
                  <Link
                    to="/signin"
                    className="text-blue-600 hover:underline transition duration-150 ease-in-out"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignUpUser;
