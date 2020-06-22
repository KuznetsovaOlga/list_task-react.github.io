import React, { Component } from 'react';
import './App.css';
import Article from './Article';

class News extends Component {
  articleDeleteHandler=(id)=>{
    if (this.props.articleDeleteHandler){
      this.props.articleDeleteHandler(id)
    }
  }

  render() {
    const {data} = this.props;
    const newsTemplate = data.map((item)=>{
      return (
          <Article key={item.id} item={item} id={item.id} data={data} articleDeleteHandler={this.articleDeleteHandler}/>
      )
  })
  return (
    <div>
      {newsTemplate}
    </div>
    )

  }
}

export default News;
