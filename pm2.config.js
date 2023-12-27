module.exports = {
    apps: [
      {
        name: 'strapi',
        cwd: 'cms/',
        script: 'npm',
        args: 'run start',
      },
      {
        name: 'frontend',
        cwd: 'frontend/',
        script: 'npm',
        args: 'run start',
        wait_ready: true,
        depends_on: ['strapi'],
      },
    ],
  };