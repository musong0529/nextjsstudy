import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@src/styles/Home.module.css';
import {Button, Container, Spinner} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import Axios from 'axios';
import ItemList from '@src/components/ItemList';
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/router";

const Home: NextPage = () => {
  const {data: session} = useSession();
  const router = useRouter();
  const [list, setList] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  console.log("session", session?.user?.name);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Axios.get(API_URL).then(res => {
      console.log(res.data);
      setList(res.data);
      setIsLoading(false);
    });
  };


  return (
    <Container>
      <Head>
        <title>Pawn demon</title>
        <meta name="description" content="설명글 입력해주세요~!@!@!@"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        {isLoading && (
          <>
            <Spinner animation="grow" variant="primary"/>
            <Spinner animation="grow" variant="danger"/>
            <Spinner animation="grow" variant="warning"/>
          </>
        )}
        {!isLoading && (
          <ItemList list={list}/>
        )}
      </main>

    </Container>
  );
};

export default Home;
