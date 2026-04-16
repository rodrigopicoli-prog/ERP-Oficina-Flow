export type RecordId = string;

export interface TenantScoped {
  id: RecordId;
  companyId: string;
  createdAt: Date;
  updatedAt: Date;
}
