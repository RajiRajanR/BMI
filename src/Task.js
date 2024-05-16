import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Task.css'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
function Task() {
    const [data,setData]=useState()
    const [weight,setWeight]=useState('')
    const [height,setHeight]=useState('')
    // const [tall,setTall]=useState('')
    const height1=(e)=>{
        setHeight(e.target.value)
    }
    const weight1=(e)=>{
        setWeight(e.target.value)
    }
    // const tall1=(e)=>{
    //     setTall(e.target.value)
    // }
    const update=()=>{
        setData(weight/(height*height))
        console.log(data);
    }
    const clear=()=>{
        setData('')
    }
  return (
    <div>
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <div className='div1'>
                        Adult and Child BMI Calculator
                    </div>
                    <div><br></br>
                        <Row>
                            <Col>
                                <label>Calculate BMI for</label>
                            </Col>
                            <Col>
                            <select>
                                <option value='age'> Adult Age 20+</option>
                                <option value='age'>21</option>
                                <option value='age'>22</option>
                                <option value='age'>23</option>
                                <option value='age'>24</option>
                                <option value='age'>25</option>
                                <option value='age'>26</option>
                            </select><br></br>
                            </Col>
                            </Row><br></br>
                            <Row>
                            <Col>
                                <label>Weight</label>
                                <input type='text' onChange={weight1} name='weight'></input>
                                <label>height</label>
                                <input type='text' onChange={height1} name='height'></input><br></br><br></br>
                                <input type='text' onChange={height1} name='height'></input>
                            </Col><br></br><br></br><br></br>
                            <Col>
                                <select>
                                    <option>pounds</option>
                                </select><br></br><br></br><br></br>
                                <select>
                                    <option>feet</option>
                                </select><br></br><br></br>
                                <label>inches</label>
                            </Col>  
                        </Row><br></br>
                        <Row>
                            <Col>
                                <button onClick={clear}>Clear</button>
                            </Col>
                            <Col>

                                <button onClick={update}>Calculate</button>
                            </Col>
                        </Row>
                    </div><br></br>
                    <div>
                        Answer:<br></br>
                        <label className='bmi'>BMI=</label>
                        {data}
                    </div>
                    <div >
                        Adult BMI<br></br><br></br>
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>BMI</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>18.4</td>
                            <Link to='/under'><td><button>Underweight</button></td></Link>
                            </tr>
                            <tr>
                            <td>18.5-24.9</td>
                            <Link to='/normal'><td><button>Normal</button></td></Link>
                            </tr>
                            <tr>
                            <td>25.0-39.9</td>
                            <Link to='/over'><td><button>Over</button></td></Link>
                            </tr>
                            <tr>
                            <td>40.0</td>
                            <td>Obese</td>
                            </tr>
                        </tbody>
                        </Table>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </Container>
        
        
      
    </div>
  )
}

export default Task