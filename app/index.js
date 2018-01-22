var React =  require('react');
var ReactDom = require('react-dom');
require('./index.css');


//state
//lifecycle
//ui

class App extends React.Component {
    render() {
        return  (
            <div>
                Hello Superman!!
            </div>
        )
    }
} 

ReactDom.render(
    <App />, 
    document.getElementById('app')
)