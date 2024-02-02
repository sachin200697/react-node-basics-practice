/*
    create table user(name varchar(20), address varchar(50), mobile int(10));
    alter table user add id int(50) unique not null auto_increment primary key;

    alter table user modify id int(90);
    alter table user drop id;
*/

import mysql from 'mysql';
export class Mysql {    
    con;
    constructor() {        
        this.con = mysql.createConnection({
            host: 'localhost',
            user:'sachin',
            password: 'sachin',
            database: 'node'    //node database should already exist otherwise it will not work
        });
    }

    connect = () => {
        this.con.connect((err)=>{        
            if(err) {
                console.log('Some error occured while connecting');
                throw err;            
            }
            console.log('Connected');
        });
    }

    disconnect = () => {
        this.con.end(err=>{
            if(err) {
                console.log('Not able to close the connection');
                throw err;
            }
            console.log('Connection closed');
        })
    }
    
    execute = (query, callback, data) => {        
        this.con.query(query, data, (err, result)=>{
            if(err) throw err;
            callback(result);
        });
    }
}

