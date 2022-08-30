import Layout from "../../components";
import { Routes, Route, useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Detail() {
  let params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
  
    axios
      .get(`http://localhost:3000/cars/${params.id}`)
      .then(function (response) {
        setData(response.data);
        console.log("data");
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-5xl">
          <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-bold tracking-wide text-gray-800 lg:text-5xl">
                  {data.title}
                </h1>
                <div className="mt-8 space-y-5">
                  <p className="flex items-center -mx-2 text-gray-700 ">
                    <span className="mx-2">{data.description}</span>
                  </p>

                  <p className="flex items-center -mx-2 text-gray-700 ">
                    <span className="mx-2 text-xl">{data.price}$</span>
                  </p>
                  <br />
                  <Link
                    to={`/Update/${params.id}`}
                    className="bg-red-500 text-white px-4 py-2 rounded font-semibold"
                  >
                    Update
                  </Link>
                  <Link
                    to={`/Delete/${params.id}`}
                    className="mx-2 bg-red-500 text-white px-4 py-2 rounded font-semibold"
                  >
                    Delete
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
              <img
                className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
                src={data.imageURL}
                alt="Lexus"
              />
            </div>
          </div>
        </div>
      </div>
      <di></di>
    </Layout>
  );
}

export default Detail;
