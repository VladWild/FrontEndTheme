const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

db.get('books')
    .push({ id: 1, title: 'lowdb is awesome'})
    .write();
