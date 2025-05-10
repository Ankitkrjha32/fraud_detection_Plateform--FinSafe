import React from 'react';
import {
  Modal,
  Box,
  IconButton,
} from '@mui/material';
import { CloseOutlined } from '@ant-design/icons';
import ChatbotContent from 'pages/component-overview';

export default function ChatbotModal({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="chatbot-modal"
    >
      <Box
        sx={{
          position: 'fixed',
          right: 30,
          bottom: 30,
          width: '400px',
          height: '600px',
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 2,
          outline: 'none'
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'grey.500'
          }}
        >
          <CloseOutlined />
        </IconButton>
        <ChatbotContent isModal={true} />
      </Box>
    </Modal>
  );
}