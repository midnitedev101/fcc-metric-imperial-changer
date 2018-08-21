var bodyParser          = require('body-parser')
const convertHandler    = require('./controllers/convertHandler.js');

module.exports = function (app) {
  
  // app.use(bodyParser.urlencoded({ extended: false }))
  
  //Index page (static HTML)
  app.route('/')
    .get(function (req, res) {
      res.sendFile(process.cwd() + '/views/index.html');
    });
  
  app.route('/api/convert')
      .get((req, res) => {
        var value  = new convertHandler();
        // var num = value.getNum(req.query.input);
        // console.log(num);
        
        // var unit = value.getUnit(req.query.input);
        // console.log(unit);
    
        var fullResults = value.completeResults(req.query.input)
        
        // res.json({initNum: fullResults.num.toString(), initUnit: fullResults.unit, returnNum: fullResults.returnVal, returnUnit: fullResults.returnUnit, string:fullResults.returnString});
        res.json({initNum: fullResults.num.toString(), initUnit: fullResults.unit, returnNum: fullResults.convertValue, returnUnit: fullResults.returnUnit, string:fullResults.returnString});
    
        
      });
};