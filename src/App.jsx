// App.jsx
import { Routes, Route } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import WeaponList from './pages/WeaponList.jsx'
import WeaponDetail from './pages/WeaponDetail.jsx'
import { getWeaponList } from './api/weaponApi'  // 무기 API

function App() {
  const { data: weapons, isLoading, isError, error } = useQuery({
    queryKey: ['weapons'],
    queryFn: getWeaponList
  })

  if (isLoading) {
    return <p className="text-center mt-10">Loading weapons...</p>
  }

  if (isError) {
    return <p className="text-center mt-10">오류 발생: {error.message}</p>
  }

  return (
    <Routes>
      <Route path="/" element={<WeaponList weapons={weapons} />} />
      <Route path="/weapon/:id" element={<WeaponDetail weapons={weapons} />} />
    </Routes>
  )
}

export default App
