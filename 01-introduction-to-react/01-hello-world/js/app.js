var HelloWorld = React.createClass({
    render: function () {
        return <h1>hello {this.props.name} and i love {this.props.action}</h1>;
    }
});

ReactDOM.render(
    <div>
        <HelloWorld name="ivan" action="run"/>
        <HelloWorld/>
        <HelloWorld/>
    </div>,
    document.getElementById("content")
);