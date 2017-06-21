using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Configuration;
using TechTest.Classes;
using TechTest.Interfaces.DatabaseMethods;

namespace TechTest.DatabaseMethods.MSSql {
    public class TimingsDatabase : ITimingsDatabase {

        public TimingsDatabase() {
            var con = Connect();

            // https://social.msdn.microsoft.com/Forums/sqlserver/en-US/71c98866-2ad5-4d5e-99c7-6fb8ea9edc68/create-table-if-not-exists-syntax-error?forum=sqlexpress
            var cmd = new SqlCommand("IF NOT EXISTS (SELECT [name] FROM sys.tables WHERE [name] = 'Timings' ) CREATE TABLE Timings ( ValueCount INTEGER not null, TimeTaken BIGINT not null, Sort BIT not null)", con);

            cmd.ExecuteNonQuery();
        }

        private static SqlConnection Connect() {
            var connection = new SqlConnection(WebConfigurationManager.ConnectionStrings["Database"].ConnectionString);

            connection.Open();

            return connection;
        }

        public void Add(int valueCount, long timeTaken, bool asc) {
            var con = Connect();

            var cmd = new SqlCommand("INSERT INTO [dbo].[Timings] VALUES (@count, @timeTaken, @asc)", con);

            cmd.Parameters.AddWithValue("count", valueCount);
            cmd.Parameters.AddWithValue("timeTaken", timeTaken);
            cmd.Parameters.AddWithValue("asc", asc ? 1 : 0);

            cmd.ExecuteNonQuery();

            con.Close();
        }

        public List<SortTiming> GetValues(bool asc) {
            var con = Connect();

            var cmd = new SqlCommand("SELECT * FROM [dbo].[Timings] ORDER BY TimeTaken " + (asc ? "ASC" : "DESC"), con);

            var output = new List<SortTiming>();

            var reader = cmd.ExecuteReader();

            while (reader.Read()) {
                var value = new SortTiming {
                    ValueCount = (int) reader["ValueCount"],
                    Time = new TimeSpan((long) reader["TimeTaken"]).TotalMilliseconds,
                    Order = (bool) reader["Sort"] ? "Ascending" : "Descending"
                };

                output.Add(value);
            }

            reader.Close();

            con.Close();

            return output;
        }
    }
}
