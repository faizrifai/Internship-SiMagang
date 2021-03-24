const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.loginAuth = async (req, res) => {
    const user  = req.body.username;
    const password = req.body.password;
    const posts = await prisma.user.findFirst({
        where: { user, password, role: "Admin" },
    });
    const posts2 = await prisma.user.findFirst({
      where: { user, password, role: "User" },
  });
    if(posts){
    const token = jwt.sign({user, password}, 'my_secret_key');
    res.json({
      token: token, posts, text:'anda login sebagai admin',
    });
    }
    else if(posts2){
      const token = jwt.sign({user, password}, 'my_secret_key');
      res.json({
        token: token, posts2, text:'anda login sebagai user',
      });
      }
    else {
    res.json({text:'username / password salah'});
    }
}