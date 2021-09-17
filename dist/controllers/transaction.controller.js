"use strict";var _generateMessage=require("../utils/generate-message");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})}keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)})}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var TransactionController=/*#__PURE__*/function(){function TransactionController(TransactionService){_classCallCheck(this,TransactionController);this.__service=TransactionService}/**
     * Get transactions history
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */_createClass(TransactionController,[{key:"get",value:function(){var _get=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(__req,res,next){var response;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return this.__service.getTransactionHistory();case 3:response=_context.sent;res.locals.data={result:_toConsumableArray(response),message_code:"TRANSACTION_HISTORY_FETCHED_SUCCESSFULLY"};next();_context.next=11;break;case 8:_context.prev=8;_context.t0=_context["catch"](0);next(_context.t0);case 11:case"end":return _context.stop();}}},_callee,this,[[0,8]])}));function get(_x,_x2,_x3){return _get.apply(this,arguments)}return get}()/**
     * Create transaction
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */},{key:"post",value:function(){var _post=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(req,res,next){var body,response;return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;body=req.body;_context2.next=4;return this.__service.createTransaction(body);case 4:response=_context2.sent;res.locals.data={result:_objectSpread({},response),message_code:"TRANSACTION_CREATED_SUCCESSFULLY"};next();_context2.next=12;break;case 9:_context2.prev=9;_context2.t0=_context2["catch"](0);next(_context2.t0);case 12:case"end":return _context2.stop();}}},_callee2,this,[[0,9]])}));function post(_x4,_x5,_x6){return _post.apply(this,arguments)}return post}()}]);return TransactionController}();module.exports=TransactionController;
//# sourceMappingURL=transaction.controller.js.map