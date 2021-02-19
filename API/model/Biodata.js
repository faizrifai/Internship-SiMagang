module.exports = {
  get: function(con, callback) {
    con.query("SELECT * FROM data_mahasiswa", callback)
  },

  getById: function(con, id, callback) {
    con.query(`SELECT * FROM data_mahasiswa WHERE id = ${id}`, callback)
  },

  create: function(con, data, callback) {
    con.query(
      `INSERT INTO data_mahasiswa SET 
      nama = '${data.nama}', 
      email = '${data.email}',
      tanggal_lahir = '${data.tgl}',
      No_telp = '${data.hp}',
      alamat = '${data.alamat}'`,
      callback
    )
  },

  update: function(con, data, id, callback) {
    con.query(
      `UPDATE data_mahasiswa SET 
      nama = '${data.nama}', 
      email = '${data.email}',
      tanggal_lahir = '${data.tgl}',
      No_telp = '${data.hp}',
      alamat = '${data.alamat}' 
      WHERE id = ${id}`,
      callback
    )
  },

  destroy: function(con, id, callback) {
    con.query(`DELETE FROM data_mahasiswa WHERE id = ${id}`, callback)
  }
}
