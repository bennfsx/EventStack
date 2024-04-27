const { Storage } = require("@google-cloud/storage");
require("dotenv").config();



const uploadToGCP = async (file, fileOutputName) => {
  try {
    const storage = new Storage();
    const bucket = storage.bucket(process.env.BUCKET_NAME);
    const result = await bucket.upload(file, {
      destination: fileOutputName,
    });
    return result;
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  uploadToGCP,
};
