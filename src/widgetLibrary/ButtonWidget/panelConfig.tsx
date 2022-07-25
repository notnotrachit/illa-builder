import { PanelConfig } from "@/page/App/components/InspectPanel/interface"
import { colorSchemeOptions } from "@/widgetLibrary/PublicSector/colorSchemeOptions"
import { VALIDATION_TYPES } from "@/utils/validationFactory"
import i18n from "@/i18n/config"

export const BUTTON_PANEL_CONFIG: PanelConfig[] = [
  {
    id: "button-basic",
    groupName: i18n.t("editor.inspect.setter_group.basic"),
    children: [
      {
        id: "button-basic-Text",
        labelName: i18n.t("editor.inspect.setter_label.text"),
        attrName: "text",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
      },
    ],
  },
  {
    id: "button-interaction",
    groupName: i18n.t("editor.inspect.setter_group.interaction"),
    children: [
      {
        id: "button-interaction-event-handler",
        attrName: "events",
        labelName: i18n.t("editor.inspect.setter_label.event_handler"),
        setterType: "EVENT_HANDLER_SETTER",
        useCustomLayout: true,
        childrenSetter: [
          {
            id: "event",
            labelName: i18n.t("editor.inspect.setter_label.event"),
            setterType: "BASE_SELECT_SETTER",
            attrName: "eventType",
            options: [{ label: "Click", value: "onClick" }],
          },
          {
            id: "action",
            labelName: i18n.t("editor.inspect.setter_label.action"),
            labelDesc: i18n.t("editor.inspect.setter_tooltip.action"),
            setterType: "EVENT_ACTION_SELECT_SETTER",
            attrName: "actionType",
            options: [
              {
                label: i18n.t("editor.inspect.setter_label.trigger_query"),
                value: "datasource",
              },
              {
                label: i18n.t("editor.inspect.setter_label.control_component"),
                value: "widget",
              },
              {
                label: i18n.t("editor.inspect.setter_label.go_to_url"),
                value: "openUrl",
              },
              {
                label: i18n.t("editor.inspect.setter_label.show_notification"),
                value: "showNotification",
              },
            ],
          },
          {
            id: "query",
            labelName: i18n.t("Query"),
            setterType: "EVENT_TARGET_ACTION_SELECT_SETTER",
            attrName: "queryID",
            bindAttrName: "actionType",
            shown: (type) => type === "datasource",
          },
          {
            id: "actionMethod",
            labelName: i18n.t("Action Method"),
            setterType: "BASE_SELECT_SETTER",
            attrName: "widgetMethod",
            bindAttrName: "queryID",
            shown: (type) => type === "datasource",
            options: [{ label: "run", value: "executeAction" }],
          },
          {
            id: "component",
            labelName: i18n.t("editor.inspect.setter_label.component"),
            setterType: "EVENT_TARGET_SELECT_SETTER",
            attrName: "widgetID",
            bindAttrName: "actionType",
            shown: (type) => type === "widget",
          },
          {
            id: "Method",
            labelName: i18n.t("editor.inspect.setter_label.method"),
            setterType: "EVENT_WIDGET_METHOD_SELECT_SETTER",
            attrName: "widgetMethod",
            bindAttrName: "widgetID",
            shown: (widgetID) => !!widgetID,
          },
          {
            id: "Value",
            labelName: i18n.t("editor.inspect.setter_label.value"),
            setterType: "INPUT_SETTER",
            attrName: "widgetTargetValue",
            bindAttrName: "widgetMethod",
            shown: (widgetMethod) => widgetMethod === "setValue",
          },
          {
            id: "startValue",
            labelName: i18n.t("editor.inspect.setter_label.start_date"),
            setterType: "INPUT_SETTER",
            attrName: "widgetTargetValue",
            bindAttrName: "widgetMethod",
            shown: (widgetMethod) => widgetMethod === "setStartValue",
          },
          {
            id: "endValue",
            labelName: i18n.t("editor.inspect.setter_label.end_date"),
            setterType: "INPUT_SETTER",
            attrName: "widgetTargetValue",
            bindAttrName: "widgetMethod",
            shown: (widgetMethod) => widgetMethod === "setEndValue",
          },
          {
            id: "imageUrl",
            labelName: i18n.t("editor.inspect.setter_label.value"),
            setterType: "INPUT_SETTER",
            attrName: "widgetTargetValue",
            bindAttrName: "widgetMethod",
            shown: (widgetMethod) => widgetMethod === "setImageUrl",
          },
          {
            id: "disabled",
            labelName: i18n.t("editor.inspect.setter_label.disabled"),
            setterType: "DYNAMIC_SWITCH_SETTER",
            expectedType: VALIDATION_TYPES.BOOLEAN,
            attrName: "disabled",
            bindAttrName: "type",
            useCustomLayout: true,
            shown: (type) => type === "widget",
          },
          {
            id: "script",
            setterType: "INPUT_SETTER",
            attrName: "script",
            bindAttrName: "actionType",
            expectedType: VALIDATION_TYPES.STRING,
            shown: (type) => type === "script",
          },
          {
            id: "URL",
            labelName: i18n.t("URL"),
            setterType: "INPUT_SETTER",
            attrName: "url",
            bindAttrName: "actionType",
            expectedType: VALIDATION_TYPES.STRING,
            shown: (type) => type === "openUrl",
          },
          {
            id: "newTab",
            labelName: i18n.t("New Tab"),
            setterType: "DYNAMIC_SWITCH_SETTER",
            expectedType: VALIDATION_TYPES.BOOLEAN,
            attrName: "newTab",
            bindAttrName: "actionType",
            useCustomLayout: true,
            shown: (type) => type === "openUrl",
          },
          {
            id: "title",
            labelName: i18n.t("Title"),
            setterType: "INPUT_SETTER",
            attrName: "title",
            bindAttrName: "actionType",
            expectedType: VALIDATION_TYPES.STRING,
            shown: (type) => type === "showNotification",
          },
          {
            id: "description",
            labelName: i18n.t("Description"),
            setterType: "INPUT_SETTER",
            expectedType: VALIDATION_TYPES.STRING,
            attrName: "description",
            bindAttrName: "actionType",
            shown: (type) => type === "showNotification",
          },
          {
            id: "notification-type",
            labelName: i18n.t("Type"),
            setterType: "BASE_SELECT_SETTER",
            attrName: "notificationType",
            bindAttrName: "actionType",
            shown: (type) => type === "showNotification",
            options: [
              { label: "Success", value: "success" },
              { label: "Error", value: "error" },
              { label: "Warning", value: "warning" },
              { label: "Info", value: "info" },
            ],
          },
          {
            id: "duration",
            labelName: i18n.t("Duration"),
            setterType: "INPUT_SETTER",
            attrName: "duration",
            bindAttrName: "actionType",
            expectedType: VALIDATION_TYPES.NUMBER,
            shown: (type) => type === "showNotification",
          },
          {
            id: "enabled",
            labelName: i18n.t("editor.inspect.setter_label.only_run_when"),
            // labelDesc: i18n.t("xxxxx"),
            setterType: "INPUT_SETTER",
            expectedType: VALIDATION_TYPES.BOOLEAN,
            attrName: "enabled",
          },
        ],
      },
      // TODO: wait form container
      // {
      //   id: "button-interaction-type",
      //   labelName: i18n.t("editor.inspect.setter_label.type"),
      //   labelDesc: i18n.t("xxxxx"),
      //   attrName: "submit",
      //   setterType: "RADIO_GROUP_SETTER",
      //   options: [
      //     { label: "Default", value: false },
      //     { label: "Submit", value: true },
      //   ],
      // },
      {
        id: "button-interaction-formId",
        labelName: i18n.t("editor.inspect.setter_label.submit_form"),
        // labelDesc: i18n.t("xxxxx"),
        attrName: "formId",
        setterType: "INPUT_SETTER",
        bindAttrName: "submit",
        shown: (value) => value === true,
      },
      {
        id: "button-interaction-loading",
        labelName: i18n.t("editor.inspect.setter_label.loading"),
        labelDesc: i18n.t("editor.inspect.setter_tooltip.loading"),
        attrName: "loading",
        placeholder: "{{false}}",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        bindAttrName: "submit",
        shown: (value) => {
          return value === false
        },
      },
      {
        id: "button-interaction-disabled",
        labelName: i18n.t("editor.inspect.setter_label.disabled"),
        labelDesc: i18n.t("editor.inspect.setter_tooltip.disabled"),
        placeholder: "{{false}}",
        attrName: "disabled",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        bindAttrName: "submit",
        shown: (value) => value === false,
      },
    ],
  },
  {
    id: "button-adornments",
    groupName: i18n.t("editor.inspect.setter_group.adornments"),
    children: [
      {
        id: "button-adornments-tooltip",
        labelName: i18n.t("editor.inspect.setter_label.tooltip"),
        labelDesc: i18n.t("editor.inspect.setter_tooltip.tooltip"),
        attrName: "tooltipText",
        expectedType: VALIDATION_TYPES.STRING,
        setterType: "INPUT_SETTER",
      },
    ],
  },
  {
    id: "button-layout",
    groupName: i18n.t("editor.inspect.setter_group.layout"),
    children: [
      {
        id: "button-layout-hidden",
        setterType: "DYNAMIC_SWITCH_SETTER",
        labelName: i18n.t("editor.inspect.setter_label.hidden"),
        labelDesc: i18n.t("editor.inspect.setter_tooltip.hidden"),
        useCustomLayout: true,
        attrName: "hidden",
        expectedType: VALIDATION_TYPES.BOOLEAN,
      },
    ],
  },
  {
    id: "button-style",
    groupName: i18n.t("editor.inspect.setter_group.style"),
    children: [
      {
        id: "button-style-variant",
        setterType: "RADIO_GROUP_SETTER",
        labelName: i18n.t("editor.inspect.setter_label.variant"),
        attrName: "variant",
        options: [
          {
            label: i18n.t("editor.inspect.setter_default_value.fill"),
            value: "fill",
          },
          {
            label: i18n.t("editor.inspect.setter_default_value.outline"),
            value: "outline",
          },
        ],
      },
      {
        id: "button-style-list",
        setterType: "LIST_SETTER",
        labelName: i18n.t("editor.inspect.setter_label.color"),
        attrName: "styles",
        useCustomLayout: true,
        childrenSetter: [
          {
            id: "button-style-bg",
            labelName: i18n.t("editor.inspect.setter_label.theme_color"),
            setterType: "COLOR_PICKER_SETTER",
            attrName: "colorScheme",
            defaultValue: "#134ae0",
            options: colorSchemeOptions,
          },
        ],
      },
    ],
  },
]
