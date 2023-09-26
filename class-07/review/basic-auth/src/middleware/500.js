'use strict';

'use strict';

function error500(err, req, res, next) {
  res.status(500).json({ message: err.message });
}

module.exports = error500;
