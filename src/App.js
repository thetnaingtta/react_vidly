import "./App.css";
import Movies from "./components/movies";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";
import Customers from "./components/customers";

function App() {
  return (
    <main className="container">
      <Switch>
        <Route path="/movies" component={Movies} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/customers" component={Customers} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/movies" />
        <Redirect to="/not-found" />
      </Switch>
    </main>
  );
}

export default App;
