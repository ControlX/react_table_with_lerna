import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

import JobTable from "../JobTable";
import "./listing_home.css";

const Genres = ({ values }) => {
  
  return (
    <>
      {values.map((genre, idx) => {
        console.log("&&&", genre);
        return (
          <span key={idx} className="badge">
            {genre}
          </span>
        );
      })}
    </>
  );
};

function ListingHome() {
  const columns = useMemo(
    () => [
      {
        Header: "Job Listing",
        columns: [
          {
            Header: "Position",
            accessor: "listing.position"
          },
          {
            Header: "Experience",
            accessor: "listing.experience"
          },
          {
            Header: "Location",
            accessor: "listing.location"
          },
          {
            Header: "Skillset required",
            accessor: "listing.skillset",
            Cell: ({ cell: { value } }) => <Genres values={value} />
          },
          {
            Header: "Salary offered",
            accessor: "listing.salary",
            // Cell: ({ cell: { value } }) => {
            //   const hour = Math.floor(value / 60);
            //   const min = Math.floor(value % 60);
            //   return (
            //     <>
            //       {hour > 0 ? `${hour} hr${hour > 1 ? "s" : ""} ` : ""}
            //       {min > 0 ? `${min} min${min > 1 ? "s" : ""}` : ""}
            //     </>
            //   );
            // }
          },
          {
            Header: "Date Posted",
            accessor: "listing.date"
          }
        ]
      }
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:5000/jobs");
      setData(result.data.data);
    })();
  }, []);

  return (
    <div className="App">
      <JobTable columns={columns} data={data} />
    </div>
  );
}

export default ListingHome;