using System.Collections.Generic;
using Microsoft.AspNet.Mvc;

namespace Web.Values {
    [Route("api/[controller]")]
    public class ValuesController : Controller {
        private readonly ValueRepository _repository;

        public ValuesController(ValueRepository repository) {
            _repository = repository;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Value> Get() {
            return _repository.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Value Get(int id) {
            return _repository.Get(id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value) {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value) {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id) {
        }

        [HttpPatch("{id}")]
        public void ChangeStringValue(int id, [FromBody] PatchDefinition def) {

        }
    }

    public class PatchDefinition {
        public string StringValue { get; set; }
        public string IntValue { get; set; }
    }
}
