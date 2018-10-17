import React, { Component } from 'react'
import {
    FlatList,
    Text,
    StyleSheet
} from 'react-native'
import Layout from '../components/suggestions-list-layout'
import Empty from '../components/empty'
import Separator from '../components/vertical-separator'
import Suggestion from '../components/suggestion';
import { connect } from 'react-redux'

function mapStateToProps(state){ 
    return{
        list: state.suggestionList
    }
}

class SuggestionList extends Component{
    keyExtractor = (item) => item.id.toString()
    renderEmpty = () => <Empty text="No hay sugerencias"/>
    itemSeparator = () => <Separator />
    viewMovie=(item) => {
        this.props.dispatch({
            type:'SET_SELECTED_MOVIE',
            payload:{
                movie:item,                
            }
        })
    }
    renderItem = ({item}) => {
        return(
            <Suggestion {...item}
                onPress={()=> { this.viewMovie(item) }}
            />
        )
    }
    render(){      
        return(
            <Layout
            title="Recomendado para ti"
            >
                <FlatList 
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}
                />
            </Layout>
        )
    }
}

const styles = StyleSheet.create({

})

export default connect(mapStateToProps)(SuggestionList)