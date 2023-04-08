"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var Catalog_1 = require("../../features/catalog/Catalog");
var material_1 = require("@mui/material");
function App() {
    var _a = react_1.useState([]), products = _a[0], setProducts = _a[1];
    react_1.useEffect(function () {
        fetch('http://localhost:5000/api/products')
            .then(function (response) { return response.json(); })
            .then(function (data) { return setProducts(data); });
    }, []);
    // adding empty array as dependency, will allow it to execute only once
    function addProduct() {
        setProducts(function (prevState) {
            return __spreadArrays(prevState, [{
                    id: prevState.length + 101,
                    name: "Product " + (prevState.length + 1),
                    price: (prevState.length * 100) + 100,
                    brand: "some brand",
                    description: "some description",
                    pictureUrl: "http://picsum.photos/200"
                }]);
        });
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.Typography, { variant: "h1" }, " Re-Store "),
        React.createElement(Catalog_1["default"], { products: products, addProduct: addProduct })));
}
exports["default"] = App;
