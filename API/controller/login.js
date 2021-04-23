const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken')

exports.loginAuth = async (req, res) => {
    const user  = req.body.username;
    const password = req.body.password;
    const posts = await prisma.login.findFirst({
        where: { user, password},
        include:{
          mhs_profil: true,
        },
    });
 /*   const posts2 = await prisma.login.findFirst({
 //     where: { user, password, role: "0" },
 //   });
    const posts3 = await prisma.data_mahasiswa.findFirst({
      where: { nim: user },
  //    select: {
  //      nama: true,
  //    }
    });*/
    if(posts){
    const token = jwt.sign({user, password}, 'my_secret_key');
 //   console.log({token: token, posts});
    res.json({
     token: token, posts, text:'anda login sebagai user',
   });
    }
/*    else if(posts2){
      const token = jwt.sign({user, password}, 'my_secret_key');
  //    console.log({token: token, posts2, posts3});
    res.json({
       token: token, posts2, text:'anda login sebagai admin',
      });
      }*/
    else {
    console.log(user, password);
  //  res.json({text:'username / password salah'});
    }
}


exports.loginAuthId = async (req, res) => {
  const { id } = req.params;
  const posts = await prisma.data_mahasiswa.findUnique({
      where: { id: +id },
  });

  res.json(posts);

}