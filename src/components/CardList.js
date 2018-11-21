import React from 'react';
import Card from './Card';

// const CardList = ({ robots }) => { // without {} robots gives only one value or object, to get all of the objects we need to wrap with {}
  // const CardArray = robots.map((robot) => {
  //   return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />;
  // });
  // return <div> { CardArray } </div>;

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((robot) => {
          return <Card 
                    key  ={robot.id} 
                    id   ={robot.id} 
                    name ={robot.name} 
                    email={robot.email} 
                  />;
        })
      } 
    </div>
  );
}

export default CardList;