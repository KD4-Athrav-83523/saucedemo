import dotenv from 'dotenv';
import path from 'path';

const envname = process.env.TEST_ENV || 'qa';

dotenv.config({ 
  path: path.resolve(__dirname, `${envname}.env`),
  override: true 
});

module.exports = {
  BASE_URI: process.env.BASE_URI,
  USERNAME: process.env.USERNAME,
  PASSWORD: process.env.PASSWORD
};