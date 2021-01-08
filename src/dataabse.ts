import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = new Client()

export const pool = await client.connect({
  hostname: "127.0.0.1",
  username: "root",
  db: "dbuser",
  poolSize: 10, // connection limit
  password: "",
})
