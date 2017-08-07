import React from 'react';


class Book extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert("Hello, there!");
    }

    render() {
        return (
            <tr onClick={this.handleClick} onMouseOver={this.props.onBookOverEvent} style={{backgroundColor: this.props.color}}>
                <td>{this.props.book.title}</td>
                <td>{this.props.book.author}</td>
                <td>{this.props.book.year}</td>
            </tr>
        );
    }
}

export default Book;