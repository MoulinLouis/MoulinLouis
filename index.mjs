import readme from './readme.mjs';
import fs from 'fs';

const getREADME = () => {
    return readme.replace('<today_date>', (new Date()).toLocaleString());
};

const update = (text) =>
    fs.writeFile('./README.md', text, () => console.log(text));

const main = () => {
    update(getREADME());
}

main();