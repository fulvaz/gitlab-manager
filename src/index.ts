import * as rp from 'request-promise';
import {privateToken, url} from '../config';
import axios from 'axios';
import * as https from 'https'
import { resolve } from 'url';
import { rejects } from 'assert';

const baseURL = url + 'api/v4';
Z
function searchUser(name) {
    return new Promise((resolve, rejects) => {
        https.get(baseURL + `/users?search=${name}&private_token=${privateToken}`, (res) => {
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; })
            res.on('end', () => {
                resolve(JSON.parse(rawData));
            });
        })
    })
    
}


async function main() {
    const res = await searchUser('zhangrl');
    console.log(res);
}

main();