import React, { useState, useEffect } from "react";
import axios from "axios"; // Assuming you have axios installed

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("/api/userprofile"); // Assuming your backend API endpoint is '/api/userprofile'
        setUserProfile(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      {userProfile && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold">Email</h2>
            <p>{userProfile.email}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">UEN Number</h2>
            <p>{userProfile.uennumber}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Company Name</h2>
            <p>{userProfile.companyname}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Phone</h2>
            <p>{userProfile.phone}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Country</h2>
            <p>{userProfile.country}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Address</h2>
            <p>{userProfile.address}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Postal Code</h2>
            <p>{userProfile.postalcode}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
