const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require("fs");

exports.createLogbook = async (req, res) => {
    const  { tanggal, kegiatan, kendala, solusi } = req.body
    const picture = req.file;
    const { logbookId } = req.params;
    const post = await prisma.logbook.create({
      data: {
        tanggal: new Date(tanggal),
  
        kegiatan,
        
        kendala,
  
        solusi,
  
        lampiran: picture.filename,

        logbookId: +logbookId,

      },
    })
   // console.log(post)
  res.json(post);

  //  return  {nama
  //  }
}

exports.findLogbook = async (req, res) => {
    const { logbookId } = req.params;
    const posts = await prisma.logbook.findMany({
      where: { logbookId: +logbookId },
     });
         

      res.json(posts);
    }

exports.findImage = async (req, res) => {
      const { nama } = req.params;
    
      /*const posts = await prisma.daftar_industri.findUnique({
        where: { Surat_industri: nama },
    
    
         })*/ 
    
      //if(posts){
      const directoryPath = __basedir + "/uploads/logbook/" + nama;
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
    
    }

  exports.editLogbook = async (req, res) => {
      const  { tanggal, kegiatan, kendala, solusi } = req.body
      const picture = req.file;
      const { id, nama } = req.params;
      const directoryPath = __basedir + "/uploads/logbook/" + nama;
      lol = fs.access(directoryPath, fs.constants.F_OK, err => {
        //check that we can access  the file
        console.log(`${directoryPath} ${err ? "does not exist" : "exists"}`);
      });

      if(picture){
      const post = await prisma.logbook.update({
        where: { id: +id },
        data: {
          tanggal: new Date(tanggal),
    
          kegiatan,
          
          kendala,
    
          solusi,
    
          lampiran: picture.filename,
  
        },
        })
        fs.unlink(directoryPath, (err) => {
          if (err) {
            console.error(err)
            return
          }
        
          //file removed
        })
        res.json(post);
      }
      else if(!picture){
        const post = await prisma.logbook.update({
          where: { id: +id },
          data: {
            tanggal: new Date(tanggal),
      
            kegiatan,
            
            kendala,
      
            solusi,

            lampiran: nama,
          },
        })
        res.json(post);
      }

     // console.log(post)
    
  
    //  return  {nama
    //  }
  }
exports.deleteImage = async (req, res) => {
  const { nama } = req.params;
  const { id } = req.params;
  /*const posts = await prisma.daftar_industri.findUnique({
    where: { Surat_industri: nama },


     })*/ 

  //if(posts){
  const directoryPath = __basedir + "/uploads/logbook/" + nama;
  fs.access(directoryPath, fs.constants.F_OK, err => {
    //check that we can access  the file
    console.log(`${directoryPath} ${err ? "does not exist" : "exists"}`);
  });
  fs.unlink(directoryPath, (err) => {
    if (err) {
      console.error(err)
      return
    }
  
    //file removed
  })
  const post = await prisma.logbook.delete({
    where: { id: +id },
  })

  res.json(post);
}