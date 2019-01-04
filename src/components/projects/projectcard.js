import React from 'react';
import { Card, CardTitle, CardActions} from 'react-mdl';


const projectCard = (props) => {
  return (
    <Card shadow={0} style={{width: '450px', height: '256px', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover', margin: 'auto', borderRadius:'10px'}}>
        <CardTitle expand />
        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
            <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                Image.jpg
                </span>
        </CardActions>
    </Card>
  );
};

export default projectCard;