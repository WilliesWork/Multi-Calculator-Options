import React from "react";
import Box from "@material-ui/core/Box";
import { useMaterialNestedMenuStyles } from "@mui-treasury/styles/nestedMenu/material";
import NestedMenu from "@mui-treasury/components/menu/nested";

const MaterialNestedMenuStyle = (props) => {
  const { history } = props;
  return (
    <Box minWidth={200}>
      <NestedMenu
        menus={getMenus(history)}
        useStyles={useMaterialNestedMenuStyles}
      />
    </Box>
  );
};
const getMenus = (history) => [
  {
    key: "intro",
    label: "Introduction",
  },
  {
    key: "quick start",
    label: "Quick Start",
  },
  {
    key: "mathCal",
    label: "Math Calculator",
    isToggleOutside: true,

    subMenus: [
      {
        key: "preparingEnv",
        label: "Preparing Your Environment",
        subMenus: [
          {
            key: "browserSupport",
            label: "Browser Support",
          },
          {
            key: "gatsbyWindow",
            label: "Gatsby on Windows",
          },
          {
            key: "gatsbyLinux",
            label: "Gatsby on Linux",
          },
        ],
      },
      {
        key: "deployHosting",
        label: "Deploying & Hosting",
        subMenus: [
          {
            key: "preparing",
            label: "Preparing a Site for Deployment",
          },
          {
            key: "awsAmplify",
            label: "Deploying to AWS Amplify",
          },
          {
            key: "awsS3",
            label: "Deploying to S3 and CloudFront",
          },
        ],
      },
      {
        key: "customConfig",
        label: "Custom Configuration",
        subMenus: [
          {
            key: "babeljs",
            label: "Customizing Babel.js Config",
          },
          {
            key: "babelPluginMacro",
            label: "Using Babel Plugin Macros",
          },
          {
            key: "customWebpack",
            label: "Adding a Custom Webpack Config",
          },
        ],
      },
    ],
  },
  {
    key: "financialCal",
    label: "Financial Calculator",
    subMenus: [
      {
        key: "themes",
        label: "Gatsby Themes",
      },
      {
        key: "link",
        label: "Gatsby Link",
      },
      {
        key: "image",
        label: "Gatsby Image",
      },
      {
        key: "config",
        label: "Gatsby Config",
      },
    ],
  },
  {
    key: "fit-health",
    label: "Fitness & Health Calculators",
    subMenus: [
      {
        key: "v2",
        label: "v2 Release Notes",
      },
      {
        key: "v1",
        label: "v1 Release Notes",
      },
      {
        key: "v1Tov2",
        label: "Migration from v1 to v2",
      },
      {
        key: "v0Tov1",
        label: "Migration from v0 to v1",
      },
    ],
  },
  {
    key: "other",
    label: "Other Calculators",
    subMenus: [
      {
        key: "v2",
        label: "v2 Release Notes",
      },
      {
        key: "v1",
        label: "v1 Release Notes",
      },
      {
        key: "v1Tov2",
        label: "Migration from v1 to v2",
      },
      {
        key: "v0Tov1",
        label: "Migration from v0 to v1",
      },
    ],
  },
];

export default MaterialNestedMenuStyle;
