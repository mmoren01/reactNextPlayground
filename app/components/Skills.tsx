'use client';

import { Box, Typography, Container, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'Frontend Development',
    color: '#FF0080',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'React Query', 'GraphQL'],
  },
  {
    category: 'Testing & Quality',
    color: '#00F0FF',
    skills: ['Jest', 'React Testing Library', 'TDD', 'A/B Testing (Split.io)'],
  },
  {
    category: 'Analytics & Observability',
    color: '#A855F7',
    skills: ['Google Tag Manager', 'Segment', 'Amplitude', 'Branch', 'Datadog'],
  },
  {
    category: 'Developer Experience',
    color: '#FF6B35',
    skills: ['GitHub Copilot', 'Claude Code', 'Cursor', 'ChatGPT', 'GitHub Workflows', 'CI/CD'],
  },
];

export default function Skills() {
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
              mb: 2,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #00F0FF 0%, #FF0080 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Skills & Technologies
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 8,
              textAlign: 'center',
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            A comprehensive toolkit for building modern, scalable web applications
            from concept to deployment.
          </Typography>

          <Grid container spacing={3}>
            {skillCategories.map((category, index) => (
              <Grid component={motion.div} size={{xs: 12, sm: 6, md: 6}} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      background: 'rgba(26, 31, 58, 0.6)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 3,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 12px 40px ${category.color}33`,
                        border: `1px solid ${category.color}66`,
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: category.color,
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 3,
                        color: category.color,
                        fontWeight: 600,
                      }}
                    >
                      {category.category}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                      {category.skills.map((skill, i) => (
                        <Chip
                          key={i}
                          label={skill}
                          sx={{
                            backgroundColor: `${category.color}22`,
                            color: 'text.primary',
                            border: `1px solid ${category.color}44`,
                            fontWeight: 500,
                            fontSize: '0.9rem',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              backgroundColor: `${category.color}33`,
                              border: `1px solid ${category.color}`,
                              transform: 'translateY(-2px)',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
