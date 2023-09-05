import OrdensRepository from "../repositories/ordens.repository.js";
// MONGO_DB

async function createOrdens(ordens) {
  return await OrdensRepository.createOrdens(ordens);
}

async function deleteOrdens(ordens_id) {
  await OrdensRepository.deleteOrdens(ordens_id);
}

async function updateOrdens(ordens, updatedOrdens) {
  return await OrdensRepository.updateOrdens(ordens, updatedOrdens);
}

async function getOrdens() {
  return await OrdensRepository.getOrdens();
}

async function getOrdensById(id) {
  return await OrdensRepository.getOrdensById(id);
}

export default {
  createOrdens,
  getOrdens,
  deleteOrdens,
  updateOrdens,
  getOrdensById,
};
