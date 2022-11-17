-- CreateTable
CREATE TABLE `Patients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `email` VARCHAR(191) NULL,
    `gender` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Patients_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Doctors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `spec` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Schedule` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `doctor_id` INTEGER NOT NULL,
    `time_from` DATETIME(3) NOT NULL,
    `time_to` DATETIME(3) NOT NULL,
    `is_free` BOOLEAN NOT NULL DEFAULT true,
    `patient_id` INTEGER NOT NULL,
    `type` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_doctor_id_fkey` FOREIGN KEY (`doctor_id`) REFERENCES `Doctors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_patient_id_fkey` FOREIGN KEY (`patient_id`) REFERENCES `Patients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
