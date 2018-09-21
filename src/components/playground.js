import React from 'react';
import ReactDOM from 'react-dom';
import joint from 'jointjs/index';
import { connect } from 'react-redux';
import Shapes from '../jointjs-configuration/Shapes';



class Graph extends React.Component {

    constructor(props) {
        super(props);
        this.graph = new joint.dia.Graph();
    }

    componentDidMount() {
        this.paper = new joint.dia.Paper({
            el: ReactDOM.findDOMNode(this.refs.canvasArea),
            width: 600,
            height: 400,           
            drawGrid: true,
            gridSize: 20,
            model: this.graph
        });
    }

    addNode(title) {

        if(title == "Base"){
        let a1 = new joint.shapes.devs.Atomic({
            position: { x: 200, y: 200 },
            inPorts: [''],
            outPorts: ['']
        });
        this.graph.addCells([a1]);
       }
       else if(title == "Circle"){
           console.log("sds", title)
        let a1 = new joint.shapes.basic.Circle({
            position: { x: 211, y: 211 },
            inPorts: [''],
            outPorts: ['']
        });
        this.graph.addCells([a1]);
       }
       else if(title == "Ellipse"){
        let a1 = new joint.shapes.basic.Ellipse({
            position: { x: 200, y: 200 },
            inPorts: [''],
            outPorts: ['']
        });
        this.graph.addCells([a1]);
       }
       else if(title == "Polygon"){
        let a1 = new joint.shapes.basic.Polygon({
            position: { x: 200, y: 200 },
            inPorts: [''],
            outPorts: ['']
        });
        this.graph.addCells([a1]);
       }
       else if(title == "Image"){
        let a1 = new joint.shapes.basic.Image({
            position: { x: 200, y: 200 },
            inPorts: [''],
            outPorts: ['']
        });
        this.graph.addCells([a1]);
       }
       else if(title == "Path"){
        let a1 = new joint.shapes.basic.Path({
            position: { x: 200, y: 200 },
            inPorts: [''],
            outPorts: ['']
        });
        this.graph.addCells([a1]);
       }
       else if(title == "Rhombus"){
        let a1 = new joint.shapes.basic.Rhombus({
            position: { x: 200, y: 200 },
            inPorts: [''],
            outPorts: ['']
        });
        this.graph.addCells([a1]);
       }
       else if(title == "TextBlock"){
        let a1 = new joint.shapes.basic.TextBlock({
            position: { x: 200, y: 200 },
            inPorts: [''],
            outPorts: ['']
        });
        this.graph.addCells([a1]);
       }
       

    }


    render() {
        if (this.props.newNodes[0] != null) {
            this.addNode(this.props.newNodes[0]);
        }

        return (
            <div id="playground" ref="canvasArea" className = "playground">
            </div>);
    }
}

function mapStateToProps(state) {
    if (state.newNodes.length == undefined)
        return {newNodes : []};
    else
        return { newNodes : [state.newNodes] };
}

export default connect(mapStateToProps)(Graph)
