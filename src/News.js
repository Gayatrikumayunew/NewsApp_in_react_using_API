import React, { useEffect, useState } from 'react'

import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=> {
const [articles,setarticles]=useState([])
const [loading,setloading]=useState(true)
const [page,setpage]=useState(1)
const [totalResults,settotalResults]=useState(0)

 const captilize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  // constructor(props) {
  //   super(props)
  //   console.log("hi");
  //   this.state = {
  //     articles: [],
  //     loading: true,
  //     page: 1,
  //     totalResults: 0

  //   }
  
  
  const updateNews =async ()=> {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true })
    setloading(true)
    let data = await fetch(url);
    props.setProgress(30)
    let parsedata = await data.json()
    props.setProgress(70)
    console.log(parsedata)
    // this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults, loading: false })
setarticles(parsedata.articles)
settotalResults(parsedata.totalResults)
setloading(false)
    props.setProgress(100)


  }
useEffect(()=>{
  
document.title = `${captilize(props.category)} - NewsApp`

  updateNews();

},[])

  // async componentDidMount() {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3eae37356d1f45f787c945beba92f46f&page=1&pageSize=${props.pageSize}`;
  //   // this.setState({loading: true})
  //   // let data = await fetch(url);
  //   // let parsedata = await data.json()
  //   // console.log(parsedata)
  //   // this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults, loading :false })
  //   this.updateNews()
  // }
 const handleNextClick = async () => {
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {



    //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3eae37356d1f45f787c945beba92f46f&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
    //  this.setState({loading: true})
    //   let data = await fetch(url);
    //   let parsedata = await data.json()


    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedata.articles,
    //     loading : false
    //   })
    // }
    // this.setState({ page: this.state.page + 1 })
    setpage(page+1)
    updateNews()

  }
  const handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3eae37356d1f45f787c945beba92f46f&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
    // this.setState({loading: true})

    // let data = await fetch(url);
    // let parsedata = await data.json()



    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedata.articles,
    //   loading:false
    // })
    // this.setState({ page: this.state.page - 1 })
    setpage(page-1)
    updateNews()
  }
  const fetchMoreData = async() => {
    // this.setState({ page: this.state.page + 1 })
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3eae37356d1f45f787c945beba92f46f&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page+1)
    let data = await fetch(url);
    let parsedata = await data.json()
    console.log(parsedata)
    setarticles(articles.concat(parsedata.articles))
    settotalResults(parsedata.totalResults)
    // this.setState({
    //   articles: articles.concat(parsedata.articles),
    //   totalResults: parsedata.totalResults
    // })



  }
  
    let categoryTitle = props.category === "general" ? "Top Headlines" : `Top Heallines on ${captilize(props.category)}`;

    return (

      <>
        <h2 className='text-center' style={{margin:'35px 0px',marginTop:'90px'}}>{categoryTitle}</h2>
        {loading &&<Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}>
            
<div className='container'>          <div className='row'>
            {articles.map((ele) => {
              return <div className='col-md-4' key={ele.url} >
                <Newsitem title={ele.title ? ele.title.slice(0, 45) : ""} description={ele.description ? ele.description.slice(0, 88) : " "} imgUrl={ele.urlToImage} newsUrl={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name} />

              </div>





            })}</div>
            </div>

        </InfiniteScroll>
        {/* <div className='container d-flex justify-content-around'>
          <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div> */}

      </>
    )
  
}

export default News
