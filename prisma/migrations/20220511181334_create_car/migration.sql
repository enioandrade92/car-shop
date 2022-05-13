-- CreateTable
CREATE TABLE `car` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `model` VARCHAR(191) NULL,
    `year` INTEGER NOT NULL,
    `createAt` VARCHAR(191) NOT NULL,
    `updateAt` VARCHAR(191) NULL,
    `price` DOUBLE NOT NULL,
    `url_image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
