const express = require('express');
const cors    = require('cors');
const routes  = require('./routes');
const app     = express();

/* Com o cors posso especificar qual aplicação vai 
   utilizar essa aplicação ou permitir que qualquer 
   aplicação a utilize. */
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333)