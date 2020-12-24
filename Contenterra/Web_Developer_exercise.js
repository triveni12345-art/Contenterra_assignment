import React, { Component } from 'react'
import axios from 'axios'
import { Card, Container, Row } from 'react-bootstrap'
class Web_Developer_exercise extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width:  1280,
            height: 720,
            data: []
        }
    }

    updateDimensions() {
        if(window.innerWidth < 500) {
          this.setState({ width: 1280, height: 720 });
        } else {
          let update_width  = window.innerWidth-100;
          let update_height = Math.round(update_width/4.4);
          this.setState({ width: update_width, height: update_height });
        }
      }
    componentDidMount() {
        this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
        axios.get(' https://www.reddit.com/r/reactjs.json').then(res => {
            console.log("res>>data>>data>>children   >", res.data.data.children);
            this.setState({ data: res.data.data.children })
        }).catch(error => console.log(error))

    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
      }
    render() {
        return (

            
            <div className="container">
                <div className="row">
            <div className="col-xs-20 col-md-20 col-lg-15">
            <div width={this.state.width} height={this.state.height} /> 
            <Container fluid={true}>
                <Row>
               
                {
                    this.state.data.map(d =>
                    //   { console.log("children data title", d.data.title) }
                    <div className="cardlayout"> <h1>{d.data.title}</h1>
                    <h6>  {d.data.selftext_html}</h6>
                        {d.data.url}
                     <h3>{d.data.score}</h3></div>
                    
                    )
                
                }
                
                </Row>
                </Container>
             </div>
            </div>
            </div>
            
        )
    }
}
export default Web_Developer_exercise