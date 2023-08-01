import React, { useEffect, useRef } from 'react';
import styles from '../carousel.css?inline';
import styled from 'styled-components';

const citiesData = [
    {
        imgSrc: 'https://wallpaperaccess.com/full/3949076.jpg',
        country: 'Frontend Development',
        city: 'React.js',
        popularPlaces: 12,
      },
      {
        imgSrc: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2Fcontent%2Fcover_image_file%2Fcover_image%2F1279226%2Fregular_1708x683_cover-0723_TheTop10MostCommonMistakesThatNode.jsDevelopersMake_Razvan_Newsletter-c49d8d7233bde8980e2e209746618867.png',
        country: 'Backend Development',
        city: 'Node.js',
        popularPlaces: 10,
      },
      {
        imgSrc: 'https://learn.microsoft.com/en-us/training/achievements/migrate-on-premises-mongodb-databases-to-cosmos-db.svg',
        country: 'Database',
        city: 'MongoDB',
        popularPlaces: 10,
      },
      {
        imgSrc: 'https://www.analyticsinsight.net/wp-content/uploads/2021/10/Python-3.10-Know-the-Exciting-Features-in-the-Latest-Python-Version.jpg',
        country: 'Machine Learning',
        city: 'Python',
        popularPlaces: 10,
      },
      {
        imgSrc: 'https://www.oracle.com/a/ocom/img/rc24full-redbull-racing.jpg',
        country: 'Serverless',
        city: 'Oracle Cloud Infrastructure',
        popularPlaces: 10,
      },
      {
        imgSrc: 'https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2020/06/docker.png?resize=1024%2C819&ssl=1',
        country: 'DevOps',
        city: 'Docker',
        popularPlaces: 12,
      },
      {
        imgSrc: 'https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1920&rev=61e1dad3af7e465e9544cf8490237772&extension=webp&hash=15AC1170ADEB7C885F07C74ED6D57E8D',
        country: 'Mobile App Development',
        city: 'React Native',
        popularPlaces: 12,
      },
  // Replace this data if you want.
 
  
];

const CarouselItemWrapper = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
`;

const CarouselItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
`;

const CarouselItemOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 28px 25px;
  color: #fff;
  background: #020024;
  background: linear-gradient(0deg, #020024 0%, #000032a1 3%, #17d9ff00 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const CarouselItemSpan = styled.span`
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 60px;
  padding: 10px 20px;
  display: inline-block;
`;

const CarouselNavButton = styled.button`
  background: #fff;
  width: 45px;
  height: 45px;
  font-size: 25px;
  box-shadow: 0px 0px 17px #00000005;
  border-radius: 50%;
`;

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      window.$(carouselRef.current).owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        nav: true,
        navText: [
          '<span class="owl-prev"></span>',
          '<span class="owl-next"></span>',
        ],
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 5,
          },
        },
      });
    }
  }, []);

  return (
    <div className={`owl-carousel owl-theme`} ref={carouselRef}>
      {citiesData.map((cityData, index) => (
        <CarouselItemWrapper key={index}>
          <CarouselItemImage src={cityData.imgSrc} alt="" />
          <CarouselItemOverlay>
            <CarouselItemSpan>{cityData.country}</CarouselItemSpan>
            <div>
              <h2>{cityData.city}</h2>
              {/* <p>{cityData.popularPlaces} Popular places</p> */}
            </div>
          </CarouselItemOverlay>
        </CarouselItemWrapper>
      ))}
    </div>
  );
};

export default Carousel;