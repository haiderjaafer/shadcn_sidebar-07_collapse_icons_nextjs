/*
  Warnings:

  - A unique constraint covering the columns `[empNo]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [Users_empNo_fkey];

-- CreateIndex
ALTER TABLE [dbo].[Users] ADD CONSTRAINT [Users_empNo_key] UNIQUE NONCLUSTERED ([empNo]);

-- AddForeignKey
ALTER TABLE [dbo].[EmployeeModel] ADD CONSTRAINT [EmployeeModel_EMP_NO_fkey] FOREIGN KEY ([EMP_NO]) REFERENCES [dbo].[Users]([empNo]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
