'use strict';var RenderComponentType = (function () {
    function RenderComponentType(id, encapsulation, styles) {
        this.id = id;
        this.encapsulation = encapsulation;
        this.styles = styles;
    }
    return RenderComponentType;
})();
exports.RenderComponentType = RenderComponentType;
var RenderDebugInfo = (function () {
    function RenderDebugInfo(injector, component, providerTokens, locals) {
        this.injector = injector;
        this.component = component;
        this.providerTokens = providerTokens;
        this.locals = locals;
    }
    return RenderDebugInfo;
})();
exports.RenderDebugInfo = RenderDebugInfo;
var Renderer = (function () {
    function Renderer() {
    }
    return Renderer;
})();
exports.Renderer = Renderer;
/**
 * Injectable service that provides a low-level interface for modifying the UI.
 *
 * Use this service to bypass Angular's templating and make custom UI changes that can't be
 * expressed declaratively. For example if you need to set a property or an attribute whose name is
 * not statically known, use {@link #setElementProperty} or {@link #setElementAttribute}
 * respectively.
 *
 * If you are implementing a custom renderer, you must implement this interface.
 *
 * The default Renderer implementation is `DomRenderer`. Also available is `WebWorkerRenderer`.
 */
var RootRenderer = (function () {
    function RootRenderer() {
    }
    return RootRenderer;
})();
exports.RootRenderer = RootRenderer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC01WFpPbDN4My50bXAvYW5ndWxhcjIvc3JjL2NvcmUvcmVuZGVyL2FwaS50cyJdLCJuYW1lcyI6WyJSZW5kZXJDb21wb25lbnRUeXBlIiwiUmVuZGVyQ29tcG9uZW50VHlwZS5jb25zdHJ1Y3RvciIsIlJlbmRlckRlYnVnSW5mbyIsIlJlbmRlckRlYnVnSW5mby5jb25zdHJ1Y3RvciIsIlJlbmRlcmVyIiwiUmVuZGVyZXIuY29uc3RydWN0b3IiLCJSb290UmVuZGVyZXIiLCJSb290UmVuZGVyZXIuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUdBO0lBQ0VBLDZCQUFtQkEsRUFBVUEsRUFBU0EsYUFBZ0NBLEVBQ25EQSxNQUE2QkE7UUFEN0JDLE9BQUVBLEdBQUZBLEVBQUVBLENBQVFBO1FBQVNBLGtCQUFhQSxHQUFiQSxhQUFhQSxDQUFtQkE7UUFDbkRBLFdBQU1BLEdBQU5BLE1BQU1BLENBQXVCQTtJQUFHQSxDQUFDQTtJQUN0REQsMEJBQUNBO0FBQURBLENBQUNBLEFBSEQsSUFHQztBQUhZLDJCQUFtQixzQkFHL0IsQ0FBQTtBQUVEO0lBQ0VFLHlCQUFtQkEsUUFBa0JBLEVBQVNBLFNBQWNBLEVBQVNBLGNBQXFCQSxFQUN2RUEsTUFBd0JBO1FBRHhCQyxhQUFRQSxHQUFSQSxRQUFRQSxDQUFVQTtRQUFTQSxjQUFTQSxHQUFUQSxTQUFTQSxDQUFLQTtRQUFTQSxtQkFBY0EsR0FBZEEsY0FBY0EsQ0FBT0E7UUFDdkVBLFdBQU1BLEdBQU5BLE1BQU1BLENBQWtCQTtJQUFHQSxDQUFDQTtJQUNqREQsc0JBQUNBO0FBQURBLENBQUNBLEFBSEQsSUFHQztBQUhZLHVCQUFlLGtCQUczQixDQUFBO0FBSUQ7SUFBQUU7SUE4Q0FDLENBQUNBO0lBQURELGVBQUNBO0FBQURBLENBQUNBLEFBOUNELElBOENDO0FBOUNxQixnQkFBUSxXQThDN0IsQ0FBQTtBQUVEOzs7Ozs7Ozs7OztHQVdHO0FBRUg7SUFBQUU7SUFFQUMsQ0FBQ0E7SUFBREQsbUJBQUNBO0FBQURBLENBQUNBLEFBRkQsSUFFQztBQUZxQixvQkFBWSxlQUVqQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbWV0YWRhdGEvdmlldyc7XG5pbXBvcnQge0luamVjdG9yLCBJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaSc7XG5cbmV4cG9ydCBjbGFzcyBSZW5kZXJDb21wb25lbnRUeXBlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGlkOiBzdHJpbmcsIHB1YmxpYyBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbixcbiAgICAgICAgICAgICAgcHVibGljIHN0eWxlczogQXJyYXk8c3RyaW5nIHwgYW55W10+KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUmVuZGVyRGVidWdJbmZvIHtcbiAgY29uc3RydWN0b3IocHVibGljIGluamVjdG9yOiBJbmplY3RvciwgcHVibGljIGNvbXBvbmVudDogYW55LCBwdWJsaWMgcHJvdmlkZXJUb2tlbnM6IGFueVtdLFxuICAgICAgICAgICAgICBwdWJsaWMgbG9jYWxzOiBNYXA8c3RyaW5nLCBhbnk+KSB7fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhcmVudFJlbmRlcmVyIHsgcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudFR5cGU6IFJlbmRlckNvbXBvbmVudFR5cGUpOiBSZW5kZXJlcjsgfVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVuZGVyZXIgaW1wbGVtZW50cyBQYXJlbnRSZW5kZXJlciB7XG4gIGFic3RyYWN0IHJlbmRlckNvbXBvbmVudChjb21wb25lbnRUeXBlOiBSZW5kZXJDb21wb25lbnRUeXBlKTogUmVuZGVyZXI7XG5cbiAgYWJzdHJhY3Qgc2VsZWN0Um9vdEVsZW1lbnQoc2VsZWN0b3I6IHN0cmluZyk6IGFueTtcblxuICBhYnN0cmFjdCBjcmVhdGVFbGVtZW50KHBhcmVudEVsZW1lbnQ6IGFueSwgbmFtZTogc3RyaW5nKTogYW55O1xuXG4gIGFic3RyYWN0IGNyZWF0ZVZpZXdSb290KGhvc3RFbGVtZW50OiBhbnkpOiBhbnk7XG5cbiAgYWJzdHJhY3QgY3JlYXRlVGVtcGxhdGVBbmNob3IocGFyZW50RWxlbWVudDogYW55KTogYW55O1xuXG4gIGFic3RyYWN0IGNyZWF0ZVRleHQocGFyZW50RWxlbWVudDogYW55LCB2YWx1ZTogc3RyaW5nKTogYW55O1xuXG4gIGFic3RyYWN0IHByb2plY3ROb2RlcyhwYXJlbnRFbGVtZW50OiBhbnksIG5vZGVzOiBhbnlbXSk6IHZvaWQ7XG5cbiAgYWJzdHJhY3QgYXR0YWNoVmlld0FmdGVyKG5vZGU6IGFueSwgdmlld1Jvb3ROb2RlczogYW55W10pOiB2b2lkO1xuXG4gIGFic3RyYWN0IGRldGFjaFZpZXcodmlld1Jvb3ROb2RlczogYW55W10pOiB2b2lkO1xuXG4gIGFic3RyYWN0IGRlc3Ryb3lWaWV3KGhvc3RFbGVtZW50OiBhbnksIHZpZXdBbGxOb2RlczogYW55W10pOiB2b2lkO1xuXG4gIGFic3RyYWN0IGxpc3RlbihyZW5kZXJFbGVtZW50OiBhbnksIG5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogRnVuY3Rpb247XG5cbiAgYWJzdHJhY3QgbGlzdGVuR2xvYmFsKHRhcmdldDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbik6IEZ1bmN0aW9uO1xuXG4gIGFic3RyYWN0IHNldEVsZW1lbnRQcm9wZXJ0eShyZW5kZXJFbGVtZW50OiBhbnksIHByb3BlcnR5TmFtZTogc3RyaW5nLCBwcm9wZXJ0eVZhbHVlOiBhbnkpOiB2b2lkO1xuXG4gIGFic3RyYWN0IHNldEVsZW1lbnRBdHRyaWJ1dGUocmVuZGVyRWxlbWVudDogYW55LCBhdHRyaWJ1dGVOYW1lOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVmFsdWU6IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFVzZWQgb25seSBpbiBkZWJ1ZyBtb2RlIHRvIHNlcmlhbGl6ZSBwcm9wZXJ0eSBjaGFuZ2VzIHRvIGNvbW1lbnQgbm9kZXMsXG4gICAqIHN1Y2ggYXMgPHRlbXBsYXRlPiBwbGFjZWhvbGRlcnMuXG4gICAqL1xuICBhYnN0cmFjdCBzZXRCaW5kaW5nRGVidWdJbmZvKHJlbmRlckVsZW1lbnQ6IGFueSwgcHJvcGVydHlOYW1lOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZTogc3RyaW5nKTogdm9pZDtcblxuICBhYnN0cmFjdCBzZXRFbGVtZW50RGVidWdJbmZvKHJlbmRlckVsZW1lbnQ6IGFueSwgaW5mbzogUmVuZGVyRGVidWdJbmZvKTtcblxuICBhYnN0cmFjdCBzZXRFbGVtZW50Q2xhc3MocmVuZGVyRWxlbWVudDogYW55LCBjbGFzc05hbWU6IHN0cmluZywgaXNBZGQ6IGJvb2xlYW4pO1xuXG4gIGFic3RyYWN0IHNldEVsZW1lbnRTdHlsZShyZW5kZXJFbGVtZW50OiBhbnksIHN0eWxlTmFtZTogc3RyaW5nLCBzdHlsZVZhbHVlOiBzdHJpbmcpO1xuXG4gIGFic3RyYWN0IGludm9rZUVsZW1lbnRNZXRob2QocmVuZGVyRWxlbWVudDogYW55LCBtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTtcblxuICBhYnN0cmFjdCBzZXRUZXh0KHJlbmRlck5vZGU6IGFueSwgdGV4dDogc3RyaW5nKTtcbn1cblxuLyoqXG4gKiBJbmplY3RhYmxlIHNlcnZpY2UgdGhhdCBwcm92aWRlcyBhIGxvdy1sZXZlbCBpbnRlcmZhY2UgZm9yIG1vZGlmeWluZyB0aGUgVUkuXG4gKlxuICogVXNlIHRoaXMgc2VydmljZSB0byBieXBhc3MgQW5ndWxhcidzIHRlbXBsYXRpbmcgYW5kIG1ha2UgY3VzdG9tIFVJIGNoYW5nZXMgdGhhdCBjYW4ndCBiZVxuICogZXhwcmVzc2VkIGRlY2xhcmF0aXZlbHkuIEZvciBleGFtcGxlIGlmIHlvdSBuZWVkIHRvIHNldCBhIHByb3BlcnR5IG9yIGFuIGF0dHJpYnV0ZSB3aG9zZSBuYW1lIGlzXG4gKiBub3Qgc3RhdGljYWxseSBrbm93biwgdXNlIHtAbGluayAjc2V0RWxlbWVudFByb3BlcnR5fSBvciB7QGxpbmsgI3NldEVsZW1lbnRBdHRyaWJ1dGV9XG4gKiByZXNwZWN0aXZlbHkuXG4gKlxuICogSWYgeW91IGFyZSBpbXBsZW1lbnRpbmcgYSBjdXN0b20gcmVuZGVyZXIsIHlvdSBtdXN0IGltcGxlbWVudCB0aGlzIGludGVyZmFjZS5cbiAqXG4gKiBUaGUgZGVmYXVsdCBSZW5kZXJlciBpbXBsZW1lbnRhdGlvbiBpcyBgRG9tUmVuZGVyZXJgLiBBbHNvIGF2YWlsYWJsZSBpcyBgV2ViV29ya2VyUmVuZGVyZXJgLlxuICovXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSb290UmVuZGVyZXIgaW1wbGVtZW50cyBQYXJlbnRSZW5kZXJlciB7XG4gIGFic3RyYWN0IHJlbmRlckNvbXBvbmVudChjb21wb25lbnRUeXBlOiBSZW5kZXJDb21wb25lbnRUeXBlKTogUmVuZGVyZXI7XG59XG4iXX0=