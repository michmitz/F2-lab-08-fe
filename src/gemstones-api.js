/* eslint-disable */

import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

export function fetchGemstones() {
    return request.get(`${URL}/gemstones`);
}

export function fetchCuts() {
    return request.get(`${URL}/cuts`);
}

export function fetchGemstone(id) {
    return request.get(`${URL}/gemstones/${id}`);
}

export function createGemstone(gemFormData) {
    return request.post(`${URL}/gemstones`, gemFormData);
}

export function deleteGemstone(id) {
    return request.delete(`${URL}/gemstones/${id}`);
}