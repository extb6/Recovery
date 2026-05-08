'use client'

import { useState } from 'react'
import { Send, X, MessageCircle, Minimize2 } from 'lucide-react'

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hi! Welcome to Cursory Support. How can we help you today?',
      sender: 'agent',
      timestamp: new Date(Date.now() - 2000),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isMinimized, setIsMinimized] = useState(false)

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Simulate agent response
    setTimeout(() => {
      const agentMessage = {
        id: messages.length + 2,
        text: 'Thanks for your message! A specialist will respond shortly.',
        sender: 'agent',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, agentMessage])
    }, 1000)
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition hover:scale-110 transform"
      >
        <MessageCircle size={28} />
      </button>
    )
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsMinimized(false)}
          className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-between"
        >
          <span>Chat with Support</span>
          <MessageCircle size={20} />
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 w-96 h-[500px] bg-card border border-border rounded-xl shadow-2xl flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-xl">
        <div>
          <h3 className="font-bold">Cursory Support</h3>
          <p className="text-xs opacity-90">Online now</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="p-1 hover:bg-primary/80 rounded transition"
          >
            <Minimize2 size={18} />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-primary/80 rounded transition"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.sender === 'user'
                  ? 'bg-primary text-primary-foreground rounded-br-none'
                  : 'bg-muted text-foreground rounded-bl-none'
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <p className="text-xs opacity-70 mt-1">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-border p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder-muted-foreground"
          />
          <button
            onClick={handleSendMessage}
            className="px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
