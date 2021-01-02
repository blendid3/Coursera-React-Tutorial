import React, {Component } from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
    
    return(
        <div key={dish.id} className="col-12 col-md-5 mt-5">
        <Card>
            <CardImg width= "100%" src={dish.image} alt = {dish.name}></CardImg>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        </div>
    );


  }

  function RenderComments({comments}) {
    
    const comments_render = comments.map((comment) => {
        return (

            <div key={comment.id } className="mt-3"> 
            <CardText>{comment.comment}</CardText>
            <CardText>--- {comment.author}  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</CardText>
            </div>
        );
    }); 
    
    return(
        <div  className="col-12 col-md-5 mt-5">
        <Card>
            <CardBody>
                <CardTitle>Comment</CardTitle>
                {comments_render}
            </CardBody>
        </Card>
        </div>
    );

    
  }

  const  DishDetail = (props) => {
    if(props.dish != null){
        const dish = props.dish; 

        return(
            <div className = "container">
                <div className='row'>
                    <RenderDish dish = {props.dish }/>
                    <RenderComments comments = {props.dish.comments} />
                </div>
            </div>
        );
    }
    else
    return(
        <div></div>
    );
    
  }



export default DishDetail; 