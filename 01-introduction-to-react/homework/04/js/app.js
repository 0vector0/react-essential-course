/**
 * Created by 0vect on 16.06.2017.
 */

var Calculator = React.createClass({
    getInitialState: function () {
        return {
            first: 0,
            second: 0,
            result: 'Please input data',
            operation: ''
        }
    },
    setFirstValue: function (event) {
        this.setState({
            first: parseInt(event.target.value),
        });
    },
    setSecondValue: function (event) {
        this.setState({
            second: parseInt(event.target.value)
        });
    },
    setOperation: function (event) {
        this.setState({
            operation: event.target.value
        })
    },
    calculate: function () {

        var temlResult = 0;

        switch (this.state.operation) {
            case '+' : {
                temlResult = this.state.first + this.state.second;
                break;
            }
            case '-' : {
                temlResult = this.state.first - this.state.second;
                break;
            }
            case '*' : {
                temlResult = this.state.first * this.state.second;
                break;
            }
            default: {
                temlResult = 'input correct operation';
            }
        }
        this.setState({
            result: temlResult
        });
        return temlResult;
    },
    render: function () {
        return (
            <div>
                <input type="text" onChange={this.setFirstValue}/>
                <input type="text" onChange={this.setOperation}/>
                <input type="text" onChange={this.setSecondValue}/>
                <input type="button" onClick={this.calculate}/>
                <div>{this.state.result}</div>
            </div>
        )
    }
});

ReactDOM.render(<Calculator/>, document.getElementById('content'));