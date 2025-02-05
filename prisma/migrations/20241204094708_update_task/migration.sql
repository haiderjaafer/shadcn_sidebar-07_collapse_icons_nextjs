BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Task] DROP CONSTRAINT [Task_label_df],
[Task_priority_df],
[Task_status_df];
ALTER TABLE [dbo].[Task] ALTER COLUMN [status] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Task] ALTER COLUMN [label] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Task] ALTER COLUMN [priority] NVARCHAR(1000) NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
