const { Schema, model } = require("mongoose");

const clientesSchema = new Schema(
  {
    title: {
      type: String,
    },

    correo: {
      type: String,
    },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

module.exports = model("Clientes", clientesSchema);
