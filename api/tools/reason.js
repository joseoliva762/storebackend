const print = process.stdout;

const build = (status, data, log) => {
  if (!status || !status?.statusCode || !status?.message) {
    status = {
      statusCode: 500,
      message: 'Internal Server Error'
    };
    print.write(`[DEFAULT] statusCode or message not provided.`);
  }

  log && print.write(`[LOG ${status.statusCode}] ${status.message}, ${log}.`);

  return {
    statusCode: status.statusCode,
    message: status.message,
    data: data || null,
    date: new Date()
  };
};

module.exports = {
  build,
  print
};
