import React, { useState } from 'react';
import { Box, Fab, Tooltip } from '@mui/material';
import { MessageOutlined } from '@ant-design/icons';
import ChatbotModal from './ChatbotModal';

export default function ChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          right: 30,
          bottom: 30,
          zIndex: 1000
        }}
      >
        <Tooltip title="Chat with AI Assistant" placement="left">
          <Fab
            color="primary"
            onClick={() => setOpen(true)}
            sx={{
              width: 60,
              height: 60,
              '&:hover': {
                transform: 'scale(1.1)',
              },
              transition: 'transform 0.2s'
            }}
          >
            <MessageOutlined style={{ fontSize: '24px' }} />
          </Fab>
        </Tooltip>
      </Box>
      <ChatbotModal 
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}