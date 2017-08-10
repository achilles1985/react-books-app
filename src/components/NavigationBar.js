import * as React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
class NavigationBar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Books</a></li>
                        <li><a href="#">Add book</a></li>
                        <li><a href="#">Page 2</a></li>
                        <li><a href="#">Page 3</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;