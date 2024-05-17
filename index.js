const express = require('express');
const app = express();
const cors = require('cors');
const mongodb = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();
const port = process.env.PORT || 5000;
// mongodb atlas
const { MongoClient, ServerApiVersion } = require('mongodb');


app.use(express.json());
app.use(cors());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.m4nwz1v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Crud3 server. You successfully connected to MongoDB!");

    // const coffeeCollection = client.db('crud2').collection('coffee');
    const coffeeCollection = client.db('crud2').collection('coffee');
    const serviceCollection = client.db('crud2').collection('services')
    // const coffeeCollection = client.db('crud2').collection('coffee');
    // get method
    app.get('/coffee', async(req, res)=>{
        const cursor = coffeeCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    });
    
    app.get('/postCount', async(req, res)=>{
      const count = await coffeeCollection.estimatedDocumentCount();
      res.send({count})
    });
    
    app.get('/blog', async(req, res)=>{
      const cursor = coffeeCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get('/services', async(req, res) =>{
      const cursor = serviceCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    
    app.get('/services/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      
      const options = {
        projection:{_id:1, title:1, price:1, service_id:1 }
      }

      const result = await serviceCollection.findOne(query, options);
      res.send(result)
    });
    // app.post('/coffee', async(req, res)=>{
    //   const newCoffee = req.body;
    //   const result = await coffeeCollection.insertOne(newCoffee);
    //   res.send(result);
    // });
    // post coffee
    // app.post('/coffee', async(req, res)=>{
    //   const newCoffee = req.body;
    //   const result = await coffeeCollection.insertOne(newCoffee);
    //   res.send(result);
    // })
    // get all coffee
    // app.get('/coffee', async(req, res)=>{
    //   const cursor = coffeeCollection.find();
    //   const result = await cursor.toArray();
    //   res.send(result);
    // });
    // app.get('/coffee', async(req, res)=>{
    //   const cursor = coffeeCollection.find();
    //   const result = await cursor.toArray();
    //   res.send(result);
    // });
    
    // get single items from server
    // app.get('/coffee/:id', async(req, res)=>{
    //   const id = req.params.id;
    //   const filter = {_id: new ObjectId(id)};
    //   const result = await coffeeCollection.findOne(filter);
    //   res.send(result);
    // })
    // // get single coffee items for update
    // app.get('/coffee/:id', async(req, res)=>{
    //   const id = req.params.id;
    //   const filter = {_id: new ObjectId(id)};
    //   const result = await coffeeCollection.findOne(filter);
    //   res.send(result);
    // });

    // // get single product for update
    // app.get('/coffee/:id', async(req, res)=>{
    //   const id = req.params.id;
    //   const filter = {_id: new ObjectId(id)};
    //   const result = await coffeeCollection.findOne(filter);
    //   res.send(result);
    // });

    // // get single product for update
    // app.get('/coffee/:id', async(req, res)=>{
    //   const id = req.params.id;
    //   const filter = {_id: new ObjectId(id)} 
    //   const result = await coffeeCollection.findOne(filter)
    //   res.send(result);
    // });
    
    // app.delete('/coffee/:id', async(req, res)=>{
    //   const id = req.params.id;
    //   const query = {_id: new ObjectId(id)};
    //   const result = await coffeeCollection.deleteOne(query);
    //   res.send(result);
    // });

    // app.delete('/coffee/:id', async(req, res)=>{
    //   const id = req.params.id;
    //   const query = {_id: new ObjectId(id)};
    //   const result = await coffeeCollection.deleteOne(query);
    //   res.send(result);
    // });

    // app.delete('/coffee/:id', async(req, res)=>{
    //   const id = req.params.id;
    //   const query = {_id: new ObjectId(id)};
    //   const result = await coffeeCollection.deleteOne(query);
    //   res.send(result);
    // });
    // app.post('/coffee', async(req, res)=>{
    //   const newCoffee = req.body;
    //   const result = await coffeeCollection.insertOne(newCoffee);
    //   res.send(result);
    // });

    // app.get('/coffee', async(req, res)=>{
    //   const cursor = coffeeCollection.find();
    //   const result = await cursor.toArray();
    //   res.send(result);
    // });


    // app.post('/coffee', async(req, res)=>{
    //   const newCoffee = req.body;
    //   const result = await coffeeCollection.insertOne(newCoffee);
    //   res.send(result);
    // });
    // app.get('/coffee', async(req, res)=>{
    //   const cursor = coffeeCollection.find();
    //   const result = await cursor.toArray();
    //   res.send(result)
    // });
    
    // app.post('/coffee', async(req, res)=>{
    //   const newCoffee = req.body;
    //   const result = await coffeeCollection.insertOne(newCoffee);
    //   res.send(result);
    // });

    // app.get('/coffee', async(req, res)=>{
    //   const cursor = coffeeCollection.find();
    //   const result = await cursor.toArray();
    //   res.send(result);
    // });
    // app.post('/coffee', async(req, res)=>{
    //   const newCoffee = req.body;
    //   const result = await coffeeCollection.insertOne(newCoffee);
    //   res.send(result);
    // });

    // app.get('/coffee', async(req, res)=>{
    //   const cursor = coffeeCollection.find();
    //   const result = await cursor.toArray();
    //   res.send(result);
    // });
    
    // app.post('/coffee', async(req, res)=>{
    //   const newCoffee = req.body;
    //   const result = await coffeeCollection.insertOne(newCoffee);
    //   res.send(result)
    // });




  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res)=>{
    res.send('crud Server3 is running')
});

app.listen(port, (req, res)=>{
    console.log(`Server is running on port: ${port}`);
});
