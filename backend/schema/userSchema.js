const { Schema } = require("mongoose");
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    match:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*&?])[A-Za-z\d@$!%*&?]{8,}$/,
  },
});
module.exports = userSchema;
