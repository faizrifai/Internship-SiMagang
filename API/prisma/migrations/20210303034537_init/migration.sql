-- CreateTable
CREATE TABLE `data_mahasiswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `tanggal_lahir` DATE NOT NULL,
    `No_telp` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
