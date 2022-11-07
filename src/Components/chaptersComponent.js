import React from "react";
import { Card,CardBody,CardTitle,CardText,CardLink} from "reactstrap"; 
const list = [
    {           
        title : "Game Development",
        describe : '',
        link : '',
        logo : '',
        lead : ''
    },
    {
        title : 'Web Development',
        describe : '',
        link : '',
        logo : '',
        lead : ''
    },
    {
        title : 'Competitive Coding',
        describe : '',
        link : '',
        logo : '',
        lead : ''
    },
    {
        title : 'UI/UX',
        describe : '',
        link : 'https://instagram.com/gradient.dev?igshid=YmMyMTA2M2Y=',
        logo : '',
        lead : ''
    },
    {
        title : 'AI/ML',
        describe : '',
        link : 'https://instagram.com/kognitive.ai?igshid=NDc0ODY0MjQ=',
        logo : '',
        lead : ''
    },

]
const chpts = list.map((itm) =>{
    return(
        <Card
            className="my-2"
            style={{
                width: '100%',
                height : '600px'
            }}
            >
            <CardBody>
                <CardTitle tag="h5">
                {itm.title}
                </CardTitle>
            
                <img
                    alt="Chapter Logo"
                    src={itm.image}
                    width="300px"
                    height="400px"
                />
                <img alt="lead"
                    src="" className="rounded-circle float-right" 
                    width = '100px' 
                />
                <CardText>
                    {itm.describe}
                </CardText>

                <CardLink href={itm.link}>
                Insta
                </CardLink>
            </CardBody>
        </Card>
    );
}
)

function chaptersComponent(){
    
    return(
        <div className="container">
            {chpts}
        </div>
        
    );
}
export default chaptersComponent;