require('module-alias/register');
const http = require('http'),
      BudgetManagerAPI = require('./services/BudgetManagerAPI/config'),
      BudgetManagerServer = http.Server(BudgetManagerAPI),
      BudgetManagerPORT = process.env.PORT || 3001,
      LOCAL = '0.0.0.0';
BudgetManagerServer.listen(BudgetManagerPORT, LOCAL, () => console.log(`BudgetManagerAPI running on ${BudgetManagerPORT}`));
