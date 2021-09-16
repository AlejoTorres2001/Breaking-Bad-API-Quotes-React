import React from "react";
import Quote from "./Quote";
const Quotes = ({ quotes }) => {
  return (
    <div className="text-secondary">
      <h1 className=" fs-1 m-3">Recently fetched Quotes</h1>
      {quotes.map((q) => (
        <Quote quote={q} key={q.id+1}></Quote>
      ))}
    </div>
  );
};

export default Quotes;
