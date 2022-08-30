import { useEffect, useState } from "react";
import Layout from "../../components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "../../components/myInput";

function Create() {
  const [titleInp, setTitleInp] = useState("");
  const [descriptionInp, setdescriptionInp] = useState("");

  const [imageUrlInp, setImageUrlInp] = useState("");
  const [priceInp, setPriceInp] = useState("");

  let navigate = useNavigate();

  const onTitleChange = (e) => {
    setTitleInp(e.target.value);
  };
  const onDescriptionChange = (e) => {
    setdescriptionInp(e.target.value);
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
      .post(" http://localhost:3000/cars", {
        title: titleInp.trim(),
        description: descriptionInp,
    
        imageURL: imageUrlInp,
        price: priceInp,
        firstName: "Fred",
        lastName: "Flintstone",
      })
      .then(function (response) {
        navigate("/");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold pt-5 text-center">Add a new car</h1>
      <form>
        <div className="max-w-4xl mx-auto mt-2 px-4">
          <div className="form flex flex-col w-full space-y-4">
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
              labelText={"imageURL"}
              value={imageUrlInp}
              onChange={onImageUrlChange}
            />
             <Input
              labelText={"price"}
              value={priceInp}
              onChange={onPriceChange}
            />
          </div>
          
          <button
            onClick={button}
            className="mb-10 w-full font-bold text-xl bg-green-500 text-white px-8 py-3
         rounded-lg duration-200 active:scale-95 my-5 "
          >
            Add
          </button>
        </div>
      </form>
    </Layout>
  );
}

export default Create;
