-- CreateTable
CREATE TABLE `sale_car` (
    `sale_id` INTEGER NOT NULL,
    `car_id` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`sale_id`, `car_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `sale_car` ADD CONSTRAINT `sale_car_car_id_fkey` FOREIGN KEY (`car_id`) REFERENCES `car`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sale_car` ADD CONSTRAINT `sale_car_sale_id_fkey` FOREIGN KEY (`sale_id`) REFERENCES `sale`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
