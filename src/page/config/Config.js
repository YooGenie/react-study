export const Config = {
  API_SERVER: () => {
    switch (process.env.REACT_APP_DEPLOYMENT_ENVIRONMENT) {
      case 'local':
        return "http://localhost:8000/api";
      default:
        return "http://localhost:8000/api";
    }
  },
};
