import React from 'react';
import {Button, Collapse, Container, Row, Stack, OverlayTrigger, Tooltip, Table, Modal} from 'react-bootstrap';
import Texture from '../Texture';
import Image from '../img/button_3.png';
import Image_ from '../img/button_1.png'
import Scrollbar from 'react-scrollbars-custom';
// import FormRange from 'react-bootstrap/esm/FormRange';
import {CSVLink} from 'react-csv';
// import BootstrapTable from 'react-bootstrap-table-next';
import {FaDownload} from 'react-icons/fa'

const width = '12.5vw';
const margin = '0.3vw';
const height = 50;

class Block extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={{backgroundImage : `url(${Image})`,
            backgroundSize : '100% 100%',
                        color : 'white' ,
                        width : width, 
                        height : this.props.height, 
                        margin : this.props.margin,
                        marginLeft : margin,
                    }}
            >
                {/* <fieldset style={{}}> */}
                    {/* <legend style={{fontSize : 13, background : Texture.dark1, width : 'auto', position : 'relative', left : '5%', borderRadius : 8}}>{this.props.head}</legend> */}
                <h6 style={{position : 'relative', 
                            top : '50%', 
                            transform : 'translateY(-50%)',
                            textAlign : 'center'}}
                >{this.props.body}</h6>
                {/* </fieldset> */}
            </div>
        );
    }
}

export default class Suggestions extends React.Component{
	constructor(props){
		super(props);
		this.state = {visible : true, current : 0, width : '12.5vw', margin : '0.3vw', height : 50, enLarge : false, zoom : 10, current_new : 0, download : false, small : false};
		this.statusCount = 20;
		this.EventCount = 8;
        this.data = [
                    {SLABID : 'A2305670', RHF_CALC_TEMP : 1192, RETENTION_TIME : 210, RESUME_TEMP : 1100, FRT : 870, FCT : 570, TYPE_OF_ROLLING : 1, MULPIC_MODE : 1, TURN_BEFORE_ROLLING : 1, PLT_THK : 20.6, PLT_WIDTH : 3500, PLT_LEN : 48200, SINGLE_ROLL_CHARGING : 1, SLABWIDTH_JUMP : 1, SLABTHICKNESS_JUMP : 1, ROLLING_TIME : 480, PLATE_AFTER_ROLL_CHANGE : 28, KMS_ROLLED_AFTER_ROLL_CHANGE : 36.01, WORKROLL_CHANGE : 0, BACKUPROLL_CHANGE : 0, BATCH_ROLLING_TYPE : 2, OPI_INPUT1 : 25, OPI_INPUT2 : -140, OPI_INPUT3 : 5.5, OPI_INPUT4 : 85, OPI_INPUT5 : 3.5},
                    {SLABID : 'A2305680', RHF_CALC_TEMP : 1197, RETENTION_TIME : 193, RESUME_TEMP : 1100, FRT : 860, FCT : 570, TYPE_OF_ROLLING : 1, MULPIC_MODE : 1, TURN_BEFORE_ROLLING : 1, PLT_THK : 20.6, PLT_WIDTH : 3500, PLT_LEN : 49200, SINGLE_ROLL_CHARGING : 1, SLABWIDTH_JUMP : 0, SLABTHICKNESS_JUMP : 0, ROLLING_TIME : 480, PLATE_AFTER_ROLL_CHANGE : 29, KMS_ROLLED_AFTER_ROLL_CHANGE : 36.06, WORKROLL_CHANGE : 0, BACKUPROLL_CHANGE : 0, BATCH_ROLLING_TYPE : 2, OPI_INPUT1 : 25, OPI_INPUT2 : -140, OPI_INPUT3 : 5.5, OPI_INPUT4 : 85, OPI_INPUT5 : 3.5},
                    {SLABID : 'A2305645', RHF_CALC_TEMP : 1187, RETENTION_TIME : 200, RESUME_TEMP : 1080, FRT : 870, FCT : 840, TYPE_OF_ROLLING : 1, MULPIC_MODE : 1, TURN_BEFORE_ROLLING : 1, PLT_THK : 22.36, PLT_WIDTH : 3600, PLT_LEN : 52000, SINGLE_ROLL_CHARGING : 0, SLABWIDTH_JUMP : 1, SLABTHICKNESS_JUMP : 1, ROLLING_TIME: 470, PLATE_AFTER_ROLL_CHANGE : 30, KMS_ROLLED_AFTER_ROLL_CHANGE : 36.11, WORKROLL_CHANGE : 0, BACKUPROLL_CHANGE : 0, BATCH_ROLLING_TYPE : 3, OPI_INPUT1 : 22, OPI_INPUT2 : -135, OPI_INPUT3 : 6, OPI_INPUT4 :   80, OPI_INPUT5 : 3  },
                    // e4 : {rev : 0, s2 : 0, s3 : 0, s4 : 0, s5 : 0, s6 : 0, s7 : 0, s8 : 0, s9 : 0, s10 : 0, s11 : 0, s12 : 0, s13 : 0, s14 : 0, s15 : 0, s16 : 0, s17 : 0, s18 : 0, s19 : 0, s20 : 0},
                    // e5 : {rev : 0, s2 : 0, s3 : 0, s4 : 0, s5 : 0, s6 : 0, s7 : 0, s8 : 0, s9 : 0, s10 : 0, s11 : 0, s12 : 0, s13 : 0, s14 : 0, s15 : 0, s16 : 0, s17 : 0, s18 : 0, s19 : 0, s20 : 0},
                    // e6 : {rev : 0, s2 : 0, s3 : 0, s4 : 0, s5 : 0, s6 : 0, s7 : 0, s8 : 0, s9 : 0, s10 : 0, s11 : 0, s12 : 0, s13 : 0, s14 : 0, s15 : 0, s16 : 0, s17 : 0, s18 : 0, s19 : 0, s20 : 0},
                    // e7 : {s1 : 0, s2 : 0, s3 : 0, s4 : 0, s5 : 0, s6 : 0, s7 : 0, s8 : 0, s9 : 0, s10 : 0, s11 : 0, s12 : 0, s13 : 0, s14 : 0, s15 : 0, s16 : 0, s17 : 0, s18 : 0, s19 : 0, s20 : 0},
                    // e8 : {s1 : 0, s2 : 0, s3 : 0, s4 : 0, s5 : 0, s6 : 0, s7 : 0, s8 : 0, s9 : 0, s10 : 0, s11 : 0, s12 : 0, s13 : 0, s14 : 0, s15 : 0, s16 : 0, s17 : 0, s18 : 0, s19 : 0, s20 : 0}
        ];
        this.desc = {SLABID : 'Slab Identification', RHF_CALC_TEMP : 'Reheating Furnace Discharging (RHF) Temperature', RETENTION_TIME : 'Duration of the slab in RHF', RESUME_TEMP : 'Holding Temperature', FRT : 'Finished Rolled Temperature', FCT : 'Finished Cooling Temperature', TYPE_OF_ROLLING : '1 means TMCP (Thermo mechanical control process)\n0 means NR (Normalized Rolling)', MULPIC_MODE : '1 means ACC (Acceelerated cooling)\n0 means Non Cooling', TURN_BEFORE_ROLLING : '1 is YES and 0 is NO', PLT_THK : 'Plate Thickness', PLT_WIDTH : 'Plate Width', PLT_LEN : 'Plate Length', SINGLE_ROLL_CHARGING : '0 : single charging\n1 : double charging', SLABWIDTH_JUMP : '1 if jump>=100mm', SLABTHICKNESS_JUMP : '1 if jump>=1mm', ROLLING_TIME : 'Rolling time', PLATE_AFTER_ROLL_CHANGE : 'Plate Sequence after work roll change', KMS_ROLLED_AFTER_ROLL_CHANGE : 'KMS rolled after the work roll change', WORKROLL_CHANGE : '1 : do work roll change\n0 : continue rolling', BACKUPROLL_CHANGE : '1 : do backup roll change\n0 : continue rolling', BATCH_ROLLING_TYPE : '# batch rolling', OPI_INPUT1 : 'draft', OPI_INPUT2 : 'CVC', OPI_INPUT3 : 'Speed max limit m/sec', OPI_INPUT4 : 'Rollforce max limit MN', OPI_INPUT5 : 'Torque max limit MN'}
        this.enLarge = this.enLarge.bind(this);
        this.names = [];
        this.mat = {};
        for(var i=0; i<this.data.length; i++){
            for(var j in this.data[i]){
                this.names.push(j);
                this.mat[j] = [];
            }
            this.names.shift();
            break;
        }
        this.events = [];
        for(i=0; i<this.data.length; i++){
            this.events.push(this.data[i].SLABID);
            for(j in this.names){
                this.mat[this.names[j]].push(this.data[i][this.names[j]]);
            }
        }
        this.cols = [{dataField : 'prop', text : 'Suggestions'}];
        for(i in this.data){
            this.cols.push({dataField : this.data[i].SLABID, text : this.data[i].SLABID})
        }

        this.muitable = [];
        for(i in this.names){
            var temp = {prop : this.names[i]};
            for(j in this.events){
                temp[this.events[j]] = this.data[j][this.names[i]]; 
            }
            this.muitable.push(temp);
        }

        console.log(this.muitable);
        this.callBack = (e) => {if(e.key === "Escape"){this.enLarge(false)}}
	}
    enLarge(boo){
        this.props.hideContent();
        if(boo){
			document.addEventListener('keydown', this.callBack, false);
		}
		else{
			document.removeEventListener('keydown', this.callBack, false);
		}
        this.setState({enLarge : boo});
    }
	render(){
        this.size = 250/this.state.zoom+ 4;
        this.maxHeight = `calc(${100/this.size}vh - ${this.props.headHeight/this.size}px)`;
		return (
        <div onDoubleClick={() => {this.enLarge(!this.state.enLarge)}} onContextMenu={(e) => {e.preventDefault();this.setState({download : true})}}>
            <Modal show={this.state.download} onHide={() => {this.setState({download : false})}}>
                <Modal.Header closeButton>
                <Modal.Title>Download Suggestions</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => {this.setState({download : false})}}>
                    Close
                </Button>
                <CSVLink data={this.data} target='_blank' filename='Suggestions.csv' onClick={() => {this.setState({download : false})}}>
                    <Button variant="primary" onClick={() => {this.setState({download : false})}}>
                        Download
                    </Button>
                </CSVLink>
                </Modal.Footer>
            </Modal>

        {/* <Button onClick={() => this.setState((state, props) => {return {visible : !state.visible}})}>Suggestions</Button> */}
		<Collapse in={this.state.visible}>
			{/* <div onPointerLeave={(e) => {this.setState({visible : false})}}> */}
            <div>
            
			<Container fluid style={{display : 'inline-block', background : Texture.dark1}}>
                {(!this.state.enLarge) ? 
                <Row>
                    <div>
                        <Stack>
                            <div onClick={() => {this.enLarge(true)}} style={{cursor : 'pointer', backgroundImage : `url(${Image_})`, backgroundSize : '100% 100%', color : 'white' ,width : this.state.width, height : this.state.height, textAlign : 'center', margin : this.state.margin}}><h6 style={{position : 'relative', top : '50%', transform : 'translateY(-50%)'}}>Suggestions</h6></div>
                            {this.events.map((e) => {
                                return <div key={e} style={{backgroundImage : `url(${Image})`, backgroundSize : '100% 100%', color : 'white' ,width : this.state.width, height : this.state.height, textAlign : 'center', margin : this.state.margin}}><h6 style={{position : 'relative', top : '50%', transform : 'translateY(-50%)'}}>{e}</h6></div>
                            })}
                        </Stack>
                    </div>
                    {[0,1,2,3,4,5].map((x) => {
                    const num = (this.state.current+x)%25;
                    return (<div key={num}>
                        <Stack>
                            <OverlayTrigger
                                placement='top'
                                delay={{ show: 50, hide: 50 }}
                                overlay={<Tooltip>{this.desc[this.names[num]]}</Tooltip>}>

                            <div style={{backgroundImage : `url(${Image})`, backgroundSize : '100% 100%', color : 'white', width : this.state.width, height : this.state.height, textAlign : 'center', margin : this.state.margin}}><h6 style={{overflow : 'hidden', wordWrap : 'break-word', position : 'relative', top : '50%', transform : 'translateY(-50%)', margin : 'auto 2%'}}>{this.names[num].replaceAll('_','  ')}</h6></div>
                            </OverlayTrigger>
                            {this.mat[this.names[num]].map((e, i) => {
                                return <div key={i}><Block head="Temp" body = {e} height={this.state.height} margin ={this.state.margin}/></div>
                            })}
                        </Stack>
                    </div>);
                    })}
                    <div>
                        <Button style={{height : this.state.height, color : 'white', backgroundImage : `url(${Image})`, backgroundSize : '100% 100%', margin : this.state.margin}} variant='' onClick={() => {this.setState((state, props) => {const x = (state.current+6)%25; return {current : (x>5)*x}; } )}}><h3>&raquo;</h3></Button>
                    </div>
                </Row>
                :
                // <BootstrapTable keyField='prop' data={this.muitable} columns={this.cols} />
                // <MUIDataTable
                // title = {"Suggestions"}
                // data={this.muitable}
                // columns={['Suggesstions'].concat(this.events)}
                // options={{
                //     filter : true,
                //     print : false,
                //     viewColumns : true,
                //     selectableRows : true,
                //     responsive: "stacked",
                //     rowsPerPage : 25,
                // }}
                // />
                // null
                <div>
                <div class="card card-cascade narrower" style={{marginTop : 10, background : 'white'}}>
                    <div style={{textAlign : 'center', position : 'relative', height : 50, background : Texture.lightgrad}} class="view view-cascade gradient-card-header blue-gradient narrower py-2 mb-1">
                        <h3 class="mx-3" style={{display : 'inline', color : 'white'}}>Suggestions</h3>
                        <div style={{position : 'absolute', right : '2%', top : '50%', transform : 'translateY(-50%)'}}>
                        <OverlayTrigger
                            placement='top'
                            delay={{ show: 50, hide: 50 }}
                            overlay={<Tooltip>Download as CSV</Tooltip>}>

                        <CSVLink style={{color : 'white'}} data={this.data} target='_blank' filename='Suggestions.csv'>
                            <FaDownload />
                        </CSVLink>
                        </OverlayTrigger>
                        </div>
                    </div>
                <div class='ml-1 mr-1'>
                <Scrollbar style={{width : '100%', height : `calc(100vh - ${this.props.headHeight+75}px)`, background : Texture.dark1}}>
                <Table size={(this.state.small) ? 'sm' : 'lg'} style={{color : 'white', textAlign : 'center', height : 200}}>
                    <thead style={{position : 'sticky', top : 0}}>
                        <tr >
                            <th onClick={() => {this.setState((state) => {return {small : !state.small}})}} style={{background : Texture.darkgrad}}>S.No</th>
                            <th onClick={() => {this.enLarge(false)}} style={{background : Texture.darkgrad, cursor : 'pointer', textAlign : 'left'}}>Suggestions</th>
                            {this.events.map((e)=> {
                                return <th key={e} style={{background : Texture.darkgrad}}>{e}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {(this.names.map((e, i)=> {
                            return (<tr id='hov' key={e}>
                                <td >{i+1}</td>
                                <td height={15} style={{textAlign : 'left'}}>{e.replaceAll('_', "  ")}</td>
                                {this.mat[e].map((x, i) =>{
                                    return <td key={i} height={15} style={{}}>{x}</td>
                                })}
                            </tr>);
                        }))}
                    </tbody>
                </Table>
                </Scrollbar>
                </div>
                </div>
                </div>


                // <Scrollbar style={{width: '100vw', height: `calc(100vh - ${this.props.headHeight}px)` }}>
                //     <Row style={{marginLeft : 0}}>
                //         <div>
                //             <Stack>
                //                 <div onDoubleClick={() => {this.enLarge(false)}} style={{backgroundImage : `url(${Image_})`, backgroundSize : '100% 100%', color : 'white' ,width : this.state.width, height : this.maxHeight, textAlign : 'center', marginLeft : this.state.margin}}><h6 style={{position : 'relative', top : '50%', transform : 'translateY(-50%)'}}>Suggestions</h6></div>
                //                 {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map((e) => {
                //                     return <div key={e} style={{backgroundImage : `url(${Image})`, backgroundSize : '100% 100%', color : 'white' ,width : this.state.width, height : this.maxHeight, textAlign : 'center', marginLeft : this.state.margin}}>
                //                         <h6 style={{fontSize : `${75+(this.state.zoom)}%`,wordWrap : 'break-word',position : 'relative', top : '50%', transform : 'translateY(-50%)'}}>{this.names[e]}</h6></div>
                //                 })}
                //             </Stack>
                //         </div>
                //         {[0,1,2].map((x) => {
                //         const num = (this.state.current_new+x)%3;
                //         return (<div key={num}>
                //             <Stack>
                //                 <div style={{backgroundImage : `url(${Image})`, backgroundSize : '100% 100%', color : 'white', width : this.state.width, height : this.maxHeight, textAlign : 'center', marginLeft : this.state.margin}}><h6 style={{position : 'relative', top : '50%', transform : 'translateY(-50%)'}}>{this.events[num]}</h6></div>
                //                 {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map((e, i) => {
                //                     return <div key={i}><Block head="Temp" body = {this.mat[this.names[e]][num]} height={this.maxHeight} margin ={0}/></div>
                //                 })}
                //             </Stack>
                //         </div>);
                //         })}
                //         <div>
                //             <Stack>
                //                 <Button style={{height : this.maxHeight, color : 'white', backgroundImage : `url(${Image})`, backgroundSize : '100% 100%', marginLeft : this.state.margin}} variant='' onClick={() => {this.setState((state, props) => {const x = (state.current_new+6)%3; return {current_new : (x>5)*x}; } )}}><h3 style={{position : 'relative', top : '50%', transform : 'translateY(-50%)'}}>&raquo;</h3></Button>
                //                 <div>
                //                     <Row style={{margin : 0, color : 'white'}}>
                //                     <button class='btn btn-light btn-xs' onMouseEnter={(e) => {e.target.style.background = 'white'; e.target.style.color = Texture.dark1}} onMouseLeave={(e) => {e.target.style.background = 'transparent'; e.target.style.color = 'white'}} style={{background : 'transparent', 
                //                                 border : 'solid transparent',
                //                                 color : 'white',}}
                //                                 onClick ={() => this.setState((state) => {return {zoom : ((state.zoom>10) ? state.zoom-1 : 10)}})}>
                //                                     &minus;</button>
                //                         <div>
                //                         <FormRange value={10*(this.state.zoom-10)} onChange={(e) => this.setState({zoom : 10+Math.round(e.target.value/10)})} style={{width : '5vw'}}/>
                //                         <h6 style={{textAlign : 'center', margin : 'auto'}}>{10*(this.state.zoom-10)}</h6>
                //                         </div>
                //                     <button class='btn btn-light btn-xs' onMouseEnter={(e) => {e.target.style.background = 'white'; e.target.style.color = Texture.dark1}} onMouseLeave={(e) => {e.target.style.background = 'transparent'; e.target.style.color = 'white'}} style={{background : 'transparent', 
                //                                 border : 'solid transparent',
                //                                 color : 'white',}}
                //                                 onClick ={() => this.setState((state) => {return {zoom : ((state.zoom<20) ? state.zoom+1 : 20)}})}>
                //                                     &#43;</button>
                //                     </Row>
                //                 </div>
                //             </Stack>
                            
                //         </div>
                //     </Row>
                //     <br />
                // </Scrollbar>
                }
				{/* <Row>
                    <div style={{width : this.state.Headwidth, textAlign : 'center', border : 'double', margin : this.state.margin}}>Suggestions</div>
                        <Col xs = {10}>
                            <Row>
                                {this.names.map((x, i) => <div key={i} style={{width : this.state.width, border : 'double', textAlign : 'center', margin : this.state.margin}}>{x}</div>)}
                            </Row>
                        </Col>
				</Row> */}
				{/* {this.events.map((x, i) => 
				<Row>
						<div style={{width : this.state.Headwidth, textAlign : 'center', border : 'double', margin : this.state.margin}}>{x}</div>
                        <Col>
                            <Row>
                            {this.mat[x].map((y, j) => <div key={y} style = {{width : this.state.width, border : 'solid grey', margin : this.state.margin, textAlign : 'center'}}>{y}</div>)}
                            </Row>
                        </Col>
				</Row>
				)} */}
			</Container>
			</div>
		</Collapse>
        </div>
		);
	}
}