export const API_BASE_URL = 'https://www.payrollapitech.net/GoGoApi';

export interface TAppConfig {
  baseApiUrl: string;
}

function getAppConfig(): TAppConfig {
  return {
    baseApiUrl: API_BASE_URL,
  };
}

export function getEnvConfig(): TAppConfig {
  return getAppConfig();
}
