USE [testDB]
GO
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [Users_unit_fkey]
GO
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [Users_department_fkey]
GO
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [Users_comcommittee_fkey]
GO
ALTER TABLE [dbo].[unit] DROP CONSTRAINT [unit_de_fkey]
GO
ALTER TABLE [dbo].[unit] DROP CONSTRAINT [unit_co_fkey]
GO
ALTER TABLE [dbo].[department] DROP CONSTRAINT [department_co_fkey]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 24-11-2024 01:51:05 م ******/
DROP TABLE [dbo].[Users]
GO
/****** Object:  Table [dbo].[unit]    Script Date: 24-11-2024 01:51:05 م ******/
DROP TABLE [dbo].[unit]
GO
/****** Object:  Table [dbo].[department]    Script Date: 24-11-2024 01:51:05 م ******/
DROP TABLE [dbo].[department]
GO
/****** Object:  Table [dbo].[com]    Script Date: 24-11-2024 01:51:05 م ******/
DROP TABLE [dbo].[com]
GO
/****** Object:  Table [dbo].[_prisma_migrations]    Script Date: 24-11-2024 01:51:05 م ******/
DROP TABLE [dbo].[_prisma_migrations]
GO
USE [master]
GO
/****** Object:  Database [testDB]    Script Date: 24-11-2024 01:51:05 م ******/
DROP DATABASE [testDB]
GO
/****** Object:  Database [testDB]    Script Date: 24-11-2024 01:51:05 م ******/
CREATE DATABASE [testDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'testDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\testDB.mdf' , SIZE = 5120KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'testDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\testDB_log.ldf' , SIZE = 2048KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
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
/****** Object:  Table [dbo].[_prisma_migrations]    Script Date: 24-11-2024 01:51:05 م ******/
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
/****** Object:  Table [dbo].[com]    Script Date: 24-11-2024 01:51:05 م ******/
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
/****** Object:  Table [dbo].[department]    Script Date: 24-11-2024 01:51:05 م ******/
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
/****** Object:  Table [dbo].[unit]    Script Date: 24-11-2024 01:51:05 م ******/
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
/****** Object:  Table [dbo].[Users]    Script Date: 24-11-2024 01:51:05 م ******/
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
 CONSTRAINT [Users_pkey] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'3f959eca-92b4-4ee5-bc5e-fa8870ca2ede', N'bf30919093bb9c36479a93640738f8960baf36046de5530dba9905052f9698cd', CAST(N'2024-11-24T10:00:11.5950978+00:00' AS DateTimeOffset), N'20241122190214_add_user_com', NULL, NULL, CAST(N'2024-11-24T10:00:11.5924830+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'4dd4e1bf-faa6-498b-b622-12bda9d5378f', N'7b69ba09ea579672ea2395b4fd626aedd980fded1ad8ca946012aa93b0b5a0ac', CAST(N'2024-11-24T10:00:11.5846706+00:00' AS DateTimeOffset), N'20241120175003_first_migration_committee', NULL, NULL, CAST(N'2024-11-24T10:00:11.5788653+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'9d3e2585-8d65-4133-bde8-7c584e3a0787', N'5969b20637b822ddb972e3a628570d6fed0899037c3224a07026849a20ef1b37', CAST(N'2024-11-24T10:00:58.1990390+00:00' AS DateTimeOffset), N'20241124100058_modify_employee_hire_date', NULL, NULL, CAST(N'2024-11-24T10:00:58.1950391+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'9dfb0964-d706-4e2d-83a6-bcab161ba9e7', N'62fd9638f2058e19f7a4e25bfd051394b9a6337ba4632a416dc4b9159a567017', CAST(N'2024-11-24T10:00:11.5921108+00:00' AS DateTimeOffset), N'20241121152527_add_unit_migration', NULL, NULL, CAST(N'2024-11-24T10:00:11.5890889+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'abe86ea6-1df9-4da0-9c3a-cf8b7a91fccf', N'65e46f94bbfe841528592aae801df9808d84a409695b4b2a0f6e0c4515b22502', CAST(N'2024-11-24T10:00:11.6009969+00:00' AS DateTimeOffset), N'20241124092252_add_employee_hire_date', NULL, NULL, CAST(N'2024-11-24T10:00:11.5992064+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'aee770de-302d-416f-a89f-d4b84572ae42', N'5b4483ff7c744d3ede6c887540834ed08710a03e94ec70f6b56b885783f651da', CAST(N'2024-11-24T10:00:11.5885836+00:00' AS DateTimeOffset), N'20241120204907_second_migration_department', NULL, NULL, CAST(N'2024-11-24T10:00:11.5856667+00:00' AS DateTimeOffset), 1)
INSERT [dbo].[_prisma_migrations] ([id], [checksum], [finished_at], [migration_name], [logs], [rolled_back_at], [started_at], [applied_steps_count]) VALUES (N'd6c39d0a-6da3-41c2-b445-1ee2e99d964d', N'd675d9cfbdfbf1db1b8778d44f9bfd7dd5406d600fdf63fc0d2fddd0c948a94e', CAST(N'2024-11-24T10:00:11.5988376+00:00' AS DateTimeOffset), N'20241122191705_add_users', NULL, NULL, CAST(N'2024-11-24T10:00:11.5954635+00:00' AS DateTimeOffset), 1)
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
INSERT [dbo].[department] ([de], [com], [co]) VALUES (57, N'قسم تقنية المعلومات', 6)
SET IDENTITY_INSERT [dbo].[department] OFF
SET IDENTITY_INSERT [dbo].[unit] ON 

INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (1, N'الوحدة الادارية', 2, 2)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (2, N'شعبة التجهيز', 2, 2)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (3, N'شعبة التفريغ', 2, 2)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (4, N'شعبة متابعة الخزانات والمنظومات ', 2, 2)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (5, N'شعبة الضخ والخزن ', 2, 2)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (6, N'التنظيف الميكانيكي', 6, 3)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (7, N'الوحدة الادارية', 6, 3)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (8, N'شعبة البناء', 6, 3)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (9, N'شعبة النجارة والصباغة', 6, 3)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (10, N'الوحدة الادارية', 3, 4)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (11, N'شعبة المياه الصناعية', 3, 4)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (12, N'شعبة تحلية المياه', 3, 4)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (13, N'ضخ وتدوير المياه للزيوت الخفيفة', 3, 4)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (14, N'الشعبة الادارية', 5, 5)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (20, N'مكتب معاون المدير العام للشؤون الادارية', 4, 9)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (21, N'وحدة الحفاظ على سلامة اللغة العربية', 4, 9)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (22, N'الشعبة الادارية', 2, 10)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (23, N'الشعبة الادارية', 10, 11)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (24, N'شعبة القياس والمعايرة', 10, 11)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (25, N'الشعبة الادارية', 3, 12)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (26, N'الشعبة الادارية', 7, 13)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (27, N'شعبة الدعاوي والحقوق', 7, 13)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (28, N'شعبة العقارات', 7, 13)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (29, N'شعبة الاستشارات التعاقدية والتعاهدات', 7, 13)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (30, N'الوحدة الادارية', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (31, N'شعبة الاعتمادات', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (32, N'شعبة الكلفة', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (33, N'شعبة الحسابات العامة', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (34, N'شعبة الرواتب والاستقطاعات', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (35, N'شعبة الصرف', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (36, N'شعبة الموازنة', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (37, N'شعبة الموجودات الثابتة والتأمين', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (38, N'شعبة امانة الصندوق', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (39, N'شعبة حسابات الانتاج', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (40, N'شعبة حسابات المشاريع الاستثمارية', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (41, N'شعبة حسابات مخزنية', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (42, N'المركز الصحي', 4, 15)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (43, N'شعبة الجودة وتقييم الاداء ', 9, 16)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (45, N'شعبة الفاكس والبريد الالكتروني', 7, 19)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (46, N'الوحدة الادارية', 6, 20)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (47, N'شعبة الانابيب', 6, 20)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (48, N'شعبة اللحام', 6, 20)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (49, N'شعبة صيانة الخزانات والاوعية', 6, 20)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (50, N'الشعبة الادارية', 9, 21)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (51, N'شعبة التحليلات', 9, 21)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (52, N'شعبة المخزن', 9, 21)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (53, N'شعبة الدهون والمتنجات الثقيلة', 9, 21)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (54, N'شعبة السيطرة', 9, 21)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (55, N'شعبة الغاز', 9, 21)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (56, N'شعبة المكائن', 9, 21)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (57, N'شعبة تطوير البدائل النفطية', 9, 21)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (63, N'الشعبة الادارية', 4, 23)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (64, N'شعبة اعداد المدربين والايفاد', 4, 23)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (65, N'شعبة التاهيل', 4, 23)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (66, N'شعبة التطوير والتعليم المستمر', 4, 23)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (67, N'شعبة التدريب الالكتروني والتعلم عن بعد ', 4, 23)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (68, N'الوحدة الادارية', 2, 24)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (69, N'شعبة التكرير/1', 2, 24)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (70, N'شعبة التكرير/2', 2, 24)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (71, N'شعبة التكرير/3', 2, 24)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (77, N'الشعبة الادارية', 7, 26)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (78, N'تدقيق العقود الخارجية والاعتمادات', 7, 26)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (79, N'تدقيق العقود المخزنية المحلية', 7, 26)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (80, N'تدقيق الموجودات والحسابات الختامية', 7, 26)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (81, N'تدقيق شؤون الافراد والرواتب', 7, 26)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (82, N'تدقيق عقود المقاولات ومواد مباشرة', 7, 26)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (83, N'وحدة متابعة معدات القياس', 7, 26)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (84, N'شعبة الاطفاء', 9, 27)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (85, N'الوحدة الادارية', 9, 27)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (86, N'شعبة الاطفاء', 9, 27)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (87, N'شعبة السلامة', 9, 27)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (88, N'شعبة الوقاية والتوعية الصناعية', 9, 27)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (89, N'صيانة معدات الاطفاء', 9, 27)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (90, N'الوحدة الادارية', 6, 29)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (91, N'سيطرة خدمات الطاقة', 6, 29)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (92, N'شعبة سيطرة الدهون', 6, 29)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (93, N'شعبة سيطرة الهدرجة', 6, 29)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (94, N'شعبة سيطرة وحدات التكرير', 6, 29)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (95, N'شعبة ورش والالات والسيطرة', 6, 29)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (96, N'الوحدة الادارية', 3, 30)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (97, N'شعبة ابراج تبريد الدهون', 3, 30)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (98, N'شعبة الخدمات الفنية', 3, 30)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (99, N'شعبة المراجل البخارية /1', 3, 30)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (100, N'شعبة المرجل البخارية /2', 3, 30)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (101, N'شعبة المرجل البخارية /3', 3, 30)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (107, N'الشعبة الادارية', 7, 32)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (108, N'الشعبة الفنية', 7, 32)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (109, N'المختبرات الهندسية', 7, 32)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (110, N'شعبة الدراسات والمعلومات الهندسية', 7, 32)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (111, N'شعبة فحوصات المشاريع الهندسية', 7, 32)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (112, N'فحوصات هندسية', 7, 32)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (131, N'الوحدة الادارية', 6, 36)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (132, N'شعبة الافران', 6, 36)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (133, N'الشعبة الفنية والسباكه  ', 6, 36)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (134, N'شعبة السمكرة', 6, 36)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (136, N'شعبة صيانة المراجل', 6, 36)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (150, N'شعبة صيانة الصمامات', 6, 20)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (156, N'شعبة الطابعة والاستنساخ', 5, 5)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (161, N'الوحدة الادارية', 2, 43)
GO
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (162, N'شعبة الغاز السائل', 2, 43)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (163, N'شعبة هدرجة 1', 2, 43)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (164, N'شعبة هدرجة 2', 2, 43)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (179, N'الاتصالات', 4, 47)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (180, N'الاتصالات/وحدة البدالة', 4, 47)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (181, N'الخوادم وبرمجة الانظمة', 4, 47)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (182, N'مدير القسم / الوحدة الادارية', 4, 47)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (183, N'شعبة الحاسبة', 4, 47)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (184, N'شعبة ادارة الشبكات ', 4, 47)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (185, N'صيانة الحاسبات', 4, 47)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (186, N'صيانة منظومات المراقبة الالكترونية', 4, 47)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (187, N'وحدة الرابسكان', 4, 47)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (188, N'شعبة المولدات البخارية', 3, 48)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (189, N'شعبة المولدات الغازية', 3, 48)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (190, N'وحدة الادارة', 3, 48)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (191, N'قسم متابعة الانتاج', 10, 49)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (192, N'قسم متابعة المشاريع الخارجية', 10, 50)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (193, N'تدقيق/سماوة', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (194, N'الشعبة القانونية', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (195, N'شعبة الادارة والافراد', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (196, N'شعبة الانتاج والتشغيل', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (197, N'شعبة الحسابات', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (198, N'شعبة السلامة والاطفاء', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (199, N'شعبة الصيانة والميكانيك', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (200, N'شعبة الضخ والخزن', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (201, N'شعبة الفحص الهندسي', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (202, N'شعبة المخازن والمشتريات', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (203, N'شعبة المختبرات', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (204, N'وحدة البيئة/سماوة', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (205, N'وحدة التدريب/سماوة', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (206, N'وحدة القياس والمعايرة/سماوة', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (207, N'وحدة الكامرات/سماوة', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (208, N'وحدة النقل والكراج/سماوة', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (209, N'الشعبة القانونية', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (210, N'تدقيق/نجف', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (211, N'شعبة الادارة والافراد', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (212, N'شعبة الانتاج والتشغيل', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (213, N'شعبة الحسابات', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (214, N'شعبة السلامة والاطفاء', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (215, N'شعبة الصيانة والميكانيك', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (216, N'شعبة الضخ والخزن', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (217, N'شعبة الفحص الهندسي', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (218, N'شعبة المخازن والمشتريات', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (219, N'شعبة المختبرات', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (220, N'وحدة البوابات الالكترونيه/نجف', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (221, N'وحدة البيئة/نجف', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (222, N'وحدة التدريب/نجف', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (223, N'وحدة القياس والمعايرة/نجف', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (224, N'وحدة النقل والكراج/نجف', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (225, N'وحدة كامرات المراقبة', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (226, N'السلامة والاطفاء', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (227, N'الوحدة الادارية', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (228, N'الشعبة القانونية', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (229, N'شعبة الادارة والافراد', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (230, N'شعبة الانتاج والتشغيل', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (231, N'شعبة التدقيق', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (232, N'شعبة الحسابات', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (233, N'شعبة الصيانة والميكانيك', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (234, N'شعبة الضخ والخزن', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (235, N'شعبة الفحص الهندسي', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (236, N'شعبة المخازن والمشتريات', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (237, N'شعبة المختبرات', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (238, N'وحدة البيئة/ديوانية', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (239, N'وحدة التدريب/ديوانية', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (240, N'وحدة القياس والمعايرة/ديوانية', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (241, N'وحدة النقل والكراج/ديوانية', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (242, N'وحدة تقنية المعلومات والاتصالات', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (243, N'الشعبة الادارية والقانونية', 7, 54)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (244, N'مكتب المدير العام', 7, 54)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (249, N'شعبة التدريب ', 7, 54)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (250, N'الشعبه الهندسية ', 7, 54)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (251, N'شعبة الانتاج والتشغيل ', 7, 54)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (252, N'التكافل ودعم الموظفين', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (257, N'مدير الهيأة ', 2, 10)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (258, N'شعبة التحقيقات وقضايا النزاهة', 7, 13)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (259, N'وحدة كشف الذمة المالية', 7, 13)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (264, N'وحدة العلاقات ', 7, 54)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (265, N'وحدة الدراسات ', 10, 52)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (266, N'وحدة الدراسات ', 10, 53)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (267, N'وحدة الدراسات ', 10, 51)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (281, N'شعبة الاطفاء وصيانة المعدات', 9, 27)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (283, N'شعبة انتاج الهايدروجين', 2, 43)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (285, N'شعبة الحاسبة', 4, 23)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (286, N'المكتبة', 4, 23)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (287, N'وحدة ال x_ray', 9, 21)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (288, N'مختبر المستودع', 9, 21)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (289, N'شعبة مختبرات الغاز (الازمرة)', 9, 21)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (295, N'شعبة الخطة', 4, 14)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (296, N'وحدة الازمرة', 2, 2)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (300, N'شعبة ابراج التبريد', 3, 4)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (305, N'شعبة الشبكات والبرمجة', 6, 57)
INSERT [dbo].[unit] ([un], [unit], [co], [de]) VALUES (307, N'شعبة الصيانة', 6, 57)
SET IDENTITY_INSERT [dbo].[unit] OFF
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([id], [userName], [comcommittee], [department], [unit], [employeeHireDate]) VALUES (2, N'علي حسن محمد عبد اللة', 6, 57, 305, CAST(N'2022-10-10' AS Date))
INSERT [dbo].[Users] ([id], [userName], [comcommittee], [department], [unit], [employeeHireDate]) VALUES (3, N'محمد حسن عبدالرضا مجيد', 6, 57, 305, CAST(N'2024-11-24' AS Date))
INSERT [dbo].[Users] ([id], [userName], [comcommittee], [department], [unit], [employeeHireDate]) VALUES (4, N'haider jaafer', 6, 57, 307, CAST(N'2024-11-13' AS Date))
INSERT [dbo].[Users] ([id], [userName], [comcommittee], [department], [unit], [employeeHireDate]) VALUES (5, N'haiderjaafer6.9@gmail.com', 6, 57, 305, CAST(N'2024-11-01' AS Date))
SET IDENTITY_INSERT [dbo].[Users] OFF
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
USE [master]
GO
ALTER DATABASE [testDB] SET  READ_WRITE 
GO
