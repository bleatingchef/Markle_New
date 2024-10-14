import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography, Box } from '@mui/material';
import img1 from '../assets/servicesImg/why.png';

const ChooseMarkle = () => {
  const reasons = [
    ['FLEXIBLE ENGAGEMENT MODELS', '24X7 SUPPORT ACROSS ALL TIMEZONES', 'COMPETITIVE PRICING & ONTIME DELIVERY'],
    ['STATE OF THE ART IT INFRASTRUCTURE', 'STRONG TECHNOLOGY COMPETENCY', 'SEAMLESS COMMUNICATION']
  ];

  return (
    <Box sx={{ bgcolor: 'background.paper', py: 6, px: { xs: 2, sm: 3, lg: 4 } }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start' }}>
          <Box sx={{ width: { xs: '100%', md: '50%' }, pr: { md: 2 } }}>
            <Typography variant="h2" component="h2" sx={{ fontSize: '3rem', fontWeight: 'bold', mb: 5 }}>
              WHY CUSTOMERS IN<br />OVER 50+ COUNTRIES<br />CHOOSE MARKLE?
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ tableLayout: 'fixed'}}>
                <TableBody>
                  {reasons.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                      {row.map((reason, colIndex) => (
                        <TableCell 
                          key={colIndex} 
                          sx={{ 
                            border: 2, 
                            borderColor: 'text.primary', 
                            p: 1,
                            fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1.5rem' },
                            wordBreak: 'break-word',
                            height: '100%',
                            verticalAlign: 'top'
                          }}
                        >
                          {reason}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box sx={{ width: { xs: '100%', md: '50%' }, pl: { md: 2 }, mt: { xs: 4, md: 0 } }}>
            <Box 
              sx={{ 
                position: 'relative', 
                width: '100%', 
                height: 'auto', 
                aspectRatio: '3/3', 
                borderRadius: 2, 
                overflow: 'hidden' 
              }}
            >
              <img
                src={img1}
                alt="Person working on laptop in a futuristic environment"
                style={{ width: '80%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChooseMarkle;