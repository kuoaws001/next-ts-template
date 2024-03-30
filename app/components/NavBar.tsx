'use client'

import React from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'
import { useSession } from 'next-auth/react'

export const NavBar = () => {
  const { status, data } = useSession()

  return (
    <div className={styles.header}>
      {status === 'loading' && <div></div>}
      {status === 'authenticated' &&
        <div>
          <span className={styles.login_name}>{data.user!.name}</span>
          <Link href='/api/auth/signout'>Sign Out</Link>
        </div>}
      {status === 'unauthenticated' && <Link href='/api/auth/signin'>Login</Link>}
    </div>
  )
}
