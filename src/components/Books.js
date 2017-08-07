import React from 'react';
import Book from "./Book";

class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'white'
        }

        this.handleOnBookOverEvent = this.handleOnBookOverEvent.bind(this);
    }

    handleOnBookOverEvent() {
        this.setState({color: 'green'});
    }

    render() {
        return (
            <table className="table table-bordered table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Year</th>
                </tr>
                </thead>
                <tbody>
                {this.props.books.map((book, index) => {
                    return <Book book={book} key={index} onBookOverEvent={this.handleOnBookOverEvent} color={this.state.color}/>
                })}
                </tbody>
            </table>
        );
    }
}

export default Books;