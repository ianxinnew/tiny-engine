/**
 * Copyright (c) 2024 - present TinyEngine Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

import {
  Breadcrumb,
  Fullscreen,
  Lang,
  Checkinout,
  Logo,
  Media,
  Redoundo,
  Save,
  Clean,
  Preview,
  GenerateVue,
  Refresh,
  Collaboration,
  Setting,
  Materials,
  Data,
  Script,
  Tree,
  Help,
  Schema,
  Page,
  I18n,
  Bridge,
  Block,
  Datasource,
  Robot,
  Props,
  Events,
  Styles,
} from '@opentiny/tiny-engine'


export default {
  config: {
    id: 'engine.config',
    theme: 'light',
    material: ['/mock/bundle.json'],
    scripts: [],
    styles: []
  },
  layout: { id: 'engine.layout' },
  toolbars: [
    Logo,
    Breadcrumb,
    Media,
    Collaboration,
    Clean,
    Refresh,
    Save,
    GenerateVue,
    Preview,
    Redoundo,
    Fullscreen,
    Checkinout,
    Setting,
    Lang
  ],
  plugins: [
    Materials,
    Tree,
    Page,
    Block,
    Datasource,
    Bridge,
    I18n,
    Script,
    Data,
    Schema,
    Help,
    Robot
  ],
  dsls: [{ id: 'engine.dsls.dslvue' }],
  settings: [
    Props,
    Styles,
    Events
  ],
  canvas: {}
}