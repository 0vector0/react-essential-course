/**
 * Created by 0vect on 15.06.2017.
 */


var Hello = React.createClass({
        getInitialState: function () {
            return {
                name:'stranger'
            }
        },
        handleNameChange(event) {
            // console.log(event.target.value);
            this.setState({
                name: event.target.value
            });
        },

        render: function () {
            return (
                <div>
                    <input type="text" onChange={this.handleNameChange}/>
                    <div>Hello, {this.state.name}!</div>
                </div>
            )
        }
    })
;

ReactDOM.render(<Hello/>, document.getElementById('content'));
