import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import {
  Box,
  TextField,
  Paper,
  Typography,
  Stack,
  Avatar,
  IconButton,
  CircularProgress
} from '@mui/material';
import { SendOutlined } from '@ant-design/icons';
import MainCard from 'components/MainCard';

// Initialize Google GenAI with environment variable
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY // Use import.meta.env instead of process.env
});

export default function ChatbotPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  // Initial bot message
  useEffect(() => {
    setMessages([
      {
        text: "Hi! I'm your Financial Security Assistant. Ask me anything about financial security, fraud prevention, or safe banking practices!",
        sender: 'bot'
      }
    ]);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setLoading(true);

    try {
      const context = "You are a financial security expert assistant. Provide clear, accurate, and helpful information about financial security, fraud prevention, and safe banking practices. Keep responses concise and easy to understand.";
      
      const prompt = context + "\n\nUser Question: " + userMessage;
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });

      const botMessage = response.text;
      setMessages(prev => [...prev, { text: botMessage, sender: 'bot' }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        text: "Sorry, I encountered an error. Please try again.",
        sender: 'bot'
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <MainCard title="Financial Security Assistant">
      <Box sx={{ height: '70vh', display: 'flex', flexDirection: 'column' }}>
        <Box
          ref={chatContainerRef}
          sx={{
            flex: 1,
            overflowY: 'auto',
            p: 2,
            backgroundColor: 'background.default',
            borderRadius: 1
          }}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                mb: 2
              }}
            >
              <Stack direction="row" spacing={2} alignItems="start">
                {message.sender === 'bot' && (
                  <Avatar
                    sx={{
                      bgcolor: 'primary.main',
                      width: 32,
                      height: 32
                    }}
                  >
                    AI
                  </Avatar>
                )}
                <Paper
                  sx={{
                    p: 2,
                    backgroundColor: message.sender === 'user' ? 'primary.main' : 'background.paper',
                    color: message.sender === 'user' ? 'white' : 'text.primary',
                    maxWidth: '75%'
                  }}
                >
                  <Typography variant="body1">{message.text}</Typography>
                </Paper>
                {message.sender === 'user' && (
                  <Avatar
                    sx={{
                      bgcolor: 'secondary.main',
                      width: 32,
                      height: 32
                    }}
                  >
                    U
                  </Avatar>
                )}
              </Stack>
            </Box>
          ))}
          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
              <CircularProgress size={24} />
            </Box>
          )}
        </Box>
        <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            multiline
            maxRows={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about financial security..."
            variant="outlined"
          />
          <IconButton
            color="primary"
            onClick={handleSend}
            disabled={loading || !input.trim()}
            sx={{ p: '10px' }}
          >
            <SendOutlined />
          </IconButton>
        </Box>
      </Box>
    </MainCard>
  );
}