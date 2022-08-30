import Layout from "../../components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

function Suv() {
  return (
    <Layout>
      <video
        loop
        muted
        autoPlay
        className="w-full"
        src="https://www.lexus.com/content/dam/lexus/videos/models/rcf/2021/performance/RCF_Performance.mp4"
      ></video>
      <section className="bg-black text-white pb-10">
        <h1 className="text-center text-2xl pt-4 font-semibold">
          THE FUTURE OF LEXUS ELECTRIFIED IS HERE
        </h1>
        <p className="pt-4 px-2 md:px-40 text-center text-lg">
          Introducing the first-ever fully electric Lexus, the RZ 450e. Where
          sustainability meets sleek lines and power, as only Lexus could
          imagine. This is the next chapter of electrified mobility. Experience
          the RZ for yourself this December at your local Lexus dealer.
        </p>
        <p className="text-center pt-4 text-xs">
          European prototype vehicle shown. Some options and color combinations
          may not be available for US market. !!!
        </p>
        <h1 className="text-center pt-6 text-2xl font-semibold">
          RZ 450e REVEAL VIDEO
        </h1>
        <video
          className="max-w-8xl mx-auto pt-2"
          loop
          muted
          autoPlay
          src="https://www.lexus.com/content/dam/lexus/videos/microsites/electrified/Direct4-1440x550.mp4"
        ></video>
        <h1 className="text-center pt-6 text-2xl font-semibold">PERFORMANCE</h1>
        <div className="md:grid grid-cols-2 gap-10 pt-4">
          <div>
            <img
              className="px-2 md:pl-10"
              alt="lexus"
              src="https://toyota.scene7.com/is/image/toyota/lexus-rz-performance-desktop-1440x800-LEX-RZV-MY23-0008?wid=1440&hei=800"
            ></img>
          </div>
          <div className="text-center md:pr-10">
            <h1 className="text-2xl">THE FUTURE IS ALL-ELECTRIC</h1>
            <p className="text-center pt-2 md:pt-10">
              As the first globally available dedicated battery electric vehicle
              from Lexus, the new RZ <br /> marks the next step for the brand
              into a fully electrified future. The RZ 450e utilizes a dedicated
              battery electric platform to significantly evolve vehicle
              performance for an exhilarating drive. This Lexus-first platform
              offers high levels of stability and ride comfort by mounting the
              battery under the vehicle floor for a low center of gravity and
              moment of inertia.
            </p>
           
          </div>
        </div>

        <h1 className="text-center pt-2 md:pt-10 text-2xl ">GALLERY</h1>
        <div className="pt-4 md:pt-8 px-2 md:px-10">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img
                alt="lexus"
                src="https://toyota.scene7.com/is/image/toyota/lexus-rz-gallery-slide-desktop-1440x811-LEX-RZV-MY23-0019?wid=1440&hei=811"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="lexus"
                src="https://toyota.scene7.com/is/image/toyota/lexus-rz-gallery-slide-desktop-1440x811-LEX-RZV-MY23-0020?wid=1440&hei=811"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="lexus"
                src="https://toyota.scene7.com/is/image/toyota/lexus-rz-gallery-slide-desktop-1440x811-LEX-RZV-MY23-0021?wid=1440&hei=811"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="lexus"
                src="https://toyota.scene7.com/is/image/toyota/lexus-rz-gallery-slide-desktop-1440x811-LEX-RZV-MY23-0022?wid=1440&hei=811"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="lexus"
                src="https://toyota.scene7.com/is/image/toyota/lexus-rz-gallery-slide-desktop-1440x811-LEX-RZV-MY23-0023?wid=1440&hei=811"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="lexus"
                src="https://toyota.scene7.com/is/image/toyota/lexus-rz-gallery-slide-desktop-1440x811-LEX-RZV-MY23-0024?wid=1440&hei=811"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="lexus"
                src="https://toyota.scene7.com/is/image/toyota/lexus-rz-gallery-slide-desktop-1440x811-LEX-RZV-MY23-0026?wid=1440&hei=811"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="lexus"
                src="https://toyota.scene7.com/is/image/toyota/lexus-rz-gallery-slide-desktop-1440x811-LEX-RZV-MY23-0027?wid=1440&hei=811"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="lexus"
                src="https://toyota.scene7.com/is/image/toyota/lexus-rz-gallery-slide-desktop-1440x811-LEX-RZV-MY23-0028?wid=1440&hei=811"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="lexus"
                src="https://toyota.scene7.com/is/image/toyota/lexus-rz-gallery-slide-desktop-1440x811-LEX-RZV-MY23-0025?wid=1440&hei=811"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="lexus"
                src="https://toyota.scene7.com/is/image/toyota/lexus-rz-gallery-slide-desktop-1440x811-LEX-RZV-MY23-0029?wid=1440&hei=811"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="lexus"
                src="https://toyota.scene7.com/is/image/toyota/lexus-rz-gallery-slide-desktop-1440x811-LEX-RZV-MY23-0031?wid=1440&hei=811"
              ></img>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </Layout>
  );
}

export default Suv;
