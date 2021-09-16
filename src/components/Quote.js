import React from "react";

const Quote = ({ quote }) => {
    console.log(quote)
  return quote.text ? (
    <div>
      <p>
        {quote.text} <br />
        <span>- {quote.author}</span>
      </p>
    </div>
  ) : (
    <></>
  );
};

export default Quote;
