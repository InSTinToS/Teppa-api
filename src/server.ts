import 'dotenv/config';
import 'module-alias/register'
import 'reflect-metadata'



import '@shared/containers';
import { app } from '@shared/routes';


const port = process.env.API_PORT

app.listen(port, () => console.log(`Running at ${port}`))
