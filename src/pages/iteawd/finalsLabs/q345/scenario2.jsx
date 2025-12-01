import React, { useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Divider
} from '@mui/material';
import { DashboardContent } from 'src/layouts/dashboard';

// this is sample data only
const inventoryData = [
  { id: 1, name: 'Laptop', category: 'Electronics', quantity: 25, status: 'In Stock', price: '$999' },
  { id: 2, name: 'Mouse', category: 'Accessories', quantity: 5, status: 'Low Stock', price: '$29' },
  { id: 3, name: 'Keyboard', category: 'Accessories', quantity: 0, status: 'Discontinued', price: '$79' },
  { id: 4, name: 'Monitor', category: 'Electronics', quantity: 15, status: 'In Stock', price: '$299' },
  { id: 5, name: 'Webcam', category: 'Accessories', quantity: 3, status: 'Low Stock', price: '$89' },
  { id: 6, name: 'Printer', category: 'Electronics', quantity: 0, status: 'Discontinued', price: '$199' },
  { id: 7, name: 'USB Cable', category: 'Accessories', quantity: 50, status: 'In Stock', price: '$9' },
  { id: 8, name: 'Headphones', category: 'Accessories', quantity: 8, status: 'Low Stock', price: '$149' },
  { id: 9, name: 'Tablet', category: 'Electronics', quantity: 20, status: 'In Stock', price: '$499' },
  { id: 10, name: 'Scanner', category: 'Electronics', quantity: 0, status: 'Discontinued', price: '$159' },
  { id: 11, name: 'Smartphone', category: 'Electronics', quantity: 12, status: 'In Stock', price: '$799' },
  { id: 12, name: 'Portable SSD', category: 'Accessories', quantity: 6, status: 'Low Stock', price: '$129' },
  { id: 13, name: 'HDMI Adapter', category: 'Accessories', quantity: 40, status: 'In Stock', price: '$19' },
  { id: 14, name: 'Wireless Charger', category: 'Accessories', quantity: 0, status: 'Discontinued', price: '$39' },
  { id: 15, name: 'Gaming Chair', category: 'Electronics', quantity: 9, status: 'Low Stock', price: '$249' },
  { id: 16, name: 'Bluetooth Speaker', category: 'Electronics', quantity: 30, status: 'In Stock', price: '$199' },
  { id: 17, name: 'Microphone', category: 'Accessories', quantity: 2, status: 'Low Stock', price: '$99' },
  { id: 18, name: 'Graphics Card', category: 'Electronics', quantity: 0, status: 'Discontinued', price: '$699' },
  { id: 19, name: 'Flash Drive', category: 'Accessories', quantity: 75, status: 'In Stock', price: '$14' },
  { id: 20, name: 'Router', category: 'Electronics', quantity: 18, status: 'In Stock', price: '$129' }

];

function Scenario2() {
  const [filter, setFilter] = useState('All');

  // for filtering of data
  const filteredProducts = filter === 'All'
    ? inventoryData
    : inventoryData.filter(product => product.status === filter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Stock':
        return { bg: '#4CAF50', text: '#FFFFFF' };
      case 'Low Stock':
        return { bg: '#FF9800', text: '#FFFFFF' }; 
      case 'Discontinued':
        return { bg: '#F44336', text: '#FFFFFF' }; 
      default:
        return { bg: '#F5F5F5', text: '#000000' };
    }
  };

  return (
    <DashboardContent maxWidth="xl">
      <Box
        sx={{
          backgroundColor: '#F5F5F5',
          minHeight: '80vh',
          py: 4,
          px: 3,
          borderRadius: 1
        }}
      >
        {/* header */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              color: '#000000',
              fontWeight: 700,
              letterSpacing: '-0.5px',
              mb: 0.5
            }}
          >
            INVENTORY DASHBOARD
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#6B6B6B',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              fontSize: '0.75rem'
            }}
          >
            Electronics Dashboard
          </Typography>
        </Box>

        {/* body */}
        <Paper
          elevation={0}
          sx={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E0E0E0',
            overflow: 'hidden'
          }}
        >
          {/* for filtering  */}
          <Box
            sx={{
              p: 3,
              backgroundColor: '#FAFAFA',
              borderBottom: '1px solid #E0E0E0'
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#000000',
                  letterSpacing: '0.5px'
                }}
              >
                PRODUCT INVENTORY
              </Typography>

              <ButtonGroup
                variant="outlined"
                sx={{
                  '& .MuiButton-root': {
                    borderColor: '#E0E0E0',
                    color: '#6B6B6B',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    fontSize: '0.75rem',
                    letterSpacing: '0.5px',
                    px: 2,
                    '&:hover': {
                      borderColor: '#000000',
                      backgroundColor: '#FAFAFA',
                    },
                  },
                  '& .MuiButton-contained': {
                    backgroundColor: '#000000',
                    color: '#FFFFFF',
                    borderColor: '#000000',
                    '&:hover': {
                      backgroundColor: '#2C2C2C',
                      borderColor: '#000000',
                    },
                  },
                }}
              >
                <Button
                  onClick={() => setFilter('All')}
                  variant={filter === 'All' ? 'contained' : 'outlined'}
                >
                  All ({inventoryData.length})
                </Button>
                <Button
                  onClick={() => setFilter('In Stock')}
                  variant={filter === 'In Stock' ? 'contained' : 'outlined'}
                >
                  In Stock ({inventoryData.filter(p => p.status === 'In Stock').length})
                </Button>
                <Button
                  onClick={() => setFilter('Low Stock')}
                  variant={filter === 'Low Stock' ? 'contained' : 'outlined'}
                >
                  Low Stock ({inventoryData.filter(p => p.status === 'Low Stock').length})
                </Button>
                <Button
                  onClick={() => setFilter('Discontinued')}
                  variant={filter === 'Discontinued' ? 'contained' : 'outlined'}
                >
                  Discontinued ({inventoryData.filter(p => p.status === 'Discontinued').length})
                </Button>
              </ButtonGroup>
            </Box>
          </Box>

          {/* table */}
          <TableContainer>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#FAFAFA' }}>
                  <TableCell
                    sx={{
                      fontWeight: 700,
                      color: '#000000',
                      textTransform: 'uppercase',
                      fontSize: '0.75rem',
                      letterSpacing: '1px',
                      borderBottom: '2px solid #E0E0E0'
                    }}
                  >
                    ID
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 700,
                      color: '#000000',
                      textTransform: 'uppercase',
                      fontSize: '0.75rem',
                      letterSpacing: '1px',
                      borderBottom: '2px solid #E0E0E0'
                    }}
                  >
                    Product Name
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 700,
                      color: '#000000',
                      textTransform: 'uppercase',
                      fontSize: '0.75rem',
                      letterSpacing: '1px',
                      borderBottom: '2px solid #E0E0E0'
                    }}
                  >
                    Category
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: 700,
                      color: '#000000',
                      textTransform: 'uppercase',
                      fontSize: '0.75rem',
                      letterSpacing: '1px',
                      borderBottom: '2px solid #E0E0E0'
                    }}
                  >
                    Quantity
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: 700,
                      color: '#000000',
                      textTransform: 'uppercase',
                      fontSize: '0.75rem',
                      letterSpacing: '1px',
                      borderBottom: '2px solid #E0E0E0'
                    }}
                  >
                    Status
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontWeight: 700,
                      color: '#000000',
                      textTransform: 'uppercase',
                      fontSize: '0.75rem',
                      letterSpacing: '1px',
                      borderBottom: '2px solid #E0E0E0'
                    }}
                  >
                    Price
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, index) => (
                    <TableRow
                      key={product.id}
                      sx={{
                        '&:hover': {
                          backgroundColor: '#FAFAFA',
                        },
                        backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#FCFCFC',
                        borderBottom: '1px solid #F0F0F0'
                      }}
                    >
                      <TableCell sx={{ color: '#6B6B6B', fontWeight: 500 }}>
                        {product.id}
                      </TableCell>
                      <TableCell sx={{ color: '#000000', fontWeight: 600 }}>
                        {product.name}
                      </TableCell>
                      <TableCell sx={{ color: '#6B6B6B' }}>
                        {product.category}
                      </TableCell>
                      <TableCell align="center" sx={{ color: '#000000', fontWeight: 500 }}>
                        {product.quantity}
                      </TableCell>
                      <TableCell align="center">
                        <Chip
                          label={product.status}
                          size="small"
                          sx={{
                            backgroundColor: getStatusColor(product.status).bg,
                            color: getStatusColor(product.status).text,
                            fontWeight: 600,
                            fontSize: '0.7rem',
                            letterSpacing: '0.5px',
                            textTransform: 'uppercase',
                            borderRadius: '2px',
                            height: '24px'
                          }}
                        />
                      </TableCell>
                      <TableCell align="right" sx={{ color: '#000000', fontWeight: 600 }}>
                        {product.price}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                      <Typography variant="body2" sx={{ color: '#6B6B6B' }}>
                        No products found
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          {/* footer */}
          <Box sx={{ p: 2, backgroundColor: '#FAFAFA', borderTop: '1px solid #E0E0E0' }}>
            <Typography
              variant="body2"
              sx={{
                color: '#6B6B6B',
                fontSize: '0.75rem',
                letterSpacing: '0.5px'
              }}
            >
              Showing {filteredProducts.length} of {inventoryData.length} products
            </Typography>
          </Box>
        </Paper>
      </Box>
    </DashboardContent>
  );
}

export default Scenario2;
