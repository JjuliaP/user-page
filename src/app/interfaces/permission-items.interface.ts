export interface PermissionItem{
    name: string;
    permissions: {
        create: boolean;
        read: boolean;
        update: boolean;
        delete: boolean;
    };
    
}