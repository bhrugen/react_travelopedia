import { useGetRandomDestinationQuery } from "../api/randomDestinationApi";

import React from "react";

function RandomDestination() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetRandomDestinationQuery();
  console.log(data);
  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = (
      <div className="text-center border p-3">
        <h4 className="text-success">Random Travel Suggestion:</h4>
        {data.city}, {data.country}
      </div>
    );
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <div className="pt-3">{content}</div>;
}

export default RandomDestination;
