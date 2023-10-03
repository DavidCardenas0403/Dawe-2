var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Usr = /** @class */ (function () {
    //Creació del constructor de la classe
    function Usr(email, nom, ciutat) {
        this.email = email;
        this.nom = nom;
        this.ciutat = ciutat;
    }
    return Usr;
}());
var fran = new Usr("f@f.com", "Francesc", "Barcelona");
var Usr2 = /** @class */ (function () {
    function Usr2(email, nom, ciutat) {
        this.email = email;
        this.nom = nom;
        this.ciutat = ciutat;
        this.curs = 1;
        this.email = email;
        this.nom = nom;
        this.ciutat = ciutat;
    }
    Object.defineProperty(Usr2.prototype, "getEmail", {
        //Getters and setters
        get: function () {
            return "".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usr2.prototype, "getCurs", {
        get: function () {
            return this.curs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usr2.prototype, "setCurs", {
        set: function (cursNum) {
            if (cursNum <= 1) {
                throw new Error("El número de cursos ha de ser superior a 1");
            }
            this.curs = cursNum;
        },
        enumerable: false,
        configurable: true
    });
    return Usr2;
}());
//Herència
var AltreUsr = /** @class */ (function (_super) {
    __extends(AltreUsr, _super);
    function AltreUsr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AltreUsr.prototype.changeCourseCount = function () {
        this.curs = 4;
    };
    return AltreUsr;
}(Usr2));
//Una clase abstracta és una clase de la qual no genero objectes
var Instagram = /** @class */ (function () {
    function Instagram(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    Instagram.prototype.createStory = function () {
        throw new Error("Method not implemented");
    };
    return Instagram;
}());
//Classe abstracta (No se puede crear una instancia de una clase abstracta)
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    return TakePhoto;
}());
//const m14 = new TakePhoto("test", "test");
var Instagram2 = /** @class */ (function (_super) {
    __extends(Instagram2, _super);
    function Instagram2(cameraMode, filter, burst) {
        var _this = _super.call(this, cameraMode, filter) || this;
        _this.cameraMode = cameraMode;
        _this.filter = filter;
        _this.burst = burst;
        return _this;
    }
    Instagram2.prototype.getSepia = function () {
        console.log("Sepia");
    };
    return Instagram2;
}(TakePhoto));
