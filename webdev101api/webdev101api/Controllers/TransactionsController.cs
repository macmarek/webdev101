using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using webdev101api.Services;

namespace webdev101api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionsController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Transaction>> Get()
        {
            var service = new TransactionService();
            return service.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Transaction> Get(int id)
        {
            var service = new TransactionService();
            return service.GetById(id);
        }

        // POST api/values
        [HttpPost]
        public int Post([FromBody] Transaction transaction)
        {
            var service = new TransactionService();
            return service.Create(transaction);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var service = new TransactionService();
            service.Delete(id);
        }
    }
}
