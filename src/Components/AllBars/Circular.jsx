import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel({ value }) {
  const numericValue = parseFloat(value); // Convert the string to a number
  const textColor = numericValue > 80 ? '#467FFF' : '#FF9F43'
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" value={numericValue} style={{color : textColor}} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" style={{color: textColor}}>
          {`${Math.round(numericValue)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default CircularProgressWithLabel;
