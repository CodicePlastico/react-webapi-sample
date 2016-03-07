using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Web.Values {
    public interface ValueRepository {
        IEnumerable<Value> GetAll();
        void UpdateStringValue(int index, string value);
        void UpdateIntValue(int index, int value);
        Value Get(int index);
    }

    public class InMemoryValueRepository : ValueRepository {
        private readonly IList<Value> _values;

        public InMemoryValueRepository() {
            _values = new List<Value>() {
                new Value() { StringValue = "xxx", IntValue = 11},
                new Value() { StringValue = "yyy", IntValue = 17},
                new Value() { StringValue = "zzz", IntValue = 19}
            };
        }

        public IEnumerable<Value> GetAll() {
            return new ReadOnlyCollection<Value>(_values);
        }

        public void UpdateStringValue(int index, string value) {
            _values[index].StringValue = value;
        }

        public void UpdateIntValue(int index, int value) {
            _values[index].IntValue = value;
        }

        public Value Get(int index) {
            return _values[index];
        }
    }
}
