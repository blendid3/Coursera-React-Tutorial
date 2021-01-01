import React, {Component } from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
        console.log('Component constructor is invoked');
    }
    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }
    renderDish(dish) {
        if(dish != null) {
            return(
                <Card>
                    <CardImg width= "100%" src={dish.image} alt = {dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
    }
    componentDidMount() {
        console.log('Component Mount is invoked');
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 mt-5"> 
                    <Card onClick ={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src = {dish.image} alt = {dish.name}></CardImg>
                        <CardImgOverlay>    
                            <CardTitle >{dish.name}</CardTitle>
                        </CardImgOverlay>

                    </Card>
                </div>
            );
        }); 
        console.log('render is invoked');
        return (
            <div className = "container">
                <div className='row'>
                        {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}
export default Menu; 