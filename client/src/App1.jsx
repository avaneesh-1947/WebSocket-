import { useState, useMemo, useEffect } from "react";
import {io} from "socket.io-client";
import "./App1.css";

const App1=()=>{
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);


    // Connect to the WebSocket server
    const socket = useMemo(()=>io("https://web-socket-dhkp.vercel.app"), []);

      const  handleSubmit = (event) => {
        event.preventDefault();
        socket.emit("message", message); // message ko server pr send karo 
        setMessage("");    
       }


  

   useEffect(()=>{
      socket.emit("joinRoom", "room1");


  socket.on("mess", (message)=>{
        // console.log(message);
         setMessages((e)=>[...e, message]); 
       });

       socket.on("chatRoom", (msgs) =>{
        setMessages((e)=>[...e, `${msgs.message}`]); 
       })

   },[])

    
    return(
        <div className="container" >
          
            <form  className="input-area" onSubmit={handleSubmit} >
                <input  value={message} onChange={(e)=>setMessage(e.target.value)} type="text" placeholder="enter message" />
                <button type="submit"> send</button>
            </form>
            
              <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message-bubble">
                         {msg}
                    </div>
                    
                ))}
            </div>
        </div>
    );
}

export default App1;