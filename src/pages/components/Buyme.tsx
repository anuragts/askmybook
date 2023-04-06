import Image from 'next/image';
import coffee from '../../../public/buymeacoffee.png';

const BuyMeACoffee = () => {
  return (
    <a href="https://www.buymeacoffee.com/theanuragdev" target="_blank" rel="noopener noreferrer">
      <Image src={coffee} alt="Buy Me a Coffee" width={200} height={50} />
    </a>
  );
};

export default BuyMeACoffee;