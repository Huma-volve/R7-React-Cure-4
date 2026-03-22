import { useState, useRef, useEffect } from "react";
import { Send, Phone, Video, MoreVertical, Search, Smile } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  text: string;
  sender: "user" | "doctor";
  timestamp: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! How are you feeling today?",
      sender: "doctor",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      text: "I'm doing well, thank you for asking.",
      sender: "user",
      timestamp: "10:31 AM",
    },
    {
      id: 3,
      text: "Great! Let me know if you have any concerns.",
      sender: "doctor",
      timestamp: "10:32 AM",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [activeChat, setActiveChat] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chats = [
    {
      id: 1,
      name: "Dr. Jennifer Miller",
      specialty: "Psychiatrist",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      lastMessage: "Great! Let me know if you have any concerns.",
      unread: 0,
      status: "online",
    },
    {
      id: 2,
      name: "Dr. Ahmed Hassan",
      specialty: "Cardiologist",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      lastMessage: "Your appointment is confirmed for tomorrow",
      unread: 2,
      status: "offline",
    },
    {
      id: 3,
      name: "Dr. Fatima Ali",
      specialty: "Dermatologist",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      lastMessage: "How's the treatment going?",
      unread: 0,
      status: "online",
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, newMessage]);
    setInputValue("");

    setTimeout(() => {
      const replyMessage: Message = {
        id: messages.length + 2,
        text: "Thank you for your message. I'll get back to you shortly.",
        sender: "doctor",
        timestamp: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, replyMessage]);
    }, 1000);
  };

  const currentChat = chats.find((chat) => chat.id === activeChat);

  return (
    <div className="h-[calc(100vh-80px)] flex bg-gray-50">
      {/* Chats List */}
      <div className="w-full md:w-80 bg-white border-r flex flex-col">
        {/* Header */}
        <div className="p-4 border-b">
          <h2 className="text-2xl font-bold text-[#05162C] mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search chats..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Chats */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className={`w-full p-4 flex gap-3 items-start hover:bg-gray-50 transition-all duration-200 border-b ${
                activeChat === chat.id ? "bg-blue-50" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={chat.image}
                  alt={chat.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div
                  className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                    chat.status === "online" ? "bg-green-500" : "bg-gray-400"
                  }`}
                />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-[#05162C]">{chat.name}</h3>
                <p className="text-xs text-gray-500 mb-1">{chat.specialty}</p>
                <p className="text-sm text-gray-600 truncate">
                  {chat.lastMessage}
                </p>
              </div>
              {chat.unread > 0 && (
                <span className="bg-[#1666C0] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {chat.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="hidden md:flex flex-1 flex-col bg-white">
        {currentChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b flex items-center justify-between bg-linear-to-r from-[#1666C0] to-[#0D4FA3] text-white">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={currentChat.image}
                    alt={currentChat.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div
                    className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${
                      currentChat.status === "online"
                        ? "bg-green-500"
                        : "bg-gray-400"
                    }`}
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{currentChat.name}</h3>
                  <p className="text-xs text-blue-100">
                    {currentChat.status === "online" ? "Online" : "Offline"}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                >
                  <Phone className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                >
                  <Video className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                >
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  } animate-fadeIn`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.sender === "user"
                        ? "bg-[#1666C0] text-white rounded-br-none"
                        : "bg-gray-200 text-gray-900 rounded-bl-none"
                    }`}
                  >
                    <p>{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "user"
                          ? "text-blue-100"
                          : "text-gray-600"
                      }`}
                    >
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t flex gap-2">
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-600 hover:bg-gray-100"
              >
                <Smile className="w-5 h-5" />
              </Button>
              <div className="flex-1 flex gap-2">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && handleSendMessage()
                  }
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-[#1666C0] hover:bg-[#0D4FA3]"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            <p>Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
}