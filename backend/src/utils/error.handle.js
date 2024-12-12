export const handleHttp = (res, error, errorRaw) => {
    console.error(errorRaw);
    res.status(500);
    res.send({ error });
  };