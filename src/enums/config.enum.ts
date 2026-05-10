export enum AssetVisibility {
  PRIVATE = 'private',
  PUBLIC = 'public',
}

export enum AssetType {
  GAME = 'game',
  GAME_EDITION = 'game_edition',
  QC_OUTBOUND = 'qc_outbound',
  QC_INBOUND = 'qc_inbound',
}

export const VisibilityToTypeMap = {
  [AssetVisibility.PUBLIC]: [AssetType.GAME, AssetType.GAME_EDITION],
  [AssetVisibility.PRIVATE]: [AssetType.QC_INBOUND, AssetType.QC_OUTBOUND],
};
