import React, { Component } from 'react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import firebase from 'firebase/app'
import 'firebase/firestore'

class Chart extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    // legendPosition:'right',
    // location:'City'
  }

  render(){
    
// update function
const update = (data) => {
  
    // this.state.chartData.labels.push();
    // this.setState(prevState => ({
      // labels: ['blah']
      // data: data[1]
    // }));
    // this.state.chartData.datasets.forEach((dataset) => {
      // this.setState(this.chartData.datasets[0].push(data));
     
    // });

// this.setState(() => {
  // this.state.chartData.datasets[0].data = this.data;
  // this.state.chartData.labels = this.data;
// } )

  //  console.log(data[0].author);//blue
  //  console.log(this.state.chartData.datasets[0].data);//y axis data
};//const update close

// data array and firestore
var data = [];
const db = firebase.firestore();
db.collection('books').orderBy('genre').onSnapshot(res => {

  res.docChanges().forEach(change => {

    const doc = {...change.doc.data(), id: change.doc.id};

    switch (change.type) {
      case 'added':
        data.push(doc);
        break;
      case 'modified':
        const index = data.findIndex(item => item.id === doc.id);
        data[index] = doc;
        break;
      case 'removed':
        data = data.filter(item => item.id !== doc.id);
        break;
      default:
        break;
    }

  });

//   // call the update function
  update(data);
});
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}


export default Chart;