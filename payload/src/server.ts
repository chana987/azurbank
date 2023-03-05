import express from 'express';
import payload from 'payload';

require('dotenv').config();
const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    email: {
      transportOptions: {
        auth: {
          type: 'OAuth2',
          clientId: process.env.SMTP_CLIENT_ID,
          clientSecret: process.env.SMTP_CLIENT_SECRET,
        },
        port: 587,
        secure: true, // use TLS
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false
        }
      },
      fromName: 'Azurbank',
      fromAddress: process.env.EMAIL_FROM_ADDRESS,
    },
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(3000);
};

start();