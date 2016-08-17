var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var userRouterHistory = ReactRouter.userRouterHistory;
var CreateHashHistory = require('react-router/node_modules/history/lib/createHashHistory');

var History = useRouterHistory(CreateHashHistory)({ queryKey: false });

var Routes = (
    <Router history={History}>
        <Route path="/" component={Base} >

        </Route>
    </Router>
);

module.exports = Routes;
