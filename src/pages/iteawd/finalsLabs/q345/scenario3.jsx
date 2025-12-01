import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
  Chip,
  Divider,
  Paper,
  IconButton,
  Stack,
  Rating
} from '@mui/material';
import { DashboardContent } from 'src/layouts/dashboard';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Audio',
    price: '$149.99',
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life. Experience immersive audio quality with crystal-clear sound reproduction and deep bass response.',
    features: ['Bluetooth 5.0', 'Active Noise Cancellation', '30h Battery', 'Fast Charging'],
    color: 'Matte Black',
    warranty: '2 Years',
    inStock: true,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop&auto=format'
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    category: 'Wearables',
    price: '$399.99',
    description: 'Advanced fitness tracking smartwatch with heart rate monitoring and GPS capabilities. Track your workouts, monitor your health, and stay connected throughout your day.',
    features: ['GPS Tracking', 'Heart Rate Monitor', 'Water Resistant', 'Sleep Tracking'],
    color: 'Silver',
    warranty: '1 Year',
    inStock: true,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop&auto=format'
  },
  {
    id: 3,
    name: 'Portable SSD 1TB',
    category: 'Storage',
    price: '$129.99',
    description: 'Ultra-fast portable solid state drive with USB-C connectivity and rugged design. Perfect for professionals who need reliable, high-speed storage on the go.',
    features: ['1TB Storage', 'USB-C 3.2', 'Shock Resistant', '540 MB/s Speed'],
    color: 'Space Gray',
    warranty: '5 Years',
    inStock: true,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=600&fit=crop&auto=format'
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    category: 'Accessories',
    price: '$89.99',
    description: 'RGB mechanical gaming keyboard with customizable switches and per-key lighting. Built for gamers and professionals who demand precision and reliability.',
    features: ['RGB Lighting', 'Mechanical Switches', 'Programmable Keys', 'USB Passthrough'],
    color: 'Black',
    warranty: '2 Years',
    inStock: false,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=600&fit=crop&auto=format'
  },
  {
    id: 5,
    name: '4K Webcam',
    category: 'Video',
    price: '$199.99',
    description: 'Professional 4K webcam with auto-focus and built-in dual microphones. Perfect for content creators, streamers, and remote professionals.',
    features: ['4K Resolution', 'Auto Focus', 'Dual Microphones', 'Wide Angle Lens'],
    color: 'Black',
    warranty: '1 Year',
    inStock: true,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?w=800&h=600&fit=crop&auto=format'
  },
  {
    id: 6,
    name: 'Wireless Mouse',
    category: 'Accessories',
    price: '$49.99',
    description: 'Ergonomic wireless mouse with precision tracking and long battery life. Designed for comfort during extended work sessions with customizable buttons.',
    features: ['Ergonomic Design', '6 Buttons', '12-Month Battery', 'USB Receiver'],
    color: 'Gray',
    warranty: '1 Year',
    inStock: true,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&h=600&fit=crop&auto=format'
  }
];

function Scenario3() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProduct(null);
  };

  return (
    <DashboardContent maxWidth="xl">
      <Box
        sx={{
          background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 50%, #2196F3 100%)',
          minHeight: '80vh',
          py: 6,
          px: 3,
          borderRadius: 2
        }}
      >
        {/* Header */}
        <Box sx={{ mb: 5, textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: '#0D47A1',
              letterSpacing: '-1px',
              mb: 2,
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            PRODUCT GALLERY
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#1565C0',
              fontWeight: 400,
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            {/* Discover cutting-edge technology and innovative products */}
          </Typography>
        </Box>

        {/* Product Grid */}
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: 3,
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: '0 20px 48px rgba(0,0,0,0.2)'
                  }
                }}
              >
                {/* Stock Badge */}
                <Chip
                  label={product.inStock ? 'In Stock' : 'Out of Stock'}
                  icon={product.inStock ? <VerifiedIcon /> : null}
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    backgroundColor: product.inStock ? '#4CAF50' : '#F44336',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.7rem',
                    zIndex: 2,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                  }}
                />

                {/* Favorite Button */}
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    zIndex: 2,
                    '&:hover': {
                      backgroundColor: '#FFFFFF',
                      color: '#F44336'
                    }
                  }}
                >
                  <FavoriteBorderIcon fontSize="small" />
                </IconButton>

                {/* Product Image */}
                <CardMedia
                  component="img"
                  height="240"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    objectFit: 'cover',
                    backgroundColor: '#F5F5F5'
                  }}
                />

                <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Category Badge */}
                  <Chip
                    label={product.category}
                    size="small"
                    sx={{
                      alignSelf: 'flex-start',
                      backgroundColor: '#E3F2FD',
                      color: '#1976D2',
                      fontWeight: 600,
                      fontSize: '0.7rem',
                      mb: 1.5
                    }}
                  />

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: '#1A1A1A',
                      mb: 1,
                      fontSize: '1.15rem',
                      lineHeight: 1.3
                    }}
                  >
                    {product.name}
                  </Typography>

                  {/* Rating */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Rating value={product.rating} precision={0.5} size="small" readOnly />
                    <Typography variant="body2" sx={{ ml: 1, color: '#757575', fontSize: '0.85rem' }}>
                      {product.rating}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #1976D2 0%, #2196F3 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 2,
                      mt: 'auto'
                    }}
                  >
                    {product.price}
                  </Typography>

                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleProductClick(product)}
                    startIcon={<ShoppingCartIcon />}
                    sx={{
                      background: 'linear-gradient(135deg, #1976D2 0%, #2196F3 100%)',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      textTransform: 'none',
                      py: 1.5,
                      borderRadius: 2,
                      fontSize: '0.95rem',
                      boxShadow: '0 4px 12px rgba(33, 150, 243, 0.4)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)',
                        boxShadow: '0 6px 16px rgba(33, 150, 243, 0.5)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    View Details
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Product Details Modal */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            boxShadow: '0 32px 64px rgba(0,0,0,0.3)',
            overflow: 'hidden'
          }
        }}
      >
        {selectedProduct && (
          <>
            <Box
              sx={{
                position: 'relative',
                background: 'linear-gradient(135deg, #1976D2 0%, #2196F3 100%)',
                p: 4,
                color: '#FFFFFF'
              }}
            >
              <IconButton
                onClick={handleCloseModal}
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  color: '#FFFFFF',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.3)'
                  }
                }}
              >
                <CloseIcon />
              </IconButton>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  mb: 1,
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}
              >
                {selectedProduct.name}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Rating value={selectedProduct.rating} precision={0.5} readOnly sx={{ color: '#FFD700' }} />
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  {selectedProduct.rating} out of 5
                </Typography>
              </Box>
            </Box>

            <DialogContent sx={{ p: 0 }}>
              <Grid container>
                {/* Left Column - Image */}
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      height: '100%',
                      minHeight: 400,
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={selectedProduct.image}
                      alt={selectedProduct.name}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <Chip
                      label={selectedProduct.inStock ? 'In Stock' : 'Out of Stock'}
                      icon={selectedProduct.inStock ? <VerifiedIcon /> : null}
                      sx={{
                        position: 'absolute',
                        top: 24,
                        left: 24,
                        backgroundColor: selectedProduct.inStock ? '#4CAF50' : '#F44336',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        px: 2,
                        py: 2.5,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                      }}
                    />
                  </Box>
                </Grid>

                {/* Right Column - Details */}
                <Grid item xs={12} md={6}>
                  <Box sx={{ p: 4 }}>
                    {/* Price Section */}
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="h2"
                        sx={{
                          fontWeight: 900,
                          background: 'linear-gradient(135deg, #1976D2 0%, #2196F3 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          mb: 2
                        }}
                      >
                        {selectedProduct.price}
                      </Typography>
                      <Chip
                        label={selectedProduct.category}
                        sx={{
                          backgroundColor: '#E3F2FD',
                          color: '#1976D2',
                          fontWeight: 600
                        }}
                      />
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    {/* Description */}
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="overline"
                        sx={{
                          color: '#9E9E9E',
                          fontWeight: 700,
                          letterSpacing: '1.5px',
                          fontSize: '0.75rem'
                        }}
                      >
                        About this product
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#424242',
                          mt: 1.5,
                          lineHeight: 1.8,
                          fontSize: '1rem'
                        }}
                      >
                        {selectedProduct.description}
                      </Typography>
                    </Box>

                    {/* Key Features */}
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="overline"
                        sx={{
                          color: '#9E9E9E',
                          fontWeight: 700,
                          letterSpacing: '1.5px',
                          fontSize: '0.75rem'
                        }}
                      >
                        Key Features
                      </Typography>
                      <Stack spacing={1} sx={{ mt: 1.5 }}>
                        {selectedProduct.features.map((feature, index) => (
                          <Box
                            key={index}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1.5,
                              p: 1.5,
                              backgroundColor: '#F8F9FA',
                              borderRadius: 2,
                              border: '1px solid #E0E0E0'
                            }}
                          >
                            <VerifiedIcon sx={{ color: '#1976D2', fontSize: 20 }} />
                            <Typography variant="body2" sx={{ color: '#424242', fontWeight: 500 }}>
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    {/* Specifications Grid */}
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      <Grid item xs={6}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: 2.5,
                            backgroundColor: '#F8F9FA',
                            border: '2px solid #E0E0E0',
                            borderRadius: 2,
                            textAlign: 'center'
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              color: '#9E9E9E',
                              textTransform: 'uppercase',
                              fontWeight: 700,
                              letterSpacing: '1px',
                              display: 'block',
                              mb: 1
                            }}
                          >
                            Color
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{
                              color: '#1A1A1A',
                              fontWeight: 700
                            }}
                          >
                            {selectedProduct.color}
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: 2.5,
                            backgroundColor: '#F8F9FA',
                            border: '2px solid #E0E0E0',
                            borderRadius: 2,
                            textAlign: 'center'
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              color: '#9E9E9E',
                              textTransform: 'uppercase',
                              fontWeight: 700,
                              letterSpacing: '1px',
                              display: 'block',
                              mb: 1
                            }}
                          >
                            Warranty
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{
                              color: '#1A1A1A',
                              fontWeight: 700
                            }}
                          >
                            {selectedProduct.warranty}
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>

                    {/* Shipping Info */}
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        backgroundColor: '#E8F5E9',
                        border: '1px solid #4CAF50',
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2
                      }}
                    >
                      <LocalShippingIcon sx={{ color: '#4CAF50', fontSize: 28 }} />
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: '#2E7D32' }}>
                          Free Shipping
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#558B2F' }}>
                          Estimated delivery in 2-3 business days
                        </Typography>
                      </Box>
                    </Paper>
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>

            <DialogActions
              sx={{
                p: 3,
                backgroundColor: '#F8F9FA',
                borderTop: '1px solid #E0E0E0',
                gap: 2
              }}
            >
              <Button
                onClick={handleCloseModal}
                variant="outlined"
                size="large"
                sx={{
                  color: '#757575',
                  borderColor: '#E0E0E0',
                  textTransform: 'none',
                  fontWeight: 600,
                  px: 4,
                  borderRadius: 2,
                  '&:hover': {
                    borderColor: '#BDBDBD',
                    backgroundColor: '#F5F5F5'
                  }
                }}
              >
                Close
              </Button>
              <Button
                variant="contained"
                size="large"
                disabled={!selectedProduct.inStock}
                startIcon={<ShoppingCartIcon />}
                sx={{
                  background: selectedProduct.inStock
                    ? 'linear-gradient(135deg, #1976D2 0%, #2196F3 100%)'
                    : '#BDBDBD',
                  color: '#FFFFFF',
                  textTransform: 'none',
                  fontWeight: 700,
                  px: 4,
                  borderRadius: 2,
                  boxShadow: '0 4px 12px rgba(33, 150, 243, 0.4)',
                  '&:hover': {
                    background: selectedProduct.inStock
                      ? 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)'
                      : '#BDBDBD',
                    boxShadow: '0 6px 16px rgba(33, 150, 243, 0.5)'
                  },
                  '&.Mui-disabled': {
                    backgroundColor: '#BDBDBD',
                    color: '#FFFFFF'
                  }
                }}
              >
                {selectedProduct.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </DashboardContent>
  );
}

export default Scenario3;
