import React from 'react';

interface IProps {
    date: Date;
}

interface IState {
    sum: number;
    title: string;
}

class NewRecord extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            sum: 0,
            title: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        } as Pick<IState, keyof IState>);
    }

    handleSubmit(event: any) {
        event.preventDefault();
        console.info(this.state);
    }

    render() {
        return (
            <div>
                <h2>New record at: {this.props.date.toISOString()}</h2>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Title:
                            <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                        </label>
                    </div>

                    <div>
                        <label>
                            Sum:
                            <input type="number" name="sum" value={this.state.sum} onChange={this.handleChange}/>
                        </label>
                    </div>

                    <button type={'submit'}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default NewRecord;
