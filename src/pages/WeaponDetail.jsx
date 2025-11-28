import { useParams, Link } from 'react-router-dom';

// TODO: 테스트용 Weapon
const weapon = {
    id: "6928754e6be63a22686b329e",
    name: "Adept's Battleaxe",
    tier: "4.0",
    item_power: 700,
    identifier: "T4_MAIN_AXE",
    icon: "https://render.albiononline.com/v1/item/T4_MAIN_AXE@0.png?quality=0&size=217&locale=en"
};

const WeaponDetail = () => {
    const { id } = useParams();

    return (
        <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
            <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-2xl w-full">

                <div className="flex justify-center mb-6">
                    <img
                        src={weapon.icon}
                        alt={weapon.name}
                        className="w-32 h-32 object-cover rounded-2xl shadow-xl border-4 border-indigo-100 transform hover:scale-105 transition duration-300"
                    />
                </div>

                <div className="text-center mb-8 border-b pb-4 border-gray-100">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-1 leading-tight">
                        {weapon.name}
                    </h1>
                    <p className="text-xl font-medium text-indigo-600 mb-3">
                        Tier: {weapon.tier} | Power: {weapon.item_power}
                    </p>
                </div>

                <div className="flex justify-center mt-6">
                    <Link
                        to="/"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                    >
                        리스트
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WeaponDetail;
