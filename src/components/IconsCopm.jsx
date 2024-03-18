import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconsCopm = () => {
  return (
    <div className='header__icons'>
        <FontAwesomeIcon icon={faUser} className='icon'/>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'/>
        <FontAwesomeIcon icon={faHeart} className='icon'/>
        <FontAwesomeIcon icon={faCartShopping} className='icon'/>
    </div>
  )
}

export default IconsCopm