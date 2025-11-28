
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api/weapons', // weapons 엔드포인트
});

// 전체 무기 리스트
export const getWeaponList = async () => {
    const res = await api.get('');
    return res.data;
};

// 단일 무기 상세
export const getWeaponDetail = async (id) => {
    const res = await api.get(`/${id}`);
    return res.data;
};
