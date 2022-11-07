import React from "react";
import { Card,CardBody,CardTitle,CardText} from "reactstrap";
import './Component.css';


const cardDetails = [
    {
        no : "01",
        describe : "Live Interactive session on trending topics"
    },
    {
        no : "02",
        describe : "Mind Blowing Hackathons"
    },
    {
        no : "03",
        describe : "Compelling projects for your portfolio"
    },
    {
        no : "04",
        describe: "A great networking oportunity"
    }
];

const displayCard = cardDetails.map((crd) =>{
    return(
        <div className="col m-1 cards" key={crd.no}>
            <Card className="text-center "  style={{
                width: '15em',
                height : '10em',
                backgroundColor : '#011c45',
                color : 'white',
                backgroundImage: 'linear-gradient(to bottom right, rgb(3, 6, 99), rgb(19, 248, 192))',
                }}>
                <CardBody>

                    <CardTitle><h3>{crd.no}</h3></CardTitle>
                    <CardText style={{color : 'white'}}>{crd.describe}</CardText>
                
                </CardBody>
            </Card>
        </div>
        );
});
function Cards(){
    
    return(
        <div class="container mt-5">
            <div class="row justify-content-center">
                <h1 className="text-center" >WHAT'S IN IT FOR YOU!!</h1>
            </div>
            <div className="row mb-5 mt-5">
                {displayCard}
            </div>
        </div>
        
    );
}


export default Cards;