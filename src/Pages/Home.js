import React from 'react';
import Container from '@material-ui/core/Container';
import BasicButtons from '../Components/Button';
import Card2 from '../Components/Card2';
import Sl1 from '../Components/slider';
import BoxComponent from '../Components/Box1';
import QuiltedImageList from '../Components/Imagelist1';
import BasicButtonGroup from '../Components/Buttongroup1';
import ColorCheckboxes from '../Components/Checkbox1';
import RadioButtonsGroup from '../Components/Radio1';
import BasicSelect from '../Components/Select1';
import BasicSwitches from '../Components/Switch1';

export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
            <p> This is a test case</p>
            <Sl1 />
            <BasicButtons />
            <Card2 />
            <BoxComponent />
            <BasicButtonGroup />
            <ColorCheckboxes />
            <RadioButtonsGroup />
            <BasicSelect />
            <BasicSwitches />
            
        </Container>
    </React.Fragment>
  );
}