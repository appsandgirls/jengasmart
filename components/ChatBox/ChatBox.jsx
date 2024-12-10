// ChatBox.jsx
import { useEffect, useState } from "react"
import io from "socket.io-client"

const socket = io("http://localhost:5000") // Flask server with Socket.IO

const ChatBox = () => {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState("")

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data])
    })
  }, [])

  const sendMessage = () => {
    socket.emit("sendMessage", message)
    setMessage("")
  }

  return (
    <div>
      <h2>Chat</h2>
      <div>
        {messages.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default ChatBox
