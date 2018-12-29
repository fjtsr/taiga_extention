import _ from 'lodash';
export interface ICustomAttr {
  id: number;
  name: string;
}
export interface IMilestone {
  id: number;
  name: string;
  estimated_start: string;
  estimated_finish: string;
}
export interface ITask {
  id: number;
  assigned_to: number | null;
  created_date: string;
  finished_date: string;
  is_closed: boolean;
  subject: string;
}
export interface IAttrValue {}
export interface ICustomValue {
  attributes_values: {
    [key: number]: string;
  };
}
export interface IUser {
  id: number;
  username: string;
  full_name: string;
  full_name_display: string;
  photo: string;
}
export interface IProject {
  id: number;
  name: string;
  members: IUser[];
}
export type ICustomValueMap = WeakMap<ITask, ICustomValue>;
export interface IState {
  url: string;
  pid: string; // url
  mid: string; // url
  custom_eid: string; //  pid
  custom_rid: string; // pid
  custom_attrs: ICustomAttr[]; // pid
  biz_days: string[]; //mid
  milestones: IMilestone[]; // pid
  tasks: ITask[]; //mid
  custom_value_map: ICustomValueMap; // pid
}

export enum StorageKey {
  URL = 'taiga_url',
  PID = 'taiga_pid',
  MID = 'taiga_mid',
  CUSTOM_EID = 'taiga_custom_eid',
  CUSTOM_RID = 'taiga_custom_rid',
  BIZ_DAYS = 'taiga_biz_days'
}

export const getFromStorage = (key: string) => localStorage.getItem(key) || '';

export const getFromStorageWithSubkey = (key: StorageKey, subkey: string) =>
  subkey ? getFromStorage(`${subkey}/${key}`) : '';

export const setToStorage = (key: string, item: string) => {
  localStorage.setItem(key, item);
};
export const setToStorageWithSubkey = (
  key: StorageKey,
  subkey: string,
  item: string
) => {
  subkey ? setToStorage(`${subkey}/${key}`, item) : null;
};
export const initialStateFn = (): IState => {
  const url = getFromStorage(StorageKey.URL);
  const pid = getFromStorage(StorageKey.PID);
  const mid = getFromStorage(StorageKey.MID);
  const custom_eid = getFromStorageWithSubkey(StorageKey.CUSTOM_EID, pid);
  const custom_rid = getFromStorageWithSubkey(StorageKey.CUSTOM_RID, pid);
  const biz_days_str = getFromStorageWithSubkey(StorageKey.BIZ_DAYS, mid);
  const biz_days = _.compact(biz_days_str.split(',')).sort();
  return {
    url,
    pid,
    mid,
    custom_eid,
    custom_rid,
    custom_attrs: [],
    biz_days,
    milestones: [],
    tasks: [],
    custom_value_map: new WeakMap()
  };
};
