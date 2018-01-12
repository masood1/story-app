import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Grid,Image,Search,Form,Card,Button} from 'semantic-ui-react'
import { searchImage} from './../../actions/imageSearchActions'

import './index.css'


class ImageSearchGallery extends Component{

    state = {
        searchInput : '',
        page: 1
    }

    changeSearchText = function(searchText){
        this.setState({ 
            searchInput: searchText,
            page: 1
        })
    }

    searchImage = function(){
       this.props.searchImage(this.state.searchInput, this.state.page)
       this.setState({ page: this.state.page + 1 })
    } 

    render(){
        let {searchImageResult} = this.props
        return(
            <Fragment>
                <Grid>
                    <Grid.Row>
                         <Grid.Column width={10}>
                         <Form>
                             <Form.Field>
                                <input placeholder='Search ...' onChange={ (e) => this.changeSearchText(e.target.value) } onBlur={ this.searchImage.bind(this) }/>
                            </Form.Field>
                            </Form>
                         
                         </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column width={10}>
                    <Card.Group fluid itemsPerRow={5} className ="search-image-gallery-scroll">
                    {
                        searchImageResult.data.map((result) =>
                            <Card className="search-image-gallery" key={result.id} raised image={result.urls.small}/> )
                    } 

                    {
                        (searchImageResult.data.length > 0)
                        ? <Button fluid onClick={ this.searchImage.bind(this) } loading={searchImageResult.fetching} >Load more</Button>
                        : ''
                    }
                             
                    </Card.Group>
                    </Grid.Column>              
                    </Grid.Row>
                </Grid>
            </Fragment>
        )        
    }
}
const mapStateToProps = state => ({
    searchImageResult: state.searchImageReducer
})
  
  export default connect(
    mapStateToProps,
    { searchImage }
  )(ImageSearchGallery)