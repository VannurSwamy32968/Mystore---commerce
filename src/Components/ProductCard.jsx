import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function ProductCard({product}) {
  return (
    <Card style={{ width: '13rem' }}>
      <Link to={`/product/${product.id}`} style={{ color: "black", textDecoration: "none" }}>
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
    Category: {product.category}
        </Card.Text>
        <Card.Text>
    Price: ${product.price}
        </Card.Text>
       
      </Card.Body>
      </Link>
    </Card>
  );
}

export default ProductCard;