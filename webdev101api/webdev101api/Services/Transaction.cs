using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webdev101api.Services
{
    public class Transaction
    {
        public int Id { get; set; }

        public string Date { get; set; }

        public string Description { get; set; }

        public decimal Amount { get; set; }

        public string UserName { get; set; }
    }
}
