import React from 'react';
import {Button, Container, Row, ButtonGroup, Stack, OverlayTrigger, Tooltip, Modal, Dropdown, DropdownButton} from 'react-bootstrap';
import {Scrollbar} from 'react-scrollbars-custom'
import Texture from '../Texture';
import Image from '../img/button_4.png';
import Image_ from '../img/button_2.png';
// import {PieChart} from 'react-minimal-pie-chart';
import {CSVLink} from 'react-csv';
import { exportComponentAsJPEG, exportComponentAsPNG } from 'react-component-export-image';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, PieChart, Pie } from 'recharts';
import './sugg.css';
import {FaExclamationTriangle} from 'react-icons/fa'

// function toggleDataSeries(e) {
// 	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
// 		e.dataSeries.visible = false;
// 	}
// 	else {
// 		e.dataSeries.visible = true;
// 	}
// 	e.chart.render();
// }

class Piegraph extends React.Component{
	constructor(props){
		super(props);
		// title
	}
	render() {
		return (
			<div style={{color : 'white', width : 300, height : 300, margin : 'auto'}}>
				<ResponsiveContainer width="100%" height="100%">
					<PieChart width={300} height={300}>
					<Pie 
						dataKey={this.props.var}
						data={this.props.data} 
						cx="50%"
            			cy="50%"
						innerRadius={40} 
						outerRadius={80} 
						label
						nameKey={this.props.id}
						/>
					<Tooltip />
					<Legend/>
					</PieChart>
				</ResponsiveContainer>
		  </div>
		);
	  }
}

class Graph extends React.Component{
	constructor(props){
		super(props);
		// title
	}
	render(){
		return(
			<div style={{color : 'white', width : 500, height : 300}}>
				<ResponsiveContainer style={{cursor: 'pointer'}} width="100%" height="100%">
					<BarChart
					width={500}
					height={300}
					data={this.props.data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
					cursor = 'pointer'
					>
					<CartesianGrid strokeDasharray="0 1" />
					<XAxis dataKey={this.props.x} />
					<YAxis />
					<Tooltip />
					<Legend />
					{Object.keys(this.props.list).map((e) => {
						return(
							<Bar dataKey={e} fill={this.props.list[e]}/>
						);
					})}
					{/* <Bar dataKey="pv" fill="#8884d8" />
					<Bar dataKey="uv" fill="#82ca9d" /> */}
					</BarChart>
				</ResponsiveContainer>
			</div>
		);
	}
}

class Block extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={{
                        color : 'white' ,
                        width : '10vw', 
                        height : this.props.height, 
                        margin : this.props.margin,
                        marginLeft : '0.3vw',
                    }}
            >
                <fieldset style={{border : 'solid'}}>
					<OverlayTrigger placement='auto' delay={{ show: 50, hide: 50 }} overlay={<Tooltip>{this.props.desc}</Tooltip>}>
                    	<legend style={{margin : '5%', padding : '2%', textAlign : 'left' ,fontSize : 13, background : Texture.dark1, width : 'auto', borderRadius : 8}}>{this.props.head}</legend>
                    </OverlayTrigger>
                <h6 style={{position : 'relative', 
                            top : '50%', 
                            transform : 'translateY(-30%)',
                            textAlign : 'center'}}
                >{this.props.body}</h6>
                </fieldset>
            </div>
        );
    }
}


class Space extends React.Component{
	constructor(props){
		super(props);
		console.log(this.props.list);
		this.state={expand : 0, download : false, downloadElem : ''};
		// values : 1
		// thick : 2
		// width : 3
		// length : 4
		// graph : 5,6,7
		this.data = {plt_thick : [{One : 10, Two : 15, Three : 20}],
					 plt_width : [{One : 20, Two: 5, Three : 2}],
					 plt_length : [{One : 10, Two: 10, Three : 10}]};
		this.type = {};
		this.colors = ['#E38627', '#C13C37', '#6A2135'];
		this.piedata = {};
		this.reff = {};
		this.list = []
		for(var j in this.data){
			this.list.push(j);
			var n = 0;
			this.piedata[j] = [];
			for(var i in this.data[j][0]){
				this.piedata[j].push({title : i, value : this.data[j][0][i], fill : this.colors[n%this.colors.length]});
				n++;
			}
			this.reff[j] = React.createRef();
			this.type[j] = 'PieChart';
		}
		console.log(this.piedata);
		this.downloadRef = React.createRef();

		this.graphData = {
			'graph1' : {
				x : 'x',
				colors : {'app1' : '#8884d8', 'app2' : '#82ca9d'},
				data : [
					{x : 'x1', app1 : 2, app2 : 3},
					{x : 'x2', app1 : 3, app2 : 2},
					{x : 'x3', app1 : 5, app2 : 0},
					{x : 'x4', app1 : 2, app2 : 2},
					{x : 'x5', app1 : 4, app2 : 1},
					{x : 'x6', app1 : 0, app2 : 5},
				]
			},
			'graph2' : {
				x : 'x',
				colors : {'app1' : '#8884d8', 'app2' : '#82ca9d'},
				data : [
					{x : 'x1', app1 : 2, app2 : 3},
					{x : 'x2', app1 : 3, app2 : 2},
					{x : 'x3', app1 : 5, app2 : 0},
					{x : 'x4', app1 : 2, app2 : 2},
					{x : 'x5', app1 : 4, app2 : 1},
					{x : 'x6', app1 : 0, app2 : 5},
				]
			},
			'graph3' : {
				x : 'x',
				colors : {'app1' : '#8884d8', 'app2' : '#82ca9d'},
				data : [
					{x : 'x1', app1 : 2, app2 : 3},
					{x : 'x2', app1 : 3, app2 : 2},
					{x : 'x3', app1 : 5, app2 : 0},
					{x : 'x4', app1 : 2, app2 : 2},
					{x : 'x5', app1 : 4, app2 : 1},
					{x : 'x6', app1 : 0, app2 : 5},
				]
			}
		}
		for(i in this.graphData){
			this.reff[i] = React.createRef();
			this.data[i] = this.graphData[i].data;
			this.type[i] = 'Graph';
		}
		
		// this.graphData = {
		// 	'graph1' : {
		// 		yLabel : 'y',
		// 		data : {
		// 			app1 : {
		// 				x1 : 2,
		// 				x2 : 3,
		// 				x3 : 5,
		// 				x4 : 2,
		// 				x5 : 4,
		// 				x6 : 0
		// 			},
		// 			app2 : {
		// 				x1 : 3,
		// 				x2 : 2,
		// 				x3 : 0,
		// 				x4 : 2,
		// 				x5 : 1,
		// 				x6 : 5
		// 			},
		// 		}
		// 	},
		// 	'graph2' : { yLabel : 'y', data : { app1 : { x1 : 2, x2 : 3, x3 : 5, x4 : 2, x5 : 4, x6 : 0 }, app2 : { x1 : 3, x2 : 2, x3 : 0, x4 : 2, x5 : 1, x6 : 5 }, } },
		// 	'graph3' : { yLabel : 'y', data : { app1 : { x1 : 2, x2 : 3, x3 : 5, x4 : 2, x5 : 4, x6 : 0 }, app2 : { x1 : 3, x2 : 2, x3 : 0, x4 : 2, x5 : 1, x6 : 5 }, } },
		// }
	}
	
	render(){
		return(
			<div>
					{(this.state.download) && 
				<Modal size='lg' show={this.state.download} onHide={() => {this.setState({download : false})}}>
					<Modal.Header closeButton>
					<Modal.Title style={{textAlign : 'center'}}>Download {this.type[this.state.downloadElem]}</Modal.Title>
					</Modal.Header>
					<Modal.Body >
						<div ref={this.downloadRef} style={{textAlign : 'center', margin: 'auto', width : '100%', height : '100%'}}>
							{(this.reff[this.state.downloadElem].current) && <div dangerouslySetInnerHTML={{__html: this.reff[this.state.downloadElem].current.innerHTML}}/>}
						</div>
					</Modal.Body>
					<Modal.Footer>
					<Button variant="secondary" onClick={() => {this.setState({download : false})}}>
						Close
					</Button>
					<CSVLink data={this.data[this.state.downloadElem]} target='_blank' filename='PieChart.csv' onClick={() => {this.setState({download : false})}}>
						<Button variant="primary" onClick={() => {this.setState({download : false})}}>
							Download CSV
						</Button>
					</CSVLink>
					<DropdownButton title='Export as '>
						<Dropdown.Item onClick={() => {exportComponentAsPNG(this.downloadRef, {fileName : `Area${this.props.num}-${this.state.downloadElem}`});this.setState({download : false, downloadElem : ''})}}>PNG</Dropdown.Item>
						<Dropdown.Item onClick={() => {exportComponentAsJPEG(this.downloadRef, {fileName : `Area${this.props.num}-${this.state.downloadElem}`});this.setState({download : false, downloadElem : ''})}}>JPEG</Dropdown.Item>
					</DropdownButton>
					</Modal.Footer>
				</Modal>
					}
				<Stack>
					{/* <h6>Area{this.props.num}</h6> */}
					{(this.state.expand===0 || this.state.expand===1) && 
					<div style={{display : 'inline-flex'}} onDoubleClick={() => {this.setState((state) => {return {expand : 1*(state.expand===0)}})}}>
						{[0,1,2,3,4,5].map((e) => {
							return(
								<Block head={this.props.list[e].show} body={this.props.list[e].value} desc={this.props.list[e].description}/>
							);
						})}
					</div>}
					{(this.state.expand===0 || this.state.expand===1) && <div style={{display : 'inline-flex'}} onDoubleClick={() => {this.setState((state) => {return {expand : 1*(state.expand===0)}})}}>
						{[6,7,8,9,10,11].map((e) => {
							return(
								<Block head={this.props.list[e].show} body={this.props.list[e].value} desc={this.props.list[e].description}/>
							);
						})}
					</div>}
					<br />
					<div style={{display : 'flex'}}>
						{(this.state.expand===0 || this.state.expand===2) && 
						<div ref={this.reff['plt_thick']} 
							onContextMenu={(e) => {e.preventDefault(); this.setState({download : true, downloadElem : 'plt_thick'})}} 
							style={{cursor : 'pointer', margin : 'auto'}} onDoubleClick={() => {this.setState((state) => {return {expand : 2*(state.expand===0)}})}}>
							<Stack>
								<h3>Plt Thick</h3>
								<Piegraph title='Plt Thick' id='title' var='value' data={this.piedata['plt_thick']} style={{width : 'auto'}} />
							</Stack>
						</div>}
						{(this.state.expand===0 || this.state.expand===3) && 
						<div ref={this.reff['plt_width']}
							onContextMenu={(e) => {e.preventDefault(); this.setState({download : true, downloadElem : 'plt_width'})}} 
							style={{cursor : 'pointer', margin : 'auto'}} onDoubleClick={() => {this.setState((state) => {return {expand : 3*(state.expand===0)}})}}>
							<Stack>
								<h3>Plt Width</h3>
								<Piegraph title='Plt Width' id='title' var='value' data={this.piedata['plt_width']} style={{width : 'auto'}} />
							</Stack>
						</div>}
						{(this.state.expand===0 || this.state.expand===4) && 
						<div ref={this.reff['plt_length']}
							onContextMenu={(e) => {e.preventDefault(); this.setState({download : true, downloadElem : 'plt_length'})}} 
							 style={{cursor : 'pointer', margin : 'auto'}} onDoubleClick={() => {this.setState((state) => {return {expand : 4*(state.expand===0)}})}}>
							<Stack>
								<h3>Plt Length</h3>
								<Piegraph title='Plt Length' id='title' var='value' data={this.piedata['plt_length']} style={{width : 'auto'}} />
							</Stack>
						</div>}
					</div>
					<br />
					<Scrollbar noScrollY style={{height : 320, margin : 'auto'}}>
						<div style={{display : 'inline-flex', width : '100%'}}>
							{(this.state.expand===0 || this.state.expand===5) && 
								<div ref={this.reff['graph1']}
								 onContextMenu={(e) => {e.preventDefault(); this.setState({download : true, downloadElem : 'graph1'})}}
								 onDoubleClick={() => {this.setState((state) => {return {expand : 5*(state.expand===0)}})}} style={{cursor : 'pointer'}}>
									{/* {item} */}
									<Graph x={this.graphData['graph1'].x} data={this.graphData['graph1'].data} list ={this.graphData['graph1'].colors}/>
								</div >
							}
							{(this.state.expand===0 || this.state.expand===6) && 
								<div ref={this.reff['graph2']} 
								onContextMenu={(e) => {e.preventDefault(); this.setState({download : true, downloadElem : 'graph2'})}}
								onDoubleClick={() => {this.setState((state) => {return {expand : 6*(state.expand===0)}})}} style={{cursor : 'pointer'}}>
									{/* {item} */}
									<Graph x={this.graphData['graph2'].x} data={this.graphData['graph2'].data} list ={this.graphData['graph2'].colors}/>
								</div >
							}
							{(this.state.expand===0 || this.state.expand===7) && 
								<div ref={this.reff['graph3']} 
								onContextMenu={(e) => {e.preventDefault(); this.setState({download : true, downloadElem : 'graph3'})}}
								onDoubleClick={() => {this.setState((state) => {return {expand : 7*(state.expand===0)}})}} style={{cursor : 'pointer'}}>
									{/* {item} */}
									<Graph x={this.graphData['graph3'].x} data={this.graphData['graph3'].data} list ={this.graphData['graph3'].colors}/>
								</div >
							}
							{/* {(this.state.expand==0 || this.state.expand==5) && <img src='/graph1.png' style={{margin : '1%'}}  onDoubleClick={() => {this.setState((state) => {return {expand : 5*(state.expand==0)}})}}></img>} */}
							{/* {(this.state.expand==0 || this.state.expand==6) && <img src='/graph2.png' style={{margin : '1%'}}  onDoubleClick={() => {this.setState((state) => {return {expand : 6*(state.expand==0)}})}}></img>}
							{(this.state.expand==0 || this.state.expand==7) && <img src='/graph3.png' style={{margin : '1%'}}  onDoubleClick={() => {this.setState((state) => {return {expand : 7*(state.expand==0)}})}}></img>} */}
						</div>
					</Scrollbar>
					{(this.state.expand===0 || this.state.expand===1) && <div style={{display : 'inline-flex'}} onDoubleClick={() => {this.setState((state) => {return {expand : 1*(state.expand===0)}})}}>
						{[12,13,14,15,16,17].map((e) => {
							return(
								<Block head={this.props.list[e].show} body={this.props.list[e].value} desc={this.props.list[e].description}/>
							);
						})}
					</div>}
				</Stack>
			</div>
		);
	}
}

class Headlin extends React.Component{
	constructor(props){
		super(props);
		this.state = {enlarge : false};
		this.data = [
			{type : 'danger', text : 'This is alarm 1'},
			{type : 'danger', text : 'This is alarm 2'},
			{type : 'warning', text : 'This is warning 1'},
			{type : 'warning', text : 'This is warning 2'},		
		]
	}
	enLarge(){
		this.props.function();
		this.setState((state) => {return {enlarge : !state.enlarge}});
		this.props.hideContent();
	}
	componentDidUpdate(prevProps){
		if(prevProps.height!==this.props.height){
			console.log('alarm', this.props.height);
		}
	}
	render(){
		return (
		<fieldset style={{position : 'relative' ,color : 'white', border : 'solid white 2px', minHeight : `calc(100vh - ${this.props.height}px)`, width : '12.5vw', borderRadius : '1vw'}}>
			<legend onClick={() => {this.enLarge()}} onMouseEnter={(e) => {e.target.innerHTML='&#9635;'}} onMouseLeave={(e) => {e.target.innerHTML='&#9634;'}} style={{cursor : 'pointer', marginRight : '5%', padding : '1%', textAlign : 'right' , width : 'auto', border : 'white'}}> &#9634; </legend>
			<div style={{display : 'inline-block', 
						position : 'absolute', 
						right : 0, 
						height : 'auto', 
						width : '90%', 
						margin : '0% 1%', 
						fontWeight : 900}}>
				{((this.state.enlarge) ? (Object.keys(this.data)) : (this.data.length>1) ? [0,1] : (this.data.length) ? [0] : []).map((e) => {
					let d = (this.data[e].type==='danger');
					return( 
					<div style={{margin : '2%', padding : '2%', border : `solid ${d ? '#B22222' : 'gold'}`, borderRadius: '0.5vw'}}>
						{d && <FaExclamationTriangle style={{color : 'yellow', marginTop : '-3%'}}/>}
						<h5 style={{display : 'inline', color : 'white'}}>{this.data[e].text}</h5>
					</div>
					);
				})}
				{/* <div style={{margin : '2%', padding : '2%', border : 'solid #B22222', borderRadius: '0.5vw'}}>
					<FaExclamationTriangle style={{color : 'yellow', marginTop : '-3%'}}/>
					<h5 style={{display : 'inline', color : 'white'}}> This is alarm1</h5>
				</div>
				<div style={{margin : '2%', padding : '2%', border : 'solid #B22222', borderRadius: '0.5vw'}}>
					<FaExclamationTriangle style={{color : 'yellow', marginTop : '-3%'}}/>
					<h5 style={{display : 'inline', color : 'white'}}> This is alarm2</h5>
				</div>
				<div style={{margin : '2%', padding : '2%', border : 'solid gold', borderRadius: '0.5vw'}}>
					<h5 style={{display : 'inline', color : 'white'}}> This is alarm2</h5>
				</div> */}
			</div>
			
		</fieldset>
		);
	}
}


export default class Area extends React.Component{
	constructor(props){
		super(props);
		this.state = {left : 0, right : 0, height : this.props.height, headHeight : this.props.headHeight, enLargingLeft : false, enLargingRight : false, enLargingAlarm : false, buttonsHeight : 0};
		this.OneClick = this.OneClick.bind(this);
		this.DoubleClick = this.DoubleClick.bind(this);
		this.lefty = React.createRef();
		this.righty = React.createRef();
		this.buttongroup = React.createRef();
		this.enLargeLeft = this.enLargeLeft.bind(this);
		this.enLargeRight = this.enLargeRight.bind(this);
		this.data = {
			Area1 : [{type : 'float', 	description : 'Production', 			value : 0.2, show : 'Production'},
					{type : 'float', 	description : 'Avg SRPH', 				value : 0.2, show : 'Avg SRPH'},
					{type : '%float',	description : '% of T1', 				value : 0.2, show : '% of T1'},
					{type : '%float',	description : '% of T2', 				value : 0.2, show : '% of T2'},
					{type : 'float', 	description : 'Avg T1', 				value : 0.2, show : 'Avg T1'},
					{type : 'float', 	description : 'Avg T2', 				value : 0.2, show : 'Avg T2'},
					{type : '%float',	description : '% of NR', 				value : 0.2, show : '% of NR'},
					{type : '%float',	description : '% of TMCP', 				value : 0.2, show : '% of TMCP'},
					{type : '%float',	description : '% of TMCR', 				value : 0.2, show : '% of TMCR'},
					{type : '%float',	description : '% of Mill loading time', value : 0.2, show : 'Mill loading'},
					{type : 'float', 	description : 'Avg slab to slab time', 	value : 0.2, show : 'Avg slab2slab'},
					{type : 'float', 	description : 'Avg Residence Time', 	value : 0.2, show : 'Avg Res. time'},
					{type : '%float',	description : 'RT Achieved %', value : 0.2, show : '% of RT'},
					{type : '%float',	description : 'FRT Achieved %', value : 0.2, show : '% of FRT'},
					{type : '%float',	description : 'FCT Achieved %', value : 0.2, show : '% of FCT'},
					{type : 'float',	description : 'RF High Count', value : 0.2, show : 'RF High Count'},
					{type : 'float',	description : 'Torque High Count', value : 0.2, show : 'Torque High Count'},
					{type : 'float',	description : 'Speed High Count', value : 0.2, show : 'Speed High Count'},
		],
			Area2 : [{type : 'float', 	description : 'Production', 			value : 0.2, show : 'Production'},{type : 'float', 	description : 'Avg SRPH', 				value : 0.2, show : 'Avg SRPH'},{type : '%float',	description : '% of T1', 				value : 0.2, show : '% of T1'},{type : '%float',	description : '% of T2', 				value : 0.2, show : '% of T2'},{type : 'float', 	description : 'Avg T1', 				value : 0.2, show : 'Avg T1'},{type : 'float', 	description : 'Avg T2', 				value : 0.2, show : 'Avg T2'},{type : '%float',	description : '% of NR', 				value : 0.2, show : '% of NR'},{type : '%float',	description : '% of TMCP', 				value : 0.2, show : '% of TMCP'},{type : '%float',	description : '% of TMCR', 				value : 0.2, show : '% of TMCR'},{type : '%float',	description : '% of Mill loading time', value : 0.2, show : 'Mill loading'},{type : 'float', 	description : 'Avg slab to slab time', 	value : 0.2, show : 'Avg slab2slab'},{type : 'float', 	description : 'Avg Residence Time', 	value : 0.2, show : 'Avg Res. time'}, {type : '%float',	description : 'RT Achieved %', value : 0.2, show : '% of RT'},{type : '%float',	description : 'FRT Achieved %', value : 0.2, show : '% of FRT'},{type : '%float',	description : 'FCT Achieved %', value : 0.2, show : '% of FCT'},{type : 'float',	description : 'RF High Count', value : 0.2, show : 'RF High Count'},{type : 'float',	description : 'Torque High Count', value : 0.2, show : 'Torque High Count'},{type : 'float',	description : 'Speed High Count', value : 0.2, show : 'Speed High Count'}],
			Area3 : [{type : 'float', 	description : 'Production', 			value : 0.2, show : 'Production'},{type : 'float', 	description : 'Avg SRPH', 				value : 0.2, show : 'Avg SRPH'},{type : '%float',	description : '% of T1', 				value : 0.2, show : '% of T1'},{type : '%float',	description : '% of T2', 				value : 0.2, show : '% of T2'},{type : 'float', 	description : 'Avg T1', 				value : 0.2, show : 'Avg T1'},{type : 'float', 	description : 'Avg T2', 				value : 0.2, show : 'Avg T2'},{type : '%float',	description : '% of NR', 				value : 0.2, show : '% of NR'},{type : '%float',	description : '% of TMCP', 				value : 0.2, show : '% of TMCP'},{type : '%float',	description : '% of TMCR', 				value : 0.2, show : '% of TMCR'},{type : '%float',	description : '% of Mill loading time', value : 0.2, show : 'Mill loading'},{type : 'float', 	description : 'Avg slab to slab time', 	value : 0.2, show : 'Avg slab2slab'},{type : 'float', 	description : 'Avg Residence Time', 	value : 0.2, show : 'Avg Res. time'}, {type : '%float',	description : 'RT Achieved %', value : 0.2, show : '% of RT'},{type : '%float',	description : 'FRT Achieved %', value : 0.2, show : '% of FRT'},{type : '%float',	description : 'FCT Achieved %', value : 0.2, show : '% of FCT'},{type : 'float',	description : 'RF High Count', value : 0.2, show : 'RF High Count'},{type : 'float',	description : 'Torque High Count', value : 0.2, show : 'Torque High Count'},{type : 'float',	description : 'Speed High Count', value : 0.2, show : 'Speed High Count'}],
			Area4 : [{type : 'float', 	description : 'Production', 			value : 0.2, show : 'Production'},{type : 'float', 	description : 'Avg SRPH', 				value : 0.2, show : 'Avg SRPH'},{type : '%float',	description : '% of T1', 				value : 0.2, show : '% of T1'},{type : '%float',	description : '% of T2', 				value : 0.2, show : '% of T2'},{type : 'float', 	description : 'Avg T1', 				value : 0.2, show : 'Avg T1'},{type : 'float', 	description : 'Avg T2', 				value : 0.2, show : 'Avg T2'},{type : '%float',	description : '% of NR', 				value : 0.2, show : '% of NR'},{type : '%float',	description : '% of TMCP', 				value : 0.2, show : '% of TMCP'},{type : '%float',	description : '% of TMCR', 				value : 0.2, show : '% of TMCR'},{type : '%float',	description : '% of Mill loading time', value : 0.2, show : 'Mill loading'},{type : 'float', 	description : 'Avg slab to slab time', 	value : 0.2, show : 'Avg slab2slab'},{type : 'float', 	description : 'Avg Residence Time', 	value : 0.2, show : 'Avg Res. time'}, {type : '%float',	description : 'RT Achieved %', value : 0.2, show : '% of RT'},{type : '%float',	description : 'FRT Achieved %', value : 0.2, show : '% of FRT'},{type : '%float',	description : 'FCT Achieved %', value : 0.2, show : '% of FCT'},{type : 'float',	description : 'RF High Count', value : 0.2, show : 'RF High Count'},{type : 'float',	description : 'Torque High Count', value : 0.2, show : 'Torque High Count'},{type : 'float',	description : 'Speed High Count', value : 0.2, show : 'Speed High Count'}],
			Area5 : [{type : 'float', 	description : 'Production', 			value : 0.2, show : 'Production'},{type : 'float', 	description : 'Avg SRPH', 				value : 0.2, show : 'Avg SRPH'},{type : '%float',	description : '% of T1', 				value : 0.2, show : '% of T1'},{type : '%float',	description : '% of T2', 				value : 0.2, show : '% of T2'},{type : 'float', 	description : 'Avg T1', 				value : 0.2, show : 'Avg T1'},{type : 'float', 	description : 'Avg T2', 				value : 0.2, show : 'Avg T2'},{type : '%float',	description : '% of NR', 				value : 0.2, show : '% of NR'},{type : '%float',	description : '% of TMCP', 				value : 0.2, show : '% of TMCP'},{type : '%float',	description : '% of TMCR', 				value : 0.2, show : '% of TMCR'},{type : '%float',	description : '% of Mill loading time', value : 0.2, show : 'Mill loading'},{type : 'float', 	description : 'Avg slab to slab time', 	value : 0.2, show : 'Avg slab2slab'},{type : 'float', 	description : 'Avg Residence Time', 	value : 0.2, show : 'Avg Res. time'}, {type : '%float',	description : 'RT Achieved %', value : 0.2, show : '% of RT'},{type : '%float',	description : 'FRT Achieved %', value : 0.2, show : '% of FRT'},{type : '%float',	description : 'FCT Achieved %', value : 0.2, show : '% of FCT'},{type : 'float',	description : 'RF High Count', value : 0.2, show : 'RF High Count'},{type : 'float',	description : 'Torque High Count', value : 0.2, show : 'Torque High Count'},{type : 'float',	description : 'Speed High Count', value : 0.2, show : 'Speed High Count'}],
			Area6 : [{type : 'float', 	description : 'Production', 			value : 0.2, show : 'Production'},{type : 'float', 	description : 'Avg SRPH', 				value : 0.2, show : 'Avg SRPH'},{type : '%float',	description : '% of T1', 				value : 0.2, show : '% of T1'},{type : '%float',	description : '% of T2', 				value : 0.2, show : '% of T2'},{type : 'float', 	description : 'Avg T1', 				value : 0.2, show : 'Avg T1'},{type : 'float', 	description : 'Avg T2', 				value : 0.2, show : 'Avg T2'},{type : '%float',	description : '% of NR', 				value : 0.2, show : '% of NR'},{type : '%float',	description : '% of TMCP', 				value : 0.2, show : '% of TMCP'},{type : '%float',	description : '% of TMCR', 				value : 0.2, show : '% of TMCR'},{type : '%float',	description : '% of Mill loading time', value : 0.2, show : 'Mill loading'},{type : 'float', 	description : 'Avg slab to slab time', 	value : 0.2, show : 'Avg slab2slab'},{type : 'float', 	description : 'Avg Residence Time', 	value : 0.2, show : 'Avg Res. time'}, {type : '%float',	description : 'RT Achieved %', value : 0.2, show : '% of RT'},{type : '%float',	description : 'FRT Achieved %', value : 0.2, show : '% of FRT'},{type : '%float',	description : 'FCT Achieved %', value : 0.2, show : '% of FCT'},{type : 'float',	description : 'RF High Count', value : 0.2, show : 'RF High Count'},{type : 'float',	description : 'Torque High Count', value : 0.2, show : 'Torque High Count'},{type : 'float',	description : 'Speed High Count', value : 0.2, show : 'Speed High Count'}],
			Area7 : [{type : 'float', 	description : 'Production', 			value : 0.2, show : 'Production'},{type : 'float', 	description : 'Avg SRPH', 				value : 0.2, show : 'Avg SRPH'},{type : '%float',	description : '% of T1', 				value : 0.2, show : '% of T1'},{type : '%float',	description : '% of T2', 				value : 0.2, show : '% of T2'},{type : 'float', 	description : 'Avg T1', 				value : 0.2, show : 'Avg T1'},{type : 'float', 	description : 'Avg T2', 				value : 0.2, show : 'Avg T2'},{type : '%float',	description : '% of NR', 				value : 0.2, show : '% of NR'},{type : '%float',	description : '% of TMCP', 				value : 0.2, show : '% of TMCP'},{type : '%float',	description : '% of TMCR', 				value : 0.2, show : '% of TMCR'},{type : '%float',	description : '% of Mill loading time', value : 0.2, show : 'Mill loading'},{type : 'float', 	description : 'Avg slab to slab time', 	value : 0.2, show : 'Avg slab2slab'},{type : 'float', 	description : 'Avg Residence Time', 	value : 0.2, show : 'Avg Res. time'}, {type : '%float',	description : 'RT Achieved %', value : 0.2, show : '% of RT'},{type : '%float',	description : 'FRT Achieved %', value : 0.2, show : '% of FRT'},{type : '%float',	description : 'FCT Achieved %', value : 0.2, show : '% of FCT'},{type : 'float',	description : 'RF High Count', value : 0.2, show : 'RF High Count'},{type : 'float',	description : 'Torque High Count', value : 0.2, show : 'Torque High Count'},{type : 'float',	description : 'Speed High Count', value : 0.2, show : 'Speed High Count'}],
			Area8 : [{type : 'float', 	description : 'Production', 			value : 0.2, show : 'Production'},{type : 'float', 	description : 'Avg SRPH', 				value : 0.2, show : 'Avg SRPH'},{type : '%float',	description : '% of T1', 				value : 0.2, show : '% of T1'},{type : '%float',	description : '% of T2', 				value : 0.2, show : '% of T2'},{type : 'float', 	description : 'Avg T1', 				value : 0.2, show : 'Avg T1'},{type : 'float', 	description : 'Avg T2', 				value : 0.2, show : 'Avg T2'},{type : '%float',	description : '% of NR', 				value : 0.2, show : '% of NR'},{type : '%float',	description : '% of TMCP', 				value : 0.2, show : '% of TMCP'},{type : '%float',	description : '% of TMCR', 				value : 0.2, show : '% of TMCR'},{type : '%float',	description : '% of Mill loading time', value : 0.2, show : 'Mill loading'},{type : 'float', 	description : 'Avg slab to slab time', 	value : 0.2, show : 'Avg slab2slab'},{type : 'float', 	description : 'Avg Residence Time', 	value : 0.2, show : 'Avg Res. time'}, {type : '%float',	description : 'RT Achieved %', value : 0.2, show : '% of RT'},{type : '%float',	description : 'FRT Achieved %', value : 0.2, show : '% of FRT'},{type : '%float',	description : 'FCT Achieved %', value : 0.2, show : '% of FCT'},{type : 'float',	description : 'RF High Count', value : 0.2, show : 'RF High Count'},{type : 'float',	description : 'Torque High Count', value : 0.2, show : 'Torque High Count'},{type : 'float',	description : 'Speed High Count', value : 0.2, show : 'Speed High Count'}],
			Area9 : [{type : 'float', 	description : 'Production', 			value : 0.2, show : 'Production'},{type : 'float', 	description : 'Avg SRPH', 				value : 0.2, show : 'Avg SRPH'},{type : '%float',	description : '% of T1', 				value : 0.2, show : '% of T1'},{type : '%float',	description : '% of T2', 				value : 0.2, show : '% of T2'},{type : 'float', 	description : 'Avg T1', 				value : 0.2, show : 'Avg T1'},{type : 'float', 	description : 'Avg T2', 				value : 0.2, show : 'Avg T2'},{type : '%float',	description : '% of NR', 				value : 0.2, show : '% of NR'},{type : '%float',	description : '% of TMCP', 				value : 0.2, show : '% of TMCP'},{type : '%float',	description : '% of TMCR', 				value : 0.2, show : '% of TMCR'},{type : '%float',	description : '% of Mill loading time', value : 0.2, show : 'Mill loading'},{type : 'float', 	description : 'Avg slab to slab time', 	value : 0.2, show : 'Avg slab2slab'},{type : 'float', 	description : 'Avg Residence Time', 	value : 0.2, show : 'Avg Res. time'}, {type : '%float',	description : 'RT Achieved %', value : 0.2, show : '% of RT'},{type : '%float',	description : 'FRT Achieved %', value : 0.2, show : '% of FRT'},{type : '%float',	description : 'FCT Achieved %', value : 0.2, show : '% of FCT'},{type : 'float',	description : 'RF High Count', value : 0.2, show : 'RF High Count'},{type : 'float',	description : 'Torque High Count', value : 0.2, show : 'Torque High Count'},{type : 'float',	description : 'Speed High Count', value : 0.2, show : 'Speed High Count'}],
			Area10 :[{type : 'float', 	description : 'Production', 			value : 0.2, show : 'Production'},{type : 'float', 	description : 'Avg SRPH', 				value : 0.2, show : 'Avg SRPH'},{type : '%float',	description : '% of T1', 				value : 0.2, show : '% of T1'},{type : '%float',	description : '% of T2', 				value : 0.2, show : '% of T2'},{type : 'float', 	description : 'Avg T1', 				value : 0.2, show : 'Avg T1'},{type : 'float', 	description : 'Avg T2', 				value : 0.2, show : 'Avg T2'},{type : '%float',	description : '% of NR', 				value : 0.2, show : '% of NR'},{type : '%float',	description : '% of TMCP', 				value : 0.2, show : '% of TMCP'},{type : '%float',	description : '% of TMCR', 				value : 0.2, show : '% of TMCR'},{type : '%float',	description : '% of Mill loading time', value : 0.2, show : 'Mill loading'},{type : 'float', 	description : 'Avg slab to slab time', 	value : 0.2, show : 'Avg slab2slab'},{type : 'float', 	description : 'Avg Residence Time', 	value : 0.2, show : 'Avg Res. time'}, {type : '%float',	description : 'RT Achieved %', value : 0.2, show : '% of RT'},{type : '%float',	description : 'FRT Achieved %', value : 0.2, show : '% of FRT'},{type : '%float',	description : 'FCT Achieved %', value : 0.2, show : '% of FCT'},{type : 'float',	description : 'RF High Count', value : 0.2, show : 'RF High Count'},{type : 'float',	description : 'Torque High Count', value : 0.2, show : 'Torque High Count'},{type : 'float',	description : 'Speed High Count', value : 0.2, show : 'Speed High Count'}],
		}
		this.callBackLeft = ((e) => {if(e.key === "Escape"){this.enLargeLeft();}})
		this.callBackright = ((e) => {if(e.key === "Escape"){this.enLargeRight();}})
	}
	componentDidMount(){
        const timer = setInterval(this.setState({buttonsHeight : this.buttongroup.current.clientHeight}), 1000);
        clearInterval(timer);
	}
    componentDidUpdate(prevProps){
        if (prevProps.list !== this.props.list){
			this.lefty.current.style.opacity = 0;
			this.righty.current.style.opacity = 0;
            this.setState({left : 0, right : 0});
        }
		if (prevProps.height !== this.props.height || prevProps.hide !== this.props.hide){
			console.log(`calc(100vh - ${this.state.height}px)`);
			this.setState({height : this.props.height});
			this.setState({headHeight : this.props.headHeight});
		}
		if(this.buttongroup.current && this.state.buttonsHeight !==this.buttongroup.current.clientHeight){
			this.setState({buttonsHeight : this.buttongroup.current.clientHeight});
		}
    }
	OneClick(num){
		if(this.state.left === num){
			this.lefty.current.style.opacity = 0;
			this.setState((state, props) => {return {left : state.right, right : 0}});
			this.righty.current.style.opacity = 0;
		}
		else if(this.state.right === num){
			this.setState({right : 0});
			this.righty.current.style.opacity = 0;
		}
		else{
			this.righty.current.style.opacity = 0;
			this.setState((state, props) => {return ((state.left > 0 ) ? {right : num} : {left : num})});
		}
	}
	DoubleClick(num){
		console.log("double clicked");
		if(this.state.left !== num){
			this.setState((state, props) => {return {left : num, right : state.left}});
		}
	}
	enLargeLeft(){
		if(!this.state.enLargingLeft){
			document.addEventListener('keydown', this.callBackLeft, false);
		}
		else{
			document.removeEventListener('keydown', this.callBackLeft, false);
		}
		this.setState((state) => {return {enLargingLeft : !state.enLargingLeft}});
		this.props.hideContent();
	}
	enLargeRight(){
		if(!this.state.enLargingRight){
			document.addEventListener('keydown', this.callBackRight, false);
		}
		else{
			document.removeEventListener('keydown', this.callBackRight, false);
		}
		this.setState((state) => {return {enLargingRight : !state.enLargingRight}});
		this.props.hideContent();
	}
	render(){
		
		return(
			<div style={(this.props.hide) ? {height : 0, overflow : 'hidden'} : {height : '100%'}}>
			<Container fluid style={{display : 'inline-block', background : Texture.dark2}}>
				<Row style={{height : '100%'}}>
				<div style={{width : ((this.state.enLargingLeft || this.state.enLargingRight) ? 0 : 'auto'), 
							height : (this.state.enLargingLeft || this.state.enLargingRight) ? 0 : '100%', 
							background : Texture.darkgrad_, 
							minHeight : ((this.state.enLargingLeft || this.state.enLargingRight) ? 0 : `calc(100vh - ${this.state.height+25}px)`), 
							transition : 'width 0.5s'}}>
				
				{(!this.state.enLargingLeft && !this.state.enLargingRight) &&  <div>
				<div ref={this.buttongroup}>
				<br />
				{(!this.state.enLargingAlarm) && <ButtonGroup vertical style={{height : '100%'}}>
					{this.props.list.map((num) => 
						<Button variant = ''
								key = {num} onDoubleClick={() => this.DoubleClick(num)} 
								onClick={() => this.OneClick(num)}
								style ={{
									backgroundImage : (this.state.left===num || this.state.right===num) ? `url(${Image_})` : `url(${Image})` ,
									backgroundSize : '100% 100%',
									color : 'white',
									width : '12.5vw',
									height : 50,
									margin : '0.2vw',
								}}
						>Area{num}</Button>
					)}
				</ButtonGroup>}
				</div>
					{/* {this.buttongroup.current && <Headlin function={() => {console.log(this.buttongroup.current.clientHeight);}} height={this.state.buttonsHeight+this.state.height+25} hideContent={() => {this.setState((state) => {return {enLargingAlarm : !state.enLargingAlarm}})}}/>} */}
				</div>}
				{/* <div style={{height : '100%', overflow : 'hidden'}}><br/><br/><br/><br/></div> */}
				{/* <div style={{position : 'relative', bottom : 0}}>xajm</div> */}
				</div>
				{/* <Collapse in = {true}> */}
				{/* , position : 'fixed', width : '100%', height : '100%', top : 0, left : 0, background : 'white' */}
				
				<fieldset
					ref={this.lefty} 
					style={{
					height : ((this.state.enLargingLeft) ? `calc(100vh - ${this.state.headHeight+26}px)` : (this.state.enLargingRight) ? 0 : 'auto') ,
					opacity : 0, 
					width : ((this.state.enLargingLeft) ? '100vw' : (this.state.enLargingRight) ? 0 : `${80/(1 + (this.state.right>0))}vw`), 
					margin : '0 0.3vw', 
					textAlign : 'center', 
					background : Texture.darkgrad,
					border : 'solid white 1px',
					overflow : 'hidden',
					color : 'white', transition : 'opacity 0.2s, width 0.2s, height 0.5s'}}>
					{(!this.state.enLargingRight) && <legend onClick={() => {this.enLargeLeft()}} onMouseEnter={(e) => {e.target.innerHTML='&#9635;'}} onMouseLeave={(e) => {e.target.innerHTML='&#9634;'}} style={{cursor : 'pointer', marginRight : '5%', padding : '1%', textAlign : 'right' , width : 'auto', border : 'white'}}> &#9634; </legend>}
				{(!this.state.enLargingRight) && (this.state.left > 0) && (this.lefty.current.style.opacity = 1) && 
					<Scrollbar>
						<Space num = {this.state.left} list={this.data[`Area${this.state.left}`]}/>
						
					</Scrollbar>}
				</fieldset>
				
				<fieldset 
				ref={this.righty} 
				style={{height : ((this.state.enLargingRight) ? `calc(100vh - ${this.state.headHeight+26}px)` : (this.state.enLargingLeft) ? 0 : 'auto'), 
						opacity : 0, 
						width : ((this.state.enLargingRight) ? '100vw' : (this.state.enLargingLeft) ? 0 : `${43*(this.state.right>0)}vw`), 
						margin: '0 0.1vw', 
						background : Texture.darkgrad,
						border : 'solid white 1px',
						color : 'white', 
						textAlign : 'center', 
						transition : 'opacity 0.2s, width 0.2s'}}>
				{(!this.state.enLargingLeft) && <legend onClick={() => {this.enLargeRight()}} onMouseEnter={(e) => {e.target.innerHTML='&#9635;'}} onMouseLeave={(e) => {e.target.innerHTML='&#9634;'}} style={{cursor : 'pointer', marginRight : '5%', padding : '1%', textAlign : 'right' , width : 'auto', border : 'white'}}> &#9634; </legend>}
				{(!this.state.enLargingLeft) && (this.state.right > 0) && (this.righty.current.style.opacity = 1) && 
					<Scrollbar>
						<Space num = {this.state.right} list={this.data[`Area${this.state.right}`]}/>
						
					</Scrollbar>}
				</fieldset>
				{/* </Collapse> */}
				</Row>
				<br style={{height : 25}}/>
			</Container>
			</div>
		);
	}
}