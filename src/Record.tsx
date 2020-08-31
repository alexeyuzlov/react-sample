import React from 'react';
import { IRecord } from './models';

interface IProps {
    item: IRecord;

    removed(id: number): void;
}

function Record(props: IProps) {
    const item: IRecord = props.item;

    function remove() {
        props.removed(item.id);
    }

    return (
        <div>
            <div>Id: {item.id}</div>
            <div>Sum: {item.sum}</div>
            <div>Title: {item.title}</div>
            <div>Date: {item.date.toISOString()}</div>

            <button type={'button'} onClick={remove}>
                Remove
            </button>
        </div>
    );
}

export default Record;
