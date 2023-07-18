import { useEffect } from 'react';
import Slider from 'react-slick';
import { Event } from '../../../models/Event';
import { getIcon } from '../../../utils/functions/getIcon';
import AppointmentCard from '../appointment-card/AppointmentCard';
import styles from './events-carousel.module.scss';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const EventsCarousel = (props: { events: Event[] }) => {
  const disablePrevOnInit = (index: number, show?: boolean) => {
    const pages = Math.ceil(props.events.length / 3);
    //right
    if (index - 1 === pages) {
      const nextIcon: any = document.getElementsByClassName('slick-next');
      const rightBackground: any = document.getElementById('rightBackground');
      if (nextIcon) {
        nextIcon[0].style.display = 'none';
        rightBackground.style.visibility = 'hidden';
      }
    } else {
      const nextIcon: any = document.getElementsByClassName('slick-next');
      const rightBackground: any = document.getElementById('rightBackground');

      if (nextIcon) {
        nextIcon[0].style.display = 'block';
        rightBackground.style.visibility = 'visible';
      }
    }
    //left
    const leftBackground: any = document.getElementById('leftBackground');
    const prevIcon: any = document.getElementsByClassName('slick-prev');
    if (prevIcon && !show) {
      prevIcon[0].style.display = 'none';
      leftBackground.style.visibility = 'hidden';
    } else if (prevIcon && show) {
      prevIcon[0].style.display = 'block';
      leftBackground.style.visibility = 'visible';
    }
  };

  useEffect(() => {
    disablePrevOnInit(0);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: <IoIosArrowBack />,
    nextArrow: <IoIosArrowForward />,
  };
  return (
    <div className={styles.carousel}>
      <div id="leftBackground" className={styles['left-arrow']}></div>
      <div id="rightBackground" className={styles['right-arrow']}></div>
      <Slider
        {...settings}
        beforeChange={(lastIndex, index) =>
          disablePrevOnInit(index, index !== 0)
        }
      >
        {props.events.map(event => {
          return (
            <AppointmentCard
              key={event.id}
              icon={getIcon(event.speciality)}
              date={event.date}
              doctor={event.doctor}
              speciality={event.speciality}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default EventsCarousel;
