import React, { useState, useEffect } from "react";
import axiosAPI from "../../axiosAPI";
import Header from "../partials/Header";
import { useUser } from "../../hooks/useUser";
import {
  CircularProgress,
  TextField,
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
} from "@mui/material";

function UserProfile() {
  const [userProfile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    uennumber: "",
    companyname: "",
    phone: "",
    country: "",
    address: "",
    postalcode: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosAPI.get(`user/getorganizer/${user.userId}`);
        setUserProfile(response.data.data);
        setFormData({
          uennumber: response.data.data.uennumber,
          companyname: response.data.data.companyname,
          phone: response.data.data.phone,
          country: response.data.data.country,
          address: response.data.data.address,
          postalcode: response.data.data.postalcode,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setLoading(false);
      }
    };

    // Fetch user profile when component mounts
    fetchUserProfile();
  }, [user.userId]); // Add user.userId to the dependency array

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      // Replace 'your-server-url' with the actual URL of your server
      await axiosAPI.patch(`user/updateeventorg/${user.userId}`, formData);
      // Refetch user profile after updating
      const response = await axiosAPI.get(`user/getorganizer/${user.userId}`);
      setUserProfile(response.data.data);
      handleCloseModal();
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen justify-center items-center">
        {loading ? (
          <CircularProgress />
        ) : (
          <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
            <Typography variant="h4" align="center" gutterBottom>
              User Profile
            </Typography>
            <div className="space-y-4">
              <TextField
                label="Email"
                value={userProfile.email}
                disabled
                fullWidth
              />
              <TextField
                label="UEN Number"
                name="uennumber"
                value={formData.uennumber}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Company Name"
                name="companyname"
                value={formData.companyname}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Postal Code"
                name="postalcode"
                value={formData.postalcode}
                onChange={handleChange}
                fullWidth
              />
              <Button variant="contained" onClick={handleOpenModal}>
                Update Profile
              </Button>
            </div>
          </div>
        )}
      </div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className="modal p-6 bg-white rounded-md">
            <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
            <div className="space-y-4">
              <TextField
                label="UEN Number"
                name="uennumber"
                value={formData.uennumber}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
              <TextField
                label="Company Name"
                name="companyname"
                value={formData.companyname}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
              <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
              <TextField
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
              <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
              <TextField
                label="Postal Code"
                name="postalcode"
                value={formData.postalcode}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
              <div className="flex justify-end">
                <Button
                  variant="outlined"
                  onClick={handleCloseModal}
                  className="mr-2"
                >
                  Cancel
                </Button>
                <Button variant="contained" onClick={handleSubmit}>
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default UserProfile;
