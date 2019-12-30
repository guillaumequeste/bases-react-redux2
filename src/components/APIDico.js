import React, { Component } from 'react'
import axios from 'axios'
const API_URL = 'https://api.dicolink.com/v1/mot/cheval/definitions?limite=200&api_key=F49u6WGSR1N4WV_w4Tb9vva_ENf2gc1I'

class APIDico extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mots: []
        };
    }

    componentDidMount() {
        const url = `${API_URL}`;
        axios.get(url, {headers: {'Access-Control-Allow-Origin': '*'}}).then(response => response.data)
        .then((data) => {
          this.setState({ mots: data })
          console.log(this.state.mots)
         })
      }

  render() {
    return (
        <div className="container">
            <div className="col-xs-8">
                <h1>React Axios Example</h1>
                {this.state.mots.map((mot) => (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{mot.id}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            {mot.nature}             
                        </h6>
                        <h6>{mot.source}</h6>
                    </div>
                </div>
                ))}
            </div>
       </div>
    );
  }
}
export default APIDico;