import {Key, ReactChild, ReactFragment, ReactPortal} from 'react';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import {RatingView} from 'react-simple-star-rating';
import Link from 'next/link';

interface ItemListProps {
  description: string;
  id: Key | null | undefined;
  image_link: string | undefined;
  name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
  brand: string;
  price: number;
  product_type: string;
  rating: number;
};

const ItemList = (props: any) => {
  const {list} = props;
  return (
    <>
      <Container>
        <Row md={4} className="g-5">
          {
            list.map((item: ItemListProps) => (
              <Col key={item.id}>
                <Card style={{width: '18rem'}}>
                  <Card.Img variant="top" src={item.image_link}/>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.brand} / {item.product_type}
                    </Card.Text>
                    <Card.Text>
                      <RatingView ratingValue={item.rating}/>
                    </Card.Text>
                    <Card.Text>
                      ${item.price}
                    </Card.Text>
                    <Link href={`/View/${item.id}`}>
                      <Button variant="primary">Go Detail</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  );
};

export default ItemList;
