const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo-list',{ useNewUrlParser: true, useUnifiedTopology:

true})
.then(() => {
console.log('Conexão bem-sucedida com o MongoDB');
})
.catch((err) => {
console.error('Erro ao conectar ao MongoDB:',
err);
});