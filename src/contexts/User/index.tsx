import type { FC, ReactNode } from 'react'
import { useMemo, useState, createContext, useContext } from 'react'

interface IUserType {
  username: string
  password: string
  isLoggedIn: boolean
}

interface IUserContextType {
  user: IUserType | null
}

const UserContext = createContext<IUserContextType>({
  user: null,
})

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user] = useState<IUserContextType['user']>(null)

  /* TESTING USER DATA
  (INSERT DATA INTO USER'S USESTATE INITAL STATE ABOVE)

    username: 'General Kenobi',
    password: 'HelloThere',
    isLoggedIn: true

  */

  const value = useMemo<IUserContextType>(
    () =>
      user !== null
        ? { user, isLoggedIn: true }
        : { user: null, isLoggedIn: false },
    [user],
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
