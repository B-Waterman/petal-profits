import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RemainderIdContext } from "../RemainderIdContext";

export default function StatusUpdate(props) {
  const { idTag } = useContext(RemainderIdContext);

  if (idTag === "surplus") {
    return (
      <div className="status">
        <p>
          Great saving this month!
          <Link to="/">Want to see your Budget Breakdown?</Link>
        </p>
      </div>
    );
  }

  if (idTag === "deficit") {
    return (
      <div className="status">
        <p>
          Entering a savings drought!
          <Link to="/">Want to see your Budget Breakdown?</Link>
        </p>
      </div>
    );
  }

  return null;
}
