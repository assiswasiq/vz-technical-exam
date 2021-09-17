"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}var _fs=_interopRequireDefault(require("fs"));var _util=_interopRequireDefault(require("util"));var _uuid=require("uuid");var _shared=require("../shared");var _generateMessage=require("../utils/generate-message");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})}keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)})}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}else if(call!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var TransactionService=/*#__PURE__*/function(_Helper){_inherits(TransactionService,_Helper);var _super=_createSuper(TransactionService);function TransactionService(fileHandler){var _this;_classCallCheck(this,TransactionService);_this=_super.call(this);_this.__fileHandler=fileHandler;_this.__method={credit:"creditAccount",debit:"debitAccount"};return _this}_createClass(TransactionService,[{key:"getTransactionHistory",value:function(){var _getTransactionHistory=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:return _context.abrupt("return",this.__fileHandler.readFile(__dirname,"../database/transactions.json"));case 1:case"end":return _context.stop();}}},_callee,this)}));function getTransactionHistory(){return _getTransactionHistory.apply(this,arguments)}return getTransactionHistory}()},{key:"createTransaction",value:function(){var _createTransaction=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(data){var accountDetails,existedTransactions,newTransaction;return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return this.__fileHandler.readFile(__dirname,"../database/account.json");case 2:accountDetails=_context2.sent;_context2.next=5;return this.__fileHandler.readFile(__dirname,"../database/transactions.json");case 5:existedTransactions=_context2.sent;newTransaction=_objectSpread(_objectSpread({"id":(0,_uuid.v4)()},data),{},{"effectiveDate":this.createCurrentTimestamp()});_context2.t0=this.__fileHandler;_context2.t1=__dirname;_context2.next=11;return this[this.__method[data.type]](accountDetails.balance,data.amount);case 11:_context2.t2=_context2.sent;_context2.t3={"balance":_context2.t2};_context2.next=15;return _context2.t0.writeFile.call(_context2.t0,_context2.t1,"../database/account.json",_context2.t3);case 15:_context2.next=17;return this.__fileHandler.writeFile(__dirname,"../database/transactions.json",[].concat(_toConsumableArray(existedTransactions),[_objectSpread({},newTransaction)]));case 17:return _context2.abrupt("return",newTransaction);case 18:case"end":return _context2.stop();}}},_callee2,this)}));function createTransaction(_x){return _createTransaction.apply(this,arguments)}return createTransaction}()},{key:"creditAccount",value:function(){var _creditAccount=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee3(accountBalance,amount){return regeneratorRuntime.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:return _context3.abrupt("return",accountBalance+amount);case 1:case"end":return _context3.stop();}}},_callee3)}));function creditAccount(_x2,_x3){return _creditAccount.apply(this,arguments)}return creditAccount}()},{key:"debitAccount",value:function(){var _debitAccount=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee4(accountBalance,amount){return regeneratorRuntime.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:if(!(amount>accountBalance)){_context4.next=2;break}throw(0,_generateMessage.generateMessages)("IN_SUFFICIENT_BALANCE");case 2:return _context4.abrupt("return",accountBalance-amount);case 3:case"end":return _context4.stop();}}},_callee4)}));function debitAccount(_x4,_x5){return _debitAccount.apply(this,arguments)}return debitAccount}()}]);return TransactionService}(_shared.Helper);module.exports=TransactionService;
//# sourceMappingURL=transaction.service.js.map