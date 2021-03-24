const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.findAll = async (req, res) => {
    const posts = await prisma.data_mahasiswa.findMany();
    // jwt.verify(req.token, 'my_secret_key', function(err, data){
      // if(err){
     //    res.json({text: 'Token anda tidak valid'});
     //  } else {
         res.json(posts);
   //    }
    // })
}

exports.findId = async (req, res) => {
    const { id } = req.params;
    const posts = await prisma.data_mahasiswa.findUnique({
        where: { id: +id },
    });
    
    res.json(posts);
}

exports.createUser = async (req, res) => {
    const { nama, email, tanggal_lahir, no_telp, alamat } = req.body
    const post = await prisma.data_mahasiswa.create({
      
      data: {
  
        nama,
  
        email,
  
        tanggal_lahir: new Date(tanggal_lahir),
  
        No_telp: no_telp,

        alamat,
  
      },
  
    })
   // console.log(post)
  res.json(post);

  //  return  {nama
  //  }
}

exports.editUser = async (req, res) => {
    const { id } = req.params;
    const { nama, email, tanggal_lahir, no_telp, alamat } = req.body
    const post = await prisma.data_mahasiswa.update({
      where: { id: +id },
      data: {
  
        nama,
  
        email,
  
        tanggal_lahir: new Date(tanggal_lahir),
  
        No_telp: no_telp,

        alamat,
  
      },
  
    })
  
    res.json(post);
}

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    const post = await prisma.data_mahasiswa.delete({
      where: { id: +id },
    })
  
    res.json(post);
}