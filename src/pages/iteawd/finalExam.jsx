import React, { useState, useMemo } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Chip,
    TextField,
    InputAdornment,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Rating,
    Badge,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Divider,
    Paper,
    ToggleButtonGroup,
    ToggleButton,
    Tooltip,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Snackbar,
    Alert,
    AppBar,
    Toolbar,
    Fab,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';

import bagChanel from './assets/bags/bagChanel.jpg';
import bagDior from './assets/bags/bagDior.jpg';
import bagHermes from './assets/bags/bagHermes.jpg';
import bagLv from './assets/bags/bagLv.jpg';
import bagYsl from './assets/bags/bagYsl.jpg';
import perfumeAesop from './assets/perfumes/perfumeAesop.jpg';
import perfumeDyp from './assets/perfumes/perfumeDyp.jpg';
import perfumeJmEngPear from './assets/perfumes/perfumeJmEngPear.jpg';
import perfumeTambCham from './assets/perfumes/perfumeTambCham.jpg';
import perfumeYsl from './assets/perfumes/perfumeYsl.jpg';
import walletDior from './assets/wallets/walletDior.jpg';
import walletGoyard from './assets/wallets/walletGoyard.jpg';
import walletKateSpade from './assets/wallets/walletKateSpade.jpg';
import walletLv from './assets/wallets/walletLv.jpg';
import walletYsl from './assets/wallets/walletYsl.jpg';
import watchCartier from './assets/watches/watchCartier.jpg';
import watchCartier2 from './assets/watches/watchCartier2.jpg';
import watchCasio from './assets/watches/watchCasio.jpg';
import watchRolex from './assets/watches/watchRolex.jpg';
import watchTissot from './assets/watches/watchTissot.jpg';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    background: '#ffffffff',
    boxShadow: 'none',
    borderBottom: '1px solid #e0e0e0',
}));

const BrandLogo = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    fontSize: '1.5rem',
    letterSpacing: '3px',
    color: '#8B7355',
    fontFamily: '"Playfair Display", "Georgia", "Times New Roman", serif',
}));

const HeroSection = styled(Box)(({ theme }) => ({
    background: '#f5f5f5',
    color: '#2c2c2c',
    padding: theme.spacing(8, 0, 6),
    marginBottom: theme.spacing(6),
    borderBottom: '1px solid #d9d9d9',
}));

const ProductCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease-in-out',
    borderRadius: theme.spacing(1),
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    border: '1px solid #e0e0e0',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
        borderColor: '#8B7355',
    },
}));

const ProductImage = styled(CardMedia)(({ theme }) => ({
    paddingTop: '100%',
    position: 'relative',
    overflow: 'hidden',
    '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%)',
    },
}));

const PriceTag = styled(Typography)(({ theme }) => ({
    fontSize: '1.75rem',
    fontWeight: 600,
    color: '#8B7355',
    fontFamily: '"Playfair Display", "Georgia", "Times New Roman", serif',
}));

const FilterSection = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    borderRadius: 0,
    border: '1px solid #e0e0e0',
    backgroundColor: '#fafafa',
    boxShadow: 'none',
}));

const CartDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        width: 400,
        padding: theme.spacing(2),
        backgroundColor: '#ffffff',
        borderLeft: '1px solid #e0e0e0',
    },
}));

const FloatingCartButton = styled(Fab)(({ theme }) => ({
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
    background: '#8B7355',
    color: 'white',
    '&:hover': {
        background: '#6d5a44',
    },
}));

const FeatureChip = styled(Chip)(({ theme }) => ({
    margin: theme.spacing(0.5),
    fontWeight: 400,
    borderRadius: 0,
    '&.free-shipping': {
        background: '#2c2c2c',
        color: 'white',
    },
    '&.verified': {
        background: '#8B7355',
        color: 'white',
    },
}));

const productData = [
    {
        id: 1,
        name: 'CHANEL',
        category: 'Bags',
        price: 5999.99,
        originalPrice: 6999.99,
        rating: 4.9,
        reviews: 234,
        image: bagChanel,
        description: 'Timeless Chanel classic flap bag in quilted leather',
        inStock: true,
        discount: 14,
        features: ['Free Shipping', 'Verified'],
    },
    {
        id: 2,
        name: 'DIOR',
        category: 'Bags',
        price: 4299.99,
        originalPrice: 4999.99,
        rating: 4.8,
        reviews: 189,
        image: bagDior,
        description: 'Iconic Dior saddle bag with signature logo',
        inStock: true,
        discount: 14,
        features: ['Free Shipping', 'Verified'],
    },
    {
        id: 3,
        name: 'Hermès Birkin',
        category: 'Bags',
        price: 12999.99,
        originalPrice: 14999.99,
        rating: 5.0,
        reviews: 312,
        image: bagHermes,
        description: 'Luxury Hermès Birkin handcrafted leather bag',
        inStock: true,
        discount: 13,
        features: ['Free Shipping', 'Verified'],
    },
    {
        id: 4,
        name: 'Louis Vuitton',
        category: 'Bags',
        price: 1899.99,
        originalPrice: 2199.99,
        rating: 4.7,
        reviews: 156,
        image: bagLv,
        description: 'Classic LV monogram canvas speedy bag',
        inStock: true,
        discount: 14,
        features: ['Verified'],
    },
    {
        id: 5,
        name: 'Yves Saint Laurent',
        category: 'Bags',
        price: 2499.99,
        originalPrice: 2899.99,
        rating: 4.8,
        reviews: 423,
        image: bagYsl,
        description: 'Elegant YSL Kate bag with chain strap',
        inStock: true,
        discount: 14,
        features: ['Free Shipping', 'Verified'],
    },
    {
        id: 6,
        name: 'Aesop Tacit',
        category: 'Perfumes',
        price: 189.99,
        originalPrice: 229.99,
        rating: 4.7,
        reviews: 267,
        image: perfumeAesop,
        description: 'Aromatic woody fragrance with spices',
        inStock: true,
        discount: 17,
        features: ['Free Shipping', 'Verified'],
    },
    {
        id: 7,
        name: 'Diptyque Do Son',
        category: 'Perfumes',
        price: 165.99,
        originalPrice: 195.99,
        rating: 4.9,
        reviews: 198,
        image: perfumeDyp,
        description: 'Delicate tuberose floral perfume',
        inStock: true,
        discount: 15,
        features: ['Free Shipping'],
    },
    {
        id: 8,
        name: 'Jo Malone English Pear and Freesia',
        category: 'Perfumes',
        price: 145.99,
        originalPrice: 175.99,
        rating: 4.8,
        reviews: 345,
        image: perfumeJmEngPear,
        description: 'Fresh fruity cologne with pear notes',
        inStock: true,
        discount: 17,
        features: ['Free Shipping', 'Verified'],
    },
    {
        id: 9,
        name: 'Tamburins Chamo',
        category: 'Perfumes',
        price: 295.99,
        originalPrice: 349.99,
        rating: 4.9,
        reviews: 287,
        image: perfumeTambCham,
        description: 'Luxurious white floral fragrance',
        inStock: true,
        discount: 15,
        features: ['Free Shipping', 'Verified'],
    },
    {
        id: 10,
        name: 'YSL Libre',
        category: 'Perfumes',
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.8,
        reviews: 412,
        image: perfumeYsl,
        description: 'Addictive coffee and vanilla perfume',
        inStock: true,
        discount: 19,
        features: ['Free Shipping', 'Verified'],
    },
    {
        id: 11,
        name: 'Dior Oblique Wallet',
        category: 'Wallets',
        price: 599.99,
        originalPrice: 699.99,
        rating: 4.7,
        reviews: 176,
        image: walletDior,
        description: 'Dior signature pattern canvas wallet',
        inStock: true,
        discount: 14,
        features: ['Free Shipping', 'Verified'],
    },
    {
        id: 12,
        name: 'Goyard St. Sulpice',
        category: 'Wallets',
        price: 1299.99,
        originalPrice: 1499.99,
        rating: 4.9,
        reviews: 223,
        image: walletGoyard,
        description: 'Iconic Goyard chevron pattern wallet',
        inStock: true,
        discount: 13,
        features: ['Verified'],
    },
    {
        id: 13,
        name: 'Kate Spade Cameron',
        category: 'Wallets',
        price: 189.99,
        originalPrice: 229.99,
        rating: 4.6,
        reviews: 223,
        image: walletKateSpade,
        description: 'Chic Kate Spade leather wallet',
        inStock: true,
        discount: 17,
        features: ['Verified'],
    },
    {
        id: 14,
        name: 'Louis Vuitton Zippy',
        category: 'Wallets',
        price: 899.99,
        originalPrice: 1049.99,
        rating: 4.8,
        reviews: 223,
        image: walletLv,
        description: 'LV monogram zip-around wallet',
        inStock: true,
        discount: 14,
        features: ['Verified'],
    },
    {
        id: 15,
        name: 'YSL Monogram Wallet',
        category: 'Wallets',
        price: 525.99,
        originalPrice: 625.99,
        rating: 4.7,
        reviews: 223,
        image: walletYsl,
        description: 'Elegant YSL quilted leather wallet',
        inStock: true,
        discount: 16,
        features: ['Verified'],
    },
    {
        id: 16,
        name: 'Cartier Santos',
        category: 'Watches',
        price: 7999.99,
        originalPrice: 8999.99,
        rating: 4.9,
        reviews: 223,
        image: watchCartier,
        description: 'Luxury Cartier Santos automatic watch',
        inStock: true,
        discount: 11,
        features: ['Verified'],
    },
    {
        id: 17,
        name: 'Cartier Tank',
        category: 'Watches',
        price: 6499.99,
        originalPrice: 7499.99,
        rating: 4.9,
        reviews: 223,
        image: watchCartier2,
        description: 'Classic Cartier Tank rectangular watch',
        inStock: true,
        discount: 13,
        features: ['Verified'],
    },
    {
        id: 18,
        name: 'Casio G-Shock',
        category: 'Watches',
        price: 149.99,
        originalPrice: 189.99,
        rating: 4.6,
        reviews: 223,
        image: watchCasio,
        description: 'Durable digital sports watch',
        inStock: true,
        discount: 21,
        features: ['Verified'],
    },
    {
        id: 19,
        name: 'Rolex Submariner',
        category: 'Watches',
        price: 14999.99,
        originalPrice: 16999.99,
        rating: 5.0,
        reviews: 223,
        image: watchRolex,
        description: 'Iconic Rolex diving watch',
        inStock: true,
        discount: 12,
        features: ['Verified'],
    },
    {
        id: 20,
        name: 'Tissot PRX',
        category: 'Watches',
        price: 425.99,
        originalPrice: 499.99,
        rating: 4.7,
        reviews: 223,
        image: watchTissot,
        description: 'Swiss-made automatic watch',
        inStock: true,
        discount: 15,
        features: ['Verified'],
    },

];

export default function FinalExam() {
    const [cart, setCart] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('featured');
    const [viewMode, setViewMode] = useState('grid');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

    // Get unique categories
    const categories = ['All', ...new Set(productData.map((p) => p.category))];

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        const filtered = productData.filter((product) => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        // Sort products
        switch (sortBy) {
            case 'price-low':
                return [...filtered].sort((a, b) => a.price - b.price);
            case 'price-high':
                return [...filtered].sort((a, b) => b.price - a.price);
            case 'rating':
                return [...filtered].sort((a, b) => b.rating - a.rating);
            case 'discount':
                return [...filtered].sort((a, b) => b.discount - a.discount);
            default:
                // Featured - keep original order
                return filtered;
        }
    }, [searchQuery, selectedCategory, sortBy]);

    // Cart functions
    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);
        if (existingItem) {
            setCart(cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
        setSnackbar({ open: true, message: 'Added to cart!', severity: 'success' });
    };

    const updateQuantity = (id, delta) => {
        setCart(cart.map((item) => {
            if (item.id === id) {
                const newQuantity = item.quantity + delta;
                return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
            }
            return item;
        }).filter((item) => item.quantity > 0));
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
        setSnackbar({ open: true, message: 'Removed from cart', severity: 'info' });
    };

    const toggleFavorite = (productId) => {
        if (favorites.includes(productId)) {
            setFavorites(favorites.filter((id) => id !== productId));
            setSnackbar({ open: true, message: 'Removed from favorites', severity: 'info' });
        } else {
            setFavorites([...favorites, productId]);
            setSnackbar({ open: true, message: 'Added to favorites!', severity: 'success' });
        }
    };

    const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
            {/* App Bar */}
            <StyledAppBar position="sticky" elevation={0}>
                <Toolbar sx={{ justifyContent: 'center' }}>
                    <BrandLogo variant="h1">
                        SOLSTICE
                    </BrandLogo>
                </Toolbar>
            </StyledAppBar>

            {/* Hero Section */}
            <HeroSection>
                <Container maxWidth="lg">
                    <Typography
                        variant="h2"
                        align="center"
                        gutterBottom
                        sx={{
                            fontWeight: 400,
                            mb: 2,
                            fontFamily: '"Playfair Display", "Georgia", "Times New Roman", serif',
                            letterSpacing: '2px'
                        }}
                    >
                        Be Sophisticated. Be Solstice.
                    </Typography>
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{
                            opacity: 0.7,
                            mb: 4,
                            fontWeight: 300,
                            letterSpacing: '1px'
                        }}
                    >
                        Indulge in Solstice&apos; personalized sol-curated Luxury.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                        <FeatureChip
                            icon={<LocalShippingIcon />}
                            label="Free Shipping"
                            className="free-shipping"
                            size="medium"
                        />
                        <FeatureChip
                            icon={<VerifiedIcon />}
                            label="Verified Quality"
                            className="verified"
                            size="medium"
                        />
                        <FeatureChip
                            icon={<StarIcon />}
                            label="Top Rated"
                            sx={{
                                bgcolor: '#8B7355',
                                color: 'white',
                                fontWeight: 400,
                                borderRadius: 0
                            }}
                            size="medium"
                        />
                    </Box>
                </Container>
            </HeroSection>

            {/* Main Content */}
            <Container maxWidth="lg" sx={{ pb: 8 }}>
                {/* Filters */}
                <FilterSection elevation={0}>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <FormControl fullWidth>
                                <InputLabel>Category</InputLabel>
                                <Select
                                    value={selectedCategory}
                                    label="Category"
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    {categories.map((category) => (
                                        <MenuItem key={category} value={category}>
                                            {category}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <FormControl fullWidth>
                                <InputLabel>Sort By</InputLabel>
                                <Select
                                    value={sortBy}
                                    label="Sort By"
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <MenuItem value="featured">Featured</MenuItem>
                                    <MenuItem value="price-low">Price: Low to High</MenuItem>
                                    <MenuItem value="price-high">Price: High to Low</MenuItem>
                                    <MenuItem value="rating">Top Rated</MenuItem>
                                    <MenuItem value="discount">Best Deals</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <ToggleButtonGroup
                                value={viewMode}
                                exclusive
                                onChange={(e, newMode) => newMode && setViewMode(newMode)}
                                fullWidth
                            >
                                <ToggleButton value="grid">
                                    <GridViewIcon />
                                </ToggleButton>
                                <ToggleButton value="list">
                                    <ViewListIcon />
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                    </Grid>
                </FilterSection>

                {/* Products Count */}
                <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" color="text.secondary">
                        {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'} Found
                    </Typography>
                </Box>

                {/* Product Grid */}
                <Grid container spacing={3}>
                    {filteredProducts.map((product) => (
                        <Grid item xs={12} sm={6} md={viewMode === 'grid' ? 4 : 12} key={product.id}>
                            <ProductCard>
                                <Box sx={{ position: 'relative' }}>
                                    <ProductImage
                                        image={product.image}
                                        title={product.name}
                                        onClick={() => setSelectedProduct(product)}
                                        sx={{ cursor: 'pointer' }}
                                    />
                                    {product.discount > 0 && (
                                        <Chip
                                            label={`-${product.discount}%`}
                                            color="error"
                                            size="small"
                                            sx={{
                                                position: 'absolute',
                                                top: 10,
                                                left: 10,
                                                fontWeight: 700,
                                            }}
                                        />
                                    )}
                                    <IconButton
                                        sx={{
                                            position: 'absolute',
                                            top: 10,
                                            right: 10,
                                            bgcolor: 'white',
                                            '&:hover': { bgcolor: 'white' },
                                        }}
                                        onClick={() => toggleFavorite(product.id)}
                                    >
                                        {favorites.includes(product.id) ? (
                                            <FavoriteIcon color="error" />
                                        ) : (
                                            <FavoriteBorderIcon />
                                        )}
                                    </IconButton>
                                </Box>

                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="h2"
                                        sx={{
                                            fontWeight: 600,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        {product.name}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            mb: 2,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                        }}
                                    >
                                        {product.description}
                                    </Typography>

                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <Rating value={product.rating} precision={0.1} readOnly size="small" />
                                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                                            ({product.reviews})
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                                        {product.features.includes('Free Shipping') && (
                                            <Chip
                                                icon={<LocalShippingIcon />}
                                                label="Free Shipping"
                                                size="small"
                                                sx={{
                                                    borderColor: '#2c2c2c',
                                                    color: '#2c2c2c',
                                                    borderRadius: 0
                                                }}
                                                variant="outlined"
                                            />
                                        )}
                                        {product.features.includes('Verified') && (
                                            <Chip
                                                icon={<VerifiedIcon />}
                                                label="Verified"
                                                size="small"
                                                sx={{
                                                    borderColor: '#8B7355',
                                                    color: '#8B7355',
                                                    borderRadius: 0
                                                }}
                                                variant="outlined"
                                            />
                                        )}
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <PriceTag variant="h5">${product.price}</PriceTag>
                                        {product.originalPrice && (
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{ textDecoration: 'line-through' }}
                                            >
                                                ${product.originalPrice}
                                            </Typography>
                                        )}
                                    </Box>
                                </CardContent>

                                <CardActions sx={{ p: 2, pt: 0 }}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        startIcon={<AddShoppingCartIcon />}
                                        onClick={() => addToCart(product)}
                                        sx={{
                                            background: '#8B7355',
                                            color: 'white',
                                            fontWeight: 400,
                                            py: 1.2,
                                            borderRadius: 0,
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            '&:hover': {
                                                background: '#6d5a44',
                                            },
                                        }}
                                    >
                                        Add to Cart
                                    </Button>
                                </CardActions>
                            </ProductCard>
                        </Grid>
                    ))}
                </Grid>

                {/* No Results */}
                {filteredProducts.length === 0 && (
                    <Box sx={{ textAlign: 'center', py: 8 }}>
                        <Typography variant="h5" color="text.secondary" gutterBottom>
                            No products found
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Try adjusting your search or filters
                        </Typography>
                    </Box>
                )}
            </Container>

            {/* Floating Cart Button */}
            <Badge badgeContent={cartItemCount} color="error">
                <FloatingCartButton onClick={() => setCartOpen(true)}>
                    <ShoppingCartIcon />
                </FloatingCartButton>
            </Badge>

            {/* Cart Drawer */}
            <CartDrawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h5" fontWeight={700}>
                        Shopping Cart
                    </Typography>
                    <IconButton onClick={() => setCartOpen(false)}>
                        <DeleteIcon />
                    </IconButton>
                </Box>

                <Divider sx={{ mb: 2 }} />

                {cart.length === 0 ? (
                    <Box sx={{ textAlign: 'center', py: 4 }}>
                        <ShoppingCartIcon sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
                        <Typography variant="h6" color="text.secondary">
                            Your cart is empty
                        </Typography>
                    </Box>
                ) : (
                    <>
                        <List sx={{ flexGrow: 1, overflow: 'auto' }}>
                            {cart.map((item) => (
                                <React.Fragment key={item.id}>
                                    <ListItem
                                        sx={{
                                            flexDirection: 'column',
                                            alignItems: 'stretch',
                                            py: 2,
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', width: '100%', mb: 1 }}>
                                            <ListItemAvatar>
                                                <Avatar
                                                    src={item.image}
                                                    variant="rounded"
                                                    sx={{ width: 60, height: 60, mr: 2 }}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={item.name}
                                                secondary={`$${item.price}`}
                                                primaryTypographyProps={{ fontWeight: 600 }}
                                            />
                                            <IconButton
                                                size="small"
                                                onClick={() => removeFromCart(item.id)}
                                                sx={{ alignSelf: 'flex-start' }}
                                            >
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <IconButton
                                                    size="small"
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    disabled={item.quantity <= 1}
                                                >
                                                    <RemoveIcon fontSize="small" />
                                                </IconButton>
                                                <Typography sx={{ minWidth: 30, textAlign: 'center', fontWeight: 600 }}>
                                                    {item.quantity}
                                                </Typography>
                                                <IconButton size="small" onClick={() => updateQuantity(item.id, 1)}>
                                                    <AddIcon fontSize="small" />
                                                </IconButton>
                                            </Box>
                                            <Typography variant="body1" fontWeight={700}>
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                    <Divider />
                                </React.Fragment>
                            ))}
                        </List>

                        <Box sx={{ mt: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                <Typography variant="h6">Subtotal:</Typography>
                                <Typography variant="h6" fontWeight={700}>
                                    ${cartTotal.toFixed(2)}
                                </Typography>
                            </Box>
                            <Button
                                fullWidth
                                variant="contained"
                                size="large"
                                sx={{
                                    background: '#2c2c2c',
                                    color: 'white',
                                    fontWeight: 400,
                                    py: 1.5,
                                    borderRadius: 0,
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    mb: 1,
                                    '&:hover': {
                                        background: '#1a1a1a',
                                    },
                                }}
                            >
                                Proceed to Checkout
                            </Button>
                            <Button
                                fullWidth
                                variant="outlined"
                                onClick={() => setCartOpen(false)}
                            >
                                Continue Shopping
                            </Button>
                        </Box>
                    </>
                )}
            </CartDrawer>

            {/* Product Detail Dialog */}
            <Dialog
                open={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                maxWidth="md"
                fullWidth
            >
                {selectedProduct && (
                    <>
                        <DialogTitle sx={{ fontWeight: 700, fontSize: '1.5rem' }}>
                            {selectedProduct.name}
                        </DialogTitle>
                        <DialogContent>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <Box
                                        component="img"
                                        src={selectedProduct.image}
                                        alt={selectedProduct.name}
                                        sx={{
                                            width: '100%',
                                            borderRadius: 2,
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Rating value={selectedProduct.rating} precision={0.1} readOnly />
                                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                                            ({selectedProduct.reviews} reviews)
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1" paragraph>
                                        {selectedProduct.description}
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                        <PriceTag variant="h4">${selectedProduct.price}</PriceTag>
                                        {selectedProduct.originalPrice && (
                                            <Typography
                                                variant="h6"
                                                color="text.secondary"
                                                sx={{ textDecoration: 'line-through' }}
                                            >
                                                ${selectedProduct.originalPrice}
                                            </Typography>
                                        )}
                                    </Box>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                                        {selectedProduct.features.map((feature) => (
                                            <Chip
                                                key={feature}
                                                label={feature}
                                                color={feature === 'Free Shipping' ? 'primary' : 'success'}
                                                icon={
                                                    feature === 'Free Shipping' ? <LocalShippingIcon /> : <VerifiedIcon />
                                                }
                                            />
                                        ))}
                                    </Box>
                                    <Chip
                                        label={selectedProduct.category}
                                        variant="outlined"
                                        sx={{ mb: 2 }}
                                    />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions sx={{ p: 3, pt: 0 }}>
                            <Button onClick={() => setSelectedProduct(null)}>Close</Button>
                            <Button
                                variant="contained"
                                startIcon={<AddShoppingCartIcon />}
                                onClick={() => {
                                    addToCart(selectedProduct);
                                    setSelectedProduct(null);
                                }}
                                sx={{
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                                    },
                                }}
                            >
                                Add to Cart
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>

            {/* Snackbar */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
                <Alert
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                    severity={snackbar.severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
}
