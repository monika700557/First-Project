import React from 'react';
import { Box } from '@mui/material';

const MultiColorProgressBar = ({ segments }) => {
  const totalValue = segments.reduce((sum, segment) => sum + segment.value, 0);

  return (
    <Box className="w-full">
      <Box className="h-2 bg-blue-500 rounded-full overflow-hidden flex">
        {segments.map((segment, index) => (
          <Box
            key={index}
            className={`h-full ${segment.color}`}
            style={{ width: `${(segment.value / totalValue) * 100}%` }}
          />
        ))}
      </Box>
      <Box className="flex mt-2">
        {segments.map((segment, index) => (
          <Box key={index} className="flex items-center mr-4">
            <Box
              className={`w-3 h-3 rounded-full mr-2 ${segment.color}`}
            />
            <span className="text-sm">{segment.label}</span>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MultiColorProgressBar