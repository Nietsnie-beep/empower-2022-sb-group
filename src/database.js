const mongoose = require('mongoose');

(async () => {
  try {
    const db = await mongoose.connect(
      "mongodb+srv://Nietsnie:1032@cluster0.zo4oc.mongodb.net/empower"
    );
    console.log('Db conected', db.connection.name);
  } catch (error) {
      console.error(error);
  }
})();
