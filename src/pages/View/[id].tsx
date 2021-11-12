import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {Container} from 'react-bootstrap';
import Axios from 'axios';
import Item from '@src/components/Item';

const Post = () => {
  const router = useRouter();
  const {id} = router.query;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const [item, setItem] = useState({});

  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);

  const getData = () => {
    Axios.get(API_URL).then(res => {
      console.log(res.data);
      setItem(res.data)
    })
  }

  return (
    <Container>
      <Item item={item} />
      {/*<div>Post Id : {id}</div>*/}
    </Container>
  )
}

export default Post;
