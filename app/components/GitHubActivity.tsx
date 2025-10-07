'use client';

import { Box, Typography, Container, Paper, Stack, Link, Skeleton } from '@mui/material';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import GitHubIcon from '@mui/icons-material/GitHub';
import StarIcon from '@mui/icons-material/Star';
import CodeIcon from '@mui/icons-material/Code';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
}

const GITHUB_USERNAME = 'mmoren01';

export default function GitHubActivity() {
  const { data: repos, isLoading, error } = useQuery<GitHubRepo[]>({
    queryKey: ['githubRepos'],
    queryFn: async () => {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
      );
      if (!response.ok) throw new Error('Failed to fetch repos');
      return response.json();
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });

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
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{ mb: 2 }}>
            <GitHubIcon sx={{ fontSize: 40, color: '#A855F7' }} />
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                background: 'linear-gradient(135deg, #A855F7 0%, #00F0FF 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              GitHub Activity
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            sx={{
              mb: 6,
              textAlign: 'center',
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Recent projects and contributions from my GitHub profile
          </Typography>

          {isLoading ? (
            <Stack spacing={3}>
              {[1, 2, 3].map((i) => (
                <Skeleton
                  key={i}
                  variant="rectangular"
                  height={120}
                  sx={{ borderRadius: 2, bgcolor: 'rgba(255, 255, 255, 0.1)' }}
                />
              ))}
            </Stack>
          ) : error ? (
            <Paper
              sx={{
                p: 4,
                textAlign: 'center',
                background: 'rgba(255, 107, 53, 0.1)',
                border: '1px solid rgba(255, 107, 53, 0.3)',
              }}
            >
              <Typography color="error">Failed to load GitHub activity</Typography>
            </Paper>
          ) : (
            <Stack spacing={3}>
              {repos?.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    component={Link}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      p: 3,
                      background: 'rgba(26, 31, 58, 0.6)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 2,
                      textDecoration: 'none',
                      display: 'block',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(8px)',
                        boxShadow: '0 8px 32px rgba(168, 85, 247, 0.3)',
                        border: '1px solid rgba(168, 85, 247, 0.5)',
                      },
                    }}
                  >
                    <Stack direction="row" justifyContent="space-between" alignItems="start" flexWrap="wrap" gap={2}>
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: '#00F0FF',
                            mb: 1,
                            fontWeight: 600,
                          }}
                        >
                          {repo.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            mb: 2,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                          }}
                        >
                          {repo.description || 'No description available'}
                        </Typography>
                        <Stack direction="row" spacing={3} alignItems="center">
                          {repo.language && (
                            <Stack direction="row" spacing={0.5} alignItems="center">
                              <CodeIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                {repo.language}
                              </Typography>
                            </Stack>
                          )}
                          <Stack direction="row" spacing={0.5} alignItems="center">
                            <StarIcon sx={{ fontSize: 16, color: '#FFD700' }} />
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              {repo.stargazers_count}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Box>
                    </Stack>
                  </Paper>
                </motion.div>
              ))}
            </Stack>
          )}

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Link
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#A855F7',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.1rem',
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: '#00F0FF',
                },
              }}
            >
              View All Repositories →
            </Link>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}