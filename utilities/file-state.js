"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rejection_reasons_1 = require("../properties/rejection-reasons");
var FileState = (function () {
    function FileState() {
        this.currentObject = null;
        this.supportedFileTypes = null;
        this.maximumFileSizeInBytes = 0;
    }
    Object.defineProperty(FileState.prototype, "currentFile", {
        get: function () {
            return this.currentObject;
        },
        set: function (thisFile) {
            this.currentObject = thisFile;
            if (this.currentObject !== null) {
                this.currentObject.dropEffect = 'copy';
            }
        },
        enumerable: true,
        configurable: true
    });
    FileState.prototype.setExpectedFileProperties = function (supportFileFormats, maximumFileSize) {
        this.supportedFileTypes = supportFileFormats;
        this.maximumFileSizeInBytes = maximumFileSize;
    };
    FileState.prototype.getFileData = function () {
        if (this.currentObject === null) {
            return null;
        }
        if (this.currentObject.files.length === 0) {
            return null;
        }
        return this.currentObject.files[0];
    };
    FileState.prototype.isFileValid = function () {
        var currentFile = this.getFileData();
        if (currentFile === null) {
            return rejection_reasons_1.RejectionReasons.Unknown;
        }
        if (this.supportedFileTypes) {
            var fileTypeIndex = this.supportedFileTypes.indexOf(currentFile.type);
            if (fileTypeIndex === -1) {
                return rejection_reasons_1.RejectionReasons.FileType;
            }
        }
        if (this.maximumFileSizeInBytes) {
            if (this.maximumFileSizeInBytes < currentFile.size) {
                return rejection_reasons_1.RejectionReasons.FileSize;
            }
        }
        return rejection_reasons_1.RejectionReasons.None;
    };
    return FileState;
}());
exports.FileState = FileState;
//# sourceMappingURL=file-state.js.map