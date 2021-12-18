import pkg from 'mongoose';
// import { MongoClient } from 'mongodb';
// const {connect} = require('mongoose');
import dotenv from "dotenv"
import cors from "cors";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/types.js";
import { resolvers } from "./graphql/resolvers.js";

dotenv.config()

const { connect } = pkg

const conectarBD = async () => {
    return await connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@retosofka.jfc9z.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
        //se cambió <Password> por contraseña 'NeptunoAPP'. Se cambió 'myFirstDatabase' por 'GestionProyectos'
    ).then(() => {
        console.log("Conexion a BD exitosa");
    }).catch(e => {
        console.log("Error. No se puede conectar a la BD", e)
    });
}

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
});

const app = express();
app.use(express.json());
app.use(cors());

app.listen({ port: process.env.PORT || 4000 }, async () => {
    await server
        .start()
        .then(() => {
            console.log(`🚀  Servidor listo`);
        })
        .catch((e) => {
            console.log("No se pudo iniciar el servidor", e);
        });
    await conectarBD();
    server.applyMiddleware({ app });
});