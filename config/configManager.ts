import { environments } from "./environments";

type Environment = keyof typeof environments;

export class ConfigManager {

    static getBaseUrl(): string {
        const environment = (process.env.TEST_ENV || "sit") as Environment;
        return environments[environment].baseUrl;
    }

    static getBrowser(): 'chromium' | 'firefox' | 'webkit' {
        return (process.env.Browser as 'chromium' | 'firefox' | 'webkit') || 'chromium';
    }

}

