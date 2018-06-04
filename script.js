var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
      });
    },

    componentWillMount: function() {
        console.log('przed renderowaniem...');
    },

    componentDidMount: function() {
        console.log('po renderowaniu...');
    },

    render: function() {
        console.log('renderowanie...');
        return React.createElement('div', {},
            React.createElement('button', {onClick: this.decrement}, "Odejmij"),
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, "Dodaj")            
        );
    }
});

var element = React.createElement('div', {},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter),
);

ReactDOM.render(element, document.getElementById('app'));
