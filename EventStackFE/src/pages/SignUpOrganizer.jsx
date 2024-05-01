import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosAPI from "../axiosAPI"; // Assuming axiosAPI is correctly set up as shown before

import Header from "../partials/Header";

function SignUpOrganizer() {
  const [companyName, setcompanyName] = useState("");
  const [uennumber, setuennumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState(""); // State to hold email error message
  const [passwordErrorMsg, setPasswordErrorMsg] = useState(""); // State to hold password error message

  const handleSuccessSignup = () => {
    navigate("/");
  };
  const navigate = useNavigate();

  // Email validation function
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleCreateNewOrgAccount = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setEmailErrorMsg("Please enter a valid email address");
      return;
    } else {
      setEmailErrorMsg("");
    }

    if (password !== confirmPwd) {
      setPasswordErrorMsg("Passwords do not match!");
      return;
    } else {
      setPasswordErrorMsg("");
    }

    const requestData = {
      companyName: companyName,
      uennumber: uennumber,
      email: email,
      phone: phone,
      address: address,
      password: password,
    };

    try {
      const response = await axiosAPI.put("/auth/signupOrg", requestData);
      console.log("Account created successfully", response.data);
      handleSuccessSignup();
      console.log(response.status);
    } catch (error) {
      console.error("Error creating account:", error.response);
      if (
        error.response.data.status === "error" &&
        error.response.data.msg === "Duplicate email, user already registered"
      ) {
        setEmailErrorMsg("Email address already exists");
      }
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
                <p>Powering Your Events, Connecting Communities</p>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={handleCreateNewOrgAccount}>
                  <div className="flex flex-wrap -mx-48 mb-4">
                    <div className="w-full px-3">
                      <h4 className="h4">Company Information</h4>
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="companyName"
                      >
                        Company Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your company name"
                        required
                        onChange={(e) => setcompanyName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-48 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="uennumber"
                      >
                        UEN No <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="uennumber"
                        type="text"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your UEN number"
                        required
                        onChange={(e) => setuennumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-48 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your email address"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {emailErrorMsg && (
                        <div className="text-red-600 mb-4">{emailErrorMsg}</div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-48 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="phone"
                      >
                        Mobile Number<span className="text-red-600">*</span>
                      </label>
                      <input
                        id="phone"
                        type="number"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your mobile number"
                        required
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-48 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="address"
                      >
                        Company Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="address"
                        type="text"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your company address"
                        required
                        onChange={(e) => setAddress(e.target.value)}
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
                        htmlFor="password"
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
                    {passwordErrorMsg && (
                      <div className="text-red-600 mb-4">
                        {passwordErrorMsg}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap -mx-48 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-gray-900 hover:bg-gray-800 w-full">
                        Submit
                      </button>
                    </div>
                  </div>
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

export default SignUpOrganizer;
