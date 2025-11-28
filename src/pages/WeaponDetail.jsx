import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getWeaponDetail } from '../api/weaponApi.js'

const WeaponDetail = () => {
    const { id } = useParams()

    const { data: weapon, isLoading, isError, error } = useQuery({
        queryKey: ['weapon', id],
        queryFn: () => getWeaponDetail(id),
        enabled: !!id,
    })

    if (isLoading) return <p className="text-center mt-10">Loading weapon...</p>
    if (isError) return <p className="text-center mt-10">오류 발생: {error.message}</p>

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
                    <p className="text-gray-500 mb-3">Identifier: {weapon.identifier}</p>

                    <a
                        href={`https://www.youtube.com/results?search_query=Albion+${weapon.name}+guide`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 px-5 py-2 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition duration-150"
                    >
                        Youtube 공략
                    </a>
                </div>

                <div className="flex justify-center mt-6">
                    <Link
                        to="/"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                    >
                        무기 리스트
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WeaponDetail
