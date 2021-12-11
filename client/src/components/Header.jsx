import React, { useState } from 'react'

import Image from '../assets/images/logo2.png'

import { Link, BrowserRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
	const [keyword, setKeyword] = useState('')

	return (
		<header className='header'>
			<div className='container'>
				<div className='header__wrapper'>
					<div className='header__logo'>
						<Link to='/'>
							<img src={Image} alt='' className='header__logo__img' />
							<span className='header__logo__text'>Data Structure</span>
						</Link>
					</div>
					<div className='header__menu'>
						<div className='header__menu__item header__menu__home'>
							<Link to='/'>Home</Link>
						</div>
						<div className='header__menu__item header__menu__category'>
							Danh Mục
							<ul className='header__menu__category__list'>
								<li className='header__menu__category__list__item'>
									Stack
								</li>
								<li className='header__menu__category__list__item'>
									Queue
								</li>
								<li className='header__menu__category__list__item'>
									Tree
								</li>
								<li className='header__menu__category__list__item'>
									Linked List
								</li>
								<li className='header__menu__category__list__item'>
									Doubly Linked List
								</li>
							</ul>
						</div>
						<div className='header__menu__item header__menu__contact'>
							Liên Hệ
						</div>
					</div>
					<div className='header__search'>
						<input
							type='search'
							className='header__search__input'
							placeholder='Nhập từ khóa'
							value={keyword}
							onChange={(e) => setKeyword(e.target.value)}
						/>
						<button className='header__search__icon'>
							<Link to={`/search/${keyword}`}>
								<FontAwesomeIcon icon={faSearch} />
							</Link>
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
