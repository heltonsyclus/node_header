const app = require("./app");

var PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Porta atual ${PORT}`);
});
