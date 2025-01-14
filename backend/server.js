const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const ProduitRoutes = require('./routes/ProduitRoutes');

dotenv.config(); //on précise que l'on va utiliser un fichier .env pour les variales d'environnement auquelles on pourra accéder par la suite avec process.env

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// se connecter à la bdd 
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Connecté à Mongodb Compass'))
    .catch((err) => console.error('Erreur de connexion :', err))

// Routes
app.use('/api/produits', ProduitRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`le serveur fonctionne sur le port ${PORT}`)
})