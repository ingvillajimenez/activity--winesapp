import React, { Component } from 'react'
import '../css/App.css'
import '../css/Details.css'

class App extends Component {

  constructor() {
    super();
    this.state = {
      regions: []

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
                  return <li>{region}</li>
                })
              }

            </ul>
          </div>
          <div className="container__wines">
            <h1>Wines</h1>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
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