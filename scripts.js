var BedNumbers = React.createClass({
	getInitialState: function() {
		return{
			myColor: 'green',
			numBeds: 0
		}
	},
	lessBeds: function() {
		var newNumBeds = this.state.numBeds - 1
		this.setState({numBeds: newNumBeds})
	},
	moreBeds: function() {
		var newNumBeds = this.state.numBeds + 1
		this.setState({numBeds: newNumBeds})
	},
	render: function(){
		return(
			<div>
				<button onClick={this.lessBeds}>-</button>
				<h1 style={{color: this.state.myColor}}>I have {this.state.numBeds} beds.</h1>
				<button onClick={this.moreBeds}>+</button>
			</div>
			);
	}
});
var ChairNumbers = React.createClass({
	getInitialState: function() {
		return{
			myColor: 'blue',
			numChairs: 0
		}
	},
	lessChairs: function() {
		var newNumChairs = this.state.numChairs - 1
		this.setState({numChairs: newNumChairs})
	},
	moreChairs: function() {
		var newNumChairs = this.state.numChairs + 1
		this.setState({numChairs: newNumChairs})
	},
	render: function(){
		return(
			<div>
				<button onClick={this.lessChairs}>-</button>
				<h1 style={{color: this.state.myColor}}>I have {this.state.numChairs} chairs.</h1>
				<button onClick={this.moreChairs}>+</button>
			</div>
			);
	}
});
var Page = React.createClass({
	render: function(){
		return(
			<div>
				<BedNumbers />
				<br></br>
				<ChairNumbers />
			</div>
			)
	}
})
ReactDOM.render(<Page />, document.getElementById('container'));