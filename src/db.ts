import { Pool } from "pg";



const db = new Pool({ connectionString });

export default db;