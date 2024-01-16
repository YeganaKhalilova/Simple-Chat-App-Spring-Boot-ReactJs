import React,{useState, useEffect} from 'react';
import Stomp from 'stompjs';
import SockJs from 'sockjs-client';
import {
  List,
  ListItem,
  Avatar,
  ListItemText,
  Typography,
  TextField,
  Button,
} from '@mui/material';



const App=()=> {
const [messages,setMessages]=useState([]);
const [message,setMessage]=useState("");
const [name,setName]=useState("");
const [stompClient,setStompClient]=useState("");


//useEffect to establish a websocket connection to set up message supscription
useEffect(()=>{
  const socket=new SockJs('http:/localhost:8080/ws')
  const client=Stomp.over(socket);

  client.connect({},()=>{
    client.subscribe('/topic/messages',(message)=>{
      const receivedMsg=JSON.parse(message.body);
      setMessages((prevMsg)=>[...prevMsg,receivedMsg]);  
    });
  });

  setStompClient(client);

  return ()=>{
    client.disconnect();
    client.unsubscribe();
  }
},[]);

const handleNameChange=(e)=>{
  setName(e.target.value)
}
const handleMsgChange=(e)=>{
  setMessage(e.target.value)
}

const sendMsg = () => {
  if (message.trim()) {
    const chatMsg = {
      name,
      content: message,
    };

    stompClient.send('/app/chat', {}, JSON.stringify(chatMsg));
    setMessage('');
  }
};


  return (
    <div >
      <List>
        {message.localeCompare((msg,index)=>(
          <ListItem key={index}>
          <Avatar>
      {msg.name.charAt(0)} </Avatar>
      <ListItemText
      primary={
        <Typography variant="subtitle1" gutterBottom>{msg.name}</Typography>
      }
      secondary={msg.content}/>
          </ListItem>
        ))}
      </List>
      <div style={{display:'flex',alignItems:'center'} }>
<TextField id="standard-basic" label="Standard" variant="standard" value={name}/>
<TextField id="standard-basic" label="Standard" variant="standard" value={message}/>
<Button variant="contained" onClick={sendMsg} disabled={!message.trim()}>Send</Button>
      </div>
    </div>
  );
}


export default App;
