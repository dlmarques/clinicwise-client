import Slider from 'react-slick';
import { Event } from '../../../models/Event';
import { getIcon } from '../../../utils/functions/getIcon';
import AppointmentCard from '../appointment-card/AppointmentCard';
import styles from './events-carousel.module.scss';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const EventsCarousel = (props: { events: Event[] }) => {
  const leftBackground = document.getElementById(
    'leftBackground'
  ) as HTMLElement;
  const prevIcon = document.getElementsByClassName(
    'slick-prev'
  )[0] as HTMLElement;
  const nextIcon = document.getElementsByClassName(
    'slick-next'
  )[0] as HTMLElement;
  const rightBackground = document.getElementById(
    'rightBackground'
  ) as HTMLElement;
  const pages = Math.ceil(props.events.length / 3);

  const initialStyle = () => {
    if (prevIcon && leftBackground && prevIcon.style && leftBackground.style) {
      prevIcon['style'].display = 'none';
      leftBackground['style'].visibility = 'hidden';
    }
  };
  initialStyle();

  const disablePrevOnInit = (index: number, show?: boolean) => {
    // Right arrow
    if (index - 1 === pages) {
      if (nextIcon) {
        nextIcon.style.display = 'none';
        rightBackground.style.visibility = 'hidden';
      }
    } else {
      if (nextIcon) {
        nextIcon.style.display = 'block';
        rightBackground.style.visibility = 'visible';
      }
    }

    //Left arrow
    if (prevIcon && !show) {
      prevIcon['style'].display = 'none';
      leftBackground['style'].visibility = 'hidden';
    } else if (prevIcon && show) {
      prevIcon['style'].display = 'block';
      leftBackground['style'].visibility = 'visible';
    }
  };

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
        beforeChange={(_lastIndex, index) =>
          disablePrevOnInit(index, index !== 0)
        }
      >
        {props.events.map((event, index) => {
          return (
            <AppointmentCard
              isNext={index === 0}
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
