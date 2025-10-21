'use client';

import { Box, Typography, Container, TextField, Button, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Hook up to backend later
    alert('Thanks for reaching out! (Form submission will be connected to backend later)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: 12,
        position: 'relative',
        background: 'linear-gradient(180deg, #1A1F3A 0%, #0A0E27 100%)',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #FF0080 0%, #00F0FF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 6,
              textAlign: 'center',
              color: 'text.secondary',
              maxWidth: '500px',
              mx: 'auto',
            }}
          >
            Have a project in mind or just want to chat? I'd love to hear from you!
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              background: 'rgba(26, 31, 58, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 4,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #FF0080 0%, #00F0FF 50%, #A855F7 100%)',
              },
            }}
          >
            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'text.primary',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: '#00F0FF',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#FF0080',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'text.secondary',
                      '&.Mui-focused': {
                        color: '#FF0080',
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'text.primary',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: '#00F0FF',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#FF0080',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'text.secondary',
                      '&.Mui-focused': {
                        color: '#FF0080',
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={6}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'text.primary',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: '#00F0FF',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#FF0080',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'text.secondary',
                      '&.Mui-focused': {
                        color: '#FF0080',
                      },
                    },
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                  sx={{
                    background: 'linear-gradient(135deg, #FF0080 0%, #A855F7 100%)',
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #CC0066 0%, #8844CC 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 24px rgba(255, 0, 128, 0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}