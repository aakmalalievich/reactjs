import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import Layout from "../../components";
import { useEffect, useState } from "react";
import ProductCard from "../../components/productCard";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cars")
      .then(function (response) {
        setData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <Layout>
      <div className="pt-2 md:pt-2 grid sm:grid-cols-2 px-2 gap-10 xl:grid-cols-3 max-w-7xl mx-auto  pt-4 md:mt-4 mb-4 md:mb-8">
        {data.map((car) => {
          return (
            <ProductCard
              title={car.title}
              image={car.imageURL}
              price={car.price}
              description={car.description}
              id={car.id}
              releaseDate={car.releaseDate}
            />
          );
        })}
      </div>
      <section className="pb-2">
        <img
          alt="lexus"
          src="https://toyota.scene7.com/is/image/toyota/ASE-2022-Homepage-Desktop-1920x795-ENDS?wid=1920&hei=795"
        ></img>
        <h1 className="text-center pt-4 md:pt-10 text-2xl">
          WHY L/CERTIFIED BY LEXUS?
        </h1>
            
        <p className="px-2 md:px-10 pt-2 md:pt-6 font-serif text-lg font-medium	 tracking-wide leading-7 decoration-double">
          2022 marks the fifth year in a row that U.S. News & World Report has
          named L/Certified by Lexus the "Best CPO Program."* With
          industry-leading benefits,* innovative design and thrilling
          performance, L/Certified by Lexus puts your dream car in your
          driveway. Indulge in a three-month Lexus Enform trial* that includes
          Safety Connect,* Service Connect,* Enform Remote* and available
          Destination Assist* when you purchase select L/Certified 2018 or newer
          vehicles. Each meticulously selected pre-owned vehicle awaits its
          soulmate, exclusively at your Lexus dealer.
        </p>
        <h1 className="text-center pt-4 md:pt-10 md:pt-20 text-2xl font-mono">
          VEHICLES AND CURRENT OFFERS
        </h1>
        <div className="pt-2 md:pt-10 grid sm:grid-cols-2 px-2 gap-10 xl:grid-cols-3">
          <div>
            <img
              alt="lexus"
              src="https://toyota.scene7.com/is/image/toyota/lexus-is-homepage-vehicles-tile-750x460-LEX-ISG-MY21-0121?wid=750&hei=460"
            ></img>
            <h2 className="text-center pt-2 text-lg font-semibold">
              CURRENT OFFERS
            </h2>
            <p className="text-center text-sm pt-2">
              FIND LEASE, FINANCE AND CASH OFFERS IN YOUR AREA
            </p>
            <button className="font-semibold mx-24 md:mx-32 mt-4 border border-black px-8  py-2 hover:bg-black hover:text-white text-sm">
              SEE OFFERS
            </button>
          </div>
          <div>
            <img
              alt="lexus"
              src="https://toyota.scene7.com/is/image/toyota/Lexus-UXh-Homepage-Tile-750x460-LEX-UXH-MY22-0036?wid=750&hei=460"
            ></img>
            <h2 className="text-center pt-2 text-lg font-semibold">
              THE 2023 UX HYBRID
            </h2>
            <p className="text-center text-sm pt-2">
              MADE FOR THE MODERN EXPLORER
            </p>
            <button className="font-semibold mx-24 md:mx-40 mt-4 border border-black px-8  py-2 hover:bg-black hover:text-white text-sm">
              EXPLORE
            </button>
          </div>
          <div>
            <img
              alt="lexus"
              src="https://toyota.scene7.com/is/image/toyota/Lexus-GX-homepage-tile-750x460-LEX-GXG-MY23-0036?wid=750&hei=460"
            ></img>
            <h2 className="text-center pt-2 text-lg font-semibold">
              THE ALL-NEW 2023 GX
            </h2>
            <p className="text-center text-sm pt-2">
              ENGINEERED TO CONQUER, CRAFTED TO CONNECT
            </p>
            <button className="font-semibold mx-24 md:mx-40  mt-4 border border-black px-8  py-2 hover:bg-black hover:text-white text-sm">
              EXPLORE
            </button>
          </div>
        </div>
        <h1 className="text-center text-2xl pt-6 md:pt-20 font-mono">
          EXPERIENCE AMAZING
        </h1>

        <div className="pt-8 px-2 md:px-10">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Link to="/Sport">
                <img
                  alt="lexus"
                  src="https://toyota.scene7.com/is/image/toyota/Motorsport-homepage-tile-550x337-car_14-LEX-RCF-CY22-0002?wid=550&hei=337"
                ></img>
              </Link>
              <p className="text-center text-md md:text-xl pt-2">
                FROM THE FAST LANE TO VICTORY LANE
              </p>
            </SwiperSlide>

            <SwiperSlide>
              <Link to="/Collection">
                <img
                  alt="lexus"
                  src="https://toyota.scene7.com/is/image/toyota/Homepage-Tile-Promo-Collection-550x337_M75?wid=550&hei=337"
                ></img>
              </Link>
              <p className="text-center pt-2 text-md md:text-xl">
                THE LEXUS COLLECTION
              </p>
            </SwiperSlide>

            <SwiperSlide>
              <img
                alt="lexus"
                src="https://toyota.scene7.com/is/image/toyota/Lexus-Amazing-Driving-Experiences_Tile_550x337?wid=550&hei=337"
              ></img>
              <p className="text-center  text-md md:text-xl pt-2">
                AMAZING DRIVE EXPERIENCES
              </p>
            </SwiperSlide>

            <SwiperSlide>
              <Link to="/Sparks">
                <img
                  alt="lexus"
                  src="https://www.lexus.com/content/dam/lexus/images/homepage/content-tile/2022/Lexus-sparks-homepage-tile-550x337-LEX-MIS-CY21-0113.jpg"
                ></img>
              </Link>
              <p className="text-center pt-2 text-md md:text-xl">
                {" "}
                A SPARK OF INNOVATION
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
