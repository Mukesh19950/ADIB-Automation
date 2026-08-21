import fs from "fs";
import path from "path";
import { UserData } from "../types/UserData";


export class TestDataReader {

    static getusers(): UserData {

        const filepath = path.join(process.cwd(), "testdata/users.json");

        const fileContent = fs.readFileSync(filepath, "utf-8");

        return JSON.parse(fileContent) as UserData;

    }

}