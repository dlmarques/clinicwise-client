import Slider from 'react-slick';
import { Event } from '../../../models/Event';
import { getIcon } from '../../../utils/functions/getIcon';
import AppointmentCard from '../appointment-card/AppointmentCard';
import styles from './events-carousel.module.scss';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const EventsCarousel = (props: { events: Event[] }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: <IoIosArrowBack />,
    nextArrow: <IoIosArrowForward />,
  };
  return (
    <div className={styles.carousel}>
      <Slider {...settings} afterChange={e => console.log(e)}>
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
