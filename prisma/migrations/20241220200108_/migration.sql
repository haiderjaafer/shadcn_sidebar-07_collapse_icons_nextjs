/*
  Warnings:

  - A unique constraint covering the columns `[empNo]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateIndex
ALTER TABLE [dbo].[Users] ADD CONSTRAINT [Users_empNo_key] UNIQUE NONCLUSTERED ([empNo]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
