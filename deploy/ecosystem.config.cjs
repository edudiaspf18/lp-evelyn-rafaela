// PM2: pm2 start deploy/ecosystem.config.cjs && pm2 save
module.exports = {
  apps: [
    {
      name: "landing-evelyn",
      script: "npm",
      args: "start",
      cwd: "/var/www/landing-evelyn",
      env: { NODE_ENV: "production", PORT: "3000" },
      max_memory_restart: "400M",
      autorestart: true,
    },
  ],
};
