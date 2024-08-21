const signUpController = (req, res) => {
  try {
    console.log('hi')
    const { email, password } = req.body;
    console.log(email, password);

    res.status(200).send("Data received");
  } catch (error) {
    console.error("Error:", error); // Log the error if any
    res.status(500).send("An error occurred");
  }
};

module.exports = signUpController;
