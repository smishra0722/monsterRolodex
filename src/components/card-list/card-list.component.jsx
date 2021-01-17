import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component';

export const CardList = (props) => {
    return <div className='card-list'>{props.monsters.map(monster => <Card monster={monster}></Card>)}</div>
}
// <h1 key={monster.id}>{monster.name}</h1>