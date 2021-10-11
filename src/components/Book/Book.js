import React from "react";
import { Link, useParams } from "react-router-dom";

const Book = () => {
  const { bedType } = useParams();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Let's book a {bedType} Room.</h1>

      <Link
        to="/booking"
        style={{
          textDecoration: "none",
          color: "white",
          backgroundColor: "goldenrod",
        }}
      >
        <button>Book Now?</button>
      </Link>
    </div>
  );
};

export default Book;
