import OrdensSchema from "../schemas/ordens.schema.js";
import { connect } from "./mongo.db.js";

// MONGO_DB

async function createOrdens(ordens) {
  try {
    const mongoose = await connect();
    const Ordens = mongoose.model("Ordens", OrdensSchema);
    ordens = new Ordens(ordens);
    await ordens.save();
  } catch (err) {
    throw err;
  }
}

async function getOrdensById(id) {
  try {
    const mongoose = await connect();
    const Ordens = mongoose.model("Ordens", NewsSchema);
    const query = Ordens.findOne({ id });
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function updateOrdens(id, updatedOrdens) {
  try {
    const mongoose = await connect();
    const Ordens = mongoose.model("Ordens", OrdensSchema);
    await Ordens.findOneAndUpdate({ id }, updatedOrdens);
  } catch (err) {
    throw err;
  }
}

async function deleteOrdens(id) {
  try {
    const mongoose = await connect();
    const Ordens = mongoose.model("Ordens", OrdensSchema);
    await Ordens.deleteOne({ id });
  } catch (err) {
    throw err;
  }
}

async function getOrdens() {
  try {
    const mongoose = await connect();
    const Ordens = mongoose.model("Ordens", OrdensSchema);
    const query = Ordens.find({});
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

export default {
  createOrdens,
  getOrdensById,
  updateOrdens,
  deleteOrdens,
  getOrdens,
};
