import { RejectionReasons } from '../properties/rejection-reasons';
export declare class FileState {
    private currentObject;
    private supportedFileTypes;
    private maximumFileSizeInBytes;
    currentFile: DataTransfer;
    setExpectedFileProperties(supportFileFormats: string[], maximumFileSize: number): void;
    getFileData(): File;
    isFileValid(): RejectionReasons;
}
