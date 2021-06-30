import logo from './logo.svg';
import './App.css';
import Card from './Component/Card/Card';
import "antd/dist/antd.css"
import AllCard from './Component/Card/AllCard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import CartAll from './Component/AllCart/CartAll';
import HomeHeader from './Component/HomeHeader/HomeHeader';
import WatchList from './Component/DetailsWatch/WatchList';
import Homescreen from './Component/Card/Homescreen';

function App() {
  return (
    <div >
      <Router>
        <HomeHeader />
        <Switch>
          <Route exact path="/" component={Homescreen} />
          <Route exact path="/cart" component={CartAll} />
          <Route exact path="/watchList" component={WatchList} />
        </Switch>
      </Router>


    </div>
  );
}

export default App;
