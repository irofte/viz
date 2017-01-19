exports.createGroup = function(io, name) {
  console.log('group' + name + 'created');

  return io.of('/' + name);
};
