import React, { Component } from 'react'
import '../css/App.css'
import '../css/Details.css'

class App extends Component {

  constructor() {
    super();
    this.state = {
      regions: [],
      wines: []
    }
  }

  componentDidMount() {
    fetch('https://wines-api.herokuapp.com/api/regions')
      .then(response => response.json())
      .then(data => {
        this.setState({
          regions: data
        })
      })
  }
getWines(region){
  fetch('https://wines-api.herokuapp.com/api/wines?region=' + region)
  .then(response => response.json())
  .then(data => {
    this.setState({
      wines:data
    })
  })
}


  render() {
    return (
      <div>
        <h1 className="main__heading">Open Wine Database</h1>
        <div className="container__flex" >

          <div className="container__regions">
            <h1>Regions</h1>

            <ul>
              {
                this.state.regions.map(region => {
                  return <li onClick={()=>this.getWines(region)}>{region}</li>
                })
              }

            </ul>
          </div>
          <div className="container__wines">
            <h1>Wines</h1>
            <ul>
              {
                this.state.wines.map((wine) => {
                  return <li>{wine.name}</li>
                })
              }
            </ul>
          </div>
          <div className="container__details">
            <h1>Wine Details</h1>
            <div className="container__details__wine">
              <div className='wine_image'>
                <img className="img_wine" src="https://products3.imgix.drizly.com/ci-mark-west-pinot-noir-9dd7cfd74fb70f01.jpeg?auto=format%2Ccompress&dpr=2&fm=jpeg&h=240&q=20" />
              </div>
              <div className='wine_features'>
                <h1>Name Wine</h1>
                <ul>
                  <li>Appellation</li>
                  <li>Region</li>
                  <li>Color</li>
                  <li>Grapes</li>
                </ul>

                <p>
                  <span>Like</span>
                  <span>Comment</span>
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default App;
