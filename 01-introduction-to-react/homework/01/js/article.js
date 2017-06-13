/**
 * Created by 0vect on 13.06.2017.
 */
var Title = "Title";
var Author = "Lorem";
var Body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dolor diam, ullamcorper in molestie ultricies, iaculis quis dolor. Proin ac blandit mauris. Vivamus id fermentum mi. Nullam vel enim tempus, gravida velit in, elementum magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ultrices a enim vel tincidunt. Morbi vitae erat a sapien molestie bibendum sit amet eget massa. Praesent vitae eleifend neque. Fusce in turpis condimentum, mollis nulla sed, vulputate ex. Donec ultricies nunc id elit imperdiet pulvinar. Sed consequat magna eleifend tortor pharetra scelerisque.";

var Article = React.createClass({
    render: function () {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.author}</p>
                <p>{this.props.body}</p>
            </div>
        )
    }
});
ReactDOM.render(<Article
        title={Title}
        author={Author}
        body={Body}
    />,
    document.getElementById("content"));