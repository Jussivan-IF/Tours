const validateLocationId = (req, res, next) => {
  const { id } = req.params;

  if (!id || isNaN(parseInt(id))) {
    return res.status(400).json({
      success: false,
      error: 'ID inválido'
    });
  }

  next();
};

const validateCoordinates = (req, res, next) => {
  const { latitude, longitude } = req.query;

  if (latitude && (isNaN(parseFloat(latitude)) || latitude < -90 || latitude > 90)) {
    return res.status(400).json({
      success: false,
      error: 'Latitude inválida'
    });
  }

  if (longitude && (isNaN(parseFloat(longitude)) || longitude < -180 || longitude > 180)) {
    return res.status(400).json({
      success: false,
      error: 'Longitude inválida'
    });
  }

  next();
};

export { validateLocationId, validateCoordinates };
