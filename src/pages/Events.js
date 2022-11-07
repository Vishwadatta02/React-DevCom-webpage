
import React  from "react";
import { Card,CardBody,CardTitle,CardText,CardLink,Button} from "reactstrap";

const eventsList =[
    {
        title : 'Game Development Workshop',
        date : 'Date : 14th &15th Nov2022',
        link : '',
        list : [
            'Learn fundamentals about game development.',
            'Get familiar with game engines like Unity, Unreal Engine, Roblox Studio.',
            'To create new gaming applications and educate peers on game design.',
            'Launch games on Playstore and other game hosting space.', 
            'To have a strong game development community'
        ]
    },
    {
        title : 'Competative Programming Workshop',
        date : 'Date : 18th Nov2022',
        link : '',
        list : [
            'To invoke the essence of problem-solving in students.','Sharpen algorithm design and coding skills.',
            'To improve speed, efficiency, and ability to solve programming problems.',
            'To help in interview preparation.'
        ]
    },
    {
        title : 'UI/UX Workshop',
        date : 'Date : 19th Nov2022',
        link : '',
        list : [
            'To understand the difference between UI and UX.','Get familiar with design tool Figma.',
            'Have a brief idea on Color theory and Typography.','Design user-friendly wireframes.',
            'To help students visual their app or website before implementing using code.'
        ]
    },
    {
        title : 'Web Development Workshop',
        date : 'Date : 21st Nov2022',
        link : '',
        list : [
            'To educate students about website building techniques.', 
            'To strengthen their HTML and CSS skills.', 
            'To improve their efficiency in creating websites on their own.'
        ]
    },
    {
        title : 'Cross-Platfrom Connoisseurs Workshop',
        date : 'Date : 23rd to 26th Nov2022',
        link : '',
        list : [
            'Learn how to build Android apps using Jetpack Compose, Android’smodern UI toolkit at Compose Camp where attendees get hands-on coding experience with Compose.'
        ]
    },
    
]
const event = eventsList.map((event) =>
{
    const listItems =event.list.map((listItem)=>{
        return(
            <li>{listItem}</li>
        );
    })
    return(
        <>
        <Card
            className=" mt-5 mb-5 border border-dark "
            style={{
                width: '100%',
            }}
            >
            <CardBody>
                <CardTitle tag="h3" style={{color : 'darkblue'}}>
                {event.title}
                </CardTitle>

                <p className="float-right text-danger">{event.date}</p>
                <CardText>
                    <ul>
                        {listItems}
                    </ul>
                </CardText>
                <Button  className="btn-primary btn-lg rounded ">
                <CardLink href={event.link} className='text-white'>
                    Register
                </CardLink> 
                </Button>          
            </CardBody>

        </Card>
        </>
    );
})

function Events(){
    return(
        <div className="container ">
            <h2 className="mt-5">Upcoming Events</h2>
            <hr></hr>
            {event}
        </div>
    );
}

export default Events;