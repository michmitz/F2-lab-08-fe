/* eslint-disable */

import request from 'superagent';

const URL = 'https://fathomless-shore-20088.herokuapp.com';

export function fetchGemstones() {
    return request.get(`${URL}/gemstones`);
    }

    export function fetchGemstone(color) {
    return request.get(`${URL}/gemstones/${color}`);
    }