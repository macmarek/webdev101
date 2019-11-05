using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace webdev101api.Services
{
    public class TransactionService
    {
        private string _connectionString = @"Server=tcp:webdev101.database.windows.net,1433;Initial Catalog=websev101test;Persist Security Info=False;User ID=webdev_user;Password=();MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

        public List<Transaction> GetAll()
        {
            string sql = "SELECT Id, Date, Description, Amount, UserName FROM Transactions";

            using (var connection = new SqlConnection(_connectionString))
            {
                var allTransactions = connection.Query<Transaction>(sql).ToList();

                return allTransactions;
            }
        }

        public Transaction GetById(int id)
        {
            string sql = "SELECT Id, Date, Description, Amount, UserName FROM Transactions where Id =  @Id;";

            using (var connection = new SqlConnection(_connectionString))
            {
                var transaction = connection.QueryFirst<Transaction>(sql, new { Id = id });

                return transaction;
            }
        }

        public void Delete(int id)
        {
            string sql = "DELETE FROM Transactions where Id =  @Id;";

            using (var connection = new SqlConnection(_connectionString))
            {
                var transaction = connection.ExecuteScalar(sql, new { Id = id });
            }
        }

        public int Create(Transaction transaction)
        {
            string sql = @"INSERT into Transactions(Date, Description, Amount, UserName) 
                            values(@Date, @Description, @Amount, @UserName)
                            SELECT SCOPE_IDENTITY();";

            using (var connection = new SqlConnection(_connectionString))
            {
                int createdId = connection.QueryFirst<int>(sql, transaction);

                return createdId;
            }
        }
    }
}
