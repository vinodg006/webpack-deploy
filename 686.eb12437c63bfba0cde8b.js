(self.webpackChunkupstar_music=self.webpackChunkupstar_music||[]).push([[686],{62686:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var r=n(57588),o=n.n(r),a=n(37424),i=n(97876);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(i,e);var t,n,r,a=l(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).state={},t}return t=i,(n=[{key:"componentWillMount",value:function(){this.props.findArtist(this.props.params.id)}},{key:"componentWillReceiveProps",value:function(e){var t=e.artist;if(t){var n=t.name,r=t.age,o=t.yearsActive,a=t.genre;this.setState({name:n,age:r,yearsActive:o,genre:a})}}},{key:"componentWillUpdate",value:function(e){e.params.id!==this.props.params.id&&this.props.findArtist(e.params.id)}},{key:"componentWillUnmount",value:function(){this.props.clearError()}},{key:"onSubmit",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.editArtist(this.props.params.id,this.state)}},{key:"render",value:function(){var e=this;return o().createElement("form",{onSubmit:this.onSubmit.bind(this)},o().createElement("div",{className:"input-field"},o().createElement("input",{value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})},placeholder:"Name"})),o().createElement("div",{className:"input-field"},o().createElement("input",{value:this.state.age,onChange:function(t){return e.setState({age:t.target.value})},placeholder:"Age"})),o().createElement("div",{className:"input-field"},o().createElement("input",{value:this.state.yearsActive,onChange:function(t){return e.setState({yearsActive:t.target.value})},placeholder:"Years Active"})),o().createElement("div",{className:"input-field"},o().createElement("input",{value:this.state.genre,onChange:function(t){return e.setState({genre:t.target.value})},placeholder:"Genre"})),o().createElement("div",{className:"has-error"},this.props.errorMessage),o().createElement("button",{className:"btn"},"Submit"))}}])&&s(t.prototype,n),r&&s(t,r),i}(r.Component);const h=(0,a.$j)((function(e){return{artist:e.artists.artist,errorMessage:e.errors}}),i)(m)}}]);