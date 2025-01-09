/*
  Warnings:

  - A unique constraint covering the columns `[EMP_NO]` on the table `DeductionModel` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[EMP_NO]` on the table `EmployeeModel` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateIndex
ALTER TABLE [dbo].[DeductionModel] ADD CONSTRAINT [DeductionModel_EMP_NO_key] UNIQUE NONCLUSTERED ([EMP_NO]);

-- CreateIndex
ALTER TABLE [dbo].[EmployeeModel] ADD CONSTRAINT [EmployeeModel_EMP_NO_key] UNIQUE NONCLUSTERED ([EMP_NO]);

-- AddForeignKey
ALTER TABLE [dbo].[DeductionModel] ADD CONSTRAINT [DeductionModel_EMP_NO_fkey] FOREIGN KEY ([EMP_NO]) REFERENCES [dbo].[EmployeeModel]([EMP_NO]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
