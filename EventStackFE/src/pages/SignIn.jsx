import React, { useState, useContext } from "react";
import { Link, Route, useNavigate } from "react-router-dom";
import Header from "../partials/Header";
import { UserContext } from "../context/UserContext";
import axiosAPI from "../axiosAPI";
import { jwtDecode } from "jwt-decode";

function SignIn() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSuccessLogin = () => {
    navigate("/");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleUserLogin = async (event) => {
    event.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await axiosAPI.post("/auth/signin", loginData);
      console.log("User login successful", response.data);

      // Decode the JWT token to extract userId and usertype
      const decodedToken = jwtDecode(response.data.token);
      localStorage.setItem("refresh", response.data.refresh);
      if (decodedToken) {
        const { userId, usertype } = decodedToken;
        console.log("Decoded token:", decodedToken);

        // Set the user context with userId, usertype, and accessToken
        setUser({
          accessToken: response.data.token,
          userId: userId,
          usertype: usertype,
        });
        sessionStorage.setItem("access", response.data.access);
        sessionStorage.setItem("usertype", decodedToken.usertype);
        sessionStorage.setItem("userId", decodedToken.userId);

        handleSuccessLogin();
      } else {
        console.error("Error decoding token");
        setLoginError("Failed to decode token");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.error("User account not found:", error.response.data);
        setLoginError("Invalid email or password");
      } else {
        console.error("Error during login:", error.response);
        setLoginError("Failed to log in");
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
                <h1 className="h1">
                  Welcome back. We exist to make events processes easier.
                </h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={handleUserLogin}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email Address
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
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label
                          className="block text-gray-800 text-sm font-medium mb-1"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <Link
                          to="/reset-password"
                          className="text-sm font-medium text-blue-600 hover:underline"
                        >
                          Forgot Password?
                        </Link>
                      </div>
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
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn px-0 text-white bg-gray-900 hover:bg-gray-800 w-full relative flex items-center">
                        Login
                      </button>
                    </div>
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div
                    className="border-t border-gray-300 flex-grow mr-3"
                    aria-hidden="true"
                  ></div>
                  <div className="text-gray-600 italic">Or</div>
                  <div
                    className="border-t border-gray-300 flex-grow ml-3"
                    aria-hidden="true"
                  ></div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button className="btn text-black border-t border-gray-300 bg-white-600 hover:bg-gray-200 w-full">
                      <Link to="/usertype">Sign up</Link>
                    </button>
                    {loginError && (
                      <div className="text-red-500">{loginError}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignIn;
