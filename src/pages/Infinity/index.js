import Layout from "../../components";

import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Infinity() {
  const slideImages = [
    {
      url: "https://www.chevrolet.ru//bypass/iframes/gm/chevrolet/2021-RUSSIA/trailblazer/colorizer/images/colorizer/trim/activ/ext/chevrolet-trailblazer-model-overview-colorizer-exterior-01.jpg",
      caption: (
        <img
          alt="traiblaze"
          src="https://www.chevrolet.ru//bypass/iframes/gm/chevrolet/2021-RUSSIA/trailblazer/colorizer/images/colorizer/trim/activ/ext/chevrolet-trailblazer-model-overview-colorizer-exterior-01.jpg"
        ></img>
      ),
    },
    {
      url: "images/slide_3.jpg",
      caption: (
        <img
          alt="traiblaze"
          src="https://www.chevrolet.ru//bypass/iframes/gm/chevrolet/2021-RUSSIA/trailblazer/colorizer/images/colorizer/trim/activ/ext/chevrolet-trailblazer-model-overview-colorizer-exterior-02.jpg"
        ></img>
      ),
    },
    {
      url: "images/slide_4.jpg",
      caption: (
        <img
          alt="traiblazer"
          src="https://www.chevrolet.ru//bypass/iframes/gm/chevrolet/2021-RUSSIA/trailblazer/colorizer/images/colorizer/trim/activ/ext/chevrolet-trailblazer-model-overview-colorizer-exterior-03.jpg"
        ></img>
      ),
    },
  ];

  return (
    <Layout>
      <img
        alt="traiblazer"
        src="https://www.major-chevrolet.ru/images/content/trail_banner_new.jpg"
      ></img>
      <h1 className="text-center pt-2 md:pt-8 text-lg md:text-3xl font-semibold text-2xl">
        Абсолютно новый Chevrolet Trailblazer.
      </h1>
      <p className="text-lg px-2 md:px-44 pt-2 text-gray-900">
        Яркий. Решительный. Готовый отправиться на поиски новых впечатлений
        вместе с вами. Все это — абсолютно новый Chevrolet Trailblazer. Стильные
        выразительные пропорции и мощное динамичное содержание, присущее
        легендарным внедорожникам Chevrolet. Передний или полный привод,
        выразительный экстерьер, просторный и продуманный интерьер, а также
        многочисленные системы активной безопасности делают абсолютно новый
        Chevrolet Trailblazer вашим проводником в мир чистых эмоций и
        невероятных приключений.
      </p>
      <div className="slide-container px-2 ">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div style={{ backgroundImage: `url(${slideImage.url})` }}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="md:grid grid-cols-2 gap-10 px-2 md:px-10">
        <div>
          <img
            alt="traiblazer"
            src="https://www.chevrolet.ru/content/dam/chevrolet/cis/ru/ru/index/suvs/blazer/overview/01-images/chevrolet-trailblazer-model-overview-info-block-01.png?imwidth=1200"
          ></img>
        </div>
        <div>
          <h1 className="md:px-4 text-xl md:text-3xl pt-2 md:pt-10 text-gray-700">
            Онлайн-старт вашего путешествия
          </h1>
          <p className="pt-0 md:pt-4 text-lg">
            Воспользуйтесь сервисом онлайн-покупки автомобиля, предлагающим
            целый ряд опций и дополнительных преимуществ: оформление кредита,
            страхового полиса и сделки «трейд-ин», а также покупку необходимых
            аксессуаров. Все этапы сделки — от согласования условий до выдачи
            автомобиля — сопровождаются вашим персональным онлайн-менеджером
            выбранного дилерского центра.
          </p>
        </div>
      </div>
      <div className="md:grid grid-cols-2 pt-4 md:pt-10 px-2 md:px-20">
        <div>
          <img
            alt="traiblazer"
            src="https://www.chevrolet.ru/content/dam/chevrolet/cis/ru/ru/index/suvs/blazer/overview/01-images/chevrolet-trailblazer-model-overview-design-05.png?imwidth=600"
          ></img>
        </div>
        <div>
          <img className="pt-2 md:pt-0"
            alt="traiblazer"
            src="https://www.chevrolet.ru/content/dam/chevrolet/cis/ru/ru/index/suvs/blazer/overview/01-images/chevrolet-trailblazer-model-overview-design-06.png?imwidth=600"
          ></img>
        </div>
      </div>
      <h1 className="px-2 md:px-20 pt-2 text-xl">
        Выразительный и функциональный интерьер, отвечающий всем современным
        требованиям, дополняет яркий облик автомобиля.
      </h1>
      <h1 className="px-2 md:px-20 text-2xl pt-2 md:pt-4 text-gray-700">
        КОМПЛЕКТАЦИИ TRAILBLAZER
      </h1>
      <div className="md:grid grid-cols-3 gap-10 pt-4 px-2 md:px-10">
        <div>
          <img
            className="traiblazer"
            src="https://www.chevrolet.ru/content/dam/chevrolet/cis/ru/ru/index/suvs/blazer/overview/01-images/chevrolet-trailblazer-model-overview-trim-levels-01.png?imwidth=419"
          ></img>
          <h1 className="text-3xl md:text-5xl pb-2">Trailblazer LS</h1>
          <hr className="w-3/4" />
          <p className="px-2 text-lg font-semibold">
            Передний привод <br />
            Турбированный Двигатель 150л.с. <br />
            АКПП: бесступенчатый вариатор <br />
            Обивка сидений из ткани черного цвета <br />
          </p>
          <br />
        </div>
        <div>
          <img
            alt="traiblazer"
            src="https://www.chevrolet.ru/content/dam/chevrolet/cis/ru/ru/index/suvs/blazer/overview/01-images/chevrolet-trailblazer-model-overview-trim-levels-02.png?imwidth=419"
          ></img>
          <h1 className="text-3xl md:text-5xl pb-2">Trailblazer LT</h1>
          <hr className="w-3/4" />
          <p className="px-2 text-lg font-semibold">
            Передний привод <br />
            Рейлинги на крыше <br />
            Турбированный Двигатель 169л.с. <br />
            Обивка сидений из экокожи черного цвета <br />
            <br />
          </p>
        </div>
        <div>
          <img
            alt="traiblazer"
            src="https://www.chevrolet.ru/content/dam/chevrolet/cis/ru/ru/index/suvs/blazer/overview/01-images/chevrolet-trailblazer-model-overview-trim-levels-03.png?imwidth=419"
          ></img>
          <h1 className="text-3xl md:text-5xl pb-2">Trailblazer ACTIV</h1>
          <hr className="w-3/4" />
          <p className="px-2 text-lg font-semibold">
            Передний привод <br />
            Двухцветная окраска кузова <br />
            Турбированный Двигатель 222л.с. <br />
            Обивка сидений из экокожи черного цвета <br />
            <br />
          </p>
        </div>
      </div>
      <div className="md:grid grid-cols-2 pt-0 md:pt-10">
        <div className="px-2 md:px-10">
          <h1 className="text-2xl text-gray-700">ГАБАРИТЫ И РАЗМЕРЫ</h1>
          <p className="text-gray-700 text-xl">Дорожный просвет</p>
          <span className="text-xl">194 мм</span>
          <h1 className="pt-4 text-2xl text-gray-700">Колея задних колес</h1>
          <span className="text-xl">1570 мм</span>
          <h1 className="text-2xl text-gray-700 pt-4">Радиус разворота</h1>
          <span className="text-xl">11,4</span>
        </div>
        <div>
          <img
            className="px-2 md:pr-20"
            src="https://www.chevrolet.ru/content/dam/chevrolet/cis/ru/ru/index/suvs/blazer/overview/01-images/chevrolet-trailblazer-model-overview-specification.png?imwidth=960"
          ></img>
        </div>
      </div>
    </Layout>
  );
}

export default Infinity;
