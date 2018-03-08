import React, { Component } from 'react';
import api from './Api';
import { Redirect } from 'react-router-dom';
 const statuses = {
    'watched':'Assistido',
    'watching': 'Assistindo',
    'toWatch':'Assistir'
};

class NewSeries extends Component {
    constructor(props){
        super(props)
        this.state = {
          genres:[],
          isLoading:false,
          redirect:false,
        }
        this.saveSeries = this.saveSeries.bind(this);
      } 
    saveSeries(){
      //console.log(this.refs.name.value);
      const newSeries = {
            name:this.refs.name.value,
            status:this.refs.status.value,
            genre:this.refs.genre.value,
            comments:this.refs.comment.value

      } 
      api.saveSeries(newSeries).then((res)=>{
            this.setState({
                redirect:'/series/'+ this.refs.genre.value
            })
      }).
      catch((err)=>{
        console.log(err);
      });
      console.log(newSeries);
    }
    componentDidMount(){
        this.setState({
            isLoading:true
        });
       api.loadGenres().then((res)=>{
           
            this.setState({
                
                genres: res.data,
                isLoading : false    
            });
       }).catch((err)=>console.log(err));

    }
    render(){

        return (
        
        
        <section className="intro-section">
          { this.state.redirect &&
             <Redirect to={this.state.redirect} />
          }   
        
        <h1>New Series</h1>
            <form>
                Nome:<input type="text" ref="name" className="form-control" placeholder="Enter is name" /><br/>                
                Status: <select ref="status"> {Object.keys(statuses).map(key => <option key={key} value={key}>{statuses[key]}</option>)} </select><br/>
                Gênero: <select ref="genre"> {this.state.genres.map(key=> <option key={key} value={key}>{key}</option>)} </select><br/>
                Comentários:<textarea ref="comment" className="form-control"></textarea><br/>
                <button type="button" onClick={this.saveSeries}>Salvar </button>

            </form>

        </section>)
    }
}
export default NewSeries;