import React from "react";
import { Card,CardBody,CardTitle,CardText,CardLink,Button} from "reactstrap"; 

const list = [
    {           
        title : "Game Development",
        describe : '',
        link : '',
        logo : 'gameCube.png',
        lead : ''
    },
    {
        title : 'Web Development',
        describe : '',
        link : 'https://instagram.com/__web.dev?igshid=YmMyMTA2M2Y=',
        logo : 'web_dev.jpg',
        lead : ''
    },
    {
        title : 'Competitive Coding',
        describe : '',
        link : '',
        logo : 'CPC.jpg',
        lead : ''
    },
    {
        title : 'UI/UX',
        describe : '',
        link : 'https://instagram.com/gradient.dev?igshid=YmMyMTA2M2Y=',
        logo : 'UI.png',
        lead : ''
    },
    {
        title : 'AI/ML',
        describe : '',
        link : 'https://instagram.com/kognitive.ai?igshid=NDc0ODY0MjQ=',
        logo : 'Kognitive_AI_png.png',
        lead : 'Ai_lead.jpg'
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
                    src={itm.logo}
                    width="320px"
                    height="250px"
                />
                <img alt="lead"
                    src={itm.lead} className="rounded-circle float-right" 
                    width = '120em' 
                />
                <CardText>
                    {itm.describe}
                </CardText>
                <Button className="btn-primary btn-lg rounded bg-primary">
                <CardLink href={itm.link} className='text-white'>
                Follow on Instagram
                </CardLink>
                </Button>
            </CardBody>
        </Card>
    );
}
)

function Chapters(){
    
    return(
        <div className="container">
            {chpts}
        </div>
        
    );
}
export default Chapters;