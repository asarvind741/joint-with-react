import React from 'react';
import { Link } from 'react-router';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="header">
                {this.props.children}
            </div>
        );
    }
}

export default Dashboard;
