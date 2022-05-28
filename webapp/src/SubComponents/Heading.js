import React from 'react';
import {Container, Row, Navbar, Stack, Dropdown, Image, Modal, Button, Col} from 'react-bootstrap';
import Texture from '../Texture';
import { FaInfoCircle } from "react-icons/fa";

export default class Heading extends React.Component{
	constructor(props){
		super(props);
		this.state = {date : new Date().toLocaleDateString(), time : new Date().toLocaleTimeString(), height : 50, ContainerHeight : 80, show : false};
		this.data = {
			Strengths : ['20% Double Row Charging', '5 times 4 batch rolling possibility in your shift'],
			Weaknesses : ['Frequent width jump', '30:70 slab thickness jump'],
			Opportunities : ['Chances of same weight slabs charged & discharged weight will be 59% in your shift'],
			Threats : ['There will be a work roll change in your shift.', '10 nos of plate having weight less than theoritical weight.There is highly chance of short length.'] 
		};
		this.cols = [['Strengths', 'linear-gradient(#228B22, #32CD32)', '#228B22'], ['Weaknesses', 'linear-gradient(#8B0000, #FF0000)', '#B22222'], ['Opportunities', 'linear-gradient(#00008B, #0000FF)', '#0000CD'], ['Threats', 'linear-gradient(#A3A300, #FFC40C)', '#AD9300']];
	}
	componentDidMount(){
		this.timerid = setInterval(() => this.setState({date : new Date().toLocaleDateString(), time : new Date().toLocaleTimeString()}), 1000);
	}
	componentWillUnmount(){
		clearInterval(this.timerid);
	}
	render(){
		return(
			<Navbar style={{background : Texture.darkgrad}}>
			<Container fluid style={{height : this.state.ContainerHeight, padding : '0', display : 'block'}}>
				<Row>
					{/* Menu top = , left = , height = , width = */}
					<Modal size = 'lg' show={this.state.show} onHide={() => {this.setState({show : false})}}>
						<Modal.Header closeButton>
						<Modal.Title style={{textAlign : 'center'}}>
							<Row style={{margin : 'auto'}}>
								<div style={{color: 'white', backgroundColor : this.cols[0][2], borderRadius : 17, width : 34, height : 34, margin : 1}}>S</div>
								<div style={{color: 'white', backgroundColor : this.cols[1][2], borderRadius : 17, width : 34, height : 34, margin : 1}}>W</div>
								<div style={{color: 'white', backgroundColor : this.cols[2][2], borderRadius : 17, width : 34, height : 34, margin : 1}}>O</div>
								<div style={{color: 'white', backgroundColor : this.cols[3][2], borderRadius : 17, width : 34, height : 34, margin : 1}}>T</div>
							</Row>
						</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Row>
								{this.cols.map((e)=> {
									return(
										<Col key={e[0]}>
											<div style={{fontSize: 18, background : e[1], height : 50, color : 'white', textAlign : 'center'}}>{e[0]}({this.data[e[0]].length})</div>
											{this.data[e[0]].map((x, i) => {
												return (<div key={i}>
													<div style = {{background : 'white', color : e[2], marginTop : 8}}>
														{'\u2022 '}{x}
														</div>
														
												</div>);
											})}
										</Col>
									)
								})}
							</Row>
						</Modal.Body>
						<Modal.Footer>
						<Button variant="secondary" onClick={() => {this.setState({show : false})}}>
							Close
						</Button>
						</Modal.Footer>
					</Modal>

					{/* User top = , left = , height = , width = */}
					<div style={{position : 'absolute', left : '5%', top : '50%', transform : 'translateY(-50%)'}}>
						<Row>
							<Image src = '/icons/icon 2.png' style={{width : 'auto', height : this.state.height}} alt=''/>
							<div style={{margin : 'auto'}}>
								<Dropdown >
									<Dropdown.Toggle style={{background : 'transparent', border : 'transparent'}}>{''}
									</Dropdown.Toggle>
								</Dropdown>
							</div>
							<div style={{margin : 'auto', marginLeft : '1vw'}}>
								{this.props.children}
							</div>

						</Row>
					</div>

					<div style={{cursor : 'pointer',position : 'absolute', left : '30%', top: '50%', transform : 'translateY(-50%)'}} onClick = {() => {this.setState({show : true})}}>
						<FaInfoCircle size='12%' color='#1E90FF' style={{background : 'transparent'}}/>
					</div>
					{/* Heading top = , left = , height = , width = */}
					<h1 style={{textAlign : 'center',
								position : 'absolute',
								left : '50%', 
								top : '50%', 
								transform: 'translate(-50%, -50%)', 
								color : 'white'}}
					>SMART INSIGHTS</h1>

					{/* Refresh top = , left = , height = , width = */}
					<div style={{position : 'absolute', right : '30%', top: '50%', transform : 'translateY(-50%)'}}> 
					<Image style={{width : 'auto', height : this.state.height}} src = '/icons/icon 1.png' alt=''/>
					</div>

					{/* Time top = , left = , height = , width = */}
					<div style={{textAlign : 'center',
								position : 'absolute',
								right : '10%', 
								top : this.state.height, 
								transform: 'translate(-50%, -50%)', 
								color : 'white',
								transition: 'transform 0.2s ease-in-out',
							}}
					>
						<Stack>
							<h3 style={{textAlign : 'center', color : Texture.light1}}>{this.state.time}</h3>
							<h6 style={{textAlign : 'center'}}>{this.state.date}</h6>
						</Stack>
					</div>

					{/* Ripik.ai top = , left = , height = , width = */}
					<div style={{position : 'absolute', right : '1%', top: '50%', transform : 'translateY(-50%)'}}> 
					<Image style={{width : 'auto', height : this.state.height}} src = '/icons/logo.png' alt=''/>
					</div>

				</Row>
			</Container>
			</Navbar>
		);
	}
}