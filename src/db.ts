import { Pool } from "pg";

const connectionString = "postgres://rngstmmy:wMkKbNNzJ-HhzvFkJy2wBLWb0yokgnj-@castor.db.elephantsql.com/rngstmmy";

const db = new Pool({ connectionString });

export default db;