-- CreateTable
CREATE TABLE `sale` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `total_price` DOUBLE NOT NULL,
    `sale_date` DATETIME(3) NOT NULL,
    `status` ENUM('order_made', 'approved', 'on_My_Way', 'delivered') NOT NULL DEFAULT 'order_made',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
