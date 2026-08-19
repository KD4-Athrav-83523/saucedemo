import dotenv from 'dotenv';

const envname=process.env.TEST_ENV || 'qa';
dotenv.config({ path: `.env.${envname}` });

module.exports = {
    BASE_URI: process.env.BASE_URI,
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD
};
