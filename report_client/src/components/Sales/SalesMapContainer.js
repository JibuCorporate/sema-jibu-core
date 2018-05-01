import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { GoogleApiWrapper } from 'google-maps-react';

export class SalesMapContainer extends Component {
	constructor(props, context) {
		super(props, context);
		console.log("SalesMapContainer-constructor");
		this.state = {parentDiv : document.getElementById('salesMapId')};
		this.state.lastWidth = this.state.parentDiv.offsetWidth;
		console.log("SalesMapContainer- Parent Width", this.state.lastWidth);

		// this.state.parentDiv.addEventListener('resize', (event) => console.log(event.detail));

		// This is a hack to resize the map... a better solution is needed!!!
		// The MutationObserver code commented out, doesn't seem to work
		let self = this;
		setInterval(()=>{
			if( self.state.lastWidth !== self.state.parentDiv.offsetWidth ){
				console.log("SalesMapContainer- Parent Width", self.state.parentDiv.offsetWidth);
				self.state.lastWidth = self.state.parentDiv.offsetWidth;
				if( self.state.lastWidth !== 0 ){
					document.getElementById('mapId').style["width"] = self.state.lastWidth + "px";
				}
			}
		},100);
		// function checkResize (mutations) {
		// 	var el = mutations[0].target;
		// 	var w = el.clientWidth;
		// 	var h = el.clientHeight;
        //
		// 	var isChange = mutations
		// 		.map((m) => m.oldValue + '')
		// 		.some((prev) => prev.indexOf('width: ' + w + 'px') == -1 || prev.indexOf('height: ' + h + 'px') == -1);
        //
		// 	if (!isChange)
		// 		return;
        //
		// 	var event = new CustomEvent('resize', {detail: {width: w, height: h}});
		// 	el.dispatchEvent(event);
		// }
        //
		// this.state.observer = new MutationObserver(checkResize);
		// this.state.observer.observe(this.state.parentDiv, {attributes: true, attributeOldValue: true, childList:true, characterData:true});
	}

	componentDidUpdate() {
		this.loadMap(); // call loadMap function to load the google map
	}

	loadMap() {
		if (this.props && this.props.google) { // checks to make sure that props have been passed
			const {google} = this.props; // sets props equal to google
			const maps = google.maps; // sets maps to google maps props

			const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
			const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

			const mapConfig = Object.assign({}, {
				center: {lat: 18.59737, lng: -72.32735}, // sets center of google map to NYC.
				zoom: 11, // sets zoom. Lower numbers are zoomed further out.
				mapTypeId: 'satellite' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
			});

			this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.
			let markers = [];
			let maxSales = Number.MIN_SAFE_INTEGER;
			let minSales = Number.MAX_SAFE_INTEGER;
			this.props.retailers.forEach( retailer => {
				if( retailer.total > maxSales ) maxSales = retailer.total;
				if( retailer.total < minSales ) minSales = retailer.total;

			});
			this.props.retailers.forEach( retailer => { // iterate through locations saved in state
				let gps = retailer.gps.split(',');

				if( gps && gps.length == 2) {
					const lat = parseFloat(gps[0]);
					const lng = parseFloat(gps[1]);
					const scaleVal = ()=> {
						// Convert sales to a range for the marker scales. Min sales scale = 20. Max sales scale = 100
						return 20 + 80 *  (retailer.total-minSales)/(maxSales-minSales)
					};
					let marker = new google.maps.Marker({ // creates a new Google maps Marker object.
						position: {lat: lat, lng: lng}, // sets position of marker to specified location
						map: this.map, // sets markers to appear on the map we just created on line 35
						title: retailer.name, // the title of the marker is set to the name of the location
						label: {
							text: retailer.name,
							color: "white"
						},

						icon: {
							path: google.maps.SymbolPath.CIRCLE,
							scale: scaleVal(),
							fillColor: 'blue',
							fillOpacity: 0.5,
							strokeOpacity: 0.5,
							strokeWeight: 0
						}
					});
					markers.push( marker);
				}
			});
			if( markers.length > 0 ) {
				// Zoom the map to fit all markers
				let bounds = new google.maps.LatLngBounds();
				for (let i = 0; i < markers.length; i++) {
					bounds.extend(markers[i].getPosition());
				}
				this.map.fitBounds(bounds);
			}
		}
	}


	render() {
		const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
			width: this.state.parentDiv.offsetWidth,
//			width: '400px',
			height: '400px' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
		};

		return ( // in our return function you must return a div with ref='map' and style.
			<div ref="map" style={style}  id="mapId">
				loading map...
			</div>
		)
	}
}
export default GoogleApiWrapper({
	apiKey: "AIzaSyBngoSG-T08Cfd0OdmbLGh-c2kgPiK82EU"
})(SalesMapContainer)
