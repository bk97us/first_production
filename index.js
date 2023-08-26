const express = require('express')
const app = express()
const PORT = 4000
const format = require('date-format');

app.get('/', (req, res) => {
  res.status(200).send('<h1>Hello World!<h1>')
})

app.get('/api/v1/instagram',(req,res)=>{

  const instasocial ={
   
    username: "brajesh",
    followers: 500,
    follows:40,
    date:format.asString('hh:mm:ss.sss' , new Date())

  }
  res.status(200).json({instasocial})  ;

});

app.get('/api/v1/instagram',(req,res)=>{

    const instasocial ={
     
      username: "brajesh",
      followers: 500,
      follows:40,
      date: Date.now()
  
    }
    res.status(200).json({instasocial})  ;
  
  });

app.get('/api/v1/facebook',(req,res)=>{

  const instasocial ={
   
    username: "brajeshfacebook",
    followers: 400,
    follows:404,
    date: Date.now()

  }
  res.status(200).json({instasocial})  ;

});  


app.get('/api/v1/linkedin',(req,res)=>{

    const instasocial ={
     
      username: "brajeshlinkedin",
      followers: 100,
      follows:1000,
      date: new Date()
  
    }
    res.status(200).json({instasocial})  ;
  
  });


app.get("/api/v1/:token",(req,res)=>{
    console.log(req.params.token);
    res.status(200).json({param: req.params.token})
});


app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})