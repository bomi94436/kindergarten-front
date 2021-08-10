import React from "react";

import Loading from "../common/Loading/Loading";
import ReviewItem from "./ReviewItem";

const ReviewList = ({ loggedInfo, reviews, handleDeleteReviews }) => {
  if (reviews.loading !== false) {
    return <Loading />;
  } else {
    return reviews.data.findReviews.map((element) => (
      <ReviewItem
        key={element.id}
        loggedInfo={loggedInfo}
        element={element}
        handleDeleteReviews={handleDeleteReviews}
      />
    ));
  }
};

export default ReviewList;
