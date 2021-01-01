import React, {Component } from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
class Dishdetial extends Component {
    constructor(props) {
        super(props);
    }
    createSelectedDish(dish) {

        if(dish != null)
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
        else
        return(
            <div></div>
        );
    }
    generateComments(dish) {
        const comments = dish.comments.map((comment) => {
            return (

                <div key={comment.id } className="mt-3"> 
                <CardText>{comment.comment}</CardText>
                <CardText>--- {comment.author}  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</CardText>
                </div>
            );
        }); 
        if(dish != null)
        return(
            <div key={dish.id + 10} className="col-12 col-md-5 mt-5">
            <Card>
                <CardBody>
                    <CardTitle>Comment</CardTitle>
                    {comments}
                </CardBody>
            </Card>
            </div>
        );
        else
        return(
            <div></div>
        );
    }


    render() {
        console.log(this.props.dish);
        if(this.props.dish != null){
            const dish = this.props.dish; 

            return(
                <div className = "container">
                    <div className='row'>
                        {this.createSelectedDish(dish)}
                        {this.generateComments(dish)}
                        

                    </div>
                </div>
            );
        }
        else
        return(
            <div></div>
        );
    }
}
export default Dishdetial; 