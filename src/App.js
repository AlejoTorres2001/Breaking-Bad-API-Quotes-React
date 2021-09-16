
import { useState,useEffect } from "react";
import Quote from './components/Quote'
import Button from './components/Button'
import Spinner from './components/Spinner'
import Quotes from "./components/Quotes";

function App() {
  const [loading, setLoading] = useState(true);
  const [quote,setQuote] = useState({});
  const [quotes, setQuotes] = useState([]);
  const updateQuote = async () => {
    setLoading(true)
    const url  ="https://breakingbadapi.com/api/quote/random"
    const res = await fetch(url)
    const [newQuote] = await res.json();
    const {quote,author} = newQuote

    setQuote({text:quote,author:author})
    setLoading(false)
  }

  useEffect(()=>{
    updateQuote()
  } , []);

  useEffect(
    ()=>{
      setQuotes([...quotes,quote])
    }
    ,[quote]);



  return (
   <div className="app">
     <img 
  src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
  alt="logo"
/>

    {loading ? <Spinner/> :  <Quote quote={quote}></Quote>}
      <Button updateQuote={updateQuote}/>
      <Quotes quotes={quotes}></Quotes>
   </div>
  );

}

export default App;
