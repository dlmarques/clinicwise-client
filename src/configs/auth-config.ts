import configJson from './auth.json';

export function getAuthConfig() {
  return {
    domain: configJson.domain,
    clientId: configJson.clientId,
    audience: configJson.audience,
  };
}
