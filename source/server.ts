// Server related code.
//
// import 'module-alias/register';
//
// import './config/loadEnv';
// import './config/setupLogger';
//
// import { startServer } from 'tree-house';
// import { NSlogger, setup as setupLogger } from 'tree-house';
//
// import { name, version } from '../package.json';
// import { app } from './app';
// import { ENV } from './constants/environment';
//
// setupLogger({ name, version });
//
// const logger = NSlogger('process');
//
// // Unhandled error from somewhere
// process.on('uncaughtException', (error: Error) => logger.error('Uncaught exception', error));
//
// // Unhandled promise rejection from somewhere
// process.on('unhandledRejection', (error: Error) =>
//   logger.error('Unhandled promise rejection', error),
// );
//
// startServer(app, {
//   title: 'Sharpener',
//   port: ENV.port,
//
//   // Kubernetes health check
//   healthCheck: {
//     enabled: true,
//   },
//
//   // Version endpoint to get package.json version
//   version: {
//     enabled: true,
//     value: version,
//   },
// });
//
