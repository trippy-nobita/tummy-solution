import React from "react";

export default function Card() {
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img className="card-img-top"
        src="https://t4.ftcdn.net/jpg/04/40/20/41/360_F_440204116_a4wToPMrfH2uLR8xTLzKN4Laq7PUnSuD.jpg"
        alt="Paneer Tikka" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is some important text.</p>
          <div className="container w-100"> </div>
          <select className="m-2 h-100 bg-succcess rounded">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {" "}
                  {i + 1}{" "}
                </option>
              );
            })}
          </select>

          <select className="m-2 h-100 bg-suucess rounded">
            <option value="half"> Half </option>
            <option value="full"> Full </option>
          </select>

          <div className="d-inline h-100 fs-4">Total price</div>
        </div>
      </div>
    </div>
  );
}
