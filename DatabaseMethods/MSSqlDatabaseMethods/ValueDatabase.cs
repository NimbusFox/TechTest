using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TechTest.Interfaces.DatabaseMethods;
using System.Data.SqlClient;
using System.Web.Configuration;

namespace TechTest.DatabaseMethods.MSSql {
    public class ValueDatabase : IValueDatabase {

        private ITimingsDatabase _timingsDatabase;

        public ValueDatabase(ITimingsDatabase timingsDatabase) {
            _timingsDatabase = timingsDatabase;

            var con = Connect();

            // https://social.msdn.microsoft.com/Forums/sqlserver/en-US/71c98866-2ad5-4d5e-99c7-6fb8ea9edc68/create-table-if-not-exists-syntax-error?forum=sqlexpress
            var cmd = new SqlCommand("IF NOT EXISTS (SELECT [name] FROM sys.tables WHERE [name] = 'ValuesTable' ) CREATE TABLE ValuesTable ( Value INTEGER not null )", con);

            cmd.ExecuteNonQuery();
        }

        private static SqlConnection Connect() {
            var connection = new SqlConnection(WebConfigurationManager.ConnectionStrings["Database"].ConnectionString);

            connection.Open();

            return connection;
        }

        public int GetTotalCount() {
            var con = Connect();

            var cmd = new SqlCommand("SELECT COUNT(*) FROM [dbo].[ValuesTable]", con);

            var reader = cmd.ExecuteReader();

            reader.Close();

            con.Close();

            return (int) reader.GetValue(0);
        }

        public int GetPageCount(int perPage) {
            return (int) Math.Ceiling((double) (GetTotalCount() / perPage));
        }

        public List<int> GetValues(int page, int perPage, bool asc) {
            var start = page * perPage - perPage;

            var con = Connect();

            var cmd = new SqlCommand("SELECT * FROM [dbo].[ValuesTable] ORDER BY Value " + (asc ? "ASC" : "DESC") + " OFFSET " + start + " ROWS FETCH NEXT " + perPage + " ROWS ONLY", con);

            var output = new List<int>();

            var reader = cmd.ExecuteReader();

            while (reader.Read()) {
                output.Add((int)reader[0]);
            }

            reader.Close();

            con.Close();

            return output;
        }

        public void Add(int value) {
            var con = Connect();

            var cmd = new SqlCommand("INSERT INTO [dbo].[ValuesTable] VALUES (@number)", con);

            cmd.Parameters.AddWithValue("number", value);

            cmd.ExecuteNonQuery();

            con.Close();
        }
    }
}
