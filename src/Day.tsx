import React from 'react';
import Record from './Record';
import { IDay, IRecord } from './models';

let nextId = 0;

interface IProps {
    day: IDay;

    add(record: IRecord): void;

    remove(id: number): void;
}

function Day(props: IProps) {
    const records = props.day.items.map((item: IRecord) => {
        return (
            <Record key={item.id} item={item} removed={props.remove}/>
        );
    });

    return (
        <div>
            <h2>{props.day.date.toISOString()}</h2>
            <div>{records}</div>

            <button onClick={addRecord}>Add</button>
        </div>
    );

    function addRecord() {
        props.add({
            id: --nextId,
            date: props.day.date,
            sum: 60,
            title: 'Coffee with sugar',
        });
    }
}

export default Day;
