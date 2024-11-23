BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Users] (
    [id] INT NOT NULL IDENTITY(1,1),
    [userName] VARCHAR(100) NOT NULL,
    [comcommittee] INT NOT NULL,
    CONSTRAINT [Users_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Users] ADD CONSTRAINT [Users_comcommittee_fkey] FOREIGN KEY ([comcommittee]) REFERENCES [dbo].[com]([co]) ON DELETE CASCADE ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
