import { BsHeartPulseFill } from 'react-icons/bs';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { MdEmergency } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { FaBrain, FaTooth, FaStethoscope } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';

export const getIcon = (name: string) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();
  switch (name) {
    case 'medical_exam':
      return (
        <IoDocumentText
          data-tooltip-id="my-tooltip"
          data-tooltip-content={t('medical_exam')}
        />
      );
      break;
    case 'medical_cons':
      return (
        <FaStethoscope
          data-tooltip-id="my-tooltip"
          data-tooltip-content={t('medical_cons')}
        />
      );
      break;
    case 'emergency':
      return (
        <MdEmergency
          data-tooltip-id="my-tooltip"
          data-tooltip-content={t('emergency')}
        />
      );
      break;
    case 'dentist':
      return (
        <FaTooth
          data-tooltip-id="my-tooltip"
          data-tooltip-content={t('dentist')}
        />
      );
      break;
    case 'cardiology':
      return (
        <BsHeartPulseFill
          data-tooltip-id="my-tooltip"
          data-tooltip-content={t('cardiology')}
        />
      );
      break;
    case 'neurology':
      return (
        <FaBrain
          data-tooltip-id="my-tooltip"
          data-tooltip-content={t('neurology')}
        />
      );
      break;
    default:
      break;
  }
};
