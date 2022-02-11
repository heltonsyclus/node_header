const userLicenca = require("../json/userLicenca.json");
const userCrm = require("../json/userCrm.json");
const validaLogin = require("../services/serviceSyclus");

class UserController {
  //get
  layoutGet(req, res) {
    return res.status(200).json({
      userCrm,
    });
  }
  //post

  loginPost(req, res) {
    const email = req.headers.email;
    const senha = req.headers.senha;
    const appKey = req.headers.app_key;
    const token = req.headers.token;
    const aplicativos = validaLogin(email, senha, token);
    if (appKey != null) {
      return res.status(200).json({ aplicativos });
    } else {
      return res.status(400).json({ ERRO: "não autorizado" });
    }
  }
}
module.exports = new UserController();
