var CONTACTS = [
    {
        id: 1,
        name: 'Darth Vader',
        phoneNumber: '+250966666666',
        image: 'img/darth.gif',
        address: 'Tatooine',
        email: 'vader@gmail.com'
    }, {
        id: 2,
        name: 'Princess Leia',
        phoneNumber: '+250966344466',
        image: 'img/leia.gif',
        address: 'Alderaan',
        email: 'leia@gmail.com'
    }, {
        id: 3,
        name: 'Luke Skywalker',
        phoneNumber: '+250976654433',
        image: 'img/luke.gif',
        address: 'Tatuin',
        email: 'luke@gmail.com'
    }, {
        id: 4,
        name: 'Chewbacca',
        phoneNumber: '+250456784935',
        image: 'img/chewbacca.gif',
        address: 'Kashyyyk',
        email: 'chewie@gmail.com'
    }
];

var Contact = React.createClass({
    getInitialState: function () {
        return {
            isOpened: false
        }
    },
    changeView: function () {
        if (this.state.isOpened) {
            this.setState({
                isOpened: false
            });
        } else {
            this.setState({
                isOpened: true
            });
        }
    },
    render: function () {
        if (this.state.isOpened) {
            return (
                <li className="contact" onClick={this.changeView}>
                    <img className="contact-image" src={this.props.image} width="60px" height="60px"/>
                    <div className="contact-info">
                        <div className="contact-name"> {this.props.name}</div>
                        <div className="contact-number"> {this.props.phoneNumber}</div>
                        <div className="contact-number"> {this.props.address}</div>
                        <div className="contact-number"> {this.props.email}</div>
                    </div>
                </li>
            )
        } else {
            return (
                <li className="contact" onClick={this.changeView}>
                    <img className="contact-image" src={this.props.image} width="60px" height="60px"/>
                    <div className="contact-info">
                        <div className="contact-name"> {this.props.name}</div>
                        <div className="contact-number"> {this.props.phoneNumber}</div>
                    </div>
                </li>
            )
        }
    }
});


var ContactList = React.createClass({
    getInitialState: function () {
        return {
            displayedContacts: CONTACTS
        };
    },
    handleSearch: function (event) {
        var searchQuery = event.target.value.toLowerCase();
        var displayedContacts = CONTACTS.filter(function (el) {
            var searchValue = el.name.toLowerCase()
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedContacts: displayedContacts
        })
    },
    render: function () {
        return (
            <div className="contacts">
                <input type="text" className="search-field" onChange={this.handleSearch}/>
                <ul className="contacts-list">
                    {
                        this.state.displayedContacts.map(function (el) {
                            return <Contact
                                key={el.id}
                                name={el.name}
                                phoneNumber={el.phoneNumber}
                                image={el.image}
                                address={el.address}
                                email={el.email}
                            />
                        })
                    }
                </ul>
            </div>
        );
    }
});

ReactDOM.render(<ContactList/>, document.getElementById('content'));