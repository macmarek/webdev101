CREATE TABLE [dbo].[Transactions](
	[Id] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[Date] [varchar](30) NOT NULL,
	[Description] [varchar](300) NOT NULL,
	[Amount] [numeric](18, 3) NOT NULL,
	[UserName] [varchar](300) NOT NULL
);