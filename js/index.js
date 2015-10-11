
// main.js
// var React = require('react');
// var ReactDOM = require('react-dom');

var Kevins = React.createClass({
	render: function(){

		var kevins = [];

		for (var i = 0; i < this.props.data.length; i++) {
			kevins.push(<Kevin info={this.props.data[i]} key={i} />);
		};

		return (
			<div>
				{kevins}
			</div>
		);

	},

	componentDidMount: function(){

		console.log("Kevins is rendered");
		// set onclick listener for Kevin, expand the detail of banker
		$(".kevin").click(function(){

			// check whether the expand block inside is blocked?
			var displayed = $(this).find(".expand").css("display");
			if (displayed == "none") {
				$(this).find(".expand").css("display", "block");
			}else{
				$(this).find(".expand").css("display", "none");
			}

		});

		// set onclick listener for apply button
		$("#apply-filter").click(function(){

			// tackling the language first.
			filterKevinsWith("Chinese");

		});


	}
});

var Kevin = React.createClass({
    render: function() {
        	
    	var kevinInfo = this.props.info;
    	// console.log(kevinInfo);

    	var displayNoneStyle = {
			display: 'none',
		};

        return (<div className="kevin closed" data-language={kevinInfo.language}>
        			<Profile profile={kevinInfo.profile} />
        			<div className="profile-right">
	        			<Name name={kevinInfo.name} />
	        			<Bank bank={kevinInfo.bank_name} />
	        			<Address address={kevinInfo.address} />
	        			<Branch branch={kevinInfo.branch} />
	        			<div className="expand" style={displayNoneStyle}>
		        			<ServiceTags serviceString={kevinInfo.service_tags} />
		        			<WorkingDays />
		        			<Phone phone={kevinInfo.phone} />
		        			<Email email={kevinInfo.email} />
		        			<FacebookShare />

		        			<Comments commentsString={kevinInfo.comment} />
		        		</div>
	        		</div>
    			</div>);
    }
});


var WorkingDays = React.createClass({

	render: function(){

		var sevenDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
		var workingDays = [];

		for (var i = 0; i < sevenDays.length; i++) {
			if (Math.random() > 0.5) {
				workingDays.push(<WorkingDay workday={sevenDays[i]} />);
			};
		};

		return (
			<div className="working-days">{workingDays}</div>
		);
	}

});

var WorkingDay = React.createClass({

	render: function(){
		return (<div className="workday">{this.props.workday}</div>);
	}

});

var FacebookShare = React.createClass({

	render: function(){
		return (
			<div className="share-wrap">
				<div className="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button"></div>
			</div>);
	}

});

var Comments = React.createClass({

	render: function(){
		var comments = this.props.commentsString.split("|");
		comments = comments.map(function(comment){
			return <Comment comment={comment} />
		});
		// console.log(comments);
		return (<div className="comments-wrap">
					<div className="comment-title">Comments</div>
					{comments}
				</div>);
	}

});

var Comment = React.createClass({

	render: function(){
		return (<div className="comment">{this.props.comment}</div>);
	}

});

var StarBar = React.createClass({

	render: function(){

		var stars = [];

		for (var i = 0; i < this.props.stars; i++) {
			stars.push(<Star />);
		};

		return <div className="star-bar">{stars}</div>;

	}

});

var Star = React.createClass({
	render: function(){
		return <img src={"img/star.png"} className="star" />;
	}
});

var ServiceTags = React.createClass({
	render: function(){

		var serviceTags = this.props.serviceString;
		// turn it into an array

		serviceTags = serviceTags.split(",");

		var services = [];

		for (var i = 0; i < ServiceTags.length; i++) {
			services.push(<ServiceTag tag={serviceTags[i]} />);
		};

		return (<div className="service-tags">{services}</div>);
	}
});

var ServiceTag = React.createClass({

	render: function(){
		return (<button className="btn btn-default" type="submit">{this.props.tag}</button>);
	}

});


var Name = React.createClass({
	render: function(){
		return (<div className="kevin-name">{this.props.name}</div>);
	}
});

var Bank = React.createClass({
	render: function(){
		return (<div className="kevin-bank">{this.props.bank}</div>);
	}
});

var Phone = React.createClass({
	render: function(){
		return (<div className="kevin-phone">{this.props.phone}</div>);
	}
});

var Email = React.createClass({
	render: function(){
		return (<div className="kevin-email">{this.props.email}</div>);
	}
});


var Profile = React.createClass({
	render: function(){
		return (<div className="kevin-profile">
					<img className="profile-img" src={"img/profiles/" + this.props.profile} />
      			</div>);
	}
});

var Branch = React.createClass({
	render: function(){
		return (<div className="branch">{this.props.branch}</div>);
	}
});

var Address = React.createClass({
	render: function(){
		return (<a className="address" href={"http://www.google.com/maps/place/"+this.props.address} target="_blank">{this.props.address}</a>);
	}
})

var Services = React.createClass({

	render: function(){
		return (<div></div>)
	}

});


var fakeData = [];
for (var i = 0; i < 10; i++) {
	fakeData.push({
		"profile": "img/profile.png",
		"name": "Kevin",
		"bank_name": "Chase",
		"address": "50 W 34th St",
		"service_tags": "Safe Deposit Boxes,Chase Private Client,Instant Debit Card Replacement",
		"phone": "917-972-9296",
		"email": "mw10104587@gmail.com",
		"branch": "17th & 8th",
		"stars": 3
	});
};

d3.csv("data/kevin-data-4.csv", function(data){

	console.log(data);
	ReactDOM.render(
		<Kevins data= {data}/>,
	    document.getElementById('kevin-list')
	);

});

$(function() {
	$('#btn-apply-filter').click(function() {
		filterKevinsWith('Chinese');
	});
});

