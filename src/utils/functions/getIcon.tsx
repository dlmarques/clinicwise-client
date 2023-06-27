import { BsFileEarmarkMedical } from 'react-icons/bs';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { MdOutlineEmergency } from 'react-icons/md';

export const getIcon = (name: string) => {
  switch (name) {
    case 'medical_exam':
      return (
        <BsFileEarmarkMedical
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Hello world!"
        />
      );
      break;
    case 'medical_cons':
      return (
        <AiOutlineMedicineBox
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Hello world!"
        />
      );
      break;
    case 'emergency':
      return (
        <MdOutlineEmergency
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Hello world!"
        />
      );
      break;
    default:
      break;
  }
};
