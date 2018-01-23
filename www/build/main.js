webpackJsonp([8],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DossierPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_navigation__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DossierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DossierPage = (function () {
    function DossierPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.navigationPage = __WEBPACK_IMPORTED_MODULE_2__navigation_navigation__["a" /* NavigationPage */];
    }
    DossierPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DossierPage');
    };
    DossierPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dossier',template:/*ion-inline-start:"C:\Users\xavier.payet\Documents\Projets\Dev\bdC\src\pages\dossier\dossier.html"*/'<!--\n  Generated template for the DossierPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Création d\'une page</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <p>\n        <B>1. Générer le dossier et ses fichiers à l\'aide de la console :</B><br/>\n        <mark><i>ionic g page nomPage</i></mark>\n      </p>\n      <p>\n        <b>2. Associer le nouveau dossier comme étant une page de l\'application ionic :</b><br/>\n        Depuis la page <mark>src/app/app.module.ts</mark>, créer les imports et les association au même titre que pour "HomePage".\n      </p>\n    </ion-card-content>\n  </ion-card>\n      <ion-card>\n        <ion-card-content>\n          <p>Voir aussi :</p>\n          <button ion-button icon-left full [navPush]="navigationPage">Ajout d\'un item au menu</button>\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xavier.payet\Documents\Projets\Dev\bdC\src\pages\dossier\dossier.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DossierPage);
    return DossierPage;
}());

//# sourceMappingURL=dossier.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LienPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LienPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LienPage = (function () {
    function LienPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homePage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
    }
    LienPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LienPage');
    };
    LienPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lien',template:/*ion-inline-start:"C:\Users\xavier.payet\Documents\Projets\Dev\bdC\src\pages\lien\lien.html"*/'<!--\n  Generated template for the LienPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Création d\'un lien</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <p>\n        <b>1 Créer notre balise dans la vue html et y insérer la propriété :</b><br>\n        <mark>[navPush]="maPage"</mark>\n      </p>\n      <p>\n        <b>2 Depuis le contrôleur, insérer la référence dans \"class\" :</b><br>\n        <mark>maPage = MaPage</mark><br>\n        <i>L\'import de la page doit se créer automatiquement.</i>\n      </p>\n      <button ion-button primary [navPush]="homePage">Test</button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xavier.payet\Documents\Projets\Dev\bdC\src\pages\lien\lien.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LienPage);
    return LienPage;
}());

//# sourceMappingURL=lien.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FonctionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FonctionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FonctionPage = (function () {
    function FonctionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FonctionPage.prototype.fHello = function () {
        console.log("Hello World");
    };
    FonctionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FonctionPage');
        this.maVar = "Parler";
        console.log("Je sais " + this.maVar + " :\)");
    };
    FonctionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fonction',template:/*ion-inline-start:"C:\Users\xavier.payet\Documents\Projets\Dev\bdC\src\pages\fonction\fonction.html"*/'<!--\n  Generated template for the FonctionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Les fonctions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <b>Au chargement de la page :</b>\n      <p>\n        Depuis le contrôleur, créer la fonction directement dans inviewdidload()\n        <mark></mark>\n      </p>\n  </ion-card-content>\n</ion-card>\n\n<ion-card>\n    <ion-card-content>\n      <b>Suivant l\'action de l\'utilisateur</b>\n      <p>\n          1. Créer notre balise dans la vue html et y insérer la propriété :<br>\n          <mark>(click)="maFonction()"</mark>\n        </p>\n        <p>\n          2. Depuis le contrôleur, créer la fonction dans \"class\" :<br>\n          <mark>maFonction()&#123; ... &#125;</mark><br>\n        </p>\n        <br>\n        <p>Affiche un HelloWord dans la console</p>\n        <button ion-button icon-left full (click)="fHello()">Hello</button>\n    </ion-card-content>\n</ion-card>\n<ion-card>\n  <ion-card-content>\n    <b>Traiter les données de l\'utilisateur :</b>\n    <p>\n      1. Créer notre balise dans la vue html avec un id.\n    </p>\n    <p>\n      2. Dans la fonction concernée, récupérez la valeur du champs avec :\n      <mark>(&#60;HTMLInputElement&#62;document.getElementById(\'monChamps\')).value;</mark>\n    </p>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xavier.payet\Documents\Projets\Dev\bdC\src\pages\fonction\fonction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FonctionPage);
    return FonctionPage;
}());

//# sourceMappingURL=fonction.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemarragePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projet_projet__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dossier_dossier__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lien_lien__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__test_test__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the DemarragePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DemarragePage = (function () {
    function DemarragePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projetPage = __WEBPACK_IMPORTED_MODULE_2__projet_projet__["a" /* ProjetPage */];
        this.dossierPage = __WEBPACK_IMPORTED_MODULE_3__dossier_dossier__["a" /* DossierPage */];
        this.lienPage = __WEBPACK_IMPORTED_MODULE_4__lien_lien__["a" /* LienPage */];
        this.testPage = __WEBPACK_IMPORTED_MODULE_5__test_test__["a" /* TestPage */];
    }
    DemarragePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DemarragePage');
    };
    DemarragePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-demarrage',template:/*ion-inline-start:"C:\Users\xavier.payet\Documents\Projets\Dev\bdC\src\pages\demarrage\demarrage.html"*/'<!--\n  Generated template for the DemarragePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Bien démarrer</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-content>\n          <p>Démarrer un projet</p>\n          <button ion-button icon-left full [navPush]="projetPage">Nouveau projet</button>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <ion-card-content>\n          <p>Créer une nouvelle page</p>\n          <button ion-button icon-left full [navPush]="dossierPage">Nouvelle page</button>\n          </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <ion-card-content>\n          <p>Passer de pages en pages</p>\n          <button ion-button icon-left full [navPush]="lienPage">Les liens</button>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <ion-card-content>\n          <p>Tester l\'application</p>\n          <button ion-button icon-left full [navPush]="testPage">Test et déploiement</button>\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xavier.payet\Documents\Projets\Dev\bdC\src\pages\demarrage\demarrage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DemarragePage);
    return DemarragePage;
}());

//# sourceMappingURL=demarrage.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProjetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProjetPage = (function () {
    function ProjetPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProjetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProjetPage');
    };
    ProjetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-projet',template:/*ion-inline-start:"C:\Users\xavier.payet\Documents\Projets\Dev\bdC\src\pages\projet\projet.html"*/'<!--\n  Generated template for the ProjetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Création d\'un projet</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <p>\n        Par la console :\n      </p>\n      <ol>\n        <li>Avec la commande <i>cd</i>, se placer à l\'endroit où l\'on veux créer le projet</li>\n        <li><i><mark>ionic start nomDuProjet</mark></i></li>\n        <li>\n          Choisir le template de départ :<br>\n          - tabs : menu horizontal en bas<br>\n          - blank : juste une page d\'acceuil<br>\n          - sidemenu : menu latéral gauche<br>\n          ...\n        </li>\n        <li>Intégrer <mark>Cordova</mark> si l\'application doit contenir du contenu natif</li>\n        <li>Dites Non! à IonicPro</li>\n      </ol>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xavier.payet\Documents\Projets\Dev\bdC\src\pages\projet\projet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProjetPage);
    return ProjetPage;
}());

//# sourceMappingURL=projet.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestPage = (function () {
    function TestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestPage');
    };
    TestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test',template:/*ion-inline-start:"C:\Users\xavier.payet\Documents\Projets\Dev\bdC\src\pages\test\test.html"*/'<!--\n  Generated template for the TestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Déploiement de l\'application</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <p>Sur navigateur</p>\n      <ul>\n        <li><b>Affichage web :</b></li><mark>ionic serve</mark>\n        <li><b>Affichage mobile :</b></li><mark>ionic serve --lab</mark><br>\n      </ul>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <p>A. Sur mobile : Préparation (une seule fois)</p>\n      <ol>\n        <li><b>Créer les fichiers nécessaires au déploiement sur mobile :</b></li><mark>ionic cordova platform add</mark>\n        <li><b>Choisir la plateforme ciblé</b></li>\n        <li>\n          <b>Modifier le fichier config.xml ainsi créé :</b>\n          <ul>\n            <li>Donner un identifiant unique à l\'application :</li><mark>id="io.ionic.nomAppli"</mark> (balise widget)\n            <li>Ainsi que le nom de l\'application dans la balise name</li>\n          </ul>\n        </li>\n      </ol>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <p>B. Sur mobile : Android</p>\n        <ul>\n          <li>Déploiement unique :</li><mark>ionic cordova run android</mark>\n          <li>Déploiement en cours de développement :</li><mark>ionic cordova run android -livereload</mark><br> \n            <i>Recharge l\'application à chaque modification du code source</i>\n        </ul>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xavier.payet\Documents\Projets\Dev\bdC\src\pages\test\test.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TestPage);
    return TestPage;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SlidePage = (function () {
    function SlidePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SlidePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SlidePage');
    };
    SlidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slide',template:/*ion-inline-start:"C:\Users\xavier.payet\Documents\Projets\Dev\bdC\src\pages\slide\slide.html"*/'<!--\n  Generated template for the SlidePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Slide sur une même page</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-slides pager> <!-- pager affiche les points -->\n  \n  <ion-slide style="background-color: rgba(86, 97, 255, 0.959)">\n    <h2>Slide 1</h2>\n    <h2>Slide suivante -&#62;</h2>\n  </ion-slide>\n\n  <ion-slide style="background-color: white">\n    <h2>Slide 2</h2>\n    <p>\n      1. Remplacer &#60;ion-content&#62; par :<br>\n      <mark>&#60;ion-slide<b>s</b> pager&#62;</mark>\n    </p>\n    <p><i><b>pager</b> indique à l\'utilisateur la présence de slides par des points</i></p>\n  </ion-slide>\n\n  <ion-slide style="background-color: rgb(182, 64, 64)">\n    <h2>Slide 3</h2>\n    <p>2. Construire les slides à l\'intérieur de la balise précédemment crée avec des :<br><mark>&#60;ion-slide&#62;</mark>\n    <p><i>A noter que ion-slide s\'écrit cette fois-ci sans <b>s</b></i></p>\n  </ion-slide>\n\n</ion-slides>\n'/*ion-inline-end:"C:\Users\xavier.payet\Documents\Projets\Dev\bdC\src\pages\slide\slide.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SlidePage);
    return SlidePage;
}());

//# sourceMappingURL=slide.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/demarrage/demarrage.module": [
		283,
		7
	],
	"../pages/dossier/dossier.module": [
		279,
		6
	],
	"../pages/fonction/fonction.module": [
		281,
		5
	],
	"../pages/lien/lien.module": [
		280,
		4
	],
	"../pages/navigation/navigation.module": [
		282,
		3
	],
	"../pages/projet/projet.module": [
		285,
		2
	],
	"../pages/slide/slide.module": [
		284,
		1
	],
	"../pages/test/test.module": [
		286,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_projet_projet__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_lien_lien__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dossier_dossier__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_navigation_navigation__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_test_test__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_slide_slide__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_fonction_fonction__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_demarrage_demarrage__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_projet_projet__["a" /* ProjetPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_lien_lien__["a" /* LienPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dossier_dossier__["a" /* DossierPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_navigation_navigation__["a" /* NavigationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_slide_slide__["a" /* SlidePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_fonction_fonction__["a" /* FonctionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_demarrage_demarrage__["a" /* DemarragePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/dossier/dossier.module#DossierPageModule', name: 'DossierPage', segment: 'dossier', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lien/lien.module#LienPageModule', name: 'LienPage', segment: 'lien', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fonction/fonction.module#FonctionPageModule', name: 'FonctionPage', segment: 'fonction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/navigation/navigation.module#NavigationPageModule', name: 'NavigationPage', segment: 'navigation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/demarrage/demarrage.module#DemarragePageModule', name: 'DemarragePage', segment: 'demarrage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide.module#SlidePageModule', name: 'SlidePage', segment: 'slide', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/projet/projet.module#ProjetPageModule', name: 'ProjetPage', segment: 'projet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_projet_projet__["a" /* ProjetPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_lien_lien__["a" /* LienPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dossier_dossier__["a" /* DossierPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_navigation_navigation__["a" /* NavigationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_slide_slide__["a" /* SlidePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_fonction_fonction__["a" /* FonctionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_demarrage_demarrage__["a" /* DemarragePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_navigation_navigation__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_slide_slide__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_fonction_fonction__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_demarrage_demarrage__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Accueil', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Démarrer avec les bases', component: __WEBPACK_IMPORTED_MODULE_8__pages_demarrage_demarrage__["a" /* DemarragePage */] },
            { title: 'Ajout d\'un item au menu', component: __WEBPACK_IMPORTED_MODULE_5__pages_navigation_navigation__["a" /* NavigationPage */] },
            { title: 'Slide sur une même page', component: __WEBPACK_IMPORTED_MODULE_6__pages_slide_slide__["a" /* SlidePage */] },
            { title: 'Les fonctions', component: __WEBPACK_IMPORTED_MODULE_7__pages_fonction_fonction__["a" /* FonctionPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\xavier.payet\Documents\Projets\Dev\bdC\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\xavier.payet\Documents\Projets\Dev\bdC\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NavigationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NavigationPage = (function () {
    function NavigationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NavigationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NavigationPage');
    };
    NavigationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-navigation',template:/*ion-inline-start:"C:\Users\xavier.payet\Documents\Projets\Dev\bdC\src\pages\navigation\navigation.html"*/'<!--\n  Generated template for the NavigationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Ajout d\'un item au menu</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n      <ion-card-content>\n        <p>Depuis src/app/app.componant.ts :</p>\n        <p>\n          <b>1 Ajouter l\'import au même titre que HomePage :</b><br>\n          <mark>import &#123; HomePage &#125; from \'../pages/home/home\';</mark>\n        </p>\n      <p>\n        <b>2 Ajouter la référence et le nom de l\'item :</b><br>\n        <mark>&#123; title: \'Acceuil\', component: HomePage &#125;</mark>\n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xavier.payet\Documents\Projets\Dev\bdC\src\pages\navigation\navigation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NavigationPage);
    return NavigationPage;
}());

//# sourceMappingURL=navigation.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\xavier.payet\Documents\Projets\Dev\bdC\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Base de Connaissances</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    Application permettant la centralisation des connaissances sur la technologie ionic 3.  \n  </p>\n  <p>\n    Elle a pour but de d\'apprendre les bases de ionic 3\n  </p>\n\n  <button ion-button secondary menuToggle>&#60;- Démarrons !</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xavier.payet\Documents\Projets\Dev\bdC\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map