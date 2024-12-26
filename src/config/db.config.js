import { MongoClient } from "mongodb";
import dotenv from 'dotenv'
dotenv.config()

const db_uri = process.env.DATABASE_URL;
const db_name = process.env.DATABASE_NAME;

// create a new instance of mongoclient
const db_client =	new MongoClient(db_uri)
export const db = db_client.db(db_name);

export async function run_db() {
	try {
		await db_client.connect();
		console.log('db is on');
	} catch (error) {
		console.log('Db is not working', error)
	}
}
