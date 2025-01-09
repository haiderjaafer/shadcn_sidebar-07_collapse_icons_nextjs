BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[DeductionModel] (
    [id] INT NOT NULL IDENTITY(1,1),
    [EMP_NO] NVARCHAR(1000) NOT NULL,
    [DED_NO] NVARCHAR(1000) NOT NULL,
    [DEDCAL] NVARCHAR(1000) NOT NULL,
    [deddifcal] NVARCHAR(1000) NOT NULL,
    [DEDBAL] NVARCHAR(1000) NOT NULL,
    [dedprevdifcal] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [DeductionModel_pkey] PRIMARY KEY CLUSTERED ([id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
