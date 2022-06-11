exports.to = async promise => {
  try {
    const data = await promise;
    return [null, data];
  } catch (err) {
    return [err, null];
  }
}