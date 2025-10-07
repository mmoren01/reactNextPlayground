'use client';

import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { keyframes } from '@mui/material/styles';

const float = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -30px) rotate(120deg); }
  66% { transform: translate(-20px, 20px) rotate(240deg); }
`;

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0A0E27 0%, #1A1F3A 100%)',
      }}
    >
      {/* Animated background blobs */}
      <Box
        sx={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #FF0080 0%, transparent 70%)',
          opacity: 0.15,
          top: '10%',
          right: '10%',
          animation: `${float} 20s ease-in-out infinite`,
          filter: 'blur(60px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #00F0FF 0%, transparent 70%)',
          opacity: 0.15,
          bottom: '10%',
          left: '5%',
          animation: `${float} 15s ease-in-out infinite reverse`,
          filter: 'blur(60px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #A855F7 0%, transparent 70%)',
          opacity: 0.2,
          top: '50%',
          left: '50%',
          animation: `${float} 25s ease-in-out infinite`,
          filter: 'blur(60px)',
        }}
      />

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              background: 'linear-gradient(135deg, #FF0080 0%, #00F0FF 50%, #A855F7 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3,
              fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
            }}
          >
            Hi, I'm Mauricio 👋
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: 'text.primary',
              mb: 4,
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 500,
            }}
          >
            Frontend Developer building <span style={{ color: '#FF0080' }}>scalable</span>,{' '}
            <span style={{ color: '#00F0FF' }}>user-focused</span> web applications
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 6,
              maxWidth: '600px',
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            Specializing in React, Next.js, and modern web technologies.
            Passionate about creating exceptional digital experiences through clean code and thoughtful design.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                background: 'linear-gradient(135deg, #FF0080 0%, #A855F7 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #CC0066 0%, #8844CC 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 24px rgba(255, 0, 128, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              View My Work
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: '#00F0FF',
                color: '#00F0FF',
                '&:hover': {
                  borderColor: '#00F0FF',
                  backgroundColor: 'rgba(0, 240, 255, 0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Get In Touch
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}