 import { MongoClient, ServerApiVersion } from 'mongodb';
 import express from "express";
 import cors from "cors"
 import dotenv from "dotenv";

 dotenv.config();

 const app = express()
 const port = 3000
 
 app.use(cors());
 app.use(express.json());
  app.listen(port, () => {

  console.log(`servidor rodando na porta ${port}`)

  })
  

 app.post("/usuarios", async (req, res) => {
 
  const dados = req.body
  const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});



 async function runStableAPIConnect() {
  try {
     await client.connect()
      const db = client.db("Sneeze_web");
      const collection = db.collection("Dados_dos_clientes");
      await collection.insertOne(dados)

   
    console.log('Dados enviados!')
  } finally {
    await client.close();
  }
}   
  try{
   await runStableAPIConnect()
   res.send('Servidor rodando com sucesso!')
  } catch (error) {
  
   res(status(500)).send('erro ao salvar os dados.')

  }
  
 })
 

 
  
