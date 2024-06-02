using fileupload.cap as cap from '../db/data-model';

service fileManagementService {
    entity Files as projection on cap.Files;
}
