import { useEffect, useState } from "react";
import Layout from "../../components";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/myInput";

function Update() {
  const [titleInp, setTitleInp] = useState("");
  const [descriptionInp, setdescriptionInp] = useState("");
  const [releaseDateInp, setreleaseDateInp] = useState("");
  const [imageUrlInp, setImageUrlInp] = useState("");
  const [priceInp, setPriceInp] = useState("");

  let navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/cars/${params.id}`)
      .then(function (response) {
        console.log(response);
        setTitleInp(response.data.title);
        setdescriptionInp(response.data.description);
        setreleaseDateInp(response.data.releaseDate);
        setImageUrlInp(response.data.imageURL);
        setPriceInp(response.data.price);
        // setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onTitleChange = (e) => {
    setTitleInp(e.target.value);
  };
  const onDescriptionChange = (e) => {
    setdescriptionInp(e.target.value);
  };
  const onReleaseDateChange = (e) => {
    setreleaseDateInp(e.target.value);
  };
  const onImageUrlChange = (e) => {
    setImageUrlInp(e.target.value);
  };

  const onPriceChange = (e) => {
    setPriceInp(e.target.value);
  };
  const button = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/cars/${params.id}`, {
        title: titleInp.trim(),
        description: descriptionInp,
        releaseDate: releaseDateInp,
        imageURL: imageUrlInp,
        price: priceInp,
        firstName: "Fred",
        lastName: "Flintstone",
      })
      .then(function (response) {
        navigate(`/Detail/${params.id}`);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold pt-5 text-center">Update</h1>
      <form>
        <div className="max-w-4xl mx-auto mt-10">
          <div className="form flex flex-col w-full space-y-5">
            <Input
              labelText={"Title:"}
              value={titleInp}
              onChange={onTitleChange}
            />
            <Input
              labelText={"Description"}
              value={descriptionInp}
              onChange={onDescriptionChange}
            />
          
             <Input
              labelText={"price"}
              value={priceInp}
              onChange={onPriceChange}
            />
            <Input
              labelText={"imageURL"}
              value={imageUrlInp}
              onChange={onImageUrlChange}
            />
          </div>

          <button
            onClick={button}
            className="mb-10 w-full font-bold text-xl bg-green-500 text-white px-8 py-3
         rounded-lg duration-200 active:scale-95 my-5 "
          >
            Update
          </button>
        </div>
      </form>
    </Layout>
  );
}
export default Update;
