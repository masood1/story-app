import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Grid,Image,Search,Form,Card} from 'semantic-ui-react'
import { searchImage} from './../../actions/imageSearchActions'

import './index.css'


class ImageSearchGallery extends Component{

    state = {
        searchInput : ''
    }

    searchImage = function(e){
       this.props.searchImage(e)
    }

    render(){
        return(
            <Fragment>
                <Grid>
                    <Grid.Row>
                         <Grid.Column width={8}>
                         <Form>
                             <Form.Field>
                                <input placeholder='Search ...' onBlur = {(e)=>this.searchImage(e.target.value)}/>
                            </Form.Field>
                            </Form>
                         
                         </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column width={8}>
                    <Card.Group fluid itemsPerRow={4}>
                    {this.props.searchImageResult.data.map((result) =>
                            <Card className="search-image-gallery" key={result.id} raised image={result.urls.small}/>
                    )}         
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