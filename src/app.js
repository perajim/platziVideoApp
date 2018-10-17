import React, { Component } from 'react'
import Home from './screens/containers/home'
import Header from './sections/components/header'
import SuggestionList from './videos/containers/suggestions-list'
import CategoryList from './videos/containers/category-list'
import Player from './player/containers/player'
import API from '../utils/api'
import {Text, View } from 'react-native';
import { connect } from 'react-redux'
import Movie from './screens/containers/movie'

 class AppLayout extends Component{
    async componentDidMount(){
        const suggestionList = await API.getSuggestion(10)
        this.props.dispatch({
          type: 'SET_CATEGORY_LIST',
          payload:{
            categoryList
          }
        })
        const categoryList = await API.getMovies()
        this.props.dispatch({
         type: 'SET_SUGGESTION_LIST',
         payload:{
           suggestionList
         }
       })
      }
    render(){
      if(this.props.selectedMovie){
        return <Movie/>
      }
        return(
            <Home>
                <Header/>                                
                <CategoryList 
                //list={this.state.categoryList}
                />
                <SuggestionList 
                //list={this.state.suggestionList}
                />
          </Home>
        )
    }
}

function mapStateToProps(state){
  return {
    selectedMovie: state.selectedMovie,
  }
}

export default connect(mapStateToProps)(AppLayout)