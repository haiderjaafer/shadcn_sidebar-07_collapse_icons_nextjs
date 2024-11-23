/*
  Warnings:

  - Added the required column `department` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [Users_comcommittee_fkey];

-- AlterTable
ALTER TABLE [dbo].[Users] ADD [department] INT NOT NULL,
[unit] INT NOT NULL;

-- AddForeignKey
ALTER TABLE [dbo].[Users] ADD CONSTRAINT [Users_comcommittee_fkey] FOREIGN KEY ([comcommittee]) REFERENCES [dbo].[com]([co]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Users] ADD CONSTRAINT [Users_department_fkey] FOREIGN KEY ([department]) REFERENCES [dbo].[department]([de]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Users] ADD CONSTRAINT [Users_unit_fkey] FOREIGN KEY ([unit]) REFERENCES [dbo].[unit]([un]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
