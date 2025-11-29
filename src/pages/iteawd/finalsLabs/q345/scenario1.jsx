import React, { useState } from 'react';
import {
  Box,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Divider
} from '@mui/material';
import { DashboardContent } from 'src/layouts/dashboard';

// consistent data pairing for coffee & pastry
const coffeePastryPairs = {
  "Mocha": "Chocolate Chip Cookie",
  "Flat White": "Almond Biscotti",
  "Matcha Latte": "Cheesecake Slice",
  "Spanish Latte": "Cinnamon Roll",
  "Hazelnut Latte": "Macaron",
  "Vanilla Sweet Cream Cold Brew": "Butter Croissant",
  "Affogato": "Vanilla Ice Cream Scoop",
  "Irish Coffee": "Oatmeal Raisin Cookie",
  "White Mocha": "Blueberry Muffin",
  "Black Coffee": "Pandesal",
  "Iced Caramel Latte": "Chocolate Brownie",
  "Toffee Nut Latte": "Gingerbread Cookie",
  "Iced Americano": "Pretzel",
  "Dirty Matcha": "Ube Ensaymada",
  "Peppermint Mocha": "Mint Chocolate Bar"
};

function Scenario1() {
  const [selectedCoffee, setSelectedCoffee] = useState('');

  const handleCoffeeChange = (event) => {
    setSelectedCoffee(event.target.value);
  };

  return (
    <DashboardContent maxWidth="xl">
      <Box
        sx={{
          minHeight: '80vh',
          backgroundColor: '#F5F0E8',
          py: 6,
          px: 2,
          borderRadius: 2
        }}
      >
        <Box sx={{ maxWidth: 500, mx: 'auto' }}>

          {/* header */}
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              color: '#2C1810',
              textAlign: 'center',
              mb: 1,
              fontWeight: 400,
              letterSpacing: '0.5px'
            }}
          >
            Coffee & Pastry
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              color: '#6B4423',
              textAlign: 'center',
              mb: 5,
              fontWeight: 300,
              letterSpacing: '2px'
            }}
          >
            PAIRING GUIDE
          </Typography>

          {/* using paper as card */}
          <Paper
            elevation={0}
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: 0,
              border: '1px solid #D4C5B9',
              overflow: 'hidden'
            }}
          >
            <Box
              sx={{
                backgroundColor: '#6B4423',
                py: 2,
                px: 3
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  color: '#FFFFFF',
                  textAlign: 'center',
                  letterSpacing: '1px',
                  fontSize: '0.9rem'
                }}
              >
                SELECT YOUR BREW!
              </Typography>
            </Box>

            <CardContent sx={{ p: 4 }}>
              <FormControl
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    backgroundColor: '#FAFAF8',
                    borderRadius: 0,
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#8B6F47',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#6B4423',
                      borderWidth: '1px',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    color: '#6B4423',
                    '&.Mui-focused': {
                      color: '#6B4423',
                    },
                  },
                }}
              >
                <InputLabel id="coffee-select-label">Choose Your Coffee</InputLabel>
                <Select
                  labelId="coffee-select-label"
                  id="coffee-select"
                  value={selectedCoffee}
                  label="Choose Your Coffee"
                  onChange={handleCoffeeChange}
                  sx={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        borderRadius: 0,
                        '& .MuiMenuItem-root': {
                          fontFamily: 'Georgia, "Times New Roman", serif',
                          color: '#2C1810',
                          '&:hover': {
                            backgroundColor: '#F5F0E8',
                          },
                          '&.Mui-selected': {
                            backgroundColor: '#E8DDD0',
                            '&:hover': {
                              backgroundColor: '#D4C5B9',
                            },
                          },
                        },
                      },
                    },
                  }}
                >
                  {Object.keys(coffeePastryPairs).map((coffee) => (
                    <MenuItem key={coffee} value={coffee}>
                      {coffee}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {selectedCoffee && (
                <>
                  <Divider
                    sx={{
                      my: 4,
                      borderColor: '#D4C5B9'
                    }}
                  />

                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="overline"
                      sx={{
                        fontFamily: 'Georgia, "Times New Roman", serif',
                        color: '#8B6F47',
                        letterSpacing: '2px',
                        fontSize: '0.75rem'
                      }}
                    >
                      RECOMMENDED PAIRING
                    </Typography>

                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: 'Georgia, "Times New Roman", serif',
                        color: '#2C1810',
                        mt: 2,
                        mb: 1,
                        fontWeight: 400
                      }}
                    >
                      {coffeePastryPairs[selectedCoffee]}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: 'Georgia, "Times New Roman", serif',
                        color: '#6B4423',
                        fontStyle: 'italic',
                        mt: 1
                      }}
                    >
                      Perfectly paired with your {selectedCoffee}
                    </Typography>
                  </Box>
                </>
              )}
            </CardContent>
          </Paper>

          {/* footer credits */}
          <Typography
            variant="caption"
            sx={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              color: '#8B6F47',
              textAlign: 'center',
              display: 'block',
              mt: 4,
              letterSpacing: '1px'
            }}
          >
            Crafted by BRI
          </Typography>
        </Box>
      </Box>
    </DashboardContent>
  );
}

export default Scenario1;
