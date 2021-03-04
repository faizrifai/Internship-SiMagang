var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'Hallo' })
});
// Konfigurasi koneksi
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'register_magang'
});
  
// Koneksi ke database
dbConn.connect(); 


// Menampilkan data all user
/*app.get('/user', function (req, res) {
    dbConn.query('SELECT * FROM data_mahasiswa', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'List data users.' });
    });
});*/
app.get('/user', async (req, res) => {

    const posts = await prisma.data_mahasiswa.findMany();
  
    res.json(posts);
  
  });
  
  
 
/* Menampilkan data user detail
app.get('/user/:id', function (req, res) {
  
    let user_id = req.params.id;
  
    if (!user_id) {
        return res.status(400).send({ error: true, message: 'Silakan isikan parameter user_id' });
    }
  
    dbConn.query('SELECT * FROM data_mahasiswa where id = ?', user_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'Detail list users.' });
    });
  
});*/

app.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    const posts = await prisma.data_mahasiswa.findUnique({
        where: { id: +id },
    });
    
    res.json(posts);
  });
 
/* Menambahkan user baru 
app.post('/user', function (req, res) {
  
    let user = req.body.nama;
  
    if (!user) {
        return res.status(400).send({ error:true, message: 'Silakan isikan parameter user' });
    }
  
    dbConn.query("INSERT INTO data_mahasiswa SET ? ", { nama: user, email: req.body.email, tanggal_lahir: req.body.tgl_lahir, No_telp: req.body.no_telp, alamat: req.body.alamat }, function (error, results, fields) {
        if (error) throw error;
        return res.status(201).send({ error: false, data: results, message: 'User baru berhasil ditambahkan.' });
    });
});*/

app.post('/adduser', async (req, res) => {

    const { nama, email, tgl_lahir, no_telp, alamat } = req.body
    const post = await prisma.data_mahasiswa.create({
  
      data: {
  
        nama,
  
        email,
  
        tanggal_lahir: new Date(tgl_lahir),
  
        No_telp: no_telp,

        alamat,
  
      },
  
    })
  
    res.json(post)
  
  })
 
/*  Update detail user id
app.put('/user/:id', function (req, res) {
  
    let user_id = req.params.id;
    let user = req.body.nama;
    let email = req.body.email; 
    let tanggal_lahir = req.body.tgl_lahir;
    let No_telp = req.body.no_telp;
    let alamat = req.body.alamat;
  
    if (!user_id) {
        return res.status(400).send({ error: user, message: 'Silakan isikan parameter user dan user_id' });
    }
  
    dbConn.query("UPDATE data_mahasiswa SET nama = ?, email = ?, tanggal_lahir = ?, No_telp = ?, alamat = ? WHERE id = ?", [user, email, tanggal_lahir, No_telp, alamat, user_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Data user berhasil diperbaharui.' });
    });
});*/
 
app.put('/user/:id', async (req, res) => {
    const { id } = req.params;
    const { nama, email, tgl_lahir, no_telp, alamat } = req.body
    const post = await prisma.data_mahasiswa.update({
      where: { id: +id },
      data: {
  
        nama,
  
        email,
  
        tanggal_lahir: new Date(tgl_lahir),
  
        No_telp: no_telp,

        alamat,
  
      },
  
    })
  
    res.json(post)
  
  })

/*  Delete user
app.delete('/user/:id', function (req, res) {
  
    let user_id = req.params.id;
  
    if (!user_id) {
        return res.status(400).send({ error: true, message: 'Silakan isikan parameter user_id' });
    }
    dbConn.query('DELETE FROM data_mahasiswa WHERE id = ?', [user_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'User berhasil dihapus.' });
    });
}); */ 
 
app.delete('/user/:id', async (req, res) => {
    const { id } = req.params;
    const post = await prisma.data_mahasiswa.delete({
      where: { id: +id },
    })
  
    res.json(post)
  
  })

// Set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
 
module.exports = app;