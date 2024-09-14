import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { useGetProductById } from '../hooks/useProducts';
import ItemCount from '../components/itemCount';

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const {productData} = useGetProductById("products", id)
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <Card key={productData.id} style={{ width: '18rem' }}>           
    <Card.Img variant="top" src={productData.thumbnail} />
    
    <Card.Body>
      <Card.Title>{productData.title}</Card.Title>
      <Card.Text>
        {productData.description}
      </Card.Text>
      <div>
        {productData.price}
        <ItemCount productId={productData.id} />
      </div>
    </Card.Body>
  </Card>
  </div>

  )
        }

