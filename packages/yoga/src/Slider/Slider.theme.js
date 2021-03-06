const Slider = ({ colors, radii, elevations, spacing, fontWeights }) => ({
  track: {
    backgroundColor: {
      active: colors.primary[3],
      inactive: colors.gray[3],
    },
    border: {
      radius: radii.circle,
    },
  },
  step: {
    backgroundColor: {
      active: colors.primary[3],
      inactive: colors.gray[3],
    },
    border: {
      radius: radii.circle,
    },
  },
  marker: {
    backgroundColor: colors.primary[3],
    border: {
      color: colors.white,
      radius: radii.circle,
    },
    shadow: elevations.small,
  },
  tooltip: {
    shadow: elevations.small,
    radius: radii.rounded,
    backgroundColor: colors.gray[1],
    distance: spacing.large,
    padding: {
      top: spacing.xxxsmall,
      right: spacing.xxsmall,
      bottom: spacing.xxxsmall,
      left: spacing.xxsmall,
    },
    font: {
      color: colors.gray[8],
      title: {
        weight: fontWeights.regular,
      },
      description: {
        weight: fontWeights.regular,
      },
    },
    ribbon: {
      backgroundColor: colors.secondary[3],
      radius: radii.rounded,
      padding: {
        top: spacing.xxxsmall,
        right: spacing.xxsmall,
        bottom: spacing.xxxsmall,
        left: spacing.xxsmall,
      },
      font: {
        color: colors.white,
        weight: fontWeights.bold,
      },
    },
  },
});

export default Slider;
