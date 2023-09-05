import * as mongoose from "mongoose";

const OrdensSchema = new mongoose.Schema({
  Id: Number,
  Detalhes: String,
  Tipo_Servico: Number,
  Solicitante: String,
  Data: Date,
});

export default OrdensSchema;
