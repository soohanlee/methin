const CommonTheme = Object.freeze({
  WARNING: '#FFCC00',
  ERROR: '#FF0078',
  COMPLETE: '#15da90',
  SIGNITURE_MAIN: '#f84a49',
  SIGNITURE_SUB: '#8f93e1',
  SIGNITURE_SECONDARY: '#e2e2f4',
  TRANSITION: '0.2s',
});

export const LightTheme = Object.freeze({
  BACKGROUND: '#ffffff',

  PANEL: '#f7f7f7',

  // OBJECT_MAIN: '#545762',
  // OBJECT_DEACTIVE: '#b5b6be',

  // INPUT_TEXT_AREA: '#7d808c',
  // INPUT_SELECT_AREA: '#7d808c',
  // INPUT_SELECT_AREA_SELECT: '#ebecf2',
  // INPUT_CHECK_AREA: '#878997',
  // INPUT_CHECK_AREA_INNER: '#6065de',

  TEXT_MAIN: '#0c0c0c',
  TEXT_INFORMATION: '#8f8f8f',
  TEXT_GUIDELINE: '#9599a8',
  TEXT_DISABLE: '#c8c8c8',
  TEXT_HYPERLINK: '#ffffff',
  TEXT_SUB: '#81818e',

  // STEP_CIRCLE_ACTIVE: '#6065de',
  // STEP_CIRCLE_DEACTIVE: '#b5b6be',
  // TRIGGER_ON: '#6065de',
  // TRIGGER_ON_SUB: '#E0DFF8',
  // TRIGGER_OFF: '#b5b6be',

  LINE: '#efefef',
  BORDER: '#c8c8c8',
  SCROLL: '#8b8d99',

  LARGE_PANEL_SHADOW: '0px 1rem 4rem 0.4rem #aaaaaa;',
  SMALL_PANEL_SHADOW: '0px 0.1rem 1rem 0.1rem #aaaaaa;',
  ...CommonTheme,
});

export default LightTheme;
