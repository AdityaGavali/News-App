import React , {useState , useEffect , useRef}from 'react'
import Card from './Card';
import './NewsApp.css'

function NewsApp() {
  function handleSubmit(event){
    event.preventDefault();
        const queryValue = queryINput.current.value;
       { if(queryValue == '')queryValue = 'India';}
        setquery(queryValue);
  }
    const [NewsList , setNewsList ] = useState([]);
    const [query , setquery] = useState('cricket');
    const queryINput = useRef(null);
    
    const apiurl = `https://newsapi.org/v2/everything?q=${query}&apiKey=e25184f99a624ad78fb20bb3a6b65b36`;
    const apikey = 'e25184f99a624ad78fb20bb3a6b65b36';
   
    
    useEffect(()=>{
   fetchData();
    },[query])
    
   
  async function fetchData(){
    try{
        const response = await fetch(apiurl);
        const jsonData = await response.json();
        setNewsList(jsonData.articles);
    }
    catch(e){
    console.log('Error has been occured');
    }
  
  }
  return (

    
    
    <div className='news-app'>
   
    <h1 style={{textAlign:'center'}}>NEWS APP     <i class="fa-solid fa-newspaper"></i></h1>
    <form onSubmit={handleSubmit}>
      <input type="text" ref = {queryINput} className = 'queryInput'/>
      <input  onClick={handleSubmit} type="submit" value="Search" className='button_sub' />
    </form>
       <div className='main-box'>{
        NewsList.map((news)=>{
            return (<Card key = {news.url} news = {news}/>);
        })}
        </div>
    </div>
   
  );

}

export default NewsApp