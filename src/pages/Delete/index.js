import { useEffect } from "react";
import { useState } from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";  
import { useNavigate } from "react-router-dom";
function Delete() {
  let params = useParams();
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  
  useEffect(() => {
    // DELETE request using fetch with error handling
    fetch(`http://localhost:3000/cars/${params.id}`, { method: "DELETE" })
      .then(async (response) => {
        const data = await response.json();
        navigate("/");

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);
}

export default Delete;
