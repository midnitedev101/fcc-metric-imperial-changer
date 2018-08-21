/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler(input) { 
  // var regExpCheck = /(((^\d+\.\d+|^\d+)([a-z]+$))|^[a-z]+$)/gi      // Allows for any of these cases (e.g. 3.5mi, 3mi, mi)
  var regExpCheck = /((((^\d+\.\d+|^\d+)|((^\d+\.\d+|^\d+)\/(\d+\.\d+|\d+)))([a-z]+$))|^[a-z]+$)/gi      // Allows for any of these cases (e.g. 3.5mi, 3mi, 1/2km, mi, etc.)
  // var numRegExpCheck = /(^\d+\.\d+|^\d+)/g;
  var numRegExpCheck = /(^\d+\.\d+|^\d+)\/(\d+\.\d+|\d+)|(^\d+\.\d+|^\d+)/g;
  var unitRegExpCheck = /([a-z]+$)/gi;
  
  this.getNum = function(input) {
//     // Start: Working
//     var unitRegExp = /([a-z]+$)/gi;                                 // Checks for letters only at the end of the string
//     console.log(input)
//     var init = input.match(unitRegExp);                        
//     // var num = input.substr(0, input.indexOf(init));                 // Returns numerical value of conversion target
//     // console.log(num)

//     var unit = input.substr(input.indexOf(init));                   // Returns numerical value of conversion target
//     // console.log(unit)
//     // End: Working
    
//     var numRegExp = /(\d+)/g
    
    
//     var regExpForNum = /(^\d+\.?\d+$|^\d+$)/g;                      // Checks for nums only (e.g. 4.5gal returns null, but 4.5 returns 4.5)
//     var result = input.match(regExpForNum);
    
    var result = '';
    // var regExpCheck = /(((^\d+\.\d+|^\d+)([a-z]+$))|^[a-z]+$)/gi      // Allows for any of these cases (e.g. 3.5mi, 3mi, mi)
    var init = input.match(regExpCheck)
    if (init) {
      // console.log(init)
      // console.log('init[0]: ' +init[0])

      // var numRegExpCheck = /(^\d+\.\d+|^\d+)/g;
      var numRes = init[0].match(numRegExpCheck);                     // Matches num if it exists in the string init[0]
      // console.log('numRes: ' +numRes)
      // console.log(numRes);
      // console.log(typeof numRes);
      // console.log(numRes.valueOf());
      // console.log(parseFloat("1/2.5"))
      if (numRes) {
        var num = numRes.map((val) => eval(val));               // Returns num values (3.5, 3, etc.)
        // console.log('num: ' +num);
        // console.log(num[0])
        result = num[0];
      } else {
        result = 1;
      }
    } else {
      result = 'invalid number';
    }
    // console.log(result)
    return result;
  };
  
  this.getUnit = function(input) {
    var result = '';
    // var regExpCheck = /(((^\d+\.\d+|^\d+)([a-z]+$))|^[a-z]+$)/gi      // Allows for any of these cases (e.g. 3.5mi, 3mi, mi, etc.)
    var init = input.match(regExpCheck)
    if (init) {
      // console.log(init)
      // console.log(init[0])

      // var unitRegExpCheck = /([a-z]+$)/gi;
      var unitRes = init[0].match(unitRegExpCheck);                     // Matches units if it exists in the string init[0]
      // console.log('unitRes: ' +unitRes);
      var unit = init[0].substr(init[0].indexOf(unitRes));               // Returns units (gal, km, cm, etc.)
      // console.log('unit: ' +unit)
      // console.log(unit);
      // if (unit != ('gal' || 'l' || 'mi' || 'lbs' || 'kg' || 'km' || 'GAL' || 'LBS' || 'MI' || 'L' || 'KG' || 'KM')) {
      //   console.log('not valid:' +unit)
      //   result = 'invalid unit'
      // }
      // else {
      //   console.log('valid unit: ' +unit);
      //   result = unit;
      // }
      
      switch(unit.toLowerCase()) {
        case ('gal'):
          return result = unit;
          break;
        case ('lbs'):
          return result = unit;
          break;
        case ('mi'):
          return result = unit;
          break;
        case ('l'):
          return result = unit;
          break;
        case ('kg'):
          return result = unit;
          break;
        case ('km'):
          return result = unit;
          break;  
        default:
          result = 'invalid unit';
          break;
      }
    } else {
      result = 'invalid unit';
    }
    
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    switch(initUnit.toLowerCase()) {
      case 'gal':
        result = 'l';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'km':
        result = 'mi';
        break;  
      default:
        break;
    }
    
    // result = this.spellOutUnit(result);
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result = '';
    switch(unit.toLowerCase()) {
      case 'l':
        result = 'liters';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'km':
        result = 'kilometers';
        break;
      case 'gal':
        result = 'gallons';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'mi':
        result = 'miles';
        break;
      default:
        break;
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result = '';
    
    switch(initUnit.toLowerCase()) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        break;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    if (typeof returnNum == 'number')
      var result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + parseFloat(returnNum.toFixed(5)) + " " + this.spellOutUnit(returnUnit);
    else
      var result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
    
    return result;
  };
  
  
  this.completeResults = function(input) {
    var convObj = {}
    convObj.num = this.getNum(input);
    convObj.unit = this.getUnit(input);
    
    if (convObj.unit !== 'invalid unit' && convObj.num !== 'invalid number') {
      convObj.convertValue = this.convert(convObj.num, convObj.unit);
      // convObj.returnVal = parseFloat(convObj.convertValue.toFixed(5));
      // console.log(parseFloat(convObj.returnVal));
      // console.log(typeof convObj.returnVal);

      convObj.returnUnit = this.getReturnUnit(convObj.unit);

      // convObj.returnString = this.getString(convObj.num, convObj.unit, convObj.returnVal, convObj.returnUnit);
      convObj.returnString = this.getString(convObj.num, convObj.unit, convObj.convertValue, convObj.returnUnit);

    } else {
      convObj.convertValue = 'unknown value';
      // convObj.returnVal = convObj.convertValue.toFixed(5);

      convObj.returnUnit = 'invalid unit';

      // convObj.returnString = this.getString(convObj.num, convObj.unit, convObj.returnVal, convObj.returnUnit);
      convObj.returnString = this.getString(convObj.num, convObj.unit, convObj.convertValue, convObj.returnUnit);
    }
    
    return convObj;
  }
}

module.exports = ConvertHandler;
