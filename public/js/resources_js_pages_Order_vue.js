"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Order_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/textField/TextMoney.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/textField/TextMoney.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    value: {
      // type: String,
      type: [String, Number],
      "default": "0"
    },
    label: {
      type: String,
      "default": ""
    },
    placeholder: {
      type: String,
      "default": undefined
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    dense: {
      type: Boolean,
      "default": false
    },
    error: {
      type: Boolean,
      "default": false
    },
    hideDetails: {
      type: [Boolean, String],
      "default": false
    },
    rules: {
      type: [Array, String],
      "default": function _default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    outlined: {
      type: Boolean,
      "default": false
    },
    clearable: {
      type: Boolean,
      "default": false
    },
    backgroundColor: {
      type: String,
      "default": "white"
    },
    valueWhenIsEmpty: {
      type: String,
      "default": "" // "0" or "" or null 

    },
    options: {
      type: Object,
      "default": function _default() {
        return {
          locale: "pt-BR",
          prefix: "",
          suffix: "",
          length: 11,
          precision: 2
        };
      }
    }
  },
  data: function data() {
    return {};
  },

  /*
   v-model="cmpValue": Dessa forma, ao digitar, o valor Ã© atualizado automaticamente no componente pai.
   O valor digitado entra pelo newValue do Set e Ã© emitido para o componente pai.
   the-vue-mask nao funciona corretamente ao incluir valores existentes no componente pai.
  */
  computed: {
    cmpValue: {
      get: function get() {
        return this.value !== null && this.value !== "" ? this.humanFormat(this.value.toString()) : this.valueWhenIsEmpty;
      },
      set: function set(newValue) {
        this.$emit("input", this.machineFormat(newValue));
      }
    }
  },
  methods: {
    humanFormat: function humanFormat(number) {
      if (isNaN(number)) {
        number = "";
      } else {
        // number = Number(number).toLocaleString(this.options.locale, {maximumFractionDigits: 2, minimumFractionDigits: 2, style: 'currency', currency: 'BRL'});
        number = Number(number).toLocaleString(this.options.locale, {
          maximumFractionDigits: this.options.precision,
          minimumFractionDigits: this.options.precision
        });
      }

      return number;
    },
    machineFormat: function machineFormat(number) {
      if (number) {
        number = this.cleanNumber(number); // Ajustar quantidade de zeros Ã  esquerda

        number = number.padStart(parseInt(this.options.precision) + 1, "0"); // Incluir ponto na casa correta, conforme a precisÃ£o configurada

        number = number.substring(0, number.length - parseInt(this.options.precision)) + "." + number.substring(number.length - parseInt(this.options.precision), number.length);

        if (isNaN(number)) {
          number = this.valueWhenIsEmpty;
        }
      } else {
        number = this.valueWhenIsEmpty;
      }

      if (this.options.precision === 0) {
        number = this.cleanNumber(number);
      }

      return number;
    },
    keyPress: function keyPress($event) {
      // console.log($event.keyCode); //keyCodes value
      var keyCode = $event.keyCode ? $event.keyCode : $event.which; // if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {

      if (keyCode < 48 || keyCode > 57) {
        // 46 is dot
        $event.preventDefault();
      }

      if (this.targetLength()) {
        $event.preventDefault();
      }
    },
    // Retira todos os caracteres nÃ£o numÃ©ricos e zeros Ã  esquerda
    cleanNumber: function cleanNumber(value) {
      var result = "";

      if (value) {
        var flag = false;
        var arrayValue = value.toString().split("");

        for (var i = 0; i < arrayValue.length; i++) {
          if (this.isInteger(arrayValue[i])) {
            if (!flag) {
              // Retirar zeros Ã  esquerda
              if (arrayValue[i] !== "0") {
                result = result + arrayValue[i];
                flag = true;
              }
            } else {
              result = result + arrayValue[i];
            }
          }
        }
      }

      return result;
    },
    isInteger: function isInteger(value) {
      var result = false;

      if (Number.isInteger(parseInt(value))) {
        result = true;
      }

      return result;
    },
    targetLength: function targetLength() {
      if (Number(this.cleanNumber(this.value).length) >= Number(this.options.length)) {
        return true;
      } else {
        return false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Order.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Order.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_textField_TextMoney_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/textField/TextMoney.vue */ "./resources/js/components/textField/TextMoney.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "aboutPage",
  components: {
    TextMoney: _components_textField_TextMoney_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      valid: true,
      formOrder: {
        money: null,
        people: [],
        name: null,
        description: null
      },
      sharePeople: [],
      isAdvange: false,
      options: {
        locale: "pt-BR",
        prefix: "",
        suffix: "",
        length: 9,
        precision: 0
      },
      itemsPerson: [{
        id: 1,
        name: "Hoang Duong"
      }, {
        id: 2,
        name: "Sy Bui"
      }, {
        id: 3,
        name: "Tien"
      }],
      rule: {
        nameRules: [function (v) {
          return !!v || "Reqired name !";
        }],
        amountRules: [function (v) {
          return !!v || "Reqired amount !";
        }]
      }
    };
  },
  methods: {
    handleClickSubmit: function handleClickSubmit() {
      if (this.$refs.form.validate()) {
        var objectSend = {
          name: this.formOrder.name,
          description: this.formOrder.description,
          people: this.formOrder.people,
          money: this.sharePeople
        };
        console.log("objectSend", objectSend);
      }
    },
    handleClickAdvange: function handleClickAdvange() {
      this.isAdvange = !this.isAdvange;
    },
    getNameByIdPeople: function getNameByIdPeople(id) {
      return this.itemsPerson.find(function (item) {
        return item.id === id;
      }).name;
    }
  },
  watch: {
    "formOrder.people": {
      immediate: false,
      handler: function handler(val) {
        this.sharePeople = val.map(function (item) {
          return {
            id: item,
            amount: null
          };
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/textField/TextMoney.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/textField/TextMoney.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextMoney_vue_vue_type_template_id_6f274d36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextMoney.vue?vue&type=template&id=6f274d36& */ "./resources/js/components/textField/TextMoney.vue?vue&type=template&id=6f274d36&");
/* harmony import */ var _TextMoney_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextMoney.vue?vue&type=script&lang=js& */ "./resources/js/components/textField/TextMoney.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TextMoney_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TextMoney_vue_vue_type_template_id_6f274d36___WEBPACK_IMPORTED_MODULE_0__.render,
  _TextMoney_vue_vue_type_template_id_6f274d36___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/textField/TextMoney.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Order.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Order.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Order_vue_vue_type_template_id_eae40ed6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Order.vue?vue&type=template&id=eae40ed6& */ "./resources/js/pages/Order.vue?vue&type=template&id=eae40ed6&");
/* harmony import */ var _Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Order.vue?vue&type=script&lang=js& */ "./resources/js/pages/Order.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Order_vue_vue_type_template_id_eae40ed6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Order_vue_vue_type_template_id_eae40ed6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Order.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/textField/TextMoney.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/textField/TextMoney.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextMoney_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextMoney.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/textField/TextMoney.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextMoney_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Order.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Order.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Order.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Order.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/textField/TextMoney.vue?vue&type=template&id=6f274d36&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/textField/TextMoney.vue?vue&type=template&id=6f274d36& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextMoney_vue_vue_type_template_id_6f274d36___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextMoney_vue_vue_type_template_id_6f274d36___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextMoney_vue_vue_type_template_id_6f274d36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextMoney.vue?vue&type=template&id=6f274d36& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/textField/TextMoney.vue?vue&type=template&id=6f274d36&");


/***/ }),

/***/ "./resources/js/pages/Order.vue?vue&type=template&id=eae40ed6&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Order.vue?vue&type=template&id=eae40ed6& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_eae40ed6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_eae40ed6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_eae40ed6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Order.vue?vue&type=template&id=eae40ed6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Order.vue?vue&type=template&id=eae40ed6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/textField/TextMoney.vue?vue&type=template&id=6f274d36&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/textField/TextMoney.vue?vue&type=template&id=6f274d36& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-text-field", {
        attrs: {
          label: _vm.label,
          placeholder: _vm.placeholder,
          readonly: _vm.readonly,
          disabled: _vm.disabled,
          outlined: _vm.outlined,
          dense: _vm.dense,
          "hide-details": _vm.hideDetails,
          error: _vm.error,
          rules: _vm.rules,
          clearable: _vm.clearable,
          backgroundColor: _vm.backgroundColor,
          prefix: _vm.options.prefix,
          suffix: _vm.options.suffix,
        },
        on: { keypress: _vm.keyPress },
        model: {
          value: _vm.cmpValue,
          callback: function ($$v) {
            _vm.cmpValue = $$v
          },
          expression: "cmpValue",
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Order.vue?vue&type=template&id=eae40ed6&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Order.vue?vue&type=template&id=eae40ed6& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-card-title", { staticClass: "pa-1 px-3" }, [_vm._v("Add Payment")]),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "pa-3", attrs: { flat: "" } },
        [
          _c(
            "v-form",
            {
              ref: "form",
              model: {
                value: _vm.valid,
                callback: function ($$v) {
                  _vm.valid = $$v
                },
                expression: "valid",
              },
            },
            [
              _c("v-text-field", {
                attrs: {
                  dense: "",
                  label: "Name payment",
                  outlined: "",
                  clearable: "",
                  rules: _vm.rule.nameRules,
                },
                model: {
                  value: _vm.formOrder.name,
                  callback: function ($$v) {
                    _vm.$set(_vm.formOrder, "name", $$v)
                  },
                  expression: "formOrder.name",
                },
              }),
              _vm._v(" "),
              _c("v-textarea", {
                attrs: {
                  dense: "",
                  label: "Description payement",
                  outlined: "",
                  clearable: "",
                  "hide-details": "",
                },
                model: {
                  value: _vm.formOrder.description,
                  callback: function ($$v) {
                    _vm.$set(_vm.formOrder, "description", $$v)
                  },
                  expression: "formOrder.description",
                },
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex align-center justify-center my-4" },
                [
                  _c("v-autocomplete", {
                    attrs: {
                      multiple: "",
                      dense: "",
                      label: "Select Person",
                      outlined: "",
                      items: _vm.itemsPerson,
                      "item-text": "name",
                      "item-value": "id",
                      clearable: "",
                      "hide-details": "",
                    },
                    model: {
                      value: _vm.formOrder.people,
                      callback: function ($$v) {
                        _vm.$set(_vm.formOrder, "people", $$v)
                      },
                      expression: "formOrder.people",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "" },
                      on: { click: _vm.handleClickAdvange },
                    },
                    [
                      _c("v-icon", [
                        _vm._v(
                          _vm._s(
                            _vm.isAdvange
                              ? "mdi-chevron-up"
                              : "mdi-chevron-down"
                          )
                        ),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _vm.isAdvange && _vm.formOrder.people.length > 0
                ? _c(
                    "v-card",
                    { staticClass: "mb-4 pa-2", attrs: { elevation: "3" } },
                    _vm._l(_vm.formOrder.people, function (item, index) {
                      return _c(
                        "div",
                        { key: index },
                        [
                          _c(
                            "v-card-text",
                            { staticClass: "px-2 py-0 accent--text" },
                            [_vm._v(_vm._s(_vm.getNameByIdPeople(item)))]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "px-2 py-1" },
                            [
                              _c("text-money", {
                                attrs: {
                                  label: "Amount of money",
                                  dense: true,
                                  outlined: true,
                                  clearable: true,
                                  rules: _vm.rule.amountRules,
                                  options: _vm.options,
                                },
                                model: {
                                  value: _vm.sharePeople[index].amount,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.sharePeople[index],
                                      "amount",
                                      $$v
                                    )
                                  },
                                  expression: "sharePeople[index].amount",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    }),
                    0
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.isAdvange
                ? _c("text-money", {
                    attrs: {
                      label: "Amount of money",
                      dense: true,
                      outlined: true,
                      clearable: true,
                      options: _vm.options,
                      rules: _vm.rule.amountRules,
                    },
                    model: {
                      value: _vm.formOrder.money,
                      callback: function ($$v) {
                        _vm.$set(_vm.formOrder, "money", $$v)
                      },
                      expression: "formOrder.money",
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary" },
                      on: { click: _vm.handleClickSubmit },
                    },
                    [_vm._v("Submit")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);