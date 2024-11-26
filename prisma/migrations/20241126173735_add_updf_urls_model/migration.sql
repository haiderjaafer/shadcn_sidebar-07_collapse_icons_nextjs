/*
  Warnings:

  - You are about to alter the column `employeeHireDate` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `DateTime2` to `Date`.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Users] ALTER COLUMN [employeeHireDate] DATE NOT NULL;

-- CreateTable
CREATE TABLE [dbo].[updfUrlsModel] (
    [id] INT NOT NULL IDENTITY(1,1),
    [pdfUrl] VARCHAR(200) NOT NULL,
    [pdfUrlDate] DATE NOT NULL,
    [userID] INT NOT NULL,
    CONSTRAINT [updfUrlsModel_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[updfUrlsModel] ADD CONSTRAINT [updfUrlsModel_userID_fkey] FOREIGN KEY ([userID]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
