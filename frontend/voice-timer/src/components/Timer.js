import React, { useState } from 'react';
import {Form, Container } from 'react-bootstrap';
import '../css/timer.css'
import Button from 'react-bootstrap/Button';

const Timer = () => {
  const [timerSet, setTimerSet] = useState(false);
  
  const maxHour = 24;
  const maxMinute = 59;
  const maxSeconds = 59;

  const getOptions = (length) => {
    let options = []
    for(var i = 0; i <= length; i++) {
      var obj = {};
      obj['value'] = i;
      obj['label'] = i;
      options.push(obj);
    }
    return options
  }
  
  return (
    <Container>
      {
        !timerSet?
          <Form className='d-flex flex-column' id='timer-form' method='post' action='http://127.0.0.1:3000/timer/start'>
            <div className='d-flex justify-content-center '>
              <Form.Select name="hour" size="lg" className='m-1'>
                {getOptions(maxHour).map(({ value, label }, index) => <option key={index} value={value} >{label}</option>)}
              </Form.Select>

              <Form.Select name="minute" size="lg" className='m-1'>
                {getOptions(maxMinute).map(({ value, label }, index) => <option key={index}  value={value} >{label}</option>)}
              </Form.Select>

              <Form.Select name="second" size="lg" className='m-1'>
                {getOptions(maxSeconds).map(({ value, label }, index) => <option key={index}  value={value} >{label}</option>)}
              </Form.Select>
            </div>
            <div className='d-flex justify-content-center'>
              <Button variant="primary m-3"  size="lg" type="start" >
              Start
              </Button>
              <Button variant="primary m-3"  size="lg" type="reset">
              Reset
              </Button>
            </div>
          
          </Form>
        : 
        <></>
        }
    </Container> 
  );
};

export default Timer;