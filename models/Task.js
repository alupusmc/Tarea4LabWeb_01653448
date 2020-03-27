const knex = require('../database/connection');

exports.PENDING = 'pending';
exports.DONE = 'done';

exports.all = () => {
  return knex
    .select('*')
    .from('tasks');
}

exports.nuke = () => {
  return knex
    .select('*')
    .from('tasks')
    .delete();
}

exports.create = (task) => {
  return knex('tasks')
    .insert({ description: task.description });
}

exports.find = (id) => {
  return knex
    .select('*')
    .from('tasks')
    .where('id', id)
    .first();
}

exports.delete = (id) => {
//console.log('999999999'+id)
  return knex('tasks').where('id',id).del();
}

exports.markAsDone = (task) => {
  return knex('tasks')
    .update({ status: this.DONE })
    .update('updated_at', knex.fn.now())
    .where('id', task.id);
}
