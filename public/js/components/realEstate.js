webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var listingsData = [{
    address: '2034 Grand Ave',
    city: 'Portland',
    state: 'OR',
    bedrooms: 3,
    price: 220000,
    floorspace: 2000,
    furnished: 'furnished',
    extras: ['elevator', 'gym'],
    homeType: 'townHome',
    img: 'https://cdngeneral.rentcafe.com/dmslivecafe/3/548638/yard-portland-or-interior-photo%20(6).jpg?crop=(0,41.312499999999744,300,166)&cropxunits=300&cropyunits=200&quality=85&scale=both&'
}, {
    address: '1515 Bridgeport St',
    city: 'Vancouver',
    state: 'WA',
    bedrooms: 1,
    price: 300000,
    floorspace: 2000,
    furnished: 'unfurnished',
    extras: ['elevator', 'gym'],
    homeType: 'condo',
    img: 'https://www.wweek.com/resizer/P4RBZU4qq1PydaeXDRllYpmdflc=/1200x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/wweek/wp-content/uploads/2017/03/16144604/Cumberland_Apartments_-_Portland_Oregon.jpg'
}, {
    address: '1999 Washington',
    city: 'Gresham',
    state: 'OR',
    bedrooms: 2,
    price: 150000,
    floorspace: 1500,
    furnished: 'furnished',
    extras: ['elevator', 'gym'],
    homeType: 'apartment',
    img: 'http://4.bp.blogspot.com/-sdNt2H_HijQ/UTczJTqkKQI/AAAAAAAAJp4/fSRvB57GYjs/s640/Imagen+141.jpg'
}, {
    address: '1776 East Ave',
    city: 'Orange',
    state: 'CA',
    bedrooms: 4,
    price: 750000,
    floorspace: 1850,
    furnished: 'unfurnished',
    extras: ['elevator', 'gym'],
    homeType: 'apartment',
    img: 'https://images1.apartments.com/i2/o3yLIWy8fECW6YnOJ0FSyyQqrdzzW4UgLzTCqO1QgAM/111/cadence-apartments-portland-or-primary-photo.jpg'
}, {
    address: '9865 Sunnyside',
    city: 'Anaheim',
    state: 'CA',
    bedrooms: 1,
    price: 300000,
    floorspace: 1200,
    furnished: 'furnished',
    extras: ['elevator', 'gym'],
    homeType: 'apartment',
    img: 'https://images1.apartments.com/i2/Ai79gx3kIZm30f9KEvAi0DPk1d8EpAndO7L69B-7S0w/117/image.jpg'
}, {
    address: '1985 Delorean',
    city: 'Newport',
    state: 'OR',
    bedrooms: 2,
    price: 220000,
    floorspace: 2000,
    furnished: 'unfurnished',
    extras: ['elevator', 'gym'],
    homeType: 'room',
    img: 'http://media.bizj.us/view/img/10223816/the-cameron-medium-1*750xx1200-675-0-113.jpg'
}];

exports.default = listingsData;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
    _inherits(Filter, _Component);

    // =================== Class Start===================
    function Filter() {
        _classCallCheck(this, Filter);

        var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

        _this.state = {
            name: 'Michael'
        };
        _this.cities = _this.cities.bind(_this);
        _this.homeTypes = _this.homeTypes.bind(_this);
        _this.bedrooms = _this.bedrooms.bind(_this);
        return _this;
    }

    _createClass(Filter, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.populateAction();
        }
    }, {
        key: 'cities',
        value: function cities() {
            if (this.props.globalState.populateFormsData.cities != undefined) {
                var cities = this.props.globalState.populateFormsData.cities;


                return cities.map(function (item) {
                    return _react2.default.createElement(
                        'option',
                        { key: item, value: item },
                        item
                    );
                });
            }
        }
    }, {
        key: 'homeTypes',
        value: function homeTypes() {}
    }, {
        key: 'bedrooms',
        value: function bedrooms() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { id: 'filter' },
                _react2.default.createElement(
                    'div',
                    { className: 'inside' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        'Filter'
                    ),
                    _react2.default.createElement(
                        'select',
                        { name: 'city',
                            className: 'filters city',
                            onChange: this.props.change },
                        _react2.default.createElement(
                            'option',
                            { value: 'all' },
                            'City'
                        ),
                        this.cities()
                    ),
                    _react2.default.createElement(
                        'select',
                        { name: 'homeType',
                            className: 'filters homeType',
                            onChange: this.props.change },
                        _react2.default.createElement(
                            'option',
                            { value: 'all' },
                            'Home Type'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: 'apartment' },
                            'Apartment'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: 'condo' },
                            'Condo'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: 'townHome' },
                            'Town Home'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: 'room' },
                            'Room'
                        )
                    ),
                    _react2.default.createElement(
                        'select',
                        { name: 'bedrooms',
                            className: 'filters bedrooms',
                            onChange: this.props.change },
                        _react2.default.createElement(
                            'option',
                            { value: '0' },
                            '0+ br'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '1' },
                            '1+ br'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '2' },
                            '2+ br'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '3' },
                            '3+ br'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '4' },
                            '4+ br'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'filters price' },
                        _react2.default.createElement(
                            'span',
                            { className: 'title' },
                            'Price'
                        ),
                        _react2.default.createElement('input', { type: 'text',
                            name: 'minPrice',
                            className: 'minPrice',
                            onChange: this.props.change,
                            value: this.props.globalState.minPrice }),
                        _react2.default.createElement('input', { type: 'text',
                            name: 'maxPrice',
                            className: 'maxPrice',
                            onChange: this.props.change,
                            value: this.props.globalState.maxPrice })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'filters floorSpace' },
                        _react2.default.createElement(
                            'span',
                            { className: 'title' },
                            'Floor Space'
                        ),
                        _react2.default.createElement('input', { type: 'text',
                            name: 'minFloorSpace',
                            className: 'minFloorSpace',
                            onChange: this.props.change,
                            value: this.props.globalState.minFloorSpace }),
                        _react2.default.createElement('input', { type: 'text',
                            name: 'maxFloorSpace',
                            className: 'maxFloorSpace',
                            onChange: this.props.change,
                            value: this.props.globalState.maxFloorSpace })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'filters extras' },
                        _react2.default.createElement(
                            'span',
                            { className: 'title' },
                            'Extras'
                        ),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'elevator' },
                            _react2.default.createElement(
                                'span',
                                null,
                                'Elevators'
                            ),
                            _react2.default.createElement('input', { type: 'checkbox',
                                name: 'elevator',
                                value: 'elevator',
                                onChange: this.props.change })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'filters extras' },
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'swimmingPool' },
                            _react2.default.createElement(
                                'span',
                                null,
                                'Swimming Pool'
                            ),
                            _react2.default.createElement('input', { type: 'checkbox',
                                name: 'swimmingPool',
                                value: 'swimmingPool',
                                onChange: this.props.change })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'filters extras' },
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'finishedBasement' },
                            _react2.default.createElement(
                                'span',
                                null,
                                'Finished Basement'
                            ),
                            _react2.default.createElement('input', { type: 'checkbox',
                                name: 'finishedBasement',
                                value: 'finishedBasement',
                                onChange: this.props.change })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'filters extras' },
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'gym' },
                            _react2.default.createElement(
                                'span',
                                null,
                                'Gym'
                            ),
                            _react2.default.createElement('input', { type: 'checkbox',
                                name: 'gym',
                                value: 'gym',
                                onChange: this.props.change })
                        )
                    )
                )
            );
        }
        // =================== Class End===================

    }]);

    return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    // =============================================
    function Header() {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

        _this.state = {
            name: 'Michael'
        };
        return _this;
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'logo' },
                    'Logo'
                ),
                _react2.default.createElement(
                    'nav',
                    { className: 'menu' },
                    _react2.default.createElement(
                        'a',
                        { href: '#' },
                        'Create Ads'
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: '#' },
                        'About Us'
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: '#' },
                        'Log In'
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: '#', className: 'registerBtn' },
                        'Register'
                    )
                )
            );
        }
        // =============================================

    }]);

    return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
    _inherits(Listings, _Component);

    // =============================================
    function Listings() {
        _classCallCheck(this, Listings);

        var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

        _this.state = {
            name: 'Michael'
        };
        _this.loopListings = _this.loopListings.bind(_this);
        return _this;
    }

    _createClass(Listings, [{
        key: 'loopListings',
        value: function loopListings() {
            var listingsData = this.props.listingsData;


            if (listingsData == undefined || listingsData.length == 0) {
                return "Sorry, your filter did not match any listing";
            }

            return listingsData.map(function (listing, index) {
                return _react2.default.createElement(
                    'div',
                    { className: 'listing', key: index },
                    _react2.default.createElement(
                        'div',
                        { className: 'listingImg',
                            style: { background: 'url("' + listing.img + '") no-repeat center center',
                                backgroundSize: 'cover' } },
                        _react2.default.createElement(
                            'span',
                            { className: 'address' },
                            listing.address
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'details' },
                            _react2.default.createElement('div', { className: 'userImg' }),
                            _react2.default.createElement(
                                'div',
                                { className: ' userDetails' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'userName' },
                                    'Nina Smith'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'postDate' },
                                    '09/23/2019'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'listingDetails' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'floorspace' },
                                    _react2.default.createElement('i', { className: 'fas fa-home' }),
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        ' ',
                                        listing.floorspace,
                                        ' ft\xB2'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'furnishing' },
                                    _react2.default.createElement('i', { className: 'fas fa-couch' }),
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        ' ',
                                        listing.furnished
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'bedrooms' },
                                    _react2.default.createElement('i', { className: 'fas fa-bed' }),
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        ' ',
                                        listing.bedrooms,
                                        ' bedrooms'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'viewBtn' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        'View Listings'
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'bottomInfo' },
                        _react2.default.createElement(
                            'span',
                            null,
                            '$',
                            listing.price,
                            ' (USD)'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'bottomLocation' },
                            _react2.default.createElement('i', { className: 'fas fa-map-marker-alt' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                ' ',
                                listing.city,
                                ', ',
                                listing.state
                            )
                        )
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { id: 'listings' },
                _react2.default.createElement(
                    'section',
                    { className: 'searchArea' },
                    _react2.default.createElement('input', { type: 'text', name: 'search' })
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'sortByArea' },
                    _react2.default.createElement(
                        'div',
                        { className: 'results' },
                        '390 Results Found'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'sortOptions' },
                        _react2.default.createElement(
                            'select',
                            { name: 'sortBy', className: 'sortBy' },
                            _react2.default.createElement(
                                'option',
                                { value: 'priceAsc' },
                                'Highest price'
                            ),
                            _react2.default.createElement(
                                'option',
                                { value: 'priceAsc' },
                                'Lowest price'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'view' },
                            _react2.default.createElement('i', { className: 'fas fa-list-ul' }),
                            _react2.default.createElement('i', { className: 'fas fa-th' })
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'listingResults' },
                    this.loopListings()
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'pagination' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'pages' },
                        _react2.default.createElement(
                            'li',
                            { className: 'prevBtn' },
                            'Prev'
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'pageNumber active' },
                            '1'
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'pageNumber' },
                            '2'
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'pageNumber' },
                            '3'
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'pageNumber' },
                            '4'
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'pageNumber' },
                            '...'
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'pageNumber' },
                            '30'
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'nextBtn' },
                            'Next'
                        )
                    )
                )
            );
        }
        // =============================================

    }]);

    return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _header = __webpack_require__(232);

var _header2 = _interopRequireDefault(_header);

var _filter = __webpack_require__(231);

var _filter2 = _interopRequireDefault(_filter);

var _listings = __webpack_require__(233);

var _listings2 = _interopRequireDefault(_listings);

var _listingsData = __webpack_require__(230);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    // =============================================
    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            name: 'Michael',
            listingsData: _listingsData2.default,
            city: 'all',
            homeType: 'all',
            bedrooms: 0,
            minPrice: 0,
            maxPrice: 10000000,
            minFloorSpace: 0,
            maxFloorSpace: 50000,
            elevator: false,
            swimmingPool: false,
            finishedBasement: false,
            gym: false,
            filteredData: _listingsData2.default,
            populateFormsData: []
        };
        _this.change = _this.change.bind(_this);
        _this.filteredData = _this.filteredData.bind(_this);
        _this.populateForms = _this.populateForms.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'change',
        value: function change(event) {
            var _this2 = this;

            var name = event.target.name;
            var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
            this.setState(_defineProperty({}, name, value), function () {
                console.log(_this2.state);
                _this2.filteredData();
            });
        }
    }, {
        key: 'filteredData',
        value: function filteredData() {
            var _this3 = this;

            var newData = this.state.listingsData.filter(function (item) {
                return item.price >= _this3.state.minPrice && item.price <= _this3.state.maxPrice && item.floorspace >= _this3.state.minFloorSpace && item.floorspace <= _this3.state.maxFloorSpace && item.bedrooms >= _this3.state.bedrooms;
            });
            if (this.state.city != 'all') {
                newData = newData.filter(function (item) {
                    return item.city == _this3.state.city;
                });
            }
            if (this.state.homeType != 'all') {
                newData = newData.filter(function (item) {
                    return item.homeType == _this3.state.homeType;
                });
            }

            this.setState({
                filteredData: newData
            });
        }
    }, {
        key: 'populateForms',
        value: function populateForms() {
            //city
            var cities = this.state.listingsData.map(function (item) {
                return item.city;
            });
            cities = new Set(cities);
            cities = [].concat(_toConsumableArray(cities));

            //homeType
            var homeTypes = this.state.listingsData.map(function (item) {
                return item.homeType;
            });
            homeTypes = new Set(homeTypes);
            homeTypes = [].concat(_toConsumableArray(homeTypes));

            //bedrooms
            var bedrooms = this.state.listingsData.map(function (item) {
                return item.bedrooms;
            });
            bedrooms = new Set(bedrooms);
            bedrooms = [].concat(_toConsumableArray(bedrooms));

            this.setState({
                populateFormsData: {
                    cities: cities,
                    homeTypes: homeTypes,
                    bedrooms: bedrooms
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, null),
                _react2.default.createElement(
                    'section',
                    { id: 'contentArea' },
                    _react2.default.createElement(_filter2.default, { change: this.change, globalState: this.state, populateAction: this.populateForms }),
                    _react2.default.createElement(_listings2.default, { listingsData: this.state.filteredData })
                )
            );
        }
        // =============================================

    }]);

    return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[237]);