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

exports.findNim = async (req, res) => {
  const { id } = req.params;
  const posts = await prisma.data_mahasiswa.findUnique({
    where: { id: +id },
    include: {
      data_mahasiswa: true, 
    },
   });
    res.json(posts);
}


exports.findId = async (req, res) => {
    const { id } = req.params;
    const posts = await prisma.data_mahasiswa.findUnique({
        where: { id: +id },
        include: {
        data_mahasiswa: {
          select: {
            user: true,
            password: true,
            role: true,
          },
        },
      },
    });

    res.json(posts);

}

exports.createUser = async (req, res) => {
    const { nama, nim, email, tanggal_lahir, no_telp, alamat, role } = req.body
    const post = await prisma.data_mahasiswa.create({
      
      data: {
  
        nama,
  
        nim,
        
        email,
  
        tanggal_lahir: new Date(tanggal_lahir),
  
        No_telp: no_telp,

        alamat,
        
        data_mahasiswa  : {
          create: {
            user: nim, 
            password:'123',
            role}
        },
  
      },
  
    })
   // console.log(post)
  res.json(post);

  //  return  {nama
  //  }
}

exports.editUser = async (req, res) => {
    const { id } = req.params;
    const { nama, nim, email, tanggal_lahir, no_telp, alamat } = req.body
    const post = await prisma.data_mahasiswa.update({
      where: { id: +id },
      data: {
  
        nama,
  
        email,

        nim,
  
        tanggal_lahir: new Date(tanggal_lahir),
  
        No_telp: no_telp,

        alamat,

        data_mahasiswa  : {
          update: {
            where:{
              id: +id,
            },
            data: {
            user: nim, 
            password:'123'}
         },
        },
      },
  
    })
  //  console.log(post);
  res.json(post);
}

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    const post = await prisma.data_mahasiswa.delete({
      where: { id: +id },
      data: {
        data_mahasiswa: {
          deleteMany: [{ id: +id }],
        },
      },
    })
  
    res.json(post);
}