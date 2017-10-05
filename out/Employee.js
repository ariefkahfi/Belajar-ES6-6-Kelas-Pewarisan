"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Belajar buat kelas di javascript-ES6


var Employee = function () {
    function Employee(id, name, address) {
        _classCallCheck(this, Employee);

        this.id = id;
        this.name = name;
        this.address = address;
        console.log('emplyoee constructor dipanggil');
    }

    _createClass(Employee, [{
        key: "setId",
        value: function setId(id) {
            this.id = id;
        }
    }, {
        key: "setName",
        value: function setName(name) {
            this.name = name;
        }
    }, {
        key: "setAddress",
        value: function setAddress(address) {
            this.address = address;
        }
    }, {
        key: "getId",
        value: function getId() {
            return this.id;
        }
    }, {
        key: "getName",
        value: function getName() {
            return this.name;
        }
    }, {
        key: "getAddress",
        value: function getAddress() {
            return this.address;
        }
    }, {
        key: "myInfo",
        value: function myInfo() {
            console.log("\nId : " + this.id + "\nName : " + this.name + "\nAddress : " + this.address + "\n       ");
        }
    }]);

    return Employee;
}();

var BestEmplyoee = function (_Employee) {
    _inherits(BestEmplyoee, _Employee);

    function BestEmplyoee(id, name, address, salary) {
        _classCallCheck(this, BestEmplyoee);

        var _this = _possibleConstructorReturn(this, (BestEmplyoee.__proto__ || Object.getPrototypeOf(BestEmplyoee)).call(this, id, name, address));

        _this.salary = salary;
        return _this;
    }

    _createClass(BestEmplyoee, [{
        key: "setSalary",
        value: function setSalary(salary) {
            this.salary = salary;
        }
    }, {
        key: "getSalary",
        value: function getSalary() {
            return this.salary;
        }
    }, {
        key: "myInfo",
        value: function myInfo() {
            _get(BestEmplyoee.prototype.__proto__ || Object.getPrototypeOf(BestEmplyoee.prototype), "myInfo", this).call(this);
            console.log("My Salary is : " + this.getSalary());
        }
    }]);

    return BestEmplyoee;
}(Employee);

var arief = new Employee(2, "arief", "Muara Enim");

arief.myInfo();

var putro = new Employee(3, "Putro", "ME");

putro.setAddress("Muara Enim");
putro.myInfo();
console.log(putro.getAddress());

var zack = new BestEmplyoee(1, "Zack", "California", 2500000);
zack.myInfo();