import { Routes, Route } from 'react-router-dom'
import WeaponList from './pages/WeaponList.jsx'
import WeaponDetail from './pages/WeaponDetail.jsx'

const weapons = [
  {
    id: "6928754e6be63a22686b329e",
    name: "Adept's Battleaxe",
    tier: "4.0",
    item_power: 700,
    identifier: "T4_MAIN_AXE",
    icon: "https://render.albiononline.com/v1/item/T4_MAIN_AXE@0.png?quality=0&size=217&locale=en"
  },
  {
    id: "6928754e6be63a22686b329f",
    name: "Adept's Carving Sword",
    tier: "4.0",
    item_power: 750,
    identifier: "T4_2H_CLEAVER_HELL",
    icon: "https://render.albiononline.com/v1/item/T4_2H_CLEAVER_HELL@0.png?quality=0&size=217&locale=en"
  },
  {
    id: "6928754e6be63a22686b32a0",
    name: "Adept's Dual Swords",
    tier: "4.0",
    item_power: 700,
    identifier: "T4_2H_DUALSWORD",
    icon: "https://render.albiononline.com/v1/item/T4_2H_DUALSWORD@0.png?quality=0&size=217&locale=en"
  },
]

function App() {
  return (
    <Routes>
      <Route path="/" element={<WeaponList weapons={weapons} />} />
      <Route path="/weapon/:id" element={<WeaponDetail weapons={weapons} />} />
    </Routes>
  )
}

export default App
