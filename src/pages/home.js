import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='container'>
      <div className='row'>
        <h3>Home</h3>

        <div className='col-md-6'>
          <h4><Link to='/login' style={{color:"antiquewhite"}}>Log In</Link></h4>
        </div>

        <div className='col-md-6'>
          <h4><Link to='/signup' style={{color:"antiquewhite"}}>Sign Up</Link></h4>
        </div>

      </div>
    </div>
  )
}

export default Home;


/*
        <Container>
      <Row>
        <Col md="8">
          <ExpenseForm />
        </Col>

        <Col md="4">
          <ExpenseList />
        </Col>
      </Row>
    </Container>
        */