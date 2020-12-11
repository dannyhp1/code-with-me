// Endpoints for ping.
export const PROD_SOCKET_PING_ENDPOINT = 'https://aws.dannyhp.com/code-with-me/ping';
export const PROD_EXECUTE_PING_ENDPOINT = 'https://aws.dannyhp.com/code-with-me/execute/ping';

// Endpoints for socket.io on the backend.
export const DEV_SOCKET_ENDPOINT = 'http://localhost:8181';
export const PROD_SOCKET_AWS_ENDPOINT = 'https://aws.dannyhp.com'
export const PROD_SOCKET_AWS_PATH = '/code-with-me-socket';
export const PROD_SOCKET_HEROKU_ENDPOINT = 'https://code-with-me-phamdann.herokuapp.com'
export const SOCKET_OPTIONS = { transports: ['websocket'] };

// Endpoints for execution.
export const DEV_EXECUTE_ENDPOINT = 'http://localhost:8181/execute';
export const PROD_EXECUTE_ENDPOINT = 'https://aws.dannyhp.com/code-with-me/execute';
