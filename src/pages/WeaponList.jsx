import WeaponCard from '../components/WeaponCard.jsx'

export default function WeaponList({ weapons }) {
    return (
        <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {weapons.map(weapon => (
                    <WeaponCard key={weapon.id} weapon={weapon} />
                ))}
            </div>
        </div>
    )
}