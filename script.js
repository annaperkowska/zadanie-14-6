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

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},


	render: function() {
		return React.createElement('div', {className: 'licznik'},
					React.createElement('button', {onClick: this.increment}, 'Add'),
					React.createElement('button', {onClick: this.decrement}, 'Subtract'),
					React.createElement('span', {}, 'Licznik ' + this.state.counter)
		);
	},


getDefaultProps: function() {
	console.log('coś');
},

componentWillMount: function(){
    console.log('Zaraz coś się wydarzy, np. nastąpi załadowanie strony - ikonka uploadu');
},

componentDidMount: function(){
	console.log('Coś się wydarzyło, np. został załadowany plik, można wyświetlić alert')
	alert('Załadowano plik');
},


componentWillReceiveProps: function() {
	console.log('Stan przed wczytaniem nowych właściwości, ')
},

shouldComponentUpdate: function() {
	console.log('Sprawdzenie czy trzeba przerenderować komponent, jeśli damy false to blokujemy dalsze działanie komponentu, w tej aplikacji przestaje działać +/- na click');
	return (true);
},

componentWillUpdate: function() {
	console.log('Stan tuż przed zmianą komponentu')
},

componentDidUpdate: function() {
	console.log('Stan tuż po zmianie komponentu')
},

componentWillUnmount: function() {
	console.log('Stan tuż przed usunięciem komponentu')
}

});

	
var manyCounters = React.createElement('div', {className: 'manyCounters'},
	React.createElement('h1', {}, 'Zaawansowana matematyka ;)'),
	React.createElement(Counter),
	React.createElement(Counter),
	React.createElement(Counter)
	);

var counter = React.createElement(Counter);

ReactDOM.render(manyCounters,
	document.getElementById('app')
);



