import { Route, Routes } from 'react-router-dom'
import { Home } from '../TorneoApp/pages/dashboard/Home'

export const AppRouter = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}
