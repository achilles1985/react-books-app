import Route from 'react-router';
import * as React from "react";
import App from "./App";
import Book from "./components/Book";
import Books from "./components/Books";

const routes = (
    <Route name="app" path="/" component={App}>
        <Route name="books" component={Books}/>
        <Route name="book" component={Book} />
    </Route>
);

export default routes;