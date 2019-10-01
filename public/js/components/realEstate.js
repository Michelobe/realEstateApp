webpackJsonp([0],{

/***/ 230:
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
        return _this;
    }

    _createClass(Filter, [{
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
                        { name: 'filters city',
                            className: 'city' },
                        _react2.default.createElement(
                            'option',
                            { value: 'all' },
                            'All'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: 'Portland' },
                            'Portland'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: 'Vancouver' },
                            'Vancouver'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: 'Gresham' },
                            'Gresham'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: 'Orange' },
                            'Orange'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: 'Anaheim' },
                            'Anaheim'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: 'Newport' },
                            'Newport'
                        )
                    ),
                    _react2.default.createElement(
                        'select',
                        { name: 'filters houseType',
                            className: 'houseType' },
                        _react2.default.createElement(
                            'option',
                            { value: 'all' },
                            'All'
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
                            { value: 'Room' },
                            'Room'
                        )
                    ),
                    _react2.default.createElement(
                        'select',
                        { name: 'filters bedrooms',
                            className: 'bedrooms' },
                        _react2.default.createElement(
                            'option',
                            null,
                            '2 br'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '0' },
                            'All'
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
                            className: 'minPrice' }),
                        _react2.default.createElement('input', { type: 'text',
                            name: 'maxPrice',
                            className: 'maxPrice' })
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
                            className: 'minFloorSpace' }),
                        _react2.default.createElement('input', { type: 'text',
                            name: 'maxFloorSpace',
                            className: 'maxFloorSpace' })
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
                            { htmlFor: 'extras' },
                            _react2.default.createElement(
                                'span',
                                null,
                                'Elevators'
                            ),
                            _react2.default.createElement('input', { type: 'checkbox',
                                name: 'extras',
                                value: 'elevator' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'filters extras' },
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'extras' },
                            _react2.default.createElement(
                                'span',
                                null,
                                'Swimming Pool'
                            ),
                            _react2.default.createElement('input', { type: 'checkbox',
                                name: 'extras',
                                value: 'swimming pool' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'filters extras' },
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'extras' },
                            _react2.default.createElement(
                                'span',
                                null,
                                'Finished Basement'
                            ),
                            _react2.default.createElement('input', { type: 'checkbox',
                                name: 'extras',
                                value: 'swimming pool' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'filters extras' },
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'extras' },
                            _react2.default.createElement(
                                'span',
                                null,
                                'Gym'
                            ),
                            _react2.default.createElement('input', { type: 'checkbox',
                                name: 'extras',
                                value: 'gym' })
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

var Listings = function (_Component) {
    _inherits(Listings, _Component);

    // =============================================
    function Listings() {
        _classCallCheck(this, Listings);

        var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

        _this.state = {
            name: 'Michael'
        };
        return _this;
    }

    _createClass(Listings, [{
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
                    _react2.default.createElement(
                        'div',
                        { className: 'listing' },
                        _react2.default.createElement(
                            'div',
                            { className: 'listingImg' },
                            _react2.default.createElement(
                                'span',
                                { className: 'address' },
                                'Montgomery Dr.'
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
                                            ' 1000 ft\xB2'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'furnishing' },
                                        _react2.default.createElement('i', { className: 'fas fa-couch' }),
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            ' unfirnished'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'bedrooms' },
                                        _react2.default.createElement('i', { className: 'fas fa-bed' }),
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            ' 3 bedrooms'
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
                                '$1,000 / month (USD)'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'bottomLocation' },
                                _react2.default.createElement('i', { className: 'fas fa-map-marker-alt' }),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    ' Portland, Oregon'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'listing' },
                        _react2.default.createElement(
                            'div',
                            { className: 'listingImg' },
                            _react2.default.createElement(
                                'span',
                                { className: 'address' },
                                'Montgomery Dr.'
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
                                            ' 1000 ft\xB2'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'furnishing' },
                                        _react2.default.createElement('i', { className: 'fas fa-couch' }),
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            ' unfirnished'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'bedrooms' },
                                        _react2.default.createElement('i', { className: 'fas fa-bed' }),
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            ' 3 bedrooms'
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
                                '$1,000 / month (USD)'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'bottomLocation' },
                                _react2.default.createElement('i', { className: 'fas fa-map-marker-alt' }),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    ' Portland, Oregon'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'listing' },
                        _react2.default.createElement(
                            'div',
                            { className: 'listingImg' },
                            _react2.default.createElement(
                                'span',
                                { className: 'address' },
                                'Montgomery Dr.'
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
                                            ' 1000 ft\xB2'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'furnishing' },
                                        _react2.default.createElement('i', { className: 'fas fa-couch' }),
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            ' unfirnished'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'bedrooms' },
                                        _react2.default.createElement('i', { className: 'fas fa-bed' }),
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            ' 3 bedrooms'
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
                                '$1,000 / month (USD)'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'bottomLocation' },
                                _react2.default.createElement('i', { className: 'fas fa-map-marker-alt' }),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    ' Portland, Oregon'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'listing' },
                        _react2.default.createElement(
                            'div',
                            { className: 'listingImg' },
                            _react2.default.createElement(
                                'span',
                                { className: 'address' },
                                'Montgomery Dr.'
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
                                            ' 1000 ft\xB2'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'furnishing' },
                                        _react2.default.createElement('i', { className: 'fas fa-couch' }),
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            ' unfirnished'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'bedrooms' },
                                        _react2.default.createElement('i', { className: 'fas fa-bed' }),
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            ' 3 bedrooms'
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
                                '$1,000 / month (USD)'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'bottomLocation' },
                                _react2.default.createElement('i', { className: 'fas fa-map-marker-alt' }),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    ' Portland, Oregon'
                                )
                            )
                        )
                    )
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

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _header = __webpack_require__(231);

var _header2 = _interopRequireDefault(_header);

var _filter = __webpack_require__(230);

var _filter2 = _interopRequireDefault(_filter);

var _listings = __webpack_require__(232);

var _listings2 = _interopRequireDefault(_listings);

var _listingsData = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./listingsData.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            listingsData: listingsData
        };
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, null),
                _react2.default.createElement(
                    'section',
                    { id: 'contentArea' },
                    _react2.default.createElement(_filter2.default, null),
                    _react2.default.createElement(_listings2.default, null)
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

},[236]);