module.exports = {
  getOperators: function(next) {
    Operator.find().exec(function(err, operators) {
      if(err) throw err;
      next(operators);
    });
  },
  addOperator: function(operatorVal, next) {
    Operator.create({value: operatorVal}).exec(function(err, operator) {
      if(err) throw err;
      next(operator);
    });
  },
  removeTodo: function(operatorVal, next) {
    Operator.destroy({value: operatorVal}).exec(function(err, operator) {
      if(err) throw err;
      next(operator);
    });
  }
};
