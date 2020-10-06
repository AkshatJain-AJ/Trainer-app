"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.VideoPlayerComponent = void 0;
var core_1 = require("@angular/core");
var VideoPlayerComponent = /** @class */ (function () {
    function VideoPlayerComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.youtubeUrlPrefix = '//www.youtube.com/embed/';
    }
    VideoPlayerComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.safeVideoUrls = this.videos ?
            this.videos.map(function (v) { return _this.sanitizer.bypassSecurityTrustResourceUrl(_this.youtubeUrlPrefix + v); })
            : this.videos;
    };
    VideoPlayerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], VideoPlayerComponent.prototype, "videos");
    VideoPlayerComponent = __decorate([
        core_1.Component({
            selector: 'abe-video-player',
            templateUrl: './video-player.component.html',
            styles: []
        })
    ], VideoPlayerComponent);
    return VideoPlayerComponent;
}());
exports.VideoPlayerComponent = VideoPlayerComponent;
