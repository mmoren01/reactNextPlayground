'use client';

import { Box, Typography, Container, Card, CardContent, CardMedia, Chip, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

// Sample project data - replace with your actual projects
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory, secure payments, and admin dashboard.',
    image: '/images/project1.jpg', // Add your project images to public/images/
    tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://demo.example.com',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task manager with drag-and-drop, real-time updates, and team workspaces.',
    image: '/images/project2.jpg',
    tech: ['React', 'Firebase', 'Material UI', 'Redux'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://demo.example.com',
  },
  {
    title: 'AI Content Generator',
    description: 'AI-powered content creation tool using OpenAI API with custom templates and export options.',
    image: '/images/project3.jpg',
    tech: ['Next.js', 'OpenAI API', 'Tailwind', 'Prisma'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://demo.example.com',
  },
  {
    title: 'Portfolio Analytics',
    description: 'Real-time analytics dashboard for portfolio websites with visitor tracking and insights.',
    image: '/images/project4.jpg',
    tech: ['React', 'Chart.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://demo.example.com',
  },
];

export default function Projects() {
  return (
    <Box
      component="section"
      sx={{
        py: 12,
        background: 'linear-gradient(180deg, #0A0E27 0%, #1A1F3A 100%)',
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
              background: 'linear-gradient(135deg, #FF0080 0%, #A855F7 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Featured Projects
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
            A selection of projects showcasing my expertise in full-stack development,
            modern web technologies, and creative problem-solving.
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid component={motion.div} size={{xs: 12, md: 6}} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(26, 31, 58, 0.6)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 40px rgba(255, 0, 128, 0.3)',
                        border: '1px solid rgba(255, 0, 128, 0.5)',
                      },
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        height: 240,
                        background: 'linear-gradient(135deg, #FF0080 0%, #00F0FF 100%)',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography variant="h4" sx={{ color: 'white', opacity: 0.3 }}>
                        {project.title}
                      </Typography>
                    </CardMedia>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h5" sx={{ mb: 2, color: 'text.primary', fontWeight: 600 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.7 }}>
                        {project.description}
                      </Typography>

                      <Box sx={{ mb: 3 }}>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                          {project.tech.map((tech, i) => (
                            <Chip
                              key={i}
                              label={tech}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(0, 240, 255, 0.1)',
                                color: '#00F0FF',
                                border: '1px solid rgba(0, 240, 255, 0.3)',
                                fontWeight: 500,
                              }}
                            />
                          ))}
                        </Stack>
                      </Box>

                      <Stack direction="row" spacing={2}>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<GitHubIcon />}
                          href={project.github}
                          target="_blank"
                          sx={{
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                            color: 'text.primary',
                            '&:hover': {
                              borderColor: '#FF0080',
                              backgroundColor: 'rgba(255, 0, 128, 0.1)',
                            },
                          }}
                        >
                          Code
                        </Button>
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<LaunchIcon />}
                          href={project.demo}
                          target="_blank"
                          sx={{
                            background: 'linear-gradient(135deg, #FF0080 0%, #A855F7 100%)',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #CC0066 0%, #8844CC 100%)',
                            },
                          }}
                        >
                          Live Demo
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}