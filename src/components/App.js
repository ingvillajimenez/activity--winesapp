import React, { Component } from 'react'
import '../css/App.css'
import '../css/Details.css'

class App extends Component {

  constructor() {
    super();
    this.state = {
      regions: [],
      wines: [],
      image: "",
      desc: ""


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

getDescription= (wineId) => {
  fetch('https://wines-api.herokuapp.com/api/wines/'+  wineId)
  .then (res => res.json())
  .then(response => {

    this.setState({
      desc: response
    })
  })
}

getWine = (wineId) => {
  fetch('https://wines-api.herokuapp.com/api/wines/'+ wineId +'/image')
  .then(response => {
    console.log(response)
    this.setState({
      image : response.url
    })
  })
  this.getDescription(wineId)
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
                  // console.log(wine)
                  return <li onClick={ () => this.getWine(wine.id)}>
                  {wine.name}
                  </li>
                })
              }
            </ul>
          </div>
          <div className="container__details">
            <h1>Wine Details</h1>
            <div className="container__details__wine">
              <div className='wine_image'>
                <img className="img_wine" src={this.state.image} />
              </div>
              <div className='wine_features'>
                <h1>Name Wine</h1>
                <ul>
                  <li>Appellation: {this.state.desc && this.state.desc.appellation.name}</li>
                  <li>Region: {this.state.desc && this.state.desc.appellation.region }</li>
                  <li>Color: {this.state.desc && this.state.desc.type }</li>
                  <li>Grapes: {this.state.desc && this.state.desc.grapes.map(grape => {
                    return <span>{grape}</span>
                  })
                }</li>
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
