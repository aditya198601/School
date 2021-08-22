import React from 'react';
import Container from '@material-ui/core/Container';
import BasicButtons from '../Components/Button';
import Card2 from '../Components/Card2';
import Sl1 from '../Components/slider';


export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
            <p> This is a test case</p>
            <Sl1 />
            <BasicButtons />
            <Card2 />
            
            
        </Container>
    </React.Fragment>
  );
}