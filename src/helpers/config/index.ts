

import dotenv from 'dotenv'
import path from 'path';

dotenv.config({path:path.join(process.cwd(),'.env')});

const environment_variable ={
    env:process.env.NODE_ENV,
    localstorage_name:process.env.LOCALSTORAGE_NAME as string
};

export default environment_variable