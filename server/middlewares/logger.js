const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const ip = req.ip || req.connection.remoteAddress;

  console.log(`[${timestamp}] ${method} ${url} - IP: ${ip}`);

  res.on('finish', () => {
    console.log(`[${timestamp}] ${method} ${url} - Status: ${res.statusCode}`);
  });

  next();
};

export default logger;
