-- DropForeignKey
ALTER TABLE `schedule` DROP FOREIGN KEY `Schedule_patient_id_fkey`;

-- AlterTable
ALTER TABLE `schedule` MODIFY `time_from` TIMESTAMP NOT NULL,
    MODIFY `time_to` TIMESTAMP NOT NULL,
    MODIFY `patient_id` INTEGER NULL;
