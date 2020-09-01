import React from 'react';
import Day from './Day';
import { groupByDays, IDay, IRecord } from './models';
import NewRecord from './NewRecord';

interface IProps {
}

interface IState {
    records: IRecord[];
}

class App extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            records: items,
        };

        this.addRecord = this.addRecord.bind(this);
        this.removeRecord = this.removeRecord.bind(this);
    }

    render() {
        const days = groupByDays(this.state.records).map((day: IDay) => {
            return (
                <Day key={day.id} day={day} remove={this.removeRecord} add={this.addRecord}/>
            );
        });

        const date = new Date();
        date.setHours(0, 0, 0, 0);

        return (
            <div>
                <div>
                    <NewRecord date={date}/>
                </div>
                <div>
                    {days}
                </div>
            </div>
        );
    }

    removeRecord(id: number): void {
        this.setState((state) => ({
            records: state.records.filter((r) => r.id !== id)
        }));
    }

    addRecord(record: IRecord) {
        this.setState((state) => ({
            records: [...state.records, record]
        }));
    }
}

export default App;

const items: IRecord[] = [
    {
        id: 1,
        title: 'Coffee with sugar',
        date: new Date('2003-12-11'),
        sum: 60
    },
    {
        id: 2,
        title: 'Melon',
        date: new Date('2003-12-12'),
        sum: 90
    },
    {
        id: 3,
        title: 'Coffee with sugar',
        date: new Date('2003-12-14'),
        sum: 60
    },
    {
        id: 4,
        title: 'Coffee with sugar',
        date: new Date('2003-12-14'),
        sum: 60
    },
];
