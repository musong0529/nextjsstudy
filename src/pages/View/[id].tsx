import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';
import {Container, Spinner} from 'react-bootstrap';
import Axios from 'axios';
import Item from '@src/components/Item';
import { GetServerSideProps } from 'next'

const Post = ({item}) => {
  // const router = useRouter();
  // const {id} = router.query;
  // const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  // const [item, setItem] = useState({});
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  //
  // useEffect(() => {
  //   if (id && id > 0) {
  //     getData();
  //   }
  // }, [id]);
  //
  // const getData = () => {
  //   Axios.get(API_URL).then(res => {
  //     console.log(res.data);
  //     setItem(res.data);
  //     setIsLoading(false);
  //   })
  // }

  return (
    <Container>
      {/*{isLoading ? (*/}
      {/*  <>*/}
      {/*    <Spinner animation="grow" variant="primary"/>*/}
      {/*    <Spinner animation="grow" variant="danger"/>*/}
      {/*    <Spinner animation="grow" variant="warning"/>*/}
      {/*  </>*/}
      {/*) : (<Item item={item}/>)}*/}

      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description} />
          </Head>
          <Item item={item}/>
        </>
      )}
    </Container>
  )
}

export default Post;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data

  return {
    props: {
      item: data,
    }
  }
}
