namespace fileupload.cap;

using {
    cuid,
    managed
} from '@sap/cds/common';

entity Files : cuid, managed {
    fileData : LargeBinary  @Core.MediaType: fileType  @Core.ContentDisposition.Filename: fileName;
    fileType : String       @Core.IsMediaType;
    fileName : String;
    url      : String;
}
