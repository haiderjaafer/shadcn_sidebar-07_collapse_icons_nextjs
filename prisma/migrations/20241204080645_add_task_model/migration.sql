BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Task] (
    [id] CHAR(30) NOT NULL,
    [code] VARCHAR(128) NOT NULL,
    [title] VARCHAR(128),
    [status] VARCHAR(30) NOT NULL CONSTRAINT [Task_status_df] DEFAULT 'todo',
    [label] VARCHAR(30) NOT NULL CONSTRAINT [Task_label_df] DEFAULT 'bug',
    [priority] VARCHAR(30) NOT NULL CONSTRAINT [Task_priority_df] DEFAULT 'low',
    [archived] BIT NOT NULL CONSTRAINT [Task_archived_df] DEFAULT 0,
    [createdAt] DATETIME NOT NULL CONSTRAINT [Task_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Task_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Task_code_key] UNIQUE NONCLUSTERED ([code])
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
