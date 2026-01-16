module.exports = ({ config }) => {
  config.watchOptions = {
    ...(config.watchOptions || {}),
    ignored: [
      "**/node_modules/**",
      "C:\\**", 
    ],
  };
  return config;
};
