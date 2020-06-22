import React from 'react';
import News   from './News';
import newsData  from './newsData';
import TestInput  from './TestInput';
import './index.css';

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        news: newsData,
      }
    }
  
    handleAddNews = (data) => {
      const nextNews = [data, ...this.state.news]
      this.setState({ 
        news: nextNews 
      })
    }

    articleDeleteHandler=(id)=>{
      const {news} = this.state;
      news.splice(id,1);
      this.setState({news})
    }

    render() {
        return (
            <React.Fragment>
              <TestInput onAddNews={this.handleAddNews}/>
              <h3 className="title">Новости</h3>
              <News data={this.state.news} articleDeleteHandler={this.articleDeleteHandler}/>
            </React.Fragment>
        )
      }
    }

 export default App;