import express from "express";
import cors from "cors";
import basicAuth from "express-basic-auth";

import usersRouter from "./routes/user.route.js";
import ordensRouter from "./routes/ordens.route.js";

// import documentsRouter from "./routes/document.route.js";
import { autorizarAdmin, autorizarUser } from "./utils/autenticar.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  basicAuth({
    users: {
      admin: "desafio",
      "giovanabetinabarbosa@gmail.com": "ZjRxDsNQt4",
      "ggconceicao@gmail.com": "MRalkmBOJq",
      "franvieira@gmail.com": "kW1bnjci70",
      "ssarahcarolinadaconceicao@gmail.com": "54bOsJjloe",
      "vvitormartinpinto@gmail.com": "GGh0SmQ5Wo",
    },
  })
);

app.use("/users", autorizarUser(), usersRouter);
app.use("/ordens", autorizarAdmin(), ordensRouter);

// app.use("/documents", autorizarAdmin(), documentsRouter);

// app.use("/livro", livrosRouter);

app.listen(3000, () => {
  console.log("API iniciada com sucesso.");
});
