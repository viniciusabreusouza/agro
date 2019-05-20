'use strict';

module.exports = function(Pedidos) {
  Pedidos.status = function(id, cb) {
    Pedidos.findOne({where: {id: id}}, function(err, pedido) {
      cb(null, pedido);
    });
  };
  Pedidos.remoteMethod(
    'status', {
      accepts: {arg: 'id', type: 'string', required: true},
      http: {path: '/:id/status', verb: 'get'},
      returns: {arg: 'status', type: 'string'},
    }
  );
};
