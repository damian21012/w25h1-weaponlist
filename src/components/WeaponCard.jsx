import { Link } from 'react-router-dom';

export default function WeaponCard({ weapon }) {
    return (
        <Link
            to={`/weapon/${weapon.id}`}
            className="flex p-3 rounded-xl hover:bg-gray-200 transition duration-150 shadow-sm hover:shadow-md bg-white w-full"
        >
            <div className="flex-shrink-0 mr-4">
                <img
                    src={weapon.icon}
                    alt={weapon.name}
                    className="w-16 h-16 object-cover rounded-lg shadow-md"
                />
            </div>

            <div className="flex-grow min-w-0">
                <div className="text-lg font-semibold text-gray-800 truncate">
                    {weapon.name}
                </div>
                <div className="text-sm text-gray-500 truncate">
                    Tier: {weapon.tier} | Power: {weapon.item_power}
                </div>
            </div>
        </Link>
    )
}
