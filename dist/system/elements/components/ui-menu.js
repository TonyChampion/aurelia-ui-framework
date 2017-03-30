System.register(["aurelia-framework", "../../utils/ui-event", "../../utils/ui-utils"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, ui_event_1, ui_utils_1, UIMenubar, UIMenu, UIMenuSection, UIMenuGroup, UIMenuItem;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (ui_event_1_1) {
                ui_event_1 = ui_event_1_1;
            },
            function (ui_utils_1_1) {
                ui_utils_1 = ui_utils_1_1;
            }
        ],
        execute: function () {
            UIMenubar = (function () {
                function UIMenubar(element) {
                    this.element = element;
                    this.isOverflow = false;
                }
                UIMenubar.prototype.created = function (owningView, myView) { };
                UIMenubar.prototype.bind = function (bindingContext, overrideContext) { };
                UIMenubar.prototype.attached = function () {
                    var _this = this;
                    this.obResize = ui_event_1.UIEvent.subscribe('windowresize', function () { return _this.arrange(); });
                    this.obClick = ui_event_1.UIEvent.subscribe('mouseclick', function () { return _this.overflow.classList.remove('ui-open'); });
                    this.tether = ui_utils_1.UIUtils.tether(this.overflowToggle, this.overflow, { resize: false, position: 'br' });
                    window.setTimeout(function () { return _this.arrange(); }, 500);
                };
                UIMenubar.prototype.detached = function () {
                    this.tether.dispose();
                    this.obClick.dispose();
                    this.obResize.dispose();
                };
                UIMenubar.prototype.unbind = function () { };
                UIMenubar.prototype.arrange = function () {
                    this.overflow.classList.remove('ui-open');
                    for (var i = 0, c = this.overflow['children']; i < c.length; i++) {
                        this.wrapper.appendChild(c[i]);
                    }
                    if (this.isOverflow = (this.wrapper.lastElementChild.offsetLeft + this.wrapper.lastElementChild.offsetWidth > this.wrapper.offsetWidth)) {
                        for (var c = this.wrapper['children'], i = c.length - 1; i >= 0; i--) {
                            if (c[i].offsetLeft + c[i].offsetWidth > this.wrapper.offsetWidth) {
                                if (this.overflow.hasChildNodes)
                                    this.overflow.insertBefore(c[i], this.overflow.childNodes[0]);
                                else
                                    this.overflow.appendChild(c[i]);
                            }
                        }
                    }
                };
                UIMenubar.prototype.showOverflow = function (evt) {
                    if (evt.button != 0)
                        return true;
                    if (!this.overflow.classList.contains('ui-open')) {
                        this.overflow.classList.add('ui-open');
                        this.tether.position();
                    }
                    else
                        this.overflow.classList.remove('ui-open');
                };
                return UIMenubar;
            }());
            UIMenubar = __decorate([
                aurelia_framework_1.autoinject(),
                aurelia_framework_1.inlineView("\n<template class=\"ui-menubar\">\n  <div class=\"ui-menubar-wrapper\" ref=\"wrapper\"><slot></slot></div>\n  <div class=\"ui-menubar-toggle\" ref=\"overflowToggle\" show.bind=\"isOverflow\" click.trigger=\"showOverflow($event)\"><ui-glyph glyph=\"glyph-handle-overflow\"></ui-glyph></div>\n  <div class=\"ui-menu ui-menubar-overflow ui-floating\" ref=\"overflow\"></div>\n</template>"),
                aurelia_framework_1.customElement('ui-menubar'),
                __metadata("design:paramtypes", [Element])
            ], UIMenubar);
            exports_1("UIMenubar", UIMenubar);
            UIMenu = (function () {
                function UIMenu(element) {
                    this.element = element;
                }
                UIMenu.prototype.created = function (owningView, myView) { };
                UIMenu.prototype.bind = function (bindingContext, overrideContext) { };
                UIMenu.prototype.attached = function () { };
                UIMenu.prototype.detached = function () { };
                UIMenu.prototype.unbind = function () { };
                return UIMenu;
            }());
            UIMenu = __decorate([
                aurelia_framework_1.autoinject(),
                aurelia_framework_1.inlineView('<template class="ui-menu"><slot></slot></template>'),
                aurelia_framework_1.customElement('ui-menu'),
                __metadata("design:paramtypes", [Element])
            ], UIMenu);
            exports_1("UIMenu", UIMenu);
            UIMenuSection = (function () {
                function UIMenuSection(element) {
                    this.element = element;
                }
                UIMenuSection.prototype.created = function (owningView, myView) { };
                UIMenuSection.prototype.bind = function (bindingContext, overrideContext) { };
                UIMenuSection.prototype.attached = function () { };
                UIMenuSection.prototype.detached = function () { };
                UIMenuSection.prototype.unbind = function () { };
                return UIMenuSection;
            }());
            UIMenuSection = __decorate([
                aurelia_framework_1.autoinject(),
                aurelia_framework_1.inlineView('<template class="ui-menu-section-title"><slot></slot></template>'),
                aurelia_framework_1.customElement('ui-menu-section'),
                __metadata("design:paramtypes", [Element])
            ], UIMenuSection);
            exports_1("UIMenuSection", UIMenuSection);
            UIMenuGroup = (function () {
                function UIMenuGroup(element) {
                    this.element = element;
                    this.label = '';
                }
                UIMenuGroup.prototype.created = function (owningView, myView) { };
                UIMenuGroup.prototype.bind = function (bindingContext, overrideContext) { };
                UIMenuGroup.prototype.attached = function () { };
                UIMenuGroup.prototype.detached = function () { };
                UIMenuGroup.prototype.unbind = function () { };
                return UIMenuGroup;
            }());
            __decorate([
                aurelia_framework_1.bindable(),
                __metadata("design:type", Object)
            ], UIMenuGroup.prototype, "label", void 0);
            UIMenuGroup = __decorate([
                aurelia_framework_1.autoinject(),
                aurelia_framework_1.inlineView('<template class="ui-menu-section"><div if.bind="label" class="ui-menu-section-title" innerhtml.bind="label"></div><slot></slot></template>'),
                aurelia_framework_1.customElement('ui-menu-group'),
                __metadata("design:paramtypes", [Element])
            ], UIMenuGroup);
            exports_1("UIMenuGroup", UIMenuGroup);
            UIMenuItem = (function () {
                function UIMenuItem(element) {
                    this.element = element;
                    this.glyph = '';
                    this.class = '';
                    this.active = false;
                    this.disabled = false;
                    this.href = 'javascript:void(0)';
                }
                UIMenuItem.prototype.created = function (owningView, myView) { };
                UIMenuItem.prototype.bind = function (bindingContext, overrideContext) {
                    this.active = isTrue(this.active);
                };
                UIMenuItem.prototype.attached = function () { };
                UIMenuItem.prototype.detached = function () { };
                UIMenuItem.prototype.unbind = function () { };
                UIMenuItem.prototype.click = function (evt) {
                    if (evt.button != 0)
                        return true;
                    evt.cancelBubble = true;
                    evt.stopPropagation();
                    return ui_event_1.UIEvent.fireEvent('click', this.element);
                };
                return UIMenuItem;
            }());
            __decorate([
                aurelia_framework_1.bindable(),
                __metadata("design:type", Object)
            ], UIMenuItem.prototype, "glyph", void 0);
            __decorate([
                aurelia_framework_1.bindable(),
                __metadata("design:type", Object)
            ], UIMenuItem.prototype, "class", void 0);
            __decorate([
                aurelia_framework_1.bindable(),
                __metadata("design:type", Object)
            ], UIMenuItem.prototype, "active", void 0);
            __decorate([
                aurelia_framework_1.bindable(),
                __metadata("design:type", Object)
            ], UIMenuItem.prototype, "disabled", void 0);
            __decorate([
                aurelia_framework_1.bindable(),
                __metadata("design:type", Object)
            ], UIMenuItem.prototype, "href", void 0);
            UIMenuItem = __decorate([
                aurelia_framework_1.autoinject(),
                aurelia_framework_1.containerless(),
                aurelia_framework_1.inlineView("<template><a class=\"ui-menu-item ${active?'ui-active':''} ${disabled?'ui-disabled':''} ${class}\" href.bind=\"href\" click.trigger=\"click($event)\">\n    <ui-glyph if.bind=\"glyph\" class=\"ui-menu-icon ${glyph}\" glyph.bind=\"glyph\"></ui-glyph><span class=\"ui-menu-label\"><slot></slot></span></a></template>"),
                aurelia_framework_1.customElement('ui-menu-item'),
                __metadata("design:paramtypes", [Element])
            ], UIMenuItem);
            exports_1("UIMenuItem", UIMenuItem);
        }
    };
});
