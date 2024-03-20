import { Link } from 'react-router-dom';
import '../../SASS/shop/Hero.scss'

const HeroComp = () => {
  return (
    <div className="shop">
      <div className="container hero_shop__container">
        <h2 className="hero_shop__title">Shop</h2>
        <div className="hero__link_box">
        <Link to="/" className='hero__link'>Home</Link>
        <span>></span>
        <p className='hero__text'>Shop</p>
        </div>
      </div>
    </div>
  );
};

export default HeroComp;
