import React, { useEffect } from 'react'

import styles from './header.module.css'

import cn from 'classnames'

import useComponentVisible from '../../hooks/useComponentVisible'
import useWindowSize from '../../hooks/useWindowSize'
import CONST from '../../constants'

import Button from '../button'
import NavigationDropdown from '../navigation-dropdown'
import { Menu, Close } from '../icons'

function Header({ className, ...props }) {
  const {
    ref,
    toggleRef,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false)
  const size = useWindowSize()

  useEffect(() => {
    if (size.width > CONST.MOBILE_SIZE) {
      setIsComponentVisible(false)
    }
  }, [size])

  return (
    <header className={cn(styles.header, className)} {...props}>
      <div className={styles.container}>
        <div ref={toggleRef} className={styles.menuContainer}>
          <Button
            className={styles.menu}
            onClick={() => setIsComponentVisible((isOpen) => !isOpen)}
          >
            {isComponentVisible ? <Close /> : <Menu />}
          </Button>
        </div>
        <Button className={styles.logo}>
          <span></span>
        </Button>
        <div style={{ flex: 1 }}></div>
        <Button className={styles.auth} secondary>
          Log in
        </Button>
        <Button className={styles.auth} primary>
          Sign up
        </Button>
      </div>
      <div ref={ref}>{isComponentVisible && <NavigationDropdown />}</div>
    </header>
  )
}

export default Header
