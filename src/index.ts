import { Application } from "https://deno.land/x/oak/mod.ts";
import router from './route.ts'
import './dataabse.ts'

const app = new Application();
const port =3000
app.use(router.routes())

console.log("server on port 3000")
await app.listen({port})
