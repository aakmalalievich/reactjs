import Layout from "../../components";

function Hybrid() {
  return (
    <Layout>
      <div className="bg-gray-900 text-white">
        <img
          alt="lexus"
          className="w-full"
          src="https://toyota.scene7.com/is/image/toyota/Hero-Overview-LEXUS-LCERTIFIED-BRAND-EVENT-2022-badge-1440x450-LEX-NXH-MY22-0008.35?wid=1440&hei=450"
        ></img>
        <div className="md:grid grid-cols-2 max-w-7xl mx-auto gap-10 pt-2 md:mt-10 ">
          <div>
            <h1 className="font-semibold px-2 text-2xl md:text-4xl md:text-6xl">
              Revolutionary <br /> drive
            </h1>
          </div>
          <p className="text-xl px-2 md:px-0">
            The new Hybrid is designed to embody the passion for driving that
            lives in the heart of every car lover. Discover a new era of power
            and style, handling and dynamics, as well as an unforgettable
            experience in the face of the new !
          </p>
        </div>
        <img
          alt="lexus"
          className="pt-2 w-full"
          src="https://toyota.scene7.com/is/image/toyota/Lexus-UXh-additionalinfo-desktop-1440x350-LEX-UXH-MY23-0012?wid=1440&hei=350"
        ></img>

        <div className="md:grid grid-cols-2 gap-10 mt-2 md:mt-10 max-w-7xl mx-auto">
          <div>
            <img
              className="px-2 md:px-0"
              alt="lexus"
              src="https://cdn.kia-motors.uz/uploads/gallery/big-61434a.jpg"
            ></img>
          </div>
          <div className="px-2 md:px-10">
            <h1 className="text-yellow-500 text-lg">AERODYNAMICS</h1>
            <h1 className="pt-0 md:pt-4 text-4xl md:text-7xl"> Ride into the wind</h1>
            <p className=" pt-0 md:pt-4 text-xl">
              Air intakes direct airflow towards the radiator and front brakes,
              reducing drag, while vents in the lower bumper direct air towards
              the wheel arches, which reduces drag and cools the brakes. <br />{" "}
              Classic proportions sit side by side with the latest in
              aerodynamics and noise reduction, while the car's styling ensures
              minimal drag and maximum handling.
            </p>
            <br />
            <hr />
            <div className="pt-4 text-lg">
              <span>1. Front bumper with integrated air intakes</span>
              <br />
              <span>2. rear diffuser</span> <br />
              <span>3. Trunk lid with spoiler</span> <br />
              <span>4. Multilayer protection and aerodynamic efficiency</span>
              <br />
              <span>5. Noise-vibration-shake (NVH) approach</span>
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-2 gap-10 md:pt-2 md:pt-10 max-w-7xl mx-auto">
          <div>
            <h1 className="text-3xl md:text-7xl px-2 pt-2 md:px-0">
              Welcome to the pilot's seat
            </h1>
          </div>
          <div>
            <p className="text-lg  md:mt-4 px-2  md:px-0">
              The clean and sophisticated interior design of the new Hybrid
              draws inspiration from the heritage of GT style combined with the
              latest technology. Circular diffusers for the ventilation system,
              instrument dials with metal rings and brushed chrome trim add a
              touch of aviation to the cabin
            </p>
          </div>
        </div>
        <img
          alt="lexus"
          className="px-2 md:px-10 pt-2 md:mt-10"
          src="https://toyota.scene7.com/is/image/toyota/Lexus-UXh-gallery-desktop-1440x811-LEX-UXG-MY23-0009?wid=1440&hei=811"
        ></img>
        <div className="md:grid grid-cols-2 gap-10 pt-2 md:pt-10">
          <div className="px-2 md:px-10">
            <h1 className="text-3xl md:text-7xl">Everything's under control</h1>
            <p className="pt-4 text-lg pb-4">
              The new Hybrid is an uncompromising driver's car. Here Everything
              is tailor-made for you, from sport-assisted seats to
              state-of-the-art technology. You will be able to make the longest
              trips without feeling tired. <br />
              When you're on the road, the Kia Stinger helps you focus on
              driving. Thoughtful and intuitive high-tech solutions are always
              at hand and easy to use. <br />
              By automatically distributing braking force to each wheel based on
              an estimate of torque and driving conditions, ESC optimally
              decelerates the vehicle and maintains directional control.
            </p>
            <hr />
            <p className="text-xl pt-4">
              <span>1. Blind Spot Monitors (BVM)</span> <br />
              <span>2. Safety exit system (SEW) </span> <br />
              <span>3. Zone climate control </span> <br />
              <span>4. Ventilated front seats Settings memory (IMS) </span>
              <br />
              <span>5. Settings memory (IMS) Electric sunroof</span> <br />
              <span>6. Electric sunroof</span> <br />
            </p>
          </div>
          <div>
            <img
              alt="lexus"
              className="px-2 md:px-10"
              src="https://cdn.kia-motors.uz/uploads/gallery/big-d533c3.jpg"
            ></img>
          </div>
        </div>
        <h1 className="px-2 md:px-10 text-3xl md:text-7xl pt-4 md:mt-10">
          Drive confidently in any weather
        </h1>
        <img
          className="w-full px-2 pt-4"
          alt="lexus"
          src="https://cdn.kia-motors.uz/uploads/gallery/big-8e15a6.jpg"
        ></img>
        <p className="px-2 text-lg pt-2 pb-2">
          By automatically distributing braking force to each wheel based on an{" "}
          <br />
          estimate of torque and driving conditions, ESC optimally decelerates{" "}
          <br />
          the vehicle and maintains directional control.
        </p>
      </div>
     
    </Layout>
  );
}

export default Hybrid;
