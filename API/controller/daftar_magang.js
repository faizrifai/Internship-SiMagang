const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require("fs");

exports.registerIndustri = async (req, res) => {

    const { Nama_industri, Alamat, Contact_Person } = req.body
    const post = await prisma.profil_industri.create({
      
      data: {
  
        Nama_industri,
  
        Alamat,
      
        Contact_Person,

        Status: "0",
  
      },
  
    })

  res.json(post);


  
  }


exports.updateIndustri = async (req, res) => {
    const { id } = req.params;
    const post = await prisma.profil_industri.update({
      where: { id: +id },
      data: {
        
        Status: "1",
  
      },
  
    })


  res.json(post);


  
  }

exports.findIndustri1 = async (req, res) => {
    const posts = await prisma.profil_industri.findMany({
    where: { Status: "1" },})

         res.json(posts);

}

exports.findIndustri0 = async (req, res) => {
  const posts = await prisma.profil_industri.findMany({
  where: { Status: "0" },})

       res.json(posts);

}



exports.registerIntership =  async (req, res, next) => {
    const picture = req.file;
    const { Durasi1, Durasi2, Nama_industri, NIM_ketua, NIM_anggota1, NIM_anggota2} = req.body
    if (!picture) {
      res.status(400).json({'message': 'picture cannot be empty'});
      return
  }
    else if(Durasi1 < Durasi2){
      
      const post = await prisma.daftar_industri.create({
      
      data: {
  
        Nama_industri,
  
        NIM_ketua,
  
        NIM_anggota1,
  
        NIM_anggota2,

        Surat_industri: picture.filename,

        Status: "0",

        Durasi1: new Date(Durasi1),

        Durasi2: new Date(Durasi2),
        
        industriNama: Nama_industri,

        Dosen: "Belum ada",
      },
    })
    res.json(post);
  }

  
  }

  exports.findStatus = async (req, res) => {
    const { nim } = req.params;
    const posts = await prisma.daftar_industri.findUnique({
    where: {  NIM_anggota1: nim },

  
     })
    const posts2 = await prisma.daftar_industri.findUnique({
      where: {  NIM_ketua: nim }

    
       })
    const posts3 = await prisma.daftar_industri.findUnique({
    where: {  NIM_anggota2: nim },  
    })

    if(posts){
      res.json(posts)
    }
    else if(posts2){
      res.json(posts2)
    }
    else if(posts3){
      res.json(posts3)
    }
    else {
      res.json('belum diterima')
    }

}

  exports.updateIntership = async (req, res) => {
    const { id } = req.params;
    const { Dosen  } = req.body;
    const post = await prisma.daftar_industri.update({
      where: { id: +id },
      data: {

        Status: "1",
        Dosen,
  
      },
  
    })


  res.json(post);


  }

  exports.tolakIntership = async (req, res) => {
    const { id } = req.params;
    const post = await prisma.daftar_industri.delete({
      where: { id: +id },
    })

    res.json(post);
  }

  exports.findIntership1 = async (req, res) => {
    const posts = await prisma.daftar_industri.findMany({
    where: { Status: "1" },})

         res.json(posts);

}

exports.findIntership0 = async (req, res) => {
  const posts = await prisma.daftar_industri.findMany({
  where: { Status: "0" },})

       res.json(posts);

}

exports.daftarIndustri = async (req, res) => {
  const posts = await prisma.daftar_industri.findMany({

  });
  res.json(posts);
}

exports.findImage = async (req, res) => {
  const { nama } = req.params;

  /*const posts = await prisma.daftar_industri.findUnique({
    where: { Surat_industri: nama },


     })*/ 

  //if(posts){
  const directoryPath = __basedir + "/uploads/" + nama;
  fs.access(directoryPath, fs.constants.F_OK, err => {
    //check that we can access  the file
    console.log(`${directoryPath} ${err ? "does not exist" : "exists"}`);
  });
  fs.readFile(directoryPath, function(err, content) {
    if (err) {
      res.writeHead(404, { "Content-type": "text/html" });
      res.end("<h1>No such image</h1>");
    } else {
      //specify the content type in the response will be an image
      res.writeHead(200, { "Content-type": "image/jpg" });
      res.end(content);
    }
  });
//  }
//  else if(!posts){
//    res.json("tidak ada");
 // }
  //  res.json({ fileUrl: 'http://localhost:3000/images/' + posts });

}


exports.download = async(req, res) => {
  const fileName = req.params.name;
  const posts = await prisma.daftar_industri.findMany({
    where: { Surat_industri: fileName },
    select: {
      Surat_industri: true,
    }
  })
  const directoryPath = __basedir + "/uploads/";
  if(posts){
  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      })
    }
  })
  }
  else
  res.json("tidak ada");
};