
import { useState,useEffect } from "react";
import Quote from './components/Quote'
import Button from './components/Button'
import Spinner from './components/Spinner'
const initialQuote={
  text:'Quote',
  author:'Author'
}


function App() {
  const [loading, setLoading] = useState(true);

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


  const [quote,setQuote] = useState(initialQuote)

  return (
   <div className="app">
     <img 
  src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
  alt="logo"
/>

    {loading ? <Spinner/> :  <Quote quote={quote}></Quote>}
      <Button updateQuote={updateQuote}/>
   </div>
  );

}

export default App;
