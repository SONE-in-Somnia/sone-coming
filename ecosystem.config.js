module.exports = {
  apps: [
    {
      name: "sone-comingsoon",
      script: "npm",
      args: "start",
      cwd: "./",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      env_development: {
        NODE_ENV: "development",
        PORT: 3000,
      },
      env_staging: {
        NODE_ENV: "staging",
        PORT: 3000,
      },
    },
  ],
};
