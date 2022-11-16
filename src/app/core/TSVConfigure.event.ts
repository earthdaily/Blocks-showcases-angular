/** Contract from TSV MFE */
export interface TimeSeriesViewerEventConfiguration {
  remoteUrl?: string;
  token: string;
  spatialUnits: SpatialUnit[];
  yearsOfHistory: number;
  timeframe: Timeframe;
  culture: string;
  graphConfigurations?: GraphConfigurationForEvent[];
}

export interface SpatialUnit {
  type: SpatialUnitType;
  value: string;
  block?: {
    id: number;
    code: string;
    idPixelType: number;
  };
  /** EPSG must be 3857 */
  centroid: string;
  name: string;
}

export interface Timeframe {
  start: Date;
  end: Date;
}

export enum SpatialUnitType {
  Field = "Field",
  Amu = "Amu",
}

export interface GraphConfigurationForEvent {
  analytic: string;
  spatialUnitType: string;
  graphType: string;
}

export interface UserActionEvent {
  graphConfigurations: GraphConfigurationForEvent[];
  timeframe: Timeframe;
}
