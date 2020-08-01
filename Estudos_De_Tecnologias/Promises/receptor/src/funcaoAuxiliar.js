const axios = require('axios');

async function showData(req, res) {
  const datas = await axios.get('http://localhost:3333/');
  datas.data.mensagem = 'diferenciador';

  return res.json(datas.data);
}
module.exports = showData;
