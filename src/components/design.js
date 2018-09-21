import React from 'react';
import Dashboard from '../containers/dashboard';
import Menu from './menu';
import Playground from './playground';

class Design extends React.Component {

    render() {
        return (
            <div>
                <Dashboard />
                <div className="row">
                    <div className="col-md-2">
                        <Menu url={
                          [
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
                        }pollInterval={2000} />
                    </div>
                    <div className="col-md-10">
                        <Playground />
                    </div>
                </div>
            </div>
        );
    }
}

export default Design;
