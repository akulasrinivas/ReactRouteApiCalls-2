import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import BlogsList from './components/BlogsList'
import NotFound from './components/NotFound'
import blogItemDetails from './components/BlogItemDetails'

// step-2 blogItemDetails imported
// added new Route  <Route path="/blogs/:id" component={blogItemDetails} />
// this path="/blogs/:id" i.e "id" is passed to BlogItemDetails as prop.
// when component is rendered by Route, some additional props are passed like "match", "location", "history"

import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/blogs/:id" component={blogItemDetails} />
      <Route exact path="/" component={BlogsList} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
