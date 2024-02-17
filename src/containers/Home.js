//import logo from './logo.svg'
//import './Home.css';
import React, { Component } from 'react';
import Header from '../components/Header';
import Monitor from "../components/moniter/Monitor";
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { membersFetch } from "../actions";

class Home extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.membersFetch();
  }
   
  render() {
    return (
      <div>
        <Header />
          {this.props.members && Array.isArray(this.props.members) &&
            (<Monitor members = {this.props.members} />)
          }
        <Footer company= "Sunsnack" email="suriya.suks@ku.th" />
      </div>
    );
  }
}

function mapStateToProps ({members}) {
  return { members };
}

export default connect(mapStateToProps,{membersFetch})(Home);
