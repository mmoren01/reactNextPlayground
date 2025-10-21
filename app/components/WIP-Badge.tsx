'use client';

import { Chip } from '@mui/material';
import { motion } from 'framer-motion';
import ConstructionIcon from '@mui/icons-material/Construction';

export default function WIPBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      <Chip
        icon={<ConstructionIcon />}
        label="Work in Progress"
        sx={{
          background: 'rgba(168, 85, 247, 0.9)',
          backdropFilter: 'blur(10px)',
          color: 'white',
          fontWeight: 600,
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 12px rgba(168, 85, 247, 0.4)',
        }}
      />
    </motion.div>
  );
}