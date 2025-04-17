import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import {
  Box,
  TextField,
  Paper,
  Typography,
  Stack,
  Avatar,
  IconButton,
  CircularProgress,
  Link
} from '@mui/material';
import { SendOutlined } from '@ant-design/icons';
import MainCard from 'components/MainCard';

// Initialize Google GenAI
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

// Custom styles for markdown content
const markdownStyles = {
  p: {
    margin: '8px 0',
    lineHeight: 1.8,
    fontSize: '1rem'
  },
  h1: {
    fontSize: '1.8rem',
    fontWeight: 700,
    margin: '20px 0 12px 0',
    color: 'primary.main'
  },
  h2: {
    fontSize: '1.5rem',
    fontWeight: 600,
    margin: '16px 0 10px 0',
    color: 'primary.dark'
  },
  h3: {
    fontSize: '1.2rem',
    fontWeight: 600,
    margin: '14px 0 8px 0',
    color: 'primary.dark'
  },
  ul: {
    margin: '12px 0',
    paddingLeft: '24px'
  },
  li: {
    margin: '8px 0',
    lineHeight: 1.6
  },
  code: {
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
    padding: '3px 6px',
    borderRadius: '4px',
    fontSize: '0.9em',
    fontFamily: 'monospace',
    color: 'primary.main'
  },
  pre: {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    padding: '16px',
    borderRadius: '8px',
    overflowX: 'auto',
    margin: '12px 0'
  },
  blockquote: {
    borderLeft: '4px solid primary.main',
    margin: '16px 0',
    padding: '12px 20px',
    fontStyle: 'italic',
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderRadius: '0 8px 8px 0'
  },
  strong: {
    fontWeight: 600,
    color: 'primary.dark'
  }
};

// Custom components for markdown rendering
const MarkdownComponents = {
  p: (props) => <Typography {...props} sx={markdownStyles.p} />,
  h1: (props) => <Typography variant="h1" {...props} sx={markdownStyles.h1} />,
  h2: (props) => <Typography variant="h2" {...props} sx={markdownStyles.h2} />,
  h3: (props) => <Typography variant="h3" {...props} sx={markdownStyles.h3} />,
  ul: (props) => <ul {...props} style={markdownStyles.ul} />,
  li: (props) => <li {...props} style={markdownStyles.li} />,
  code: (props) => <code {...props} style={markdownStyles.code} />,
  pre: (props) => <pre {...props} style={markdownStyles.pre} />,
  blockquote: (props) => <blockquote {...props} style={markdownStyles.blockquote} />,
  a: (props) => <Link {...props} color="primary" />
};

// Update the message rendering part in your existing code
const MessageContent = ({ message }) => {
  if (message.sender === 'bot') {
    return (
      <ReactMarkdown components={MarkdownComponents}>
        {message.text}
      </ReactMarkdown>
    );
  }
  return <Typography variant="body1">{message.text}</Typography>;
};

// Update the AI prompt to generate formatted responses
const context = `You are a helpful and expert financial assistant. Format your responses using Markdown:
- Always use ### for main section headings
- Use **bold** for important terms, key concepts, and emphasis
- Use bullet points (- or *) for listing items
- Use \`code\` style for numbers, rates, and technical terms
- Use > for important warnings, tips, or quotes
- Structure your response with clear sections
- Keep paragraphs short and focused
- Use numbered lists for steps or sequences

Example format:
### Topic Title
**Key concept** explanation here.

Main points:
- Point 1 with \`technical term\`
- Point 2 with **emphasis**

> Important tip or warning here

Only respond to questions related to finance, economics, investment, budgeting, banking, markets, etc. 
Politely refuse to answer unrelated questions.`;

export default function ChatbotContent({ isModal = false }) {
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
    <Box sx={{ 
      height: isModal ? '100%' : '70vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
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
                  p: 2.5,
                  backgroundColor: message.sender === 'user' ? 'primary.main' : 'background.paper',
                  color: message.sender === 'user' ? 'white' : 'text.primary',
                  maxWidth: '75%',
                  boxShadow: (theme) => `0 2px 12px ${
                    message.sender === 'user' 
                      ? theme.palette.primary.light + '40'
                      : 'rgba(0, 0, 0, 0.08)'
                  }`,
                  borderRadius: '12px',
                  ...(message.sender === 'bot' && {
                    '& code': markdownStyles.code,
                    '& pre': markdownStyles.pre,
                    '& blockquote': markdownStyles.blockquote,
                    '& strong': markdownStyles.strong,
                    '& ul': markdownStyles.ul,
                    '& li': markdownStyles.li
                  })
                }}
              >
                <MessageContent message={message} />
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
  );
}