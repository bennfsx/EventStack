const { Storage } = require("@google-cloud/storage");
const pool = require("../db/db");
const { v4: uuidv4 } = require("uuid");
const { decode } = require("base64-arraybuffer");
require("dotenv").config();

// const uploadToGCP = async (dataBuffer, filename) => {
//   try {
//     const storage = new Storage();
//     const bucket = storage.bucket(process.env.BUCKET_NAME);

//     const file = bucket.file(filename);
//     await file.save(dataBuffer, {
//       contentType: "image/jpeg",
//       resumable: false,
//     });

//     const [url] = await file.getSignedUrl({
//       action: "read",
//       expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//     });

//     return url;
//   } catch (err) {
//     console.error("Error uploading image to Google Cloud Storage:", err);
//     throw err;
//   }
// };

const uploadToGCP = async (dataBuffer, filename) => {
  try {
    const storage = new Storage();
    const bucket = storage.bucket(process.env.BUCKET_NAME);

    const file = bucket.file(filename);
    await file.save(dataBuffer, {
      contentType: "image/jpeg",
      resumable: false,
    });

    const [url] = await file.getSignedUrl({
      action: "read",
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    });

    return url;
  } catch (error) {
    console.error("Error uploading image to Google Cloud Storage:", error);
    throw error;
  }
};

const createEvent = async (req, res) => {
  try {
    // Assuming the image data is sent as a file in the request body
    const image = req.file;

    if (!image) {
      return res
        .status(400)
        .json({ status: "error", msg: "No image uploaded." });
    }

    const imageUrl = await uploadToGCP(image.buffer, image.originalname);

    await pool.query(
      "INSERT INTO Event (EventName, Description, DateTime, EventImage, SeatCapacity, LaunchDate, Venue, Address, City, State, PostalCode) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
      [
        req.body.eventname,
        req.body.description,
        req.body.datetime,
        imageUrl,
        req.body.seatcapacity,
        req.body.launchdate,
        req.body.venue,
        req.body.address,
        req.body.city,
        req.body.state,
        req.body.postalcode,
      ]
    );

    res.status(200).json({ status: "ok", msg: "Event created successfully" });
  } catch (err) {
    console.error("Error creating event:", err.message);
    res.status(400).json({ status: "error", msg: "Failed to create event" });
  }
};

const getAllEvent = async (req, res) => {
  try {
    const events = await pool.query("SELECT * FROM EVENT");
    res.status(200).json(events.rows);
  } catch (error) {
    console.error("Error retrieving events:", error.message);
    res.status(500).json({ error: "Failed to retrieve events" });
  }
};

const deleteEventById = async (req, res) => {
  const eventId = req.params.eventId; // Assuming eventId is passed in the request parameters

  try {
    const events = await pool.query("DELETE FROM EVENT WHERE eventid = $1", [
      eventId,
    ]);
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ error: "Failed to delete event" });
  }
};

const updateEventById = async (req, res) => {
  const eventId = req.params.eventId;
  const { updates } = req.body;

  try {
    // Construct the SET clause dynamically based on the updates object
    const setClause = Object.keys(updates)
      .map((key, index) => `${key} = $${index + 1}`)
      .join(", ");

    // Prepare the array of values for the parameters
    const values = Object.values(updates);
    values.push(eventId); // Add the eventId to the end of the array

    const query = `
      UPDATE event
      SET ${setClause}
      WHERE eventid = ${eventId}
    `;

    // Execute the query with the array of values
    await pool.query(query, values);

    res.status(200).json({ message: "Event updated successfully" });
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createEvent,
  uploadToGCP,
  getAllEvent,
  deleteEventById,
  updateEventById,
};
