import { BsFileEarmarkMedical } from 'react-icons/bs';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { MdOutlineEmergency } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

export const getIcon = (name: string) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();
  switch (name) {
    case 'medical_exam':
      return (
        <BsFileEarmarkMedical
          data-tooltip-id="my-tooltip"
          data-tooltip-content={t('medical_exam')}
        />
      );
      break;
    case 'medical_cons':
      return (
        <AiOutlineMedicineBox
          data-tooltip-id="my-tooltip"
          data-tooltip-content={t('medical_cons')}
        />
      );
      break;
    case 'emergency':
      return (
        <MdOutlineEmergency
          data-tooltip-id="my-tooltip"
          data-tooltip-content={t('emergency')}
        />
      );
      break;
    default:
      break;
  }
};
