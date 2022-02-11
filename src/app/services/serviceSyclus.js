const userLicenca = require("../json/userLicenca.json");
const userCrm = require("../json/userCrm.json");

function validaLogin(pUsuario, pSenha, pApp) {
  //  console.log(pUsuario, pSenha, pApp);
  let indexUser = null;
  // console.log(userLicenca.length);
  for (var i = 0; i < userLicenca.length; i++) {
    if (
      userLicenca[i].usuario === pUsuario &&
      userLicenca[i].senha === pSenha
    ) {
      indexUser = i;
      break;
    }
  }
  if (indexUser >= 0) {
    for (let i = 0; i < userCrm.length; i++) {
      if (userCrm[indexUser].acess_token === pApp) {
        return userLicenca[indexUser].aplicativos; //app liberado para o usuario
      } else {
        return false; //app não liberado para o usuario
      }
    }
  }
}

module.exports = validaLogin;
