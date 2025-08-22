 import express from "express";
  import {Server} from "socket.io";
  import {createServer} from "http";
  const app= express();
  const server = createServer(app);
  
  const io = new Server(server,{
    cors: {
        origin:"*",
        methods: ["GET", "POST"],
        credentials: true 
    }   
  })

  io.on("connection",(socket)=>{
    // console.log("User connected", socket.id);
    socket.on("message",({room,message})=>
      {
        // io.emit("mess", message);
        if(room){
          io.to(room).emit("mess", message);
        }
      })

      socket.on("joinRoom" , (room) => {
        socket.join(room);
        io.to(room).emit("chatRoom" , {user:"user1" , message: ` joined the room ${room}` });
      })
    
  })

  






  app.get('/', (req,resp)=>{
    resp.send("Hello World do u know me?");
    // console.log("hello");
  })

  server.listen(3000,()=>{
    console.log("Server is running on port 3000");
  }
)