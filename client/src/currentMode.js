const devMode = {
  mode: "development mode",
  serverUrl: "http://localhost:3000"
};

const prodMode = {
  mode: "production mode",
  serverUrl: ""
};

export const currentMode = devMode;
export const serverUrl = currentMode.serverUrl;