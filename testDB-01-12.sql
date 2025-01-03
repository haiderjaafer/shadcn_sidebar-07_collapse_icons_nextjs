USE [testDB]
GO
EXEC sys.sp_dropextendedproperty @name=N'MS_DiagramPaneCount' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_1'

GO
EXEC sys.sp_dropextendedproperty @name=N'MS_DiagramPane2' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_1'

GO
EXEC sys.sp_dropextendedproperty @name=N'MS_DiagramPane1' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_1'

GO
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [Users_unit_fkey]
GO
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [Users_department_fkey]
GO
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [Users_comcommittee_fkey]
GO
ALTER TABLE [dbo].[updfUrlsModel] DROP CONSTRAINT [updfUrlsModel_userID_fkey]
GO
ALTER TABLE [dbo].[unit] DROP CONSTRAINT [unit_de_fkey]
GO
ALTER TABLE [dbo].[unit] DROP CONSTRAINT [unit_co_fkey]
GO
ALTER TABLE [dbo].[department] DROP CONSTRAINT [department_co_fkey]
GO
/****** Object:  Index [Users_empNo_key]    Script Date: 01-12-2024 01:01:21 ص ******/
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [Users_empNo_key]
GO
/****** Object:  View [dbo].[View_1]    Script Date: 01-12-2024 01:01:21 ص ******/
DROP VIEW [dbo].[View_1]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 01-12-2024 01:01:21 ص ******/
DROP TABLE [dbo].[Users]
GO
/****** Object:  Table [dbo].[updfUrlsModel]    Script Date: 01-12-2024 01:01:21 ص ******/
DROP TABLE [dbo].[updfUrlsModel]
GO
/****** Object:  Table [dbo].[unit]    Script Date: 01-12-2024 01:01:21 ص ******/
DROP TABLE [dbo].[unit]
GO
/****** Object:  Table [dbo].[department]    Script Date: 01-12-2024 01:01:21 ص ******/
DROP TABLE [dbo].[department]
GO
/****** Object:  Table [dbo].[com]    Script Date: 01-12-2024 01:01:21 ص ******/
DROP TABLE [dbo].[com]
GO
/****** Object:  Table [dbo].[_prisma_migrations]    Script Date: 01-12-2024 01:01:21 ص ******/
DROP TABLE [dbo].[_prisma_migrations]
GO
USE [master]
GO
/****** Object:  Database [testDB]    Script Date: 01-12-2024 01:01:21 ص ******/
DROP DATABASE [testDB]
GO
/****** Object:  Database [testDB]    Script Date: 01-12-2024 01:01:21 ص ******/
CREATE DATABASE [testDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'testDB', FILENAME = N'C:\Program Files (x86)\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\testDB.mdf' , SIZE = 5120KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'testDB_log', FILENAME = N'C:\Program Files (x86)\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\testDB_log.ldf' , SIZE = 2048KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [testDB] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [testDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [testDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [testDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [testDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [testDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [testDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [testDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [testDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [testDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [testDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [testDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [testDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [testDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [testDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [testDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [testDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [testDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [testDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [testDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [testDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [testDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [testDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [testDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [testDB] SET RECOVERY FULL 
GO
ALTER DATABASE [testDB] SET  MULTI_USER 
GO
ALTER DATABASE [testDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [testDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [testDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [testDB] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [testDB] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'testDB', N'ON'
GO
USE [testDB]
GO
/****** Object:  Table [dbo].[_prisma_migrations]    Script Date: 01-12-2024 01:01:22 ص ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[_prisma_migrations](
	[id] [varchar](36) NOT NULL,
	[checksum] [varchar](64) NOT NULL,
	[finished_at] [datetimeoffset](7) NULL,
	[migration_name] [nvarchar](250) NOT NULL,
	[logs] [nvarchar](max) NULL,
	[rolled_back_at] [datetimeoffset](7) NULL,
	[started_at] [datetimeoffset](7) NOT NULL DEFAULT (getdate()),
	[applied_steps_count] [int] NOT NULL DEFAULT ((0)),
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[com]    Script Date: 01-12-2024 01:01:22 ص ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[com](
	[co] [int] IDENTITY(1,1) NOT NULL,
	[com] [varchar](100) NOT NULL,
 CONSTRAINT [com_pkey] PRIMARY KEY CLUSTERED 
(
	[co] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[department]    Script Date: 01-12-2024 01:01:22 ص ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[department](
	[de] [int] IDENTITY(1,1) NOT NULL,
	[com] [varchar](100) NOT NULL,
	[co] [int] NOT NULL,
 CONSTRAINT [department_pkey] PRIMARY KEY CLUSTERED 
(
	[de] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[unit]    Script Date: 01-12-2024 01:01:22 ص ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[unit](
	[un] [int] IDENTITY(1,1) NOT NULL,
	[unit] [varchar](100) NOT NULL,
	[co] [int] NOT NULL,
	[de] [int] NOT NULL,
 CONSTRAINT [unit_pkey] PRIMARY KEY CLUSTERED 
(
	[un] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[updfUrlsModel]    Script Date: 01-12-2024 01:01:22 ص ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[updfUrlsModel](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[pdfUrl] [varchar](200) NOT NULL,
	[pdfUrlDate] [date] NOT NULL,
	[userID] [int] NOT NULL,
 CONSTRAINT [updfUrlsModel_pkey] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Users]    Script Date: 01-12-2024 01:01:22 ص ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[userName] [varchar](100) NOT NULL,
	[comcommittee] [int] NOT NULL,
	[department] [int] NOT NULL,
	[unit] [int] NOT NULL,
	[employeeHireDate] [date] NOT NULL,
	[qrCode] [varchar](max) NOT NULL,
	[empNo] [nvarchar](1000) NOT NULL,
 CONSTRAINT [Users_pkey] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  View [dbo].[View_1]    Script Date: 01-12-2024 01:01:22 ص ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[View_1]
AS
SELECT dbo.Users.userName, dbo.Users.empNo, dbo.Users.employeeHireDate, dbo.com.com AS committee, dbo.department.com AS department, dbo.unit.unit, dbo.Users.qrCode
FROM     dbo.Users INNER JOIN
                  dbo.com ON dbo.Users.comcommittee = dbo.com.co INNER JOIN
                  dbo.department ON dbo.Users.department = dbo.department.de AND dbo.com.co = dbo.department.co INNER JOIN
                  dbo.unit ON dbo.Users.unit = dbo.unit.un AND dbo.com.co = dbo.unit.co AND dbo.department.de = dbo.unit.de

GO
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'0ef378d3-3c3a-427e-a3b2-5b7e6c829d8d', N'a3b4361ed7c84b41a83373bc679e914d0759ac0e485c8cff4565d5e27d7b8db4', CAST(N'2024-11-22T13:06:48.2719893+00:00' AS DateTimeOffset), N'20241120204907_second_migration_department', NULL, NULL, CAST(N'2024-11-22T13:06:48.2594865+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'37fdfbfa-342e-481a-8000-cb748a9cf125', N'12e9866f30fa665c71465aabe924a7f4807194d7a329fdee6127f12aacc7bcf2', CAST(N'2024-11-29T14:40:36.1844269+00:00' AS DateTimeOffset), N'20241129144035_add_emp_no_unique', NULL, NULL, CAST(N'2024-11-29T14:40:36.0081933+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'3b12a8ff-54b0-45be-8967-075b23d1216e', N'8e9ff843969719c73c17a1953238f2c70560bd6ef704f4107f7e8f49779bc57e', CAST(N'2024-11-29T13:19:42.9284376+00:00' AS DateTimeOffset), N'20241129131942_add_emp_no', NULL, NULL, CAST(N'2024-11-29T13:19:42.9195396+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'43fed8a1-0265-4805-bbb6-dd999bff4552', N'50b78bf309842685c668231d31b4d2379a14f0ebe0df1a9da1a7ae346e6a36df', CAST(N'2024-11-26T17:37:12.1849611+00:00' AS DateTimeOffset), N'20241120175003_first_migration_committee', NULL, NULL, CAST(N'2024-11-26T17:37:12.1777344+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'48425f39-e166-447e-aa5f-777b979e88f7', N'7ed9497d071286a6aeb191bd3dd011033ed71290218471ac878f0396a0002b35', CAST(N'2024-11-26T17:37:35.6454790+00:00' AS DateTimeOffset), N'20241126173735_add_updf_urls_model', NULL, NULL, CAST(N'2024-11-26T17:37:35.6384611+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'4e6f6aeb-d409-4260-9d9b-eded6fd4c944', N'50b78bf309842685c668231d31b4d2379a14f0ebe0df1a9da1a7ae346e6a36df', CAST(N'2024-11-29T13:16:56.2468677+00:00' AS DateTimeOffset), N'20241120175003_first_migration_committee', NULL, NULL, CAST(N'2024-11-29T13:16:56.1200367+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'5870daaa-fa3d-4abd-bdb7-8dfedde30cc6', N'e34f361866d33ab7fc9a32b4d21b74b70e21e2a06bff9c7c852d0852a1d13b50', CAST(N'2024-11-29T13:16:56.2743025+00:00' AS DateTimeOffset), N'20241122190214_add_user_com', NULL, NULL, CAST(N'2024-11-29T13:16:56.2684339+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'59b0a315-9922-4519-9874-0cfb8561da07', N'e34f361866d33ab7fc9a32b4d21b74b70e21e2a06bff9c7c852d0852a1d13b50', CAST(N'2024-11-26T17:37:12.2121142+00:00' AS DateTimeOffset), N'20241122190214_add_user_com', NULL, NULL, CAST(N'2024-11-26T17:37:12.2042360+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'68efa179-c632-4000-acff-5fa01fec84f2', N'd1647272ed1788e530bbfde004f76128c72004505669c6b1c5a855a1f033276c', CAST(N'2024-11-26T17:37:12.2034504+00:00' AS DateTimeOffset), N'20241121152527_add_unit_migration', NULL, NULL, CAST(N'2024-11-26T17:37:12.1946859+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'6a8672fa-5727-462c-9b25-8c03951e9976', N'a212f6f904688805c4273155645b1a829e84a31e3e72dffc7f4278f67f65e3ac', CAST(N'2024-11-29T13:16:56.2834528+00:00' AS DateTimeOffset), N'20241122191705_add_users', NULL, NULL, CAST(N'2024-11-29T13:16:56.2750442+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'8b8fde40-3d1e-4872-a71b-a556d2230c2f', N'a212f6f904688805c4273155645b1a829e84a31e3e72dffc7f4278f67f65e3ac', CAST(N'2024-11-26T17:37:12.2183476+00:00' AS DateTimeOffset), N'20241122191705_add_users', NULL, NULL, CAST(N'2024-11-26T17:37:12.2127592+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'8df6be20-2feb-4a62-bad8-0f6a1949ff21', N'1ecccdfe41ff3f537aec223db3d72f19a84bd29712acbaf637c58abcf3267ed5', CAST(N'2024-11-29T13:16:56.2916589+00:00' AS DateTimeOffset), N'20241124092252_add_employee_hire_date', NULL, NULL, CAST(N'2024-11-29T13:16:56.2843699+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'a2285926-3f9a-42b4-b74b-f2d60c5b9d5a', N'a3b4361ed7c84b41a83373bc679e914d0759ac0e485c8cff4565d5e27d7b8db4', CAST(N'2024-11-29T13:16:56.2538697+00:00' AS DateTimeOffset), N'20241120204907_second_migration_department', NULL, NULL, CAST(N'2024-11-29T13:16:56.2490847+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'be949b6e-6d0a-4eec-8e46-b1a17b20949b', N'a212f6f904688805c4273155645b1a829e84a31e3e72dffc7f4278f67f65e3ac', CAST(N'2024-11-22T19:17:05.1661685+00:00' AS DateTimeOffset), N'20241122191705_add_users', NULL, NULL, CAST(N'2024-11-22T19:17:05.1583588+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'bf3cbfdd-03a5-4643-be31-10d6f2dfdaea', N'd1647272ed1788e530bbfde004f76128c72004505669c6b1c5a855a1f033276c', CAST(N'2024-11-29T13:16:56.2668537+00:00' AS DateTimeOffset), N'20241121152527_add_unit_migration', NULL, NULL, CAST(N'2024-11-29T13:16:56.2547108+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'cc554f7e-8c4c-4591-b127-10b7b7e2ae28', N'1ecccdfe41ff3f537aec223db3d72f19a84bd29712acbaf637c58abcf3267ed5', CAST(N'2024-11-26T17:37:12.2248945+00:00' AS DateTimeOffset), N'20241124092252_add_employee_hire_date', NULL, NULL, CAST(N'2024-11-26T17:37:12.2189625+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'df84e730-0d7e-433a-a326-73eb9508a46d', N'ba4ae6e9db2b9d1a20bec1959d3d25a3ee8cd709a03bedb76d33b8e2c8759940', CAST(N'2024-11-29T13:17:10.3978221+00:00' AS DateTimeOffset), N'20241129131710_add_qrcode', NULL, NULL, CAST(N'2024-11-29T13:17:10.3930805+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'e335d366-a869-417a-a9ab-06f4f9782f7d', N'd1647272ed1788e530bbfde004f76128c72004505669c6b1c5a855a1f033276c', CAST(N'2024-11-22T13:06:48.2810236+00:00' AS DateTimeOffset), N'20241121152527_add_unit_migration', NULL, NULL, CAST(N'2024-11-22T13:06:48.2726989+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'ece3b687-8e4d-41eb-842f-8b15980eb282', N'e34f361866d33ab7fc9a32b4d21b74b70e21e2a06bff9c7c852d0852a1d13b50', CAST(N'2024-11-22T19:02:15.0355769+00:00' AS DateTimeOffset), N'20241122190214_add_user_com', NULL, NULL, CAST(N'2024-11-22T19:02:15.0111597+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'f80cae6c-6cc1-43ce-a9d6-42b49d70438f', N'7ed9497d071286a6aeb191bd3dd011033ed71290218471ac878f0396a0002b35', CAST(N'2024-11-29T13:16:56.3037058+00:00' AS DateTimeOffset), N'20241126173735_add_updf_urls_model', NULL, NULL, CAST(N'2024-11-29T13:16:56.2932325+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'f9215640-7658-41a4-859d-7ed5fd6b20e5', N'a3b4361ed7c84b41a83373bc679e914d0759ac0e485c8cff4565d5e27d7b8db4', CAST(N'2024-11-26T17:37:12.1938192+00:00' AS DateTimeOffset), N'20241120204907_second_migration_department', NULL, NULL, CAST(N'2024-11-26T17:37:12.1869976+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'fcb82c21-ebce-47f6-aab8-218824ea197b', N'50b78bf309842685c668231d31b4d2379a14f0ebe0df1a9da1a7ae346e6a36df', CAST(N'2024-11-22T13:06:48.2558012+00:00' AS DateTimeOffset), N'20241120175003_first_migration_committee', NULL, NULL, CAST(N'2024-11-22T13:06:48.2484953+00:00' AS DateTimeOffset), 1)
SET IDENTITY_INSERT [dbo].[com] ON 

INSERT [dbo].[com] ([co], [com]) VALUES (1, N'هيئـــة المشتقات الخفيفة')
INSERT [dbo].[com] ([co], [com]) VALUES (2, N'هيئـــــــــة الطاقة')
INSERT [dbo].[com] ([co], [com]) VALUES (3, N'م. مدير عام للشؤون الادارية')
INSERT [dbo].[com] ([co], [com]) VALUES (4, N'الهيئــــــــــــة الاداريـــــــــة')
INSERT [dbo].[com] ([co], [com]) VALUES (5, N'هيئـــــــــــــة الصيانـــــــــة')
INSERT [dbo].[com] ([co], [com]) VALUES (6, N'المـــــــــديـــــــر العـــــــام')
INSERT [dbo].[com] ([co], [com]) VALUES (7, N'م. مدير عام للشؤون الفنية و الانتاج')
INSERT [dbo].[com] ([co], [com]) VALUES (8, N'هيئـــــة المصافي الخارجية')
INSERT [dbo].[com] ([co], [com]) VALUES (9, N'هيئــــــــــــة الـدهــــــــون')
INSERT [dbo].[com] ([co], [com]) VALUES (10, N'الهيئـــــة الفنية والهندسية')
SET IDENTITY_INSERT [dbo].[com] OFF
SET IDENTITY_INSERT [dbo].[department] ON 

INSERT [dbo].[department] ([de], [com], [co]) VALUES (1, N' قسم الاستلام والتجهيز', 2)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (2, N' قسم البناء والأنشاءات', 6)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (3, N' قسم تعاملات المياه', 3)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (4, N'الشعب المرتبطة بالهيئة الاداري', 5)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (5, N'الشعب المرتبطة بهئية الصيانة', 6)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (8, N'مكتب معاون المدير العام للشؤون الادارية', 4)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (9, N'الشعب المرتبطة المشتقات الخفيفة', 2)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (10, N'الشعب المرتبطة هيئة المصافي الخارجية', 10)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (11, N'الشعب المرتبطةهيئة خدمات الطاقة', 3)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (12, N'القسم القانوني', 7)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (13, N'القسم المالي', 4)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (14, N'المركز الطبي', 4)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (15, N'شعبة ادارة الجودة', 9)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (16, N'شعبة الفاكس والبريد الالكتروني', 7)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (17, N'قسم الأنابيب واللحام والخزانات', 6)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (18, N'قسم مختبرات السيطرة النوعية', 9)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (19, N'قسم البيئة', 9)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (20, N'قسم التدريب', 4)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (21, N'قسم التكرير', 2)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (23, N'قسم الرقابة والتدقيق الداخلي', 7)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (24, N'قسم السلامة والاطفاء', 9)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (25, N'قسم السيطرة والنظم', 6)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (26, N'قســـــم الطاقـــة', 3)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (27, N'قسم العلاقات والامن الصناعي', 7)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (28, N'قسم الفحص الهندسي', 7)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (29, N'قسم القياس والمعايرة', 9)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (30, N'قسم الكهرباء', 6)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (32, N'قسم المراجل', 6)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (35, N'قسم المعدات الثابتة', 6)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (36, N'قسم المكائن الدوارة والورش', 6)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (37, N'قسم الموارد البشرية', 5)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (38, N'قسم الهدرجه', 2)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (42, N'قسم تقنية المعلومات والاتصالات', 4)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (43, N'قسم توليد الطاقة الكهربائية', 3)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (44, N'قسم متابعة الانتاج', 10)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (45, N'قسم متابعة المشاريع الخارجية', 10)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (46, N'قسم مصفى السماوة', 10)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (47, N'قسم مصفى النجف', 10)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (48, N'مصفى الديوانية', 10)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (49, N'مصفى كربلاء', 7)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (50, N'مكتب المدير العام', 7)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (51, N'مكتب معاون المدير العام ', 9)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (52, N'العقود و المشتريات', 9)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (53, N'قسم النقل', 5)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (54, N'قسم الخدمات', 9)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (58, N'قسم تقنية المعلومات والاتصالات', 6)
INSERT [dbo].[department] ([de], [com], [co]) VALUES (59, N'قسم المتابعة', 6)
SET IDENTITY_INSERT [dbo].[department] OFF
SET IDENTITY_INSERT [dbo].[unit] ON 

INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (82, N'الوحدة الادارية', 2, 2)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (83, N'شعبة التجهيز', 2, 2)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (84, N'شعبة التفريغ', 2, 2)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (85, N'شعبة متابعة الخزانات والمنظومات ', 2, 2)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (86, N'شعبة الضخ والخزن ', 2, 2)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (87, N'التنظيف الميكانيكي', 6, 3)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (88, N'الوحدة الادارية', 6, 3)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (89, N'شعبة البناء', 6, 3)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (90, N'شعبة النجارة والصباغة', 6, 3)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (91, N'الوحدة الادارية', 3, 4)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (92, N'شعبة المياه الصناعية', 3, 4)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (93, N'شعبة تحلية المياه', 3, 4)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (94, N'ضخ وتدوير المياه للزيوت الخفيفة', 3, 4)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (95, N'الشعبة الادارية', 5, 5)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (101, N'مكتب معاون المدير العام للشؤون الادارية', 4, 9)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (102, N'وحدة الحفاظ على سلامة اللغة العربية', 4, 9)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (103, N'الشعبة الادارية', 2, 10)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (104, N'الشعبة الادارية', 10, 11)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (105, N'شعبة القياس والمعايرة', 10, 11)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (106, N'الشعبة الادارية', 3, 12)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (107, N'الشعبة الادارية', 7, 13)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (108, N'شعبة الدعاوي والحقوق', 7, 13)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (109, N'شعبة العقارات', 7, 13)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (110, N'شعبة الاستشارات التعاقدية والتعاهدات', 7, 13)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (111, N'الوحدة الادارية', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (112, N'شعبة الاعتمادات', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (113, N'شعبة الكلفة', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (114, N'شعبة الحسابات العامة', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (115, N'شعبة الرواتب والاستقطاعات', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (116, N'شعبة الصرف', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (117, N'شعبة الموازنة', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (118, N'شعبة الموجودات الثابتة والتأمين', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (119, N'شعبة امانة الصندوق', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (120, N'شعبة حسابات الانتاج', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (121, N'شعبة حسابات المشاريع الاستثمارية', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (122, N'شعبة حسابات مخزنية', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (123, N'المركز الصحي', 4, 15)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (124, N'شعبة الجودة وتقييم الاداء ', 9, 16)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (126, N'شعبة الفاكس والبريد الالكتروني', 7, 19)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (127, N'الوحدة الادارية', 6, 20)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (128, N'شعبة الانابيب', 6, 20)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (129, N'شعبة اللحام', 6, 20)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (130, N'شعبة صيانة الخزانات والاوعية', 6, 20)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (131, N'الشعبة الادارية', 9, 21)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (132, N'شعبة التحليلات', 9, 21)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (133, N'شعبة المخزن', 9, 21)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (134, N'شعبة الدهون والمتنجات الثقيلة', 9, 21)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (135, N'شعبة السيطرة', 9, 21)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (136, N'شعبة الغاز', 9, 21)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (137, N'شعبة المكائن', 9, 21)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (138, N'شعبة تطوير البدائل النفطية', 9, 21)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (144, N'الشعبة الادارية', 4, 23)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (145, N'شعبة اعداد المدربين والايفاد', 4, 23)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (146, N'شعبة التاهيل', 4, 23)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (147, N'شعبة التطوير والتعليم المستمر', 4, 23)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (148, N'شعبة التدريب الالكتروني والتعلم عن بعد ', 4, 23)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (149, N'الوحدة الادارية', 2, 24)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (150, N'شعبة التكرير/1', 2, 24)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (151, N'شعبة التكرير/2', 2, 24)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (152, N'شعبة التكرير/3', 2, 24)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (158, N'الشعبة الادارية', 7, 26)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (159, N'تدقيق العقود الخارجية والاعتمادات', 7, 26)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (160, N'تدقيق العقود المخزنية المحلية', 7, 26)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (161, N'تدقيق الموجودات والحسابات الختامية', 7, 26)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (162, N'تدقيق شؤون الافراد والرواتب', 7, 26)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (163, N'تدقيق عقود المقاولات ومواد مباشرة', 7, 26)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (164, N'وحدة متابعة معدات القياس', 7, 26)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (165, N'شعبة الاطفاء', 9, 27)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (166, N'الوحدة الادارية', 9, 27)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (167, N'شعبة الاطفاء', 9, 27)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (168, N'شعبة السلامة', 9, 27)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (169, N'شعبة الوقاية والتوعية الصناعية', 9, 27)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (170, N'صيانة معدات الاطفاء', 9, 27)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (171, N'الوحدة الادارية', 6, 29)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (172, N'سيطرة خدمات الطاقة', 6, 29)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (173, N'شعبة سيطرة الدهون', 6, 29)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (174, N'شعبة سيطرة الهدرجة', 6, 29)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (175, N'شعبة سيطرة وحدات التكرير', 6, 29)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (176, N'شعبة ورش والالات والسيطرة', 6, 29)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (177, N'الوحدة الادارية', 3, 30)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (178, N'شعبة ابراج تبريد الدهون', 3, 30)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (179, N'شعبة الخدمات الفنية', 3, 30)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (180, N'شعبة المراجل البخارية /1', 3, 30)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (181, N'شعبة المرجل البخارية /2', 3, 30)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (182, N'شعبة المرجل البخارية /3', 3, 30)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (188, N'الشعبة الادارية', 7, 32)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (189, N'الشعبة الفنية', 7, 32)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (190, N'المختبرات الهندسية', 7, 32)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (191, N'شعبة الدراسات والمعلومات الهندسية', 7, 32)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (192, N'شعبة فحوصات المشاريع الهندسية', 7, 32)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (193, N'فحوصات هندسية', 7, 32)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (212, N'الوحدة الادارية', 6, 36)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (213, N'شعبة الافران', 6, 36)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (214, N'الشعبة الفنية والسباكه  ', 6, 36)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (215, N'شعبة السمكرة', 6, 36)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (217, N'شعبة صيانة المراجل', 6, 36)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (231, N'شعبة صيانة الصمامات', 6, 20)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (237, N'شعبة الطابعة والاستنساخ', 5, 5)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (242, N'الوحدة الادارية', 2, 43)
GO
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (243, N'شعبة الغاز السائل', 2, 43)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (244, N'شعبة هدرجة 1', 2, 43)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (245, N'شعبة هدرجة 2', 2, 43)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (260, N'الاتصالات', 4, 47)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (261, N'الاتصالات/وحدة البدالة', 4, 47)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (262, N'الخوادم وبرمجة الانظمة', 4, 47)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (263, N'مدير القسم / الوحدة الادارية', 4, 47)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (264, N'شعبة الحاسبة', 4, 47)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (265, N'شعبة ادارة الشبكات ', 4, 47)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (266, N'صيانة الحاسبات', 4, 47)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (267, N'صيانة منظومات المراقبة الالكترونية', 4, 47)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (268, N'وحدة الرابسكان', 4, 47)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (269, N'شعبة المولدات البخارية', 3, 48)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (270, N'شعبة المولدات الغازية', 3, 48)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (271, N'وحدة الادارة', 3, 48)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (272, N'قسم متابعة الانتاج', 10, 49)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (273, N'قسم متابعة المشاريع الخارجية', 10, 50)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (274, N'تدقيق/سماوة', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (275, N'الشعبة القانونية', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (276, N'شعبة الادارة والافراد', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (277, N'شعبة الانتاج والتشغيل', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (278, N'شعبة الحسابات', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (279, N'شعبة السلامة والاطفاء', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (280, N'شعبة الصيانة والميكانيك', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (281, N'شعبة الضخ والخزن', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (282, N'شعبة الفحص الهندسي', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (283, N'شعبة المخازن والمشتريات', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (284, N'شعبة المختبرات', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (285, N'وحدة البيئة/سماوة', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (286, N'وحدة التدريب/سماوة', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (287, N'وحدة القياس والمعايرة/سماوة', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (288, N'وحدة الكامرات/سماوة', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (289, N'وحدة النقل والكراج/سماوة', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (290, N'الشعبة القانونية', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (291, N'تدقيق/نجف', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (292, N'شعبة الادارة والافراد', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (293, N'شعبة الانتاج والتشغيل', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (294, N'شعبة الحسابات', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (295, N'شعبة السلامة والاطفاء', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (296, N'شعبة الصيانة والميكانيك', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (297, N'شعبة الضخ والخزن', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (298, N'شعبة الفحص الهندسي', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (299, N'شعبة المخازن والمشتريات', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (300, N'شعبة المختبرات', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (301, N'وحدة البوابات الالكترونيه/نجف', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (302, N'وحدة البيئة/نجف', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (303, N'وحدة التدريب/نجف', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (304, N'وحدة القياس والمعايرة/نجف', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (305, N'وحدة النقل والكراج/نجف', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (306, N'وحدة كامرات المراقبة', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (307, N'السلامة والاطفاء', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (308, N'الوحدة الادارية', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (309, N'الشعبة القانونية', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (310, N'شعبة الادارة والافراد', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (311, N'شعبة الانتاج والتشغيل', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (312, N'شعبة التدقيق', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (313, N'شعبة الحسابات', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (314, N'شعبة الصيانة والميكانيك', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (315, N'شعبة الضخ والخزن', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (316, N'شعبة الفحص الهندسي', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (317, N'شعبة المخازن والمشتريات', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (318, N'شعبة المختبرات', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (319, N'وحدة البيئة/ديوانية', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (320, N'وحدة التدريب/ديوانية', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (321, N'وحدة القياس والمعايرة/ديوانية', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (322, N'وحدة النقل والكراج/ديوانية', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (323, N'وحدة تقنية المعلومات والاتصالات', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (324, N'الشعبة الادارية والقانونية', 7, 54)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (325, N'مكتب المدير العام', 7, 54)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (330, N'شعبة التدريب ', 7, 54)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (331, N'الشعبه الهندسية ', 7, 54)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (332, N'شعبة الانتاج والتشغيل ', 7, 54)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (333, N'التكافل ودعم الموظفين', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (338, N'مدير الهيأة ', 2, 10)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (339, N'شعبة التحقيقات وقضايا النزاهة', 7, 13)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (340, N'وحدة كشف الذمة المالية', 7, 13)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (345, N'وحدة العلاقات ', 7, 54)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (346, N'وحدة الدراسات ', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (347, N'وحدة الدراسات ', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (348, N'وحدة الدراسات ', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (362, N'شعبة الاطفاء وصيانة المعدات', 9, 27)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (364, N'شعبة انتاج الهايدروجين', 2, 43)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (366, N'شعبة الحاسبة', 4, 23)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (367, N'المكتبة', 4, 23)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (368, N'وحدة ال x_ray', 9, 21)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (369, N'مختبر المستودع', 9, 21)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (370, N'شعبة مختبرات الغاز (الازمرة)', 9, 21)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (376, N'شعبة الخطة', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (377, N'وحدة الازمرة', 2, 2)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (381, N'شعبة ابراج التبريد', 3, 4)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (396, N'شعبة الشبكات والبرمجة', 6, 58)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (397, N'شعبة الصيانة', 6, 58)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (398, N'شعبة الحاسبة', 6, 58)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (399, N'شعبة المتابعة المركزية', 6, 59)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (400, N'شعبة متابعة الوحدات الانتاجية', 6, 59)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (401, N'شعبة الادارية', 6, 59)
SET IDENTITY_INSERT [dbo].[unit] OFF
SET IDENTITY_INSERT [dbo].[updfUrlsModel] ON 

INSERT [dbo].[updfUrlsModel] ([id], [pdfUrl], [pdfUrlDate], [userID]) VALUES (6, N'/uploads/2024/11/29/8049_2024.pdf', CAST(N'2024-11-29' AS Date), 33)
INSERT [dbo].[updfUrlsModel] ([id], [pdfUrl], [pdfUrlDate], [userID]) VALUES (7, N'/uploads/2024/11/29/7200_2024.pdf', CAST(N'2024-11-29' AS Date), 34)
INSERT [dbo].[updfUrlsModel] ([id], [pdfUrl], [pdfUrlDate], [userID]) VALUES (8, N'/uploads/2024/11/28/6040_2024.pdf', CAST(N'2024-11-28' AS Date), 35)
INSERT [dbo].[updfUrlsModel] ([id], [pdfUrl], [pdfUrlDate], [userID]) VALUES (9, N'/uploads/2024/11/29/3300_2024.pdf', CAST(N'2024-11-29' AS Date), 36)
SET IDENTITY_INSERT [dbo].[updfUrlsModel] OFF
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([id], [userName], [comcommittee], [department], [unit], [employeeHireDate], [qrCode], [empNo]) VALUES (33, N'حيدر جعفر', 6, 58, 396, CAST(N'2024-11-29' AS Date), N'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAKySURBVO3BQY7cQAwEwSxC//9yeo48NTCQtF7TjIgfrDGKNUqxRinWKMUapVijFGuUYo1SrFGKNUqxRinWKMUapVijFGuUYo1ycVMSfpLKSRI6lS4JncpJEn6Syh3FGqVYoxRrlIuHqTwpCd9Q6ZJwkoRO5UTlSUl4UrFGKdYoxRrl4mVJ+IbKN5LQqZyodEm4IwnfUHlTsUYp1ijFGuViOJUuCZMVa5RijVKsUS6GS8L/pFijFGuUYo1y8TKVv0nlJAl3qPwmxRqlWKMUa5SLhyXhN0lCp3JHEn6zYo1SrFGKNcrFTSr/kiR8Q+VfUqxRijVKsUa5uCkJnUqXhCepdCpdEjqVkyScJOFJKm8q1ijFGqVYo1w8LAmdyjeS0Kl0SehU3qTSJaFT+U2KNUqxRinWKPGDFyWhU/lGEjqVLgl3qHRJ6FROknCHypOKNUqxRinWKPGDByWhU+mS0Kl0SehUvpGETuVJSThR6ZLQqXRJ6FTuKNYoxRqlWKPED/6iJHQqXRI6lS4Jd6h0SehUTpLQqXRJ6FTeVKxRijVKsUaJH/zDknCi0iXhDpWTJHQqXRJOVO4o1ijFGqVYo8QPbkjCT1L5RhI6lS4JnUqXhBOV36RYoxRrlGKNcvEwlScl4SQJnUqn0iXhJAknKidJ6FS6JHQqTyrWKMUapVijXLwsCd9QeZNKl4RO5SQJnUqn0iWhU3lTsUYp1ijFGuVimCR0Kv+TYo1SrFGKNcrFMConSehUuiR0Kp1Kl4TfpFijFGuUYo1y8TKVN6l8Q+VE5SQJJypdErokdCpPKtYoxRqlWKNcPCwJPykJncpJEjqVLgmdSqfSJaFLwonKm4o1SrFGKdYo8YM1RrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijVKsUf4An+gV46rsl6wAAAAASUVORK5CYII=', N'8049')
INSERT [dbo].[Users] ([id], [userName], [comcommittee], [department], [unit], [employeeHireDate], [qrCode], [empNo]) VALUES (34, N'علي حسن علي', 6, 58, 396, CAST(N'2024-11-29' AS Date), N'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAALeSURBVO3BQa7jSAwFwXyE7n/lHC+5KkCQbPTnMCJ+sMYo1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKNUqxRijXKxUNJ+CWVO5JwonKShF9SeaJYoxRrlGKNcvEylTcl4SQJnUqncpKETuVE5U1JeFOxRinWKMUa5eLLknCHyh0qXRJOVDqVJ5Jwh8o3FWuUYo1SrFEu/ueS0Kn8ZcUapVijFGuUiz8uCZ1Kl4QuCZMVa5RijVKsUS6+TOWbVLok3KHyhMq/pFijFGuUYo1y8bIk/FISOpUuCZ1Kl4RO5SQJ/7JijVKsUYo1SvxgjVGsUYo1SrFGuXgoCZ1Kl4ROpUtCp9IloVM5ScKJSpeETuWOJHQqJ0noVN5UrFGKNUqxRrl4SKVLQqfSJeEOlS4JnUqncpKETqVLQqfSJaFT6ZLQqfxSsUYp1ijFGuXioSQ8odIl4USlS8I3JeEOlS4JnUqXhE7liWKNUqxRijVK/OAfkoRO5SQJJypdEu5Q6ZJwh8ovFWuUYo1SrFHiBy9KQqfyRBI6lZMk3KHSJeEOlZMknKi8qVijFGuUYo0SP/jDktCpdEnoVO5IQqdyRxLuUHmiWKMUa5RijRI/eCAJv6RykoRO5SQJncodSehU7khCp/JEsUYp1ijFGiV+8EASOpU3JaFTuSMJncodSehU7khCp/JNxRqlWKMUa5SLL0vCHSp3JKFT6VROktCp3JGETuWOJHQqTxRrlGKNUqxRLv44lS4Jd6h0SehUuiR0Kl0SOpUuCZ3Km4o1SrFGKdYoF39cEjqVkyTckYQnktCpdEnoVJ4o1ijFGqVYo1x8mco3qTyRhBOVLgldEk5UTlTeVKxRijVKsUa5eFkSfikJJyonKl0SuiScqHRJ6JLQqXRJ6FSeKNYoxRqlWKPED9YYxRqlWKMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFG+Q+65DTl44WDsgAAAABJRU5ErkJggg==', N'7200')
INSERT [dbo].[Users] ([id], [userName], [comcommittee], [department], [unit], [employeeHireDate], [qrCode], [empNo]) VALUES (35, N'خالد', 6, 58, 398, CAST(N'2024-11-28' AS Date), N'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAALUSURBVO3BQa7jSAwFwXyE7n/lHC+5ElCQbPTnMCJ+sMYo1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKNUqxRijXKxUNJ+CWVE0noVLokdCpdEn5J5YlijVKsUYo1ysXLVN6UhDtJ6FQ6lTepvCkJbyrWKMUapVijXHxZEk6onFDpktCpdEnoVJ5IwgmVbyrWKMUapVijXAyjciIJncpfVqxRijVKsUa5+OOScEfl/6RYoxRrlGKNcvFlKt+k0iWhS8IdlSdU/iXFGqVYoxRrlIuXJeGXktCpdEnoVLokdCp3kvAvK9YoxRqlWKPEDwZLQqcyWbFGKdYoxRrl4qEkdCpdEjqVLgmdSpeETuVNSehUTiShU7mThE7lTcUapVijFGuUi4dU7qh0SehUuiR0KneS0KncSUKn0iWhU+mS0Kl0SehUfqlYoxRrlGKNcvFQEk6onEjCiSS8KQknVLok/FKxRinWKMUaJX7wQBK+SeVEEjqVLgknVLoknFD5pWKNUqxRijXKxctU7iShU7mThE7ljsoJlS4JXRLuqNxJwgmVJ4o1SrFGKdYo8YM/LAl3VJ5IQqdyIgknVJ4o1ijFGqVYo8QPHkjCL6m8KQmdyokkdConktCpPFGsUYo1SrFGuXiZypuScCIJd1Q6lTtJ6FQ6lTtJ6FQ6lTcVa5RijVKsUS6+LAknVE4k4YkkdConktCpnEhCp/JEsUYp1ijFGuXij1PpktCpdEnoVLokdCpdEjqVLgmdSpeETuVNxRqlWKMUa5SLPy4J35SEJ5LQqXRJ6FSeKNYoxRqlWKNcfJnKN6ncScKdJNxR6ZLQJeGOyh2VNxVrlGKNUqxR4gcPJOGXVLokdCp3ktCpdEk4odIl4Y5Kl4RO5YlijVKsUYo1SvxgjVGsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5T/ADHXLePE7VIbAAAAAElFTkSuQmCC', N'6040')
INSERT [dbo].[Users] ([id], [userName], [comcommittee], [department], [unit], [employeeHireDate], [qrCode], [empNo]) VALUES (36, N'حسام حسن منير ', 6, 59, 400, CAST(N'2024-11-29' AS Date), N'', N'3300')
SET IDENTITY_INSERT [dbo].[Users] OFF
SET ANSI_PADDING ON

GO
/****** Object:  Index [Users_empNo_key]    Script Date: 01-12-2024 01:01:22 ص ******/
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [Users_empNo_key] UNIQUE NONCLUSTERED 
(
	[empNo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[department]  WITH CHECK ADD  CONSTRAINT [department_co_fkey] FOREIGN KEY([co])
REFERENCES [dbo].[com] ([co])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[department] CHECK CONSTRAINT [department_co_fkey]
GO
ALTER TABLE [dbo].[unit]  WITH CHECK ADD  CONSTRAINT [unit_co_fkey] FOREIGN KEY([co])
REFERENCES [dbo].[com] ([co])
GO
ALTER TABLE [dbo].[unit] CHECK CONSTRAINT [unit_co_fkey]
GO
ALTER TABLE [dbo].[unit]  WITH CHECK ADD  CONSTRAINT [unit_de_fkey] FOREIGN KEY([de])
REFERENCES [dbo].[department] ([de])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[unit] CHECK CONSTRAINT [unit_de_fkey]
GO
ALTER TABLE [dbo].[updfUrlsModel]  WITH CHECK ADD  CONSTRAINT [updfUrlsModel_userID_fkey] FOREIGN KEY([userID])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[updfUrlsModel] CHECK CONSTRAINT [updfUrlsModel_userID_fkey]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [Users_comcommittee_fkey] FOREIGN KEY([comcommittee])
REFERENCES [dbo].[com] ([co])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [Users_comcommittee_fkey]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [Users_department_fkey] FOREIGN KEY([department])
REFERENCES [dbo].[department] ([de])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [Users_department_fkey]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [Users_unit_fkey] FOREIGN KEY([unit])
REFERENCES [dbo].[unit] ([un])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [Users_unit_fkey]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "Users"
            Begin Extent = 
               Top = 7
               Left = 48
               Bottom = 253
               Right = 269
            End
            DisplayFlags = 280
            TopColumn = 1
         End
         Begin Table = "com"
            Begin Extent = 
               Top = 7
               Left = 317
               Bottom = 126
               Right = 511
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "department"
            Begin Extent = 
               Top = 7
               Left = 559
               Bottom = 148
               Right = 753
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "unit"
            Begin Extent = 
               Top = 7
               Left = 801
               Bottom = 170
               Right = 995
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 9
         Width = 284
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_1'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_1'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_1'
GO
USE [master]
GO
ALTER DATABASE [testDB] SET  READ_WRITE 
GO
