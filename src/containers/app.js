import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div className='container-narrow wrapper'>
             <h4><Link to="/design">Click Here to Design</Link></h4>
            </div>
        );
    }
}

export default App;
