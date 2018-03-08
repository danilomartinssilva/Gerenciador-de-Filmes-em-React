import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import api from './Api';



class Home extends Component{


    constructor(props){
      
        super(props)
        this.state = {
          genres:[],
          isLoading:false
        }
      } 
     
  componentDidMount(){
    this.setState({isLoading:true});
    api.loadGenres().then((res)=>{      
      console.log(res);
     this.setState({
       genres: res.data,
       isLoading : false
     })   
    }).catch((err)=>{
      console.log(err);
    })
   
    //setInterval(()=>this.setState({count:this.state.count+1}),1000);
  }
  
  
    
 
  renderGeneralLink(genre){
      console.log(genre);
    return (
      <span key={ genre.toString() } >  <Link to={`/series/${genre}` }>{genre} </Link> </span>
    );
    
  }
  
    render(){
        return (     
          
          <section id="intro" className="intro-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1><img src="images/logo.png" /></h1>
          <p>Nunca mais esqueça uma série que você assistiu ou que alguém lhe indicou.</p>
            
          {this.state.isLoading && <span>Aguarde, carregando...</span>}
          {!this.state.isLoading && <div> Ver séries do gênero: {this.state.genres.map(this.renderGeneralLink)}</div>}
        </div>
      </div>
    </div>
  </section>

        );
    }

}

export default Home;