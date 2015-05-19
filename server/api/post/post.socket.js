/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var post = require('./post.model');

exports.register = function(socket) {
  post.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  post.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('post:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('post:remove', doc);
}