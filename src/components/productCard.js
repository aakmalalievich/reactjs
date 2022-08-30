import { Link } from "react-router-dom";

function ProductCard({ title, image, price, description, id }) {
  return (
    <Link to={`/Detail/${id}`}>
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700">
        <img
          className="p-2 rounded-t-lg h-60"
          src={image}
          alt="product image"
        />
        <div className="px-4">
          <a href="#">
            <h5 className="text-2xl font-semibold tracking-tight text-white ">
              {title}
            </h5>
          </a>
        </div>
        <div className="px-4 pt-4 text-white font-semibold line-clamp-4">
          <p>{description}</p>
        </div>
        <div className="flex justify-between items-center p-2">
          <span className="truncate px-4 pt-4 text-3xl font-bold text-gray-900 dark:text-white">
            {price}$
          </span>
        </div>
      </div>
    </Link>
  );
}
export default ProductCard;
