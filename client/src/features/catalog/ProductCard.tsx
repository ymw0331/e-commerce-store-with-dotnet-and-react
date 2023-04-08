import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import { Product } from '../../app/models/product';
import { Link } from 'react-router-dom';

interface Props {
    product: Product;
}

export const ProductCard = ({ product }: Props) => (
    <Card>
        <CardHeader
            avatar={<Avatar sx={{ bgcolor: 'secondary.main' }}>
                {product.name.charAt(0).toUpperCase()}
            </Avatar>}
            title={product.name}
            titleTypographyProps={{
                sx: { fontWeight: 'bold', color: 'secondary.main' }
            }}
        >
        </CardHeader>
        <CardMedia
            sx={{ height: 140, backgroundSize: "contain", bgcolor: 'primary.light' }}
            image={product.pictureUrl}
            title={product.name}
        >
        </CardMedia>

        <CardContent>
            <Typography color='secondary'
                gutterBottom variant="h5" component="div">
                ${(product.price / 100).toFixed(2)}
            </Typography>

            <Typography variant="body2" color="text.secondary">
                {product.brand} / {product.type}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Add to cart</Button>
            <Button
                component={Link}
                to={`/catalog/${product.id}`}
                size="small"
            >
                View
            </Button>
        </CardActions>
    </Card >
)
