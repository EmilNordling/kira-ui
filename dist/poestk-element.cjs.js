'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var framerMotion = require('framer-motion');
var shortid = _interopDefault(require('shortid'));

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var _extends_1 = createCommonjsModule(function (module) {
  function _extends() {
    module.exports = _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  module.exports = _extends;
});

const _default = _extends_1;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_extends_1, "_extends_1", "/Users/emil/Desktop/lib/node_modules/@babel/runtime/helpers/extends.js");
  reactHotLoader.register(_default, "default", "/Users/emil/Desktop/lib/node_modules/@babel/runtime/helpers/extends.js");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$1 = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;
const _default$1 = objectWithoutPropertiesLoose;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_objectWithoutPropertiesLoose, "_objectWithoutPropertiesLoose", "/Users/emil/Desktop/lib/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
  reactHotLoader.register(objectWithoutPropertiesLoose, "objectWithoutPropertiesLoose", "/Users/emil/Desktop/lib/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
  reactHotLoader.register(_default$1, "default", "/Users/emil/Desktop/lib/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$2 = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties;
const _default$2 = objectWithoutProperties;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_objectWithoutProperties, "_objectWithoutProperties", "/Users/emil/Desktop/lib/node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
  reactHotLoader.register(objectWithoutProperties, "objectWithoutProperties", "/Users/emil/Desktop/lib/node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
  reactHotLoader.register(_default$2, "default", "/Users/emil/Desktop/lib/node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$3 = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
const BaseButton = styled__default.button.withConfig({
  displayName: "BaseButtonstyle__BaseButton",
  componentId: "l3weqs-0"
})(["border:none;margin:0;padding:0;width:auto;overflow:visible;background:transparent;color:inherit;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;cursor:pointer;"]);
const _default$3 = {
  BaseButton
};

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BaseButton, "BaseButton", "/Users/emil/Desktop/lib/src/lib/components/BaseButton/BaseButton.style.ts");
  reactHotLoader.register(_default$3, "default", "/Users/emil/Desktop/lib/src/lib/components/BaseButton/BaseButton.style.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$4 = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * Simple storage to mutate the current focused DOM element.
 */
const focusContext = {
  current: null
};

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(focusContext, "focusContext", "/Users/emil/Desktop/lib/src/lib/helpers/focusContext.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$5 = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
const BaseButton$1 = props => {
  const {
    // Takes out these values to be used as variables here.
    children,
    className,
    disabled,
    // Takes out focus events for override.
    onBlur,
    onFocus,
    // Takes out mouse events for override.
    onClick,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    // Takes out keyboard events for override.
    onKeyUp,
    onKeyDown,
    // Takes out touch events for override.
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    // defaults.
    tabIndex = 0,
    type = 'button'
  } = props,
        rest = _default$2(props, ["children", "className", "disabled", "onBlur", "onFocus", "onClick", "onMouseDown", "onMouseUp", "onMouseLeave", "onKeyUp", "onKeyDown", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "type"]);

  const buttonRef = React.useRef(null);
  const [isFocused, setIsFocus] = React.useState(false);
  if (disabled && isFocused) setIsFocus(false);
  const downRef = React.useRef(false); // Focus events

  const handleBlur = event => {
    setIsFocus(false);
    focusContext.current = null;
    if (onBlur) onBlur(event);
  };

  const handleFocus = event => {
    setIsFocus(true);
    focusContext.current = buttonRef.current;
    if (onFocus) onFocus(event);
  }; // Mouse events


  const handleClick = event => {
    if (onClick) onClick(event);
  };

  const handleMouseDown = event => {

    if (onMouseDown) onMouseDown(event);
  };

  const handleMouseUp = event => {
    if (onMouseUp) onMouseUp(event);
  };

  const handleMouseLeave = event => {
    if (onMouseLeave) onMouseLeave(event);
  }; // Keyboard events


  const handleKeyDown = event => {
    if (isFocused && event.key === 'Escape' && focusContext.current) {
      focusContext.current.blur();
    }
  };

  const handleKeyUp = event => {}; // Touch events


  const handleTouchStart = event => {
    if (onTouchStart) onTouchStart(event);
  };

  const handleTouchEnd = event => {
    if (onTouchEnd) onTouchEnd(event);
  };

  const handleTouchMove = event => {
    if (onTouchMove) onTouchMove(event);
  };

  const isToggle = false;
  return React__default.createElement(_default$3.BaseButton, _default({
    "data-testid": "baseButton",
    "aria-pressed": isToggle,
    ref: buttonRef,
    className: className,
    disabled: disabled,
    tabIndex: disabled ? -1 : tabIndex,
    onBlur: handleBlur,
    onClick: handleClick,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    type: type
  }, rest), children);
};

__signature__$5(BaseButton$1, "useRef{buttonRef}\nuseState{[isFocused, setIsFocus](false)}\nuseRef{downRef}");

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BaseButton$1, "BaseButton", "/Users/emil/Desktop/lib/src/lib/components/BaseButton/BaseButton.component.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

var __signature__$6 = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$7 = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
const BaseInput = styled__default.input.withConfig({
  displayName: "BaseInputstyle__BaseInput",
  componentId: "t2tr1-0"
})(["display:block;font:inherit;color:currentColor;width:100%;border:0;margin:0;padding:6px 0 7px;display:block;min-width:0;box-sizing:content-box;background:none;-webkit-tap-highlight-color:transparent;outline:none;font-size:1rem;"]);
const _default$4 = {
  BaseInput
};

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BaseInput, "BaseInput", "/Users/emil/Desktop/lib/src/lib/components/BaseInput/BaseInput.style.ts");
  reactHotLoader.register(_default$4, "default", "/Users/emil/Desktop/lib/src/lib/components/BaseInput/BaseInput.style.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$8 = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
const BaseInput$1 = props => {
  const {
    // Takes out these values to be used as variables here.
    children,
    className,
    disabled,
    type,
    // defaults.
    tabIndex = 0
  } = props,
        rest = _default$2(props, ["children", "className", "disabled", "type", "tabIndex"]);

  if (!type && "production" === 'development') throw new Error('input is missing type');
  const [isFocused, setIsFocus] = React.useState(false);
  if (disabled && isFocused) setIsFocus(false);
  return React__default.createElement(_default$4.BaseInput, _default({
    "aria-invalid": true,
    "aria-describedby": '',
    className: className,
    disabled: disabled,
    tabIndex: disabled ? -1 : tabIndex,
    type: type
  }, rest), children);
};

__signature__$8(BaseInput$1, "useState{[isFocused, setIsFocus](false)}");

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BaseInput$1, "BaseInput", "/Users/emil/Desktop/lib/src/lib/components/BaseInput/BaseInput.component.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

var __signature__$9 = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$a = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;
const _default$5 = defineProperty;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_defineProperty, "_defineProperty", "/Users/emil/Desktop/lib/node_modules/@babel/runtime/helpers/defineProperty.js");
  reactHotLoader.register(defineProperty, "defineProperty", "/Users/emil/Desktop/lib/node_modules/@babel/runtime/helpers/defineProperty.js");
  reactHotLoader.register(_default$5, "default", "/Users/emil/Desktop/lib/node_modules/@babel/runtime/helpers/defineProperty.js");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$b = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function normalizeAlignment(type) {
  if (type === 'center') return 'center';
  if (type === 'start') return 'flex-start';
  if (type === 'end') return 'flex-end';
  return null;
}

function justifyContent(align, direction) {
  if (align === 'center') {
    return 'center';
  }

  if (align instanceof Object) {
    if (direction === 'column') {
      return normalizeAlignment(align.x);
    }

    return normalizeAlignment(align.y);
  }

  return 'flex-start';
}

function alignItems(align, direction) {
  if (align === 'center') {
    return 'center';
  }

  if (align instanceof Object) {
    if (direction === 'row') {
      return normalizeAlignment(align.y);
    }

    return normalizeAlignment(align.x);
  }

  return 'flex-start';
}

function direction(direction) {
  if (!direction) return null;

  if (typeof direction === 'string') {
    return direction;
  }

  return direction === 'row' ? 'row' : 'column';
}

function height(propHeight) {
  if (propHeight === null) return null;

  if (typeof propHeight === 'number') {
    return `height: ${propHeight}px;`;
  }

  if (typeof propHeight === 'string') {
    return `height: ${propHeight};`;
  }

  if (typeof propHeight === 'object') {
    const {
      min,
      max
    } = propHeight;
    let str = '';

    if (min) {
      str += `min-height: ${min}px;`;
    }

    if (max) {
      str += `max-height: ${max}px;`;
    }

    return str;
  }

  return null;
}

function width(propWidth) {
  if (propWidth === null) return null;

  if (typeof propWidth === 'number') {
    return `width: ${propWidth}px;`;
  }

  if (typeof propWidth === 'string') {
    return `width: ${propWidth};`;
  }

  if (typeof propWidth === 'object') {
    const {
      min,
      max
    } = propWidth;
    let str = '';

    if (min) {
      str += `min-width: ${min}px;`;
    }

    if (max) {
      str += `max-width: ${max}px;`;
    }

    return str;
  }

  return null;
}

function background(color) {
  return color ? color : 'transparent';
}

function fill(propFill) {
  if (propFill === true) {
    return 'flex 1;';
  }

  if (typeof propFill === 'string') {
    return `flex: ${propFill};`;
  }

  return null;
}

function useCursor(cursor) {
  if (!cursor) return null;
  return `cursor: ${cursor};`;
}

function border(propBorder) {
  if (!propBorder) return null;
  let borderStyle = '';
  Object.entries(propBorder).forEach(([key, value]) => {
    if (value) {
      borderStyle = `${borderStyle}\n border-${key}: 1px solid ${value};`;
    }
  });
  return borderStyle;
}

function radius(propRadius) {
  if (!propRadius) return null;
  return `border-radius: ${propRadius};`;
}

function padding(propPadding) {
  if (!propPadding) return null;
  return `padding: ${propPadding};`;
}

function margin(propMargin) {
  if (!propMargin) return null;
  return `margin: ${propMargin};`;
}

const BaseElement = styled__default.div.withConfig({
  displayName: "BaseElementstyle__BaseElement",
  componentId: "sc-1j2k4ud-0"
})(["position:relative;display:flex;justify-content:", ";align-items:", ";background-color:", ";flex-direction:", ";flex-shrink:0;", " ", " ", " ", " ", " ", " ", " ", ""], ({
  align,
  direction
}) => justifyContent(align, direction), ({
  align,
  direction
}) => alignItems(align, direction), ({
  propColor
}) => background(propColor), ({
  propDirection
}) => direction(propDirection), __signature__$b(({
  cursor
}) => useCursor(cursor), "useCursor{}", () => [useCursor]), ({
  propFill
}) => fill(propFill), ({
  propWidth
}) => width(propWidth), ({
  propHeight
}) => height(propHeight), ({
  propBorder
}) => border(propBorder), ({
  propRadius
}) => radius(propRadius), ({
  propPadding
}) => padding(propPadding), ({
  propMargin
}) => margin(propMargin));
const BaseMotionWrapper = styled__default.div.withConfig({
  displayName: "BaseElementstyle__BaseMotionWrapper",
  componentId: "sc-1j2k4ud-1"
})(["", " ", " ", ""], ({
  propWidth
}) => width(propWidth), ({
  propHeight
}) => height(propHeight), ({
  propMargin
}) => margin(propMargin));
const BaseMotionElement = styled__default(framerMotion.motion.div).withConfig({
  displayName: "BaseElementstyle__BaseMotionElement",
  componentId: "sc-1j2k4ud-2"
})(["width:100%;height:100%;position:relative;display:flex;flex-shrink:0;justify-content:", ";align-items:", ";background-color:", ";flex-direction:", ";", " ", " ", " ", " ", " ", ""], ({
  align,
  direction
}) => justifyContent(align, direction), ({
  align,
  direction
}) => alignItems(align, direction), ({
  propColor
}) => background(propColor), ({
  propDirection
}) => direction(propDirection), __signature__$b(({
  cursor
}) => useCursor(cursor), "useCursor{}", () => [useCursor]), ({
  propFill
}) => fill(propFill), ({
  propBorder
}) => border(propBorder), ({
  propRadius
}) => radius(propRadius), ({
  propPadding
}) => padding(propPadding), ({
  propMargin
}) => margin(propMargin));
const _default$6 = {
  BaseElement,
  BaseMotionWrapper,
  BaseMotionElement
};

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(normalizeAlignment, "normalizeAlignment", "/Users/emil/Desktop/lib/src/lib/components/BaseElement/BaseElement.style.tsx");
  reactHotLoader.register(justifyContent, "justifyContent", "/Users/emil/Desktop/lib/src/lib/components/BaseElement/BaseElement.style.tsx");
  reactHotLoader.register(alignItems, "alignItems", "/Users/emil/Desktop/lib/src/lib/components/BaseElement/BaseElement.style.tsx");
  reactHotLoader.register(direction, "direction", "/Users/emil/Desktop/lib/src/lib/components/BaseElement/BaseElement.style.tsx");
  reactHotLoader.register(height, "height", "/Users/emil/Desktop/lib/src/lib/components/BaseElement/BaseElement.style.tsx");
  reactHotLoader.register(width, "width", "/Users/emil/Desktop/lib/src/lib/components/BaseElement/BaseElement.style.tsx");
  reactHotLoader.register(background, "background", "/Users/emil/Desktop/lib/src/lib/components/BaseElement/BaseElement.style.tsx");
  reactHotLoader.register(fill, "fill", "/Users/emil/Desktop/lib/src/lib/components/BaseElement/BaseElement.style.tsx");
  reactHotLoader.register(useCursor, "useCursor", "/Users/emil/Desktop/lib/src/lib/components/BaseElement/BaseElement.style.tsx");
  reactHotLoader.register(border, "border", "/Users/emil/Desktop/lib/src/lib/components/BaseElement/BaseElement.style.tsx");
  reactHotLoader.register(radius, "radius", "/Users/emil/Desktop/lib/src/lib/components/BaseElement/BaseElement.style.tsx");
  reactHotLoader.register(padding, "padding", "/Users/emil/Desktop/lib/src/lib/components/BaseElement/BaseElement.style.tsx");
  reactHotLoader.register(margin, "margin", "/Users/emil/Desktop/lib/src/lib/components/BaseElement/BaseElement.style.tsx");
  reactHotLoader.register(BaseElement, "BaseElement", "/Users/emil/Desktop/lib/src/lib/components/BaseElement/BaseElement.style.tsx");
  reactHotLoader.register(BaseMotionWrapper, "BaseMotionWrapper", "/Users/emil/Desktop/lib/src/lib/components/BaseElement/BaseElement.style.tsx");
  reactHotLoader.register(BaseMotionElement, "BaseMotionElement", "/Users/emil/Desktop/lib/src/lib/components/BaseElement/BaseElement.style.tsx");
  reactHotLoader.register(_default$6, "default", "/Users/emil/Desktop/lib/src/lib/components/BaseElement/BaseElement.style.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _default$5(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__$c = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
const EMPTY_OBJECT = {};
const BaseElement$1 = React.forwardRef((props, ref) => {
  const {
    animation,
    children,
    className,
    color,
    cursor,
    size,
    tag = 'div',
    center = false,
    fill = false,
    direction = 'column',
    width = null,
    height = null,
    border,
    radius,
    padding,
    margin
  } = props,
        rest = _default$2(props, ["animation", "children", "className", "color", "cursor", "size", "tag", "center", "fill", "direction", "width", "height", "border", "radius", "padding", "margin"]);

  const styleForMotion = {};
  const bundleStyle = {}; // Can't destruct "style" due to "Cannot read property '__reactstandin__key' of undefined"

  for (const key in props.style) {
    if (props.style[key] instanceof framerMotion.MotionValue) {
      styleForMotion[key] = props.style[key];
    } else {
      bundleStyle[key] = props.style[key];
    }
  } // Returns Static Element if no framer-motion attributes are presence.


  if (!animation) {
    return React__default.createElement(_default$6.BaseElement, _default({
      // @ts-ignore
      ref: ref,
      as: tag,
      propFill: fill,
      className: className,
      center: center,
      cursor: cursor,
      propDirection: direction,
      propWidth: width || size || undefined,
      propHeight: height || size || undefined,
      propColor: color,
      propBorder: border,
      propRadius: radius,
      propPadding: padding,
      propMargin: margin
    }, rest, {
      style: _objectSpread({}, bundleStyle),
      "data-testid": "baseElement"
    }), children);
  }

  return React__default.createElement(_default$6.BaseMotionWrapper, _default({
    ref: ref,
    as: tag,
    className: className,
    propWidth: width || size || undefined,
    propHeight: height || size || undefined,
    propMargin: margin
  }, rest, {
    style: EMPTY_OBJECT,
    "data-testid": "baseElement"
  }), React__default.createElement(_default$6.BaseMotionElement, _default({
    propFill: fill,
    center: center,
    cursor: undefined,
    propDirection: direction,
    propColor: color,
    propBorder: border,
    propRadius: radius,
    propPadding: padding,
    propMargin: margin,
    style: _objectSpread({}, styleForMotion, {}, bundleStyle)
  }, animation), children));
});

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EMPTY_OBJECT, "EMPTY_OBJECT", "/Users/emil/Desktop/lib/src/lib/components/BaseElement/BaseElement.component.tsx");
  reactHotLoader.register(BaseElement$1, "BaseElement", "/Users/emil/Desktop/lib/src/lib/components/BaseElement/BaseElement.component.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

var __signature__$d = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$e = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
const GlobalStyle = styled.createGlobalStyle`
  ${"/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n\tdisplay: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n\tline-height: 1;\n}\nmenu, ol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n"}

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    overscroll-behavior-y: none;
  }

  html {
    box-sizing: border-box;
    font-family:
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Helvetica,
			Arial,
			sans-serif,
			'Apple Color Emoji',
			'Segoe UI Emoji',
			'Segoe UI Symbol';
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0;
    text-shadow: none;
    color: #555555;
  }

  img {
    display: inline-block;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }

  a {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    font-style: inherit;
    color: inherit;
    text-decoration: inherit;
  }

  p {
    font-size: 1rem;
  }

  h1 {
    margin-bottom: 20px;
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  h3 {
    font-size: 1.125rem;
  }

  #app {
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    transition: background-color ease 200ms;
  }
`;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GlobalStyle, "GlobalStyle", "/Users/emil/Desktop/lib/src/lib/components/GlobalStyle/index.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$f = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
const Button = styled__default(BaseButton$1).withConfig({
  displayName: "style__Button",
  componentId: "sc-1gucr6-0"
})(["position:relative;font-size:0.875rem;padding:0 8px 0 8px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;height:36px;line-height:inherit;user-select:none;overflow:hidden;vertical-align:middle;border-radius:4px;&:after{content:'';position:absolute;width:100%;height:100%;transition:opacity ease 200ms;background:#d4d4d48a;opacity:0;}&:hover{&:after{opacity:1;}}"]);
const _default$7 = {
  Button
};

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Button, "Button", "/Users/emil/Desktop/lib/src/lib/components/Button/style.ts");
  reactHotLoader.register(_default$7, "default", "/Users/emil/Desktop/lib/src/lib/components/Button/style.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$g = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const Button$1 = (_ref) => {
  let {
    children
  } = _ref,
      rest = _default$2(_ref, ["children"]);

  return React__default.createElement(_default$7.Button, rest, children);
};

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Button$1, "Button", "/Users/emil/Desktop/lib/src/lib/components/Button/index.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$h = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
const Element$1 = styled__default(BaseElement$1).withConfig({
  displayName: "style__Element",
  componentId: "sc-1qaay3n-0"
})([""]);
const Reset = styled__default.div.withConfig({
  displayName: "style__Reset",
  componentId: "sc-1qaay3n-1"
})(["width:100%;height:100%;display:flex;flex-direction:column;"]);
const Scrollable = styled__default.div.withConfig({
  displayName: "style__Scrollable",
  componentId: "sc-1qaay3n-2"
})(["flex:1;overflow-y:auto;"]);
const _default$8 = {
  Scrollable,
  Reset,
  Element: Element$1
};

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Element$1, "Element", "/Users/emil/Desktop/lib/src/lib/components/Element/style.ts");
  reactHotLoader.register(Reset, "Reset", "/Users/emil/Desktop/lib/src/lib/components/Element/style.ts");
  reactHotLoader.register(Scrollable, "Scrollable", "/Users/emil/Desktop/lib/src/lib/components/Element/style.ts");
  reactHotLoader.register(_default$8, "default", "/Users/emil/Desktop/lib/src/lib/components/Element/style.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _default$5(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__$i = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
const withDynamicTag = (Component, tag) => {
  const DynamicTag = props => {
    const newProps = _objectSpread$1({}, props, {
      tag
    });

    return React.createElement(Component, newProps);
  };

  return DynamicTag;
};

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(withDynamicTag, "withDynamicTag", "/Users/emil/Desktop/lib/src/lib/hoc/withDynamicTag.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$j = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
const Element$2 = React.forwardRef((_ref, ref) => {
  let {
    children
  } = _ref,
      rest = _default$2(_ref, ["children"]);

  return React__default.createElement(_default$8.Element, _default({
    ref: ref
  }, rest), children);
});

const Reset$1 = ({
  children
}) => {
  return React__default.createElement(_default$8.Reset, null, children);
};

const Scroll = ({
  children
}) => {
  return React__default.createElement(Element$2.reset, null, React__default.createElement(_default$8.Scrollable, null, children));
};

Element$2.div = withDynamicTag(Element$2, 'div');
Element$2.nav = withDynamicTag(Element$2, 'nav');
Element$2.section = withDynamicTag(Element$2, 'section');
Element$2.main = withDynamicTag(Element$2, 'main');
Element$2.article = withDynamicTag(Element$2, 'article');
Element$2.ul = withDynamicTag(Element$2, 'ul');
Element$2.li = withDynamicTag(Element$2, 'li');
Element$2.header = withDynamicTag(Element$2, 'header');
Element$2.footer = withDynamicTag(Element$2, 'footer');
Element$2.figure = withDynamicTag(Element$2, 'figure');
Element$2.aside = withDynamicTag(Element$2, 'aside');
Element$2.form = withDynamicTag(Element$2, 'form');
Element$2.reset = Reset$1;
Element$2.scroll = Scroll;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Element$2, "Element", "/Users/emil/Desktop/lib/src/lib/components/Element/index.tsx");
  reactHotLoader.register(Reset$1, "Reset", "/Users/emil/Desktop/lib/src/lib/components/Element/index.tsx");
  reactHotLoader.register(Scroll, "Scroll", "/Users/emil/Desktop/lib/src/lib/components/Element/index.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$k = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
const Main = styled__default.div.withConfig({
  displayName: "style__Main",
  componentId: "xbeolu-0"
})(["position:relative;display:flex;flex-direction:", ";height:100vh;min-width:fit-content;overflow-y:auto;"], ({
  direction
}) => direction && (direction === 'row' ? 'row' : 'column'));
const _default$9 = {
  Main
};

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Main, "Main", "/Users/emil/Desktop/lib/src/lib/components/Main/style.ts");
  reactHotLoader.register(_default$9, "default", "/Users/emil/Desktop/lib/src/lib/components/Main/style.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$l = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const Main$1 = (_ref) => {
  let {
    direction = 'column',
    children
  } = _ref,
      rest = _default$2(_ref, ["direction", "children"]);

  return React__default.createElement(_default$9.Main, _default({
    direction: direction
  }, rest), children);
};

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Main$1, "Main", "/Users/emil/Desktop/lib/src/lib/components/Main/index.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$m = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
/**
 * @description haha yes
 */

const Scrollable$1 = styled__default.div.withConfig({
  displayName: "Scrollable",
  componentId: "zlf30k-0"
})(["flex:1;overflow-y:auto;"]);

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Scrollable$1, "Scrollable", "/Users/emil/Desktop/lib/src/lib/components/Scrollable/index.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$n = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
const TextFieldStyle = styled__default.div.withConfig({
  displayName: "style__TextFieldStyle",
  componentId: "sc-1pnge0o-0"
})(["min-width:200px;width:100%;max-width:", ";position:relative;display:inline-flex;flex-direction:column;"], ({
  fixedWidth
}) => fixedWidth ? `${fixedWidth}px` : '100%');
const Border = styled__default.div.withConfig({
  displayName: "style__Border",
  componentId: "sc-1pnge0o-1"
})(["position:absolute;bottom:0px;left:0;width:100%;border-bottom:2px solid rgba(255,255,255,0.3);-webkit-transition:border-color 300ms ease;transition:border-color 300ms ease;"]);
const Label = styled__default.label.withConfig({
  displayName: "style__Label",
  componentId: "sc-1pnge0o-2"
})(["transition:color 200ms cubic-bezier(0,0,0.2,1) 0ms,transform 200ms cubic-bezier(0,0,0.2,1) 0ms;transform-origin:top left;top:0;left:10px;position:absolute;transform:translate(0,7px) scale(1);user-select:none;"]);
const InputWrapper = styled__default.div.withConfig({
  displayName: "style__InputWrapper",
  componentId: "sc-1pnge0o-3"
})(["position:relative;padding:0px 10px;margin-top:15px;border-radius:4px;background:#222222;color:#ffffff;border:1px solid #010101;"]);
const HelperText = styled__default.div.withConfig({
  displayName: "style__HelperText",
  componentId: "sc-1pnge0o-4"
})(["font-size:14px;color:#a5a5a5;margin-top:10px;padding:0px 10px;text-align:right;"]);
const InputStyle = styled__default(BaseInput$1).withConfig({
  displayName: "style__InputStyle",
  componentId: "sc-1pnge0o-5"
})(["&:focus ~ ", ",&:not([value='']) ~ ", "{transform:translate(0,-12px) scale(0.8);}&:invalid:not([value='']){background:rgba(255,28,27,0.1);}&::placeholder{opacity:0;}&:focus::placeholder{opacity:1;}"], Label, Label);
const _default$a = {
  TextFieldStyle,
  Label,
  InputWrapper,
  HelperText,
  InputStyle,
  Border
};

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TextFieldStyle, "TextFieldStyle", "/Users/emil/Desktop/lib/src/lib/components/TextField/style.ts");
  reactHotLoader.register(Border, "Border", "/Users/emil/Desktop/lib/src/lib/components/TextField/style.ts");
  reactHotLoader.register(Label, "Label", "/Users/emil/Desktop/lib/src/lib/components/TextField/style.ts");
  reactHotLoader.register(InputWrapper, "InputWrapper", "/Users/emil/Desktop/lib/src/lib/components/TextField/style.ts");
  reactHotLoader.register(HelperText, "HelperText", "/Users/emil/Desktop/lib/src/lib/components/TextField/style.ts");
  reactHotLoader.register(InputStyle, "InputStyle", "/Users/emil/Desktop/lib/src/lib/components/TextField/style.ts");
  reactHotLoader.register(_default$a, "default", "/Users/emil/Desktop/lib/src/lib/components/TextField/style.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$o = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
function TextField(_ref) {
  let {
    icon,
    helperText,
    required,
    variant,
    placeholder,
    example,
    type,
    readOnly,
    disabled,
    fixedWidth
  } = _ref,
      props = _default$2(_ref, ["icon", "helperText", "required", "variant", "placeholder", "example", "type", "readOnly", "disabled", "fixedWidth"]);

  const hash = shortid();
  return React__default.createElement(_default$a.TextFieldStyle, {
    fixedWidth: fixedWidth
  }, React__default.createElement(_default$a.InputWrapper, null, React__default.createElement(_default$a.InputStyle, _default({
    placeholder: placeholder && example,
    type: type || 'text',
    required: required,
    id: hash,
    readOnly: readOnly || disabled
  }, props)), placeholder && React__default.createElement(_default$a.Label, {
    htmlFor: hash
  }, React__default.createElement("p", null, required && '*', placeholder))), helperText && React__default.createElement(_default$a.HelperText, null, helperText));
}

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TextField, "TextField", "/Users/emil/Desktop/lib/src/lib/components/TextField/index.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$p = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
const Wrapper = styled__default(BaseElement$1).withConfig({
  displayName: "style__Wrapper",
  componentId: "sc-155p8ed-0"
})(["width:200px;top:200px;left:400px;position:absolute;z-index:1000;"]);
const Container = styled__default.div.withConfig({
  displayName: "style__Container",
  componentId: "sc-155p8ed-1"
})(["overflow:auto;background:#ffffff;padding:5px 0;transition:transform 300ms ease,opacity 200ms ease;will-change:transform;color:#1a202c;transform:scale(1) translateY(0);border-radius:5px;width:100%;box-shadow:0 3px 10px 2px rgba(102,119,136,0.16),0 1px 2px 0px rgba(102,119,136,0.34);", ";"], ({
  blocksUserInput
}) => blocksUserInput && styled.css(["&:after{content:'';top:0;right:0;bottom:0;left:0;z-index:999;}"]));
const Item = styled__default(BaseButton$1).withConfig({
  displayName: "style__Item",
  componentId: "sc-155p8ed-2"
})(["width:100%;display:flex;justify-content:space-between;padding:6px 10px;font-size:0.8rem;cursor:pointer;text-transform:capitalize;user-select:none;", " &:hover{background-color:rgba(237,242,247,0.43);}"], ({
  isFocused
}) => isFocused && 'background: rgba(3, 3, 3, 0.05);');
const ItemGroup = styled__default.div.withConfig({
  displayName: "style__ItemGroup",
  componentId: "sc-155p8ed-3"
})([""]);
const ItemIcon = styled__default.div.withConfig({
  displayName: "style__ItemIcon",
  componentId: "sc-155p8ed-4"
})(["padding:0 5px;"]);
const Separator = styled__default.div.withConfig({
  displayName: "style__Separator",
  componentId: "sc-155p8ed-5"
})(["display:flex;align-items:center;padding:0 5px;width:100%;height:10px;&:after{content:'';width:100%;border-top:1px solid #9c9ea0;}"]);
const _default$b = {
  ItemGroup,
  Item,
  Container,
  Separator,
  ItemIcon,
  Wrapper
};

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Wrapper, "Wrapper", "/Users/emil/Desktop/lib/src/lib/components/Selection/style.ts");
  reactHotLoader.register(Container, "Container", "/Users/emil/Desktop/lib/src/lib/components/Selection/style.ts");
  reactHotLoader.register(Item, "Item", "/Users/emil/Desktop/lib/src/lib/components/Selection/style.ts");
  reactHotLoader.register(ItemGroup, "ItemGroup", "/Users/emil/Desktop/lib/src/lib/components/Selection/style.ts");
  reactHotLoader.register(ItemIcon, "ItemIcon", "/Users/emil/Desktop/lib/src/lib/components/Selection/style.ts");
  reactHotLoader.register(Separator, "Separator", "/Users/emil/Desktop/lib/src/lib/components/Selection/style.ts");
  reactHotLoader.register(_default$b, "default", "/Users/emil/Desktop/lib/src/lib/components/Selection/style.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$q = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const isFocused = event => {
  let originIsFocused = false;

  if (event.target && event.target instanceof Element && event.target !== document.body) {
    originIsFocused = document.activeElement === event.target;
  }

  return originIsFocused;
};

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(isFocused, "isFocused", "/Users/emil/Desktop/lib/src/lib/helpers/isFocused.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$r = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const Item$1 = ({
  description,
  shortcut,
  group,
  action,
  index,
  currentSelectedIndex,
  setCurrentSelectedIndex
}) => {
  return React__default.createElement(_default$b.Item, {
    onClick: action,
    isFocused: index === currentSelectedIndex,
    onMouseMove: () => setCurrentSelectedIndex(index),
    onFocus: () => setCurrentSelectedIndex(index),
    onBlur: () => setCurrentSelectedIndex(-1)
  }, React__default.createElement(_default$b.ItemGroup, null, description), React__default.createElement(_default$b.ItemGroup, null, shortcut));
};

const Selection = ({
  actions
}) => {
  let numberOfSeparators = 0;
  let itemIndex = 0;
  const [currentSelectedIndex, setCurrentSelectedIndex] = React.useState(-1);
  const itemList = actions.flatMap((group, index) => {
    const jsxGroup = group.map(item => {
      itemIndex++;
      return React__default.createElement(Item$1, _default({
        key: shortid.generate(),
        index: itemIndex - 1,
        currentSelectedIndex: currentSelectedIndex,
        setCurrentSelectedIndex: setCurrentSelectedIndex
      }, item));
    });

    if (index !== actions.length - 1) {
      jsxGroup.push(React__default.createElement(_default$b.Separator, {
        key: `__sep__${numberOfSeparators}`
      }));
      numberOfSeparators++;
    }

    return jsxGroup;
  });
  React.useEffect(() => {
    const downHandler = event => {
      let newIndex = currentSelectedIndex;
      let canBlur = false;
      const itemListLength = itemList.length - 1 - numberOfSeparators;

      switch (event.key) {
        case 'ArrowDown':
          newIndex++;
          canBlur = true;
          if (newIndex > itemListLength) newIndex = 0;
          break;

        case 'ArrowUp':
          newIndex--;
          canBlur = true;
          if (newIndex < 0) newIndex = itemListLength;
          break;

        case 'Escape':
          newIndex = -1;
          canBlur = true;
          break;
      }

      if (canBlur && document.activeElement) document.activeElement.blur();
      setCurrentSelectedIndex(newIndex);
    };

    const upHandler = event => {
      switch (event.key) {
        case 'Enter':
          if (currentSelectedIndex !== -1 && !isFocused(event)) {
            const {
              action
            } = actions.flatMap(item => item)[currentSelectedIndex];
            if (action) action(event);
          }

          break;
      }
    };

    addEventListener('keydown', downHandler);
    addEventListener('keyup', upHandler);
    return () => {
      removeEventListener('keydown', downHandler);
      removeEventListener('keyup', upHandler);
    };
  }, [currentSelectedIndex]);
  return React__default.createElement(_default$b.Wrapper, {
    animation: {
      drag: true,
      dragMomentum: false,
      initial: {
        opacity: 0,
        scale: 0
      },
      animate: {
        opacity: 1,
        scale: 1
      },
      exit: {
        opacity: 0,
        scale: 0
      }
    }
  }, React__default.createElement(_default$b.Container, {
    blocksUserInput: true,
    onMouseLeave: () => setCurrentSelectedIndex(-1)
  }, React__default.createElement("div", null, itemList)));
};

__signature__$r(Selection, "useState{[currentSelectedIndex, setCurrentSelectedIndex](-1)}\nuseEffect{}");

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Item$1, "Item", "/Users/emil/Desktop/lib/src/lib/components/Selection/index.tsx");
  reactHotLoader.register(Selection, "Selection", "/Users/emil/Desktop/lib/src/lib/components/Selection/index.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$s = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function createFormGroup(controllers) {
  return {
    controllers,
    refs: {},

    isValid() {},

    state() {
      const builder = {};
      Object.entries(this.controllers).forEach(([key, value]) => {
        builder[key] = value;
      });
      return builder;
    },

    reset() {}

  };
}

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(createFormGroup, "createFormGroup", "/Users/emil/Desktop/lib/src/lib/hooks/useForm/FormGroup.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$t = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
function formControl(defaultValue, ...validators) {
  return {
    initialValue: defaultValue,
    value: defaultValue,
    valid: false,
    touched: false,
    validators: [...validators]
  };
}
const formStates = new WeakMap();
/**
 * @description
 * Form hook
 *
 * @param control Form inputs
 */

function useForm(control) {
  const [formState] = React.useState(control);
  let formGroup;

  if (formStates.has(formState)) {
    formGroup = formStates.get(formState);
  } else {
    formGroup = createFormGroup(formState);
    formStates.set(formState, formGroup);
  }

  function handleInputChange(event) {
    if (!(event && event.srcElement)) return;
    const {
      value,
      name
    } = event.srcElement;
    formState[name].value = value;
  }
  /**
   * @description
   * Binds an input to this hook.
   *
   * @param ref Will bind to an inputs "name" attribute
   */


  function set(ref) {
    if (ref) {
      if (typeof formState[ref.name] === 'undefined') throw new Error(`"${ref.name}" is not a valid form group`);
      ref.value = formState[ref.name].value;

      if (!formGroup.refs[ref.name]) {
        ref.addEventListener('input', handleInputChange);
        formGroup.refs[ref.name] = ref;
      }
    }
  }
  /**
   * @description
   * Wrapper for the a submit callback.
   *
   * @param callback The onSubmit function
   */


  const forward = callback => event => {
    event.preventDefault();
    event.persist();
    callback(formGroup.state());
  };

  React.useEffect(() => {
    return () => {
      Object.values(formGroup.refs).forEach(ref => {
        ref.removeEventListener('input', handleInputChange);
      });
    };
  }, []);
  return {
    set,
    forward,
    formGroup
  };
}

__signature__$t(useForm, "useState{[formState](control)}\nuseEffect{}");

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(formControl, "formControl", "/Users/emil/Desktop/lib/src/lib/hooks/useForm/index.ts");
  reactHotLoader.register(formStates, "formStates", "/Users/emil/Desktop/lib/src/lib/hooks/useForm/index.ts");
  reactHotLoader.register(useForm, "useForm", "/Users/emil/Desktop/lib/src/lib/hooks/useForm/index.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$u = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = React.useState(false); // If pressed key is our target key then set to true

  function downHandler({
    key
  }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  } // If released key is our target key then set to false


  const upHandler = ({
    key
  }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  }; // Add event listeners


  React.useEffect(() => {
    addEventListener('keydown', downHandler);
    addEventListener('keyup', upHandler); // Remove event listeners on cleanup

    return () => {
      removeEventListener('keydown', downHandler);
      removeEventListener('keyup', upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}

__signature__$u(useKeyPress, "useState{[keyPressed, setKeyPressed](false)}\nuseEffect{}");

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useKeyPress, "useKeyPress", "/Users/emil/Desktop/lib/src/lib/hooks/useKeyPress/index.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$v = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
function useOutsideClick(ref, handler) {
  const handleClick = event => {
    if (ref && (!ref.current || ref.current.contains(event.target))) return;
    handler(event);
  };

  React.useEffect(() => {
    addEventListener('mousedown', handleClick);
    addEventListener('touchstart', handleClick); // disposer

    return () => {
      removeEventListener('mousedown', handleClick);
      removeEventListener('touchstart', handleClick);
    };
  }, []);
}

__signature__$v(useOutsideClick, "useEffect{}");

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useOutsideClick, "useOutsideClick", "/Users/emil/Desktop/lib/src/lib/hooks/useOutsideClick/index.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

var __signature__$w = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

exports.BaseButton = BaseButton$1;
exports.BaseElement = BaseElement$1;
exports.BaseInput = BaseInput$1;
exports.Button = Button$1;
exports.Element = Element$2;
exports.GlobalStyle = GlobalStyle;
exports.Main = Main$1;
exports.Scrollable = Scrollable$1;
exports.Selection = Selection;
exports.TextField = TextField;
exports.useForm = useForm;
exports.useKeyPress = useKeyPress;
exports.useOutsideClick = useOutsideClick;
