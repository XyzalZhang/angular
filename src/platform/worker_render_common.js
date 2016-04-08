'use strict';var lang_1 = require('angular2/src/facade/lang');
var message_bus_1 = require('angular2/src/web_workers/shared/message_bus');
var ng_zone_1 = require('angular2/src/core/zone/ng_zone');
var core_1 = require('angular2/core');
var common_dom_1 = require('angular2/platform/common_dom');
var di_1 = require('angular2/src/core/di');
// TODO change these imports once dom_adapter is moved out of core
var dom_adapter_1 = require('angular2/src/platform/dom/dom_adapter');
var dom_events_1 = require('angular2/src/platform/dom/events/dom_events');
var key_events_1 = require('angular2/src/platform/dom/events/key_events');
var hammer_gestures_1 = require('angular2/src/platform/dom/events/hammer_gestures');
var dom_tokens_1 = require('angular2/src/platform/dom/dom_tokens');
var dom_renderer_1 = require('angular2/src/platform/dom/dom_renderer');
var shared_styles_host_1 = require('angular2/src/platform/dom/shared_styles_host');
var shared_styles_host_2 = require("angular2/src/platform/dom/shared_styles_host");
var browser_details_1 = require('angular2/src/animate/browser_details');
var animation_builder_1 = require('angular2/src/animate/animation_builder');
var compiler_1 = require('angular2/compiler');
var xhr_impl_1 = require('angular2/src/platform/browser/xhr_impl');
var testability_1 = require('angular2/src/core/testability/testability');
var testability_2 = require('angular2/src/platform/browser/testability');
var browser_adapter_1 = require('./browser/browser_adapter');
var wtf_init_1 = require('angular2/src/core/profile/wtf_init');
var renderer_1 = require('angular2/src/web_workers/ui/renderer');
var xhr_impl_2 = require('angular2/src/web_workers/ui/xhr_impl');
var browser_platform_location_1 = require('angular2/src/router/location/browser_platform_location');
var service_message_broker_1 = require('angular2/src/web_workers/shared/service_message_broker');
var client_message_broker_1 = require('angular2/src/web_workers/shared/client_message_broker');
var serializer_1 = require('angular2/src/web_workers/shared/serializer');
var api_1 = require('angular2/src/web_workers/shared/api');
var render_store_1 = require('angular2/src/web_workers/shared/render_store');
var hammer_gestures_2 = require('./dom/events/hammer_gestures');
exports.WORKER_SCRIPT = lang_1.CONST_EXPR(new di_1.OpaqueToken("WebWorkerScript"));
// Message based Worker classes that listen on the MessageBus
exports.WORKER_RENDER_MESSAGING_PROVIDERS = lang_1.CONST_EXPR([renderer_1.MessageBasedRenderer, xhr_impl_2.MessageBasedXHRImpl]);
exports.WORKER_RENDER_PLATFORM = lang_1.CONST_EXPR([
    core_1.PLATFORM_COMMON_PROVIDERS,
    new di_1.Provider(core_1.PLATFORM_INITIALIZER, { useValue: initWebWorkerRenderPlatform, multi: true })
]);
/**
 * A list of {@link Provider}s. To use the router in a Worker enabled application you must
 * include these providers when setting up the render thread.
 */
exports.WORKER_RENDER_ROUTER = lang_1.CONST_EXPR([browser_platform_location_1.BrowserPlatformLocation]);
exports.WORKER_RENDER_APPLICATION_COMMON = lang_1.CONST_EXPR([
    core_1.APPLICATION_COMMON_PROVIDERS,
    exports.WORKER_RENDER_MESSAGING_PROVIDERS,
    new di_1.Provider(core_1.ExceptionHandler, { useFactory: _exceptionHandler, deps: [] }),
    new di_1.Provider(dom_tokens_1.DOCUMENT, { useFactory: _document, deps: [] }),
    // TODO(jteplitz602): Investigate if we definitely need EVENT_MANAGER on the render thread
    // #5298
    new di_1.Provider(common_dom_1.EVENT_MANAGER_PLUGINS, { useClass: dom_events_1.DomEventsPlugin, multi: true }),
    new di_1.Provider(common_dom_1.EVENT_MANAGER_PLUGINS, { useClass: key_events_1.KeyEventsPlugin, multi: true }),
    new di_1.Provider(common_dom_1.EVENT_MANAGER_PLUGINS, { useClass: hammer_gestures_1.HammerGesturesPlugin, multi: true }),
    new di_1.Provider(hammer_gestures_2.HAMMER_GESTURE_CONFIG, { useClass: hammer_gestures_2.HammerGestureConfig }),
    new di_1.Provider(dom_renderer_1.DomRootRenderer, { useClass: dom_renderer_1.DomRootRenderer_ }),
    new di_1.Provider(core_1.RootRenderer, { useExisting: dom_renderer_1.DomRootRenderer }),
    new di_1.Provider(shared_styles_host_2.SharedStylesHost, { useExisting: shared_styles_host_1.DomSharedStylesHost }),
    new di_1.Provider(compiler_1.XHR, { useClass: xhr_impl_1.XHRImpl }),
    xhr_impl_2.MessageBasedXHRImpl,
    new di_1.Provider(service_message_broker_1.ServiceMessageBrokerFactory, { useClass: service_message_broker_1.ServiceMessageBrokerFactory_ }),
    new di_1.Provider(client_message_broker_1.ClientMessageBrokerFactory, { useClass: client_message_broker_1.ClientMessageBrokerFactory_ }),
    serializer_1.Serializer,
    new di_1.Provider(api_1.ON_WEB_WORKER, { useValue: false }),
    render_store_1.RenderStore,
    shared_styles_host_1.DomSharedStylesHost,
    testability_1.Testability,
    browser_details_1.BrowserDetails,
    animation_builder_1.AnimationBuilder,
    common_dom_1.EventManager
]);
function initializeGenericWorkerRenderer(injector) {
    var bus = injector.get(message_bus_1.MessageBus);
    var zone = injector.get(ng_zone_1.NgZone);
    bus.attachToZone(zone);
    zone.run(function () {
        exports.WORKER_RENDER_MESSAGING_PROVIDERS.forEach(function (token) { injector.get(token).start(); });
    });
}
exports.initializeGenericWorkerRenderer = initializeGenericWorkerRenderer;
function initWebWorkerRenderPlatform() {
    browser_adapter_1.BrowserDomAdapter.makeCurrent();
    wtf_init_1.wtfInit();
    testability_2.BrowserGetTestability.init();
}
exports.initWebWorkerRenderPlatform = initWebWorkerRenderPlatform;
function _exceptionHandler() {
    return new core_1.ExceptionHandler(dom_adapter_1.DOM, !lang_1.IS_DART);
}
function _document() {
    return dom_adapter_1.DOM.defaultDoc();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2VyX3JlbmRlcl9jb21tb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLTVYWk9sM3gzLnRtcC9hbmd1bGFyMi9zcmMvcGxhdGZvcm0vd29ya2VyX3JlbmRlcl9jb21tb24udHMiXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUdlbmVyaWNXb3JrZXJSZW5kZXJlciIsImluaXRXZWJXb3JrZXJSZW5kZXJQbGF0Zm9ybSIsIl9leGNlcHRpb25IYW5kbGVyIiwiX2RvY3VtZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxxQkFBa0MsMEJBQTBCLENBQUMsQ0FBQTtBQUM3RCw0QkFBeUIsNkNBQTZDLENBQUMsQ0FBQTtBQUN2RSx3QkFBcUIsZ0NBQWdDLENBQUMsQ0FBQTtBQUN0RCxxQkFhTyxlQUFlLENBQUMsQ0FBQTtBQUN2QiwyQkFBa0QsOEJBQThCLENBQUMsQ0FBQTtBQUNqRixtQkFBdUQsc0JBQXNCLENBQUMsQ0FBQTtBQUM5RSxrRUFBa0U7QUFDbEUsNEJBQWtCLHVDQUF1QyxDQUFDLENBQUE7QUFDMUQsMkJBQThCLDZDQUE2QyxDQUFDLENBQUE7QUFDNUUsMkJBQThCLDZDQUE2QyxDQUFDLENBQUE7QUFDNUUsZ0NBQW1DLGtEQUFrRCxDQUFDLENBQUE7QUFDdEYsMkJBQXVCLHNDQUFzQyxDQUFDLENBQUE7QUFDOUQsNkJBQWdELHdDQUF3QyxDQUFDLENBQUE7QUFDekYsbUNBQWtDLDhDQUE4QyxDQUFDLENBQUE7QUFDakYsbUNBQStCLDhDQUE4QyxDQUFDLENBQUE7QUFDOUUsZ0NBQTZCLHNDQUFzQyxDQUFDLENBQUE7QUFDcEUsa0NBQStCLHdDQUF3QyxDQUFDLENBQUE7QUFDeEUseUJBQWtCLG1CQUFtQixDQUFDLENBQUE7QUFDdEMseUJBQXNCLHdDQUF3QyxDQUFDLENBQUE7QUFDL0QsNEJBQTBCLDJDQUEyQyxDQUFDLENBQUE7QUFDdEUsNEJBQW9DLDJDQUEyQyxDQUFDLENBQUE7QUFD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LENBQUM7QUFFSCx5Q0FBZ0QsUUFBa0I7SUFDaEVBLElBQUlBLEdBQUdBLEdBQUdBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLHdCQUFVQSxDQUFDQSxDQUFDQTtJQUNuQ0EsSUFBSUEsSUFBSUEsR0FBR0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsZ0JBQU1BLENBQUNBLENBQUNBO0lBQ2hDQSxHQUFHQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUV2QkEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7UUFDUEEseUNBQWlDQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFDQSxLQUFLQSxJQUFPQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUN6RkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7QUFDTEEsQ0FBQ0E7QUFSZSx1Q0FBK0Isa0NBUTlDLENBQUE7QUFFRDtJQUNFQyxtQ0FBaUJBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO0lBQ2hDQSxrQkFBT0EsRUFBRUEsQ0FBQ0E7SUFDVkEsbUNBQXFCQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUMvQkEsQ0FBQ0E7QUFKZSxtQ0FBMkIsOEJBSTFDLENBQUE7QUFFRDtJQUNFQyxNQUFNQSxDQUFDQSxJQUFJQSx1QkFBZ0JBLENBQUNBLGlCQUFHQSxFQUFFQSxDQUFDQSxjQUFPQSxDQUFDQSxDQUFDQTtBQUM3Q0EsQ0FBQ0E7QUFFRDtJQUNFQyxNQUFNQSxDQUFDQSxpQkFBR0EsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQ0E7QUFDMUJBLENBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDT05TVF9FWFBSLCBJU19EQVJUfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtNZXNzYWdlQnVzfSBmcm9tICdhbmd1bGFyMi9zcmMvd2ViX3dvcmtlcnMvc2hhcmVkL21lc3NhZ2VfYnVzJztcbmltcG9ydCB7Tmdab25lfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS96b25lL25nX3pvbmUnO1xuaW1wb3J0IHtcbiAgUExBVEZPUk1fRElSRUNUSVZFUyxcbiAgUExBVEZPUk1fUElQRVMsXG4gIENvbXBvbmVudFJlZixcbiAgcGxhdGZvcm0sXG4gIEV4Y2VwdGlvbkhhbmRsZXIsXG4gIFJlZmxlY3RvcixcbiAgcmVmbGVjdG9yLFxuICBBUFBMSUNBVElPTl9DT01NT05fUFJPVklERVJTLFxuICBQTEFURk9STV9DT01NT05fUFJPVklERVJTLFxuICBSb290UmVuZGVyZXIsXG4gIFBMQVRGT1JNX0lOSVRJQUxJWkVSLFxuICBBUFBfSU5JVElBTElaRVJcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0VWRU5UX01BTkFHRVJfUExVR0lOUywgRXZlbnRNYW5hZ2VyfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9jb21tb25fZG9tJztcbmltcG9ydCB7cHJvdmlkZSwgUHJvdmlkZXIsIEluamVjdG9yLCBPcGFxdWVUb2tlbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvZGknO1xuLy8gVE9ETyBjaGFuZ2UgdGhlc2UgaW1wb3J0cyBvbmNlIGRvbV9hZGFwdGVyIGlzIG1vdmVkIG91dCBvZiBjb3JlXG5pbXBvcnQge0RPTX0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fYWRhcHRlcic7XG5pbXBvcnQge0RvbUV2ZW50c1BsdWdpbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9ldmVudHMvZG9tX2V2ZW50cyc7XG5pbXBvcnQge0tleUV2ZW50c1BsdWdpbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9ldmVudHMva2V5X2V2ZW50cyc7XG5pbXBvcnQge0hhbW1lckdlc3R1cmVzUGx1Z2lufSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2V2ZW50cy9oYW1tZXJfZ2VzdHVyZXMnO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fdG9rZW5zJztcbmltcG9ydCB7RG9tUm9vdFJlbmRlcmVyLCBEb21Sb290UmVuZGVyZXJffSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV9yZW5kZXJlcic7XG5pbXBvcnQge0RvbVNoYXJlZFN0eWxlc0hvc3R9IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vc2hhcmVkX3N0eWxlc19ob3N0JztcbmltcG9ydCB7U2hhcmVkU3R5bGVzSG9zdH0gZnJvbSBcImFuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vc2hhcmVkX3N0eWxlc19ob3N0XCI7XG5pbXBvcnQge0Jyb3dzZXJEZXRhaWxzfSBmcm9tICdhbmd1bGFyMi9zcmMvYW5pbWF0ZS9icm93c2VyX2RldGFpbHMnO1xuaW1wb3J0IHtBbmltYXRpb25CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvYW5pbWF0ZS9hbmltYXRpb25fYnVpbGRlcic7XG5pbXBvcnQge1hIUn0gZnJvbSAnYW5ndWxhcjIvY29tcGlsZXInO1xuaW1wb3J0IHtYSFJJbXBsfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlci94aHJfaW1wbCc7XG5pbXBvcnQge1Rlc3RhYmlsaXR5fSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS90ZXN0YWJpbGl0eS90ZXN0YWJpbGl0eSc7XG5pbXBvcnQge0Jyb3dzZXJHZXRUZXN0YWJpbGl0eX0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2Jyb3dzZXIvdGVzdGFiaWxpdHknO1xuaW1wb3J0IHtCcm93c2VyRG9tQWRhcHRlcn0gZnJvbSAnLi9icm93c2VyL2Jyb3dzZXJfYWRhcHRlcic7XG5pbXBvcnQge3d0ZkluaXR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3Byb2ZpbGUvd3RmX2luaXQnO1xuaW1wb3J0IHtNZXNzYWdlQmFzZWRSZW5kZXJlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3VpL3JlbmRlcmVyJztcbmltcG9ydCB7TWVzc2FnZUJhc2VkWEhSSW1wbH0gZnJvbSAnYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3VpL3hocl9pbXBsJztcbmltcG9ydCB7QnJvd3NlclBsYXRmb3JtTG9jYXRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9yb3V0ZXIvbG9jYXRpb24vYnJvd3Nlcl9wbGF0Zm9ybV9sb2NhdGlvbic7XG5pbXBvcnQge1xuICBTZXJ2aWNlTWVzc2FnZUJyb2tlckZhY3RvcnksXG4gIFNlcnZpY2VNZXNzYWdlQnJva2VyRmFjdG9yeV9cbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3NoYXJlZC9zZXJ2aWNlX21lc3NhZ2VfYnJva2VyJztcbmltcG9ydCB7XG4gIENsaWVudE1lc3NhZ2VCcm9rZXJGYWN0b3J5LFxuICBDbGllbnRNZXNzYWdlQnJva2VyRmFjdG9yeV9cbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3NoYXJlZC9jbGllbnRfbWVzc2FnZV9icm9rZXInO1xuaW1wb3J0IHtTZXJpYWxpemVyfSBmcm9tICdhbmd1bGFyMi9zcmMvd2ViX3dvcmtlcnMvc2hhcmVkL3NlcmlhbGl6ZXInO1xuaW1wb3J0IHtPTl9XRUJfV09SS0VSfSBmcm9tICdhbmd1bGFyMi9zcmMvd2ViX3dvcmtlcnMvc2hhcmVkL2FwaSc7XG5pbXBvcnQge1JlbmRlclN0b3JlfSBmcm9tICdhbmd1bGFyMi9zcmMvd2ViX3dvcmtlcnMvc2hhcmVkL3JlbmRlcl9zdG9yZSc7XG5pbXBvcnQge0hBTU1FUl9HRVNUVVJFX0NPTkZJRywgSGFtbWVyR2VzdHVyZUNvbmZpZ30gZnJvbSAnLi9kb20vZXZlbnRzL2hhbW1lcl9nZXN0dXJlcyc7XG5cbmV4cG9ydCBjb25zdCBXT1JLRVJfU0NSSVBUOiBPcGFxdWVUb2tlbiA9IENPTlNUX0VYUFIobmV3IE9wYXF1ZVRva2VuKFwiV2ViV29ya2VyU2NyaXB0XCIpKTtcblxuLy8gTWVzc2FnZSBiYXNlZCBXb3JrZXIgY2xhc3NlcyB0aGF0IGxpc3RlbiBvbiB0aGUgTWVzc2FnZUJ1c1xuZXhwb3J0IGNvbnN0IFdPUktFUl9SRU5ERVJfTUVTU0FHSU5HX1BST1ZJREVSUzogQXJyYXk8YW55IC8qVHlwZSB8IFByb3ZpZGVyIHwgYW55W10qLz4gPVxuICAgIENPTlNUX0VYUFIoW01lc3NhZ2VCYXNlZFJlbmRlcmVyLCBNZXNzYWdlQmFzZWRYSFJJbXBsXSk7XG5cbmV4cG9ydCBjb25zdCBXT1JLRVJfUkVOREVSX1BMQVRGT1JNOiBBcnJheTxhbnkgLypUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXSovPiA9IENPTlNUX0VYUFIoW1xuICBQTEFURk9STV9DT01NT05fUFJPVklERVJTLFxuICBuZXcgUHJvdmlkZXIoUExBVEZPUk1fSU5JVElBTElaRVIsIHt1c2VWYWx1ZTogaW5pdFdlYldvcmtlclJlbmRlclBsYXRmb3JtLCBtdWx0aTogdHJ1ZX0pXG5dKTtcblxuLyoqXG4gKiBBIGxpc3Qgb2Yge0BsaW5rIFByb3ZpZGVyfXMuIFRvIHVzZSB0aGUgcm91dGVyIGluIGEgV29ya2VyIGVuYWJsZWQgYXBwbGljYXRpb24geW91IG11c3RcbiAqIGluY2x1ZGUgdGhlc2UgcHJvdmlkZXJzIHdoZW4gc2V0dGluZyB1cCB0aGUgcmVuZGVyIHRocmVhZC5cbiAqL1xuZXhwb3J0IGNvbnN0IFdPUktFUl9SRU5ERVJfUk9VVEVSOiBBcnJheTxhbnkgLypUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXSovPiA9XG4gICAgQ09OU1RfRVhQUihbQnJvd3NlclBsYXRmb3JtTG9jYXRpb25dKTtcblxuZXhwb3J0IGNvbnN0IFdPUktFUl9SRU5ERVJfQVBQTElDQVRJT05fQ09NTU9OOiBBcnJheTxhbnkgLypUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXSovPiA9IENPTlNUX0VYUFIoW1xuICBBUFBMSUNBVElPTl9DT01NT05fUFJPVklERVJTLFxuICBXT1JLRVJfUkVOREVSX01FU1NBR0lOR19QUk9WSURFUlMsXG4gIG5ldyBQcm92aWRlcihFeGNlcHRpb25IYW5kbGVyLCB7dXNlRmFjdG9yeTogX2V4Y2VwdGlvbkhhbmRsZXIsIGRlcHM6IFtdfSksXG4gIG5ldyBQcm92aWRlcihET0NVTUVOVCwge3VzZUZhY3Rvcnk6IF9kb2N1bWVudCwgZGVwczogW119KSxcbiAgLy8gVE9ETyhqdGVwbGl0ejYwMik6IEludmVzdGlnYXRlIGlmIHdlIGRlZmluaXRlbHkgbmVlZCBFVkVOVF9NQU5BR0VSIG9uIHRoZSByZW5kZXIgdGhyZWFkXG4gIC8vICM1Mjk4XG4gIG5ldyBQcm92aWRlcihFVkVOVF9NQU5BR0VSX1BMVUdJTlMsIHt1c2VDbGFzczogRG9tRXZlbnRzUGx1Z2luLCBtdWx0aTogdHJ1ZX0pLFxuICBuZXcgUHJvdmlkZXIoRVZFTlRfTUFOQUdFUl9QTFVHSU5TLCB7dXNlQ2xhc3M6IEtleUV2ZW50c1BsdWdpbiwgbXVsdGk6IHRydWV9KSxcbiAgbmV3IFByb3ZpZGVyKEVWRU5UX01BTkFHRVJfUExVR0lOUywge3VzZUNsYXNzOiBIYW1tZXJHZXN0dXJlc1BsdWdpbiwgbXVsdGk6IHRydWV9KSxcbiAgbmV3IFByb3ZpZGVyKEhBTU1FUl9HRVNUVVJFX0NPTkZJRywge3VzZUNsYXNzOiBIYW1tZXJHZXN0dXJlQ29uZmlnfSksXG4gIG5ldyBQcm92aWRlcihEb21Sb290UmVuZGVyZXIsIHt1c2VDbGFzczogRG9tUm9vdFJlbmRlcmVyX30pLFxuICBuZXcgUHJvdmlkZXIoUm9vdFJlbmRlcmVyLCB7dXNlRXhpc3Rpbmc6IERvbVJvb3RSZW5kZXJlcn0pLFxuICBuZXcgUHJvdmlkZXIoU2hhcmVkU3R5bGVzSG9zdCwge3VzZUV4aXN0aW5nOiBEb21TaGFyZWRTdHlsZXNIb3N0fSksXG4gIG5ldyBQcm92aWRlcihYSFIsIHt1c2VDbGFzczogWEhSSW1wbH0pLFxuICBNZXNzYWdlQmFzZWRYSFJJbXBsLFxuICBuZXcgUHJvdmlkZXIoU2VydmljZU1lc3NhZ2VCcm9rZXJGYWN0b3J5LCB7dXNlQ2xhc3M6IFNlcnZpY2VNZXNzYWdlQnJva2VyRmFjdG9yeV99KSxcbiAgbmV3IFByb3ZpZGVyKENsaWVudE1lc3NhZ2VCcm9rZXJGYWN0b3J5LCB7dXNlQ2xhc3M6IENsaWVudE1lc3NhZ2VCcm9rZXJGYWN0b3J5X30pLFxuICBTZXJpYWxpemVyLFxuICBuZXcgUHJvdmlkZXIoT05fV0VCX1dPUktFUiwge3VzZVZhbHVlOiBmYWxzZX0pLFxuICBSZW5kZXJTdG9yZSxcbiAgRG9tU2hhcmVkU3R5bGVzSG9zdCxcbiAgVGVzdGFiaWxpdHksXG4gIEJyb3dzZXJEZXRhaWxzLFxuICBBbmltYXRpb25CdWlsZGVyLFxuICBFdmVudE1hbmFnZXJcbl0pO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUdlbmVyaWNXb3JrZXJSZW5kZXJlcihpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgdmFyIGJ1cyA9IGluamVjdG9yLmdldChNZXNzYWdlQnVzKTtcbiAgbGV0IHpvbmUgPSBpbmplY3Rvci5nZXQoTmdab25lKTtcbiAgYnVzLmF0dGFjaFRvWm9uZSh6b25lKTtcblxuICB6b25lLnJ1bigoKSA9PiB7XG4gICAgV09SS0VSX1JFTkRFUl9NRVNTQUdJTkdfUFJPVklERVJTLmZvckVhY2goKHRva2VuKSA9PiB7IGluamVjdG9yLmdldCh0b2tlbikuc3RhcnQoKTsgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFdlYldvcmtlclJlbmRlclBsYXRmb3JtKCk6IHZvaWQge1xuICBCcm93c2VyRG9tQWRhcHRlci5tYWtlQ3VycmVudCgpO1xuICB3dGZJbml0KCk7XG4gIEJyb3dzZXJHZXRUZXN0YWJpbGl0eS5pbml0KCk7XG59XG5cbmZ1bmN0aW9uIF9leGNlcHRpb25IYW5kbGVyKCk6IEV4Y2VwdGlvbkhhbmRsZXIge1xuICByZXR1cm4gbmV3IEV4Y2VwdGlvbkhhbmRsZXIoRE9NLCAhSVNfREFSVCk7XG59XG5cbmZ1bmN0aW9uIF9kb2N1bWVudCgpOiBhbnkge1xuICByZXR1cm4gRE9NLmRlZmF1bHREb2MoKTtcbn1cbiJdfQ==