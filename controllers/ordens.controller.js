import OrdensService from "../services/ordens.service.js";

async function createOrdens(req, res, next) {
  try {
    let ordens = req.body;
    if (!ordens.Detalhes || !ordens.Data || !ordens.Solicitante || !ordens.Tipo_Servico) {
      throw new Error("Todos os campos são obrigatórios.");
    }
    ordens = await OrdensService.createOrdens(ordens);
    res.send(ordens);
  } catch (err) {
    next(err);
  }
}

async function getAllOrdens(req, res, next) {
  try {
    res.send(await OrdensService.getOrdens(req.query.autor_id));
    //logger.info("GET /ordens");
  } catch (err) {
    next(err);
  }
}

async function getOrdensById(req, res, next) {
  try {
    res.send(await OrdensService.getOrdensById(req.params.id));
    //logger.info("GET /ordens");
  } catch (err) {
    next(err);
  }
}

async function deleteOrdens(req, res, next) {
  try {
    await OrdensService.deleteOrdens(req.params.id);
    res.end();
    //logger.info("DELETE /ordens");
  } catch (err) {
    next(err);
  }
}

async function updateOrdens(req, res, next) {
  try {
    let ordens = req.body;
    if (!ordens.Id || !ordens.Detalhes || !ordens.Data || !ordens.Solicitante || !ordens.Tipo_Servico) {
      throw new Error("Todos os campos são obrigatórios.");
    }
    ordens = await OrdensService.updateOrdens(ordens.Id, ordens);
    res.send(ordens);
    //logger.info(`PUT /ordens - ${JSON.stringify(ordens)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createOrdens,
  getAllOrdens,
  getOrdensById,
  deleteOrdens,
  updateOrdens,
};
