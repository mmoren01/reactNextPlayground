'use client';

import { Box, Typography, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Box
      component="section"
      sx={{
        py: 12,
        position: 'relative',
        background: 'linear-gradient(180deg, #1A1F3A 0%, #0A0E27 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #00F0FF 0%, #A855F7 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Me
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
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 40px rgba(0, 240, 255, 0.2)',
                border: '1px solid rgba(0, 240, 255, 0.3)',
              },
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
            {/* Decorative blob */}
            <Box
              sx={{
                position: 'absolute',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #FF0080 0%, transparent 70%)',
                opacity: 0.1,
                top: '-50px',
                right: '-50px',
                filter: 'blur(40px)',
              }}
            />

            <Typography
              variant="body1"
              sx={{
                color: 'text.primary',
                mb: 3,
                fontSize: { xs: '1.125rem', md: '1.25rem' },
                lineHeight: 1.8,
              }}
            >
              I'm a <strong style={{ color: '#FF0080' }}>frontend engineer</strong> based in Charlotte, NC,
              specializing in building modern, responsive web applications with <strong style={{ color: '#00F0FF' }}>React</strong>,
              <strong style={{ color: '#00F0FF' }}> Next.js</strong>, and TypeScript.
              I'm driven by a passion for solving complex problems and delivering exceptional user experiences.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'text.primary',
                mb: 3,
                fontSize: { xs: '1.125rem', md: '1.25rem' },
                lineHeight: 1.8,
              }}
            >
              With a focus on <strong style={{ color: '#A855F7' }}>performance</strong>,
              <strong style={{ color: '#A855F7' }}> scalability</strong>, and clean architecture,
              I create solutions that are both technically sound and user-friendly.
              I believe great software comes from understanding both the code and the people who use it.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.8,
              }}
            >
              When I'm not coding, I enjoy working on my Triumph Street Twin and exploring Charlotte
              with my family. I'm always open to discussing new opportunities, interesting projects,
              or just connecting with fellow developers.
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}