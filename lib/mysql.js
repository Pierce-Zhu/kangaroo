/**
 * mysql的初始化文件
 */
var mysql = require('mysql');
var config = require('../config/defaultConfig.js')

var pool  = mysql.createPool(config.mysqlConfig);

let query = ( sql, values ) => {

  return new Promise(( resolve, reject ) => {
    pool.getConnection( (err, connection) => {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows) => {
          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })

}

let users =
    `create table if not exists userinfo(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL COMMENT '用户名',
     password VARCHAR(100) NOT NULL COMMENT '密码',
     register_time VARCHAR(100) NOT NULL COMMENT '注册时间',
     PRIMARY KEY ( id )
    );`

let createTable = ( sql ) => {
  return query( sql, [] )
}

// create table
createTable(users)

// CRUD
exports.insertData = ( value ) => {
  let _sql = "insert into userinfo set name=?,password=?,register_time=?;"
  return query( _sql, value )
}

exports.deleteUserData = ( id ) => {
  let _sql = `delete from userinfo where id="${id}";`
  return query( _sql )
}

exports.findUserData = ( name ) => {
  let _sql = `select * from userinfo where name="${name}";`
  return query( _sql )
}

