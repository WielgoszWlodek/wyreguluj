import React from "react";
import { Link } from "react-router-dom";
import './Error.css'


export default function Error() {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h4>Taka strona nie istnieje</h4>
        <Link to= '/' className="btn btn-primary">
          Powrót
        </Link>
      </div>
    </section>
  );
}
