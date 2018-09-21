import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import MenuList from './menuList';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "id": 1,
                    "componentName": "Base"
                },
                {
                    "id": 2,
                    "componentName": "Circle"
                },
                {
                    "id": 3,
                    "componentName": "Ellipse"
                },
                {
                  "id": 4,
                  "componentName": "Polygon"
                },
                {
                  "id": 5,
                  "componentName": "Image"
                },
                {
                  "id": 6,
                  "componentName": "Path"
                },
                {
                  "id": 7,
                  "componentName": "Rhombus"
                },
                {
                  "id": 8,
                  "componentName": "TextBlock"
                }
            ]
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h4>Please Slect One...</h4>
                <MenuList data={this.state.data} />
            </div>
        );
    }
}

export default Menu;
